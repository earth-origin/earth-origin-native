import { View } from "react-native";
import { Text } from "@rneui/themed";

export function WeatherWidget() {
  return (
    <View style={{ alignSelf: 'center' }}>
      <Text style={{ fontSize: 200 }}>-0˚</Text>
    </View>
  );
}
