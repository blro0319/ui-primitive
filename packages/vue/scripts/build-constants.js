import { glob } from "glob";
import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const TARGETS = {
  COMPONENTS: ["./src/components/*/*.vue"],
  COMPOSABLES: [
    "./src/components/*/context.ts",
    "./src/composables/*/index.ts",
    "./src/validate/composables/*/index.ts",
  ],
  RULES: ["./src/validate/rules/*/index.ts"],
  TYPES: [
    "./src/components/*/types.ts",
    "./src/composables/*/types.ts",
    "./src/types/**/*.ts",
    "./src/utils/*/types.ts",
    "./src/validate/composables/*/types.ts",
    "./src/validate/types/**/*.ts",
    "./src/validate/utils/*/types.ts",
  ],
  UTILS: ["./src/utils/*/index.ts", "./src/validate/utils/*/index.ts"],
};
const OUTPUTS = {
  COMPONENTS: "./src/constants/components/index.ts",
  COMPOSABLES: "./src/constants/composables/index.ts",
  RULES: "./src/constants/rules/index.ts",
  TYPES: "./src/constants/types/index.ts",
  UTILS: "./src/constants/utils/index.ts",
};

(async () => {
  await Promise.all([
    buildByFileName("COMPONENTS"),
    buildByExports("COMPOSABLES", ["const", "function", "async function"]),
    buildByExports("RULES", ["const", "function", "async function"]),
    buildByExports("TYPES", ["type", "interface"]),
    buildByExports("UTILS", ["const", "function", "async function"]),
  ]);
})();

/**
 * @param {keyof typeof TARGETS} target
 */
async function buildByFileName(target) {
  const paths = await globFiles(TARGETS[target]);
  const names = getNamesFromFileName(paths);
  await writeFile(OUTPUTS[target], createContent(target, names));
}

/**
 * @param {keyof typeof TARGETS} target
 * @param {string[]} formats
 */
async function buildByExports(target, formats) {
  const paths = await globFiles(TARGETS[target]);
  const names = await getNamesFromExports(paths, formats);
  await writeFile(OUTPUTS[target], createContent(target, names));
}

// ---------- Utils ---------- //

// Control Files

/**
 * @param {Parameters<import("glob")["glob"]>[0]} pattern
 * @param {Parameters<import("glob")["glob"]>[1]} options
 */
function globFiles(pattern, options = {}) {
  return glob(pattern, { root: resolvePath(), ...options });
}

/**
 * @param {string[]} paths
 */
function resolvePath(...paths) {
  return path.resolve(
    path.dirname(url.fileURLToPath(import.meta.url)),
    "../",
    ...paths
  );
}

/**
 * @param {string} name
 * @param {string} content
 */
async function writeFile(name, content) {
  const output = resolvePath(name);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, content);
}

// Control Result

/**
 * @param {string} name
 * @param {string[]} values
 */
function createContent(name, values) {
  const value = JSON.stringify(values, null, 2).replace(/"\n/, '",\n');
  return CONTENT_TEMPLATE.replace("%name", name).replace("%values", value);
}
const CONTENT_TEMPLATE = `// Generated by build-constants.js

export const %name = %values as const;
`;

/**
 * @param {string[]} filePaths
 */
function getNamesFromFileName(filePaths) {
  return filePaths
    .map((filePath) => {
      const ext = path.extname(filePath);
      return path.basename(filePath, ext);
    })
    .sort();
}

/**
 * @param {string[]} filePaths
 * @param {string[]} formats
 */
async function getNamesFromExports(filePaths, formats) {
  const files = await Promise.all([
    ...filePaths.map((file) => fs.readFile(file, "utf-8")),
  ]);
  const pattern = new RegExp(
    `^export (?:${formats.join("|")}) ([a-zA-Z0-9]+)`,
    "gm"
  );
  return files
    .map((content) => Array.from(content.matchAll(pattern)))
    .flat()
    .map((match) => match[1])
    .sort();
}
