import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Dashboard} from "../Dashboard";
import {Moon} from "../Moon";
import {View} from "react-native";

export function Layout() {
    const Stack = createNativeStackNavigator();
    const backgroundColor = '#000000';

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Dashboard"
                    component={() => <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor}}><Dashboard/></View>}
                />
                <Stack.Screen
                    name="Moon"
                    component={() => <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor}}><Moon /></View>}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}