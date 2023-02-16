import {Dimensions, View} from "react-native";
import {MoonWidget} from "./Widgets/MoonWidget";
import {WeatherWidget} from "./Widgets/WeatherWidget";
import {LocationWidget} from "./Widgets/LocationWidget";
import {useTheme} from "@rneui/themed";

export function Dashboard() {
    const { theme } = useTheme();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <View style={{flex: 1, height: windowHeight, width: windowWidth, paddingBottom: 10, backgroundColor: theme.colors.background}}>
            <View style={{flex: 1, justifyContent: 'flex-start'}}>
                <MoonWidget />
            </View>
            <View style={{flex: 1, justifyContent: 'center', marginTop: -100}}>
                <WeatherWidget />
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <LocationWidget />
            </View>
        </View>
    );
}