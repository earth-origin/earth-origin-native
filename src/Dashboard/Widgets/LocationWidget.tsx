import { View } from "react-native";
import { Text } from "@rneui/themed";

export function LocationWidget() {
  return (
    <View style={{ alignSelf: 'center' }}>
      <Text style={{ fontSize: 40 }}>Winnipeg, Manitoba</Text>
    </View>
  );
}
