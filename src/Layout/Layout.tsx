import { NavigationProp } from "@react-navigation/native";
import { ThemeProvider, createTheme } from "@rneui/themed";
import { Navigation } from "./Navigation";

type StackParamList = {
  Dashboard: undefined;
  Moon: undefined;
};

export type NavigationProps = NavigationProp<StackParamList>;

export function Layout() {
  const theme = createTheme({
    mode: 'dark',
    components: {
      Button: {
        raised: false,
      },
    },
    darkColors: {
      background: '#1c1c1c',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
