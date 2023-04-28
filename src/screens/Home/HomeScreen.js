import { View, Text, TextInput } from "react-native";
import { Styles } from "./HomeStyles";
import { getCurrentDate } from "../../util/date";
import { useState } from "react";
import { Button } from "../../components/Button/Button";

export const HomeScreen = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("UsersScreen", {
      quantity: enteredNumber,
    });
  };
  const [enteredNumber, setEnteredNumber] = useState(0);

  const inputHandler = (enteredNumber) => {
    setEnteredNumber(enteredNumber);
  };

  return (
    <>
      <View style={Styles.root}>
        <Text style={Styles.homeDate}>{getCurrentDate()}</Text>
        <View style={Styles.container}>
          <Text style={Styles.homeTitle}>Ingresa la cantidad de usuarios:</Text>
          <View style={Styles.inputContainer}>
            <TextInput
              style={Styles.input}
              keyboardType="number-pad"
              onChangeText={inputHandler}
            />
          </View>
          <View style={Styles.homeButtonContainer}>
            <Button onPress={pressHandler} style={Styles.homeButtonText}>
              Buscar
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};
