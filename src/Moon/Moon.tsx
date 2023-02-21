import { Dimensions, Image, View } from "react-native";
import { moonPhases } from "./moonPhases";
import { Text, useTheme } from "@rneui/themed";

export function Moon() {
  const { theme } = useTheme();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const width = Math.min(windowWidth, windowHeight) - 10;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
      }}
    >
      <Image
        resizeMode="contain"
        source={moonPhases().image}
        style={{ width }}
      />
      <Text style={{ fontSize: 60 }}>{moonPhases().name}</Text>
    </View>
  );
}
