import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";
import CustomTheme from "./CustomTheme";

addons.setConfig({
  theme: CustomTheme,
});
