import {Moon} from "./Moon";
import {View} from "react-native";

export function Core() {
    const backgroundColor = '#000000';
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor}}>
            <Moon />
        </View>
    )
}