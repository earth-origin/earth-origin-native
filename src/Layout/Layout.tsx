import {NavigationContainer, NavigationProp} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Dashboard} from "../Dashboard";
import {Moon} from "../Moon";
import {ThemeProvider,createTheme} from "@rneui/themed";

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
        }
    });
    const Stack = createNativeStackNavigator();

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator>
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