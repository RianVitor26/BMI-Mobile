import { Text, TextInput, View, Button } from "react-native";
import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text
          accessibilityLabel="Click me for write your height"
          accessibilityHint="Focus on the input for height"
          accessibilityState={{
            selected: false,
          }}
        >Height</Text>
        <TextInput keyBoardType="numeric"  placeholder="Ex: 1.80"></TextInput>
        <Text
          accessibilityLabel="Click me for write your weight"
          accessibilityHint="Focus on the input for weight"
          accessibilityState={{
            selected: false,
          }}
        >Weight</Text>
        <TextInput keyBoardType="numeric"  placeholder="Ex: 80.5"></TextInput>
          <Button title="Calculator my BMI" />
      </View>
    </View>
  );
}
