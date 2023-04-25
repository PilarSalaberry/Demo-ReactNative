import { View, Text, Pressable, StyleSheet } from "react-native";
import { Styles } from "./HomeStyles";
import { getCurrentDate } from "../../util/date";

export const HomeScreen = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("UsersList");
  };

  return (
    <>
      <View style={Styles.root}>
        <Text style={Styles.homeTitle}>Home</Text>
        <Text style={Styles.homeDate}>{getCurrentDate()}</Text>
        <View style={styles.homeButtonContainer}>
          <Pressable onPress={pressHandler} android_ripple={{color: '#E8E9ED'}} >
            <Text style={styles.homeButtonText}>Users</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  homeButtonContainer: {
    backgroundColor: '#607196',
    borderRadius: 15,
    marginTop: 20,
  },
  homeButtonText: {
    fontSize: 22,
    color: '#fff',
    margin: 15
  }
})
