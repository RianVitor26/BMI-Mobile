import { Text, TextInput, View, Button } from "react-native";
import { styles } from "./styles";
import { useState, useRef } from "react";

export default function App() {
  const [bmi, setBmi] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [AccessibilityState, setAccessibilityState] = useState(false);
  const [textButton, setTextButton] = useState("Calculator my BMI");
  const [bmiResultText, setBmiResultText] = useState("");
  const [bmiCategoryText, setBmiCategoryText] = useState("");
  const [category, setCategory] = useState("");

  const heightInput = useRef();
  const weightInput = useRef();

  const handleAcessibleLabels = (event) => {
    if (event.target.innerHTML === "Height") {
      heightInput.current.focus();
      setAccessibilityState(true);
    } else if (event.target.innerHTML === "Weight") {
      weightInput.current.focus();
      setAccessibilityState(true);
    } else setAccessibilityState(false);
  };

  const calculatorBmi = () => {
    const result = (weight / (height * height)).toFixed(2);
    setBmi(result);
  };

  const validateBmiCalculator = () => {
    if (height != null && weight != null) {
      calculatorBmi();
      ShowBmiText();
      showBmiCategory();
      return;
    }
  };

  const ShowBmiText = () => {
    setBmiResultText("Your BMI is: ");
  };

  const showBmiCategory = () => {
    setBmiCategoryText("Your BMI category is: ");

    if (bmi < 18.5) {
      setCategory("Underweight");

    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setCategory("Normal weight");
      
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setCategory("Overweight");
      
    } else if (bmi >= 30 && bmi <= 34.9) {
      setCategory("Class 1 obesity");

    } else if (bmi >= 35 && bmi <= 39.9) {
      setCategory("Class 2 obesity");

    } else if (bmi >= 40) {
      setCategory("Class 3 obesity");
    }
  }

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
          onChange={(event) => setHeight(event.target.value)}
          keyBoardType="numeric"
          placeholder="Ex: 1.80"
          value={height}
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
          onChange={(event) => setWeight(event.target.value)}
          keyBoardType="numeric"
          placeholder="Ex: 80.5"
          value={weight}
        ></TextInput>
        <Button
          onPress={validateBmiCalculator}
          accessibilityLabel="Calculator your BMI"
          title={textButton}
        />
        <Text>
          {bmiResultText}
          {bmi}
        </Text>
        <Text>
          {bmiCategoryText}
          {category}
        </Text>
      </View>
    </View>
  );
}
