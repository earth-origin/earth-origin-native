import {NavigationContainer, NavigationProp} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Dashboard} from "../Dashboard";
import {Moon} from "../Moon";
import {ThemeProvider, createTheme, useTheme} from "@rneui/themed";
import {View} from "react-native";

type StackParamList = {
    Dashboard: undefined;
    Moon: undefined;
};

export type NavigationProps = NavigationProp<StackParamList>

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
        }
    });
    const Stack = createNativeStackNavigator();

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator >
                    <Stack.Screen
                        name="Dashboard"
                        component={Dashboard}
                    />
                    <Stack.Screen
                        name="Moon"
                        component={Moon}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    )
}