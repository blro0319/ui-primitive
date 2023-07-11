import type { LocaleConfig } from "./types";

export default {
  label: "English",
  lang: "en-US",
  themeConfig: {
    footer: {
      copyright: "Copyright © 2023 Blro",
      message: "Released under the MIT License.",
    },
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Components", link: "/components/" },
      { text: "API", link: "/api/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/blro0319/ui-primitives" },
    ],
    sidebar: {
      "/guide": [
        {
          text: "Get Started",
          items: [
            { text: "Introduction", link: "/guide/" },
            { text: "Installation", link: "/guide/installation/" },
          ],
        },
        {
          text: "Guide",
          items: [
            {
              text: "Prerequisites",
              link: "/guide/basic/prerequisites/",
            },
            {
              text: "Styling",
              link: "/guide/basic/styling/",
            },
            {
              text: "Create Custom Component",
              link: "/guide/basic/component/",
            },
            {
              text: "Validation",
              link: "/guide/basic/validation/",
            },
          ],
        },
        {
          text: "Advanced",
          items: [
            { text: "Implementing", link: "/guide/advanced/implementing/" },
          ],
        },
      ],
      "/components/": [
        {
          text: "Components",
          items: [
            {
              text: "Accordion",
              link: "/components/accordion/",
            },
            {
              text: "Button",
              link: "/components/button/",
            },
            {
              text: "Checkbox",
              link: "/components/checkbox/",
            },
            {
              text: "Checkbox Group",
              link: "/components/checkbox-group/",
            },
            {
              text: "Content",
              link: "/components/content/",
            },
            {
              text: "Dialog",
              link: "/components/dialog/",
            },
            {
              text: "Dropdown",
              link: "/components/dropdown/",
            },
            {
              text: "Field",
              link: "/components/field/",
            },
            {
              text: "Fieldset",
              link: "/components/fieldset/",
            },
            {
              text: "Form",
              link: "/components/form/",
            },
            {
              text: "Number Input",
              link: "/components/number-input/",
            },
            {
              text: "Popover",
              link: "/components/popover/",
            },
            {
              text: "Progress",
              link: "/components/progress/",
            },
            {
              text: "Radio",
              link: "/components/radio/",
            },
            {
              text: "Radio Group",
              link: "/components/radio-group/",
            },
            {
              text: "Roving Tabindex",
              link: "/components/roving-tabindex/",
            },
            {
              text: "Tabs",
              link: "/components/tabs/",
            },
            {
              text: "Text Input",
              link: "/components/text-input/",
            },
            {
              text: "Tooltip",
              link: "/components/tooltip/",
            },
            {
              text: "Transition",
              link: "/components/transition/",
            },
          ],
        },
      ],
      "/api": [
        {
          text: "Composables",
          items: [
            {
              text: "useCurrentVNode",
              link: "/api/composables/use-current-v-node/",
            },
            {
              text: "useGlobalCancelStack",
              link: "/api/composables/use-global-cancel-stack/",
            },
            {
              text: "useGlobalEscapeStack",
              link: "/api/composables/use-global-escape-stack/",
            },
            {
              text: "useGlobalHistoryStack",
              link: "/api/composables/use-global-history-stack/",
            },
            {
              text: "useInstance",
              link: "/api/composables/use-instance/",
            },
            {
              text: "useParentVNode",
              link: "/api/composables/use-parent-v-node/",
            },
          ],
        },
        {
          text: "Types",
          items: [
            { text: "AnyFunction", link: "/api/types/any-function/" },
            { text: "ComponentAs", link: "/api/types/component-as/" },
            { text: "MaybeArray", link: "/api/types/maybe-array/" },
            { text: "MaybePromise", link: "/api/types/maybe-promise/" },
            { text: "VCompoundType", link: "/api/types/v-compound-type/" },
          ],
        },
        {
          text: "Utils",
          items: [
            {
              text: "createContext",
              link: "/api/utils/create-context/",
            },
            {
              text: "createEventHooks",
              link: "/api/utils/create-event-hooks/",
            },
            {
              text: "filterCompoundVNodes",
              link: "/api/utils/filter-compound-v-nodes/",
            },
            {
              text: "matchCompoundType",
              link: "/api/utils/match-compound-type/",
            },
            {
              text: "randomInt",
              link: "/api/utils/random-int/",
            },
            {
              text: "randomStr",
              link: "/api/utils/random-str/",
            },
          ],
        },
      ],
    },
  },
} satisfies LocaleConfig;
