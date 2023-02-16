import {Dimensions, Image, Text, View} from "react-native";
import {moonPhases} from "./moonPhases";

export function Moon() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const width = Math.min(windowWidth, windowHeight) - 10;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image resizeMode="contain" source={moonPhases().image} style={{width}} />
            <Text style={{fontSize: 60}}>{moonPhases().name}</Text>
        </View>
    )
}