import { Text, TextInput, View, Button } from "react-native";
import { styles } from "./styles";
import { useState, useRef } from "react";

export default function App() {
  const [bmi, setBmi] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [AccessibilityState, setAccessibilityState] = useState(false);
  const [dinamicTextButton, setDinamicTextButton] = useState('Calculator my BMI');

  const heightInput = useRef()
  const weightInput = useRef()
  
  const handleAcessibleLabels = (event) => {
    if (event.target.innerHTML === 'Height') {
      heightInput.current.focus()
      setAccessibilityState(true)

    } else if (event.target.innerHTML === "Weight") {
      weightInput.current.focus();
      setAccessibilityState(true);
      
    } else 
      setAccessibilityState(false);
    
  }
  

  const calculatorBmi = () => {
    const result = (weight / (height * height)).toFixed(2);
    setBmi(result);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text
          onPress={(event) => handleAcessibleLabels(event)}
          accessibilityLabel="Click me for write your height"
          accessibilityHint="Focus on input to write your heigth"
          accessibilityState={{
            selected: { AccessibilityState },
          }}
        >
          Height
        </Text>
        <TextInput
          ref={heightInput}
          onChangeText={(event) => setHeight(event.target.value)}
          keyBoardType="numeric"
          placeholder="Ex: 1.80"
        ></TextInput>
        <Text
          onPress={(event) => handleAcessibleLabels(event)}
          accessibilityLabel="Click me for write your weight"
          accessibilityHint="Focus on input to write your weight"
          accessibilityState={{
            selected: { AccessibilityState },
          }}
        >
          Weight
        </Text>
        <TextInput
          ref={weightInput}
          onChangeText={(event) => setWeight(event.target.value)}
          keyBoardType="numeric"
          placeholder="Ex: 80.5"
        ></TextInput>
        <Button
          accessibilityLabel="Calculator your BMI"
          title={dinamicTextButton}
        />
        <Text>Your BMI is {bmi}</Text>
      </View>
    </View>
  );
}
