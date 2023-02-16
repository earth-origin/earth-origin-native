import {Dimensions, View} from "react-native";
import {MoonWidget} from "./Widgets/MoonWidget";
import {WeatherWidget} from "./Widgets/WeatherWidget";

export function Dashboard() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <View style={{height: windowHeight, width: windowWidth}}>
            <MoonWidget />
            <WeatherWidget />
        </View>
    );
}