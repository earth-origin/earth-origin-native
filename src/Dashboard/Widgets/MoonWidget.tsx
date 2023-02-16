import {Image, TouchableOpacity} from "react-native";
import {moonPhases} from "../../Moon/moonPhases";
import {useNavigation} from "@react-navigation/native";
import {NavigationProps} from "../../Layout/Layout";

export function MoonWidget() {
    const navigation = useNavigation<NavigationProps>();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Moon')} style={{width: 200, height: 200,  alignSelf: 'flex-end'}}>
            <Image resizeMode="contain" source={moonPhases().image} style={{width: 200, height: 200}} />
        </TouchableOpacity>
    )
}