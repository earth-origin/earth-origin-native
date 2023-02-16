import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Dashboard} from "../Dashboard";
import {Moon} from "../Moon";
import {View} from "react-native";

export function Layout() {
    const Stack = createNativeStackNavigator();
    const backgroundColor = '#333';

    return (
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
    )
}