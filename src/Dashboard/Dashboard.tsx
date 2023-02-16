import {Text, View} from "react-native";
import {Moon} from "../Moon";

export function Dashboard(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Moon />
        </View>
    );
}