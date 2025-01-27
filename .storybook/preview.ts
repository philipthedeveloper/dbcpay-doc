import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
// .storybook/preview.js
import "../src/index.css"; // replace with the name of your tailwind css file
import CustomTheme from "./CustomTheme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: CustomTheme,
    },
  },
};

export default preview;
