import { Text, View, StyleSheet, Image } from "react-native";
import { Styles } from "../utilities/Styles";

export const Card = ({url, login, id}) => {

  return (
    <View style={Styles.cardContainer}>
      <View style={Styles.cardImageContainer}>
        <Image
          style={Styles.cardImage}
          source={{uri: url}}
        />
      </View>
      <View style={Styles.cardTextContainer}>

      <Text style={Styles.cardText}>Login: '{login}'</Text>
      <Text style={Styles.cardText}>Id: {id}</Text>
      </View>
    </View>
  );
};
