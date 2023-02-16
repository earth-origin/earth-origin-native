import {NavigationContainer} from "@react-navigation/native";
import {Dashboard} from "../Dashboard";
import {Moon} from "../Moon";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useTheme} from "@rneui/themed";

export function Navigation() {
    const {theme} = useTheme();
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false, statusBarColor: theme.colors.background }}>
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
    );
}