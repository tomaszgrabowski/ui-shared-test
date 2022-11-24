import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components"
import {AmTheme} from "../src/themes/am-theme";
import {ToyotaTheme} from "../src/themes/toyota-theme";

const themes = [AmTheme, ToyotaTheme];
addDecorator(withThemesProvider(themes), ThemeProvider)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
