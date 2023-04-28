import { View, Text, FlatList, Pressable} from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Styles} from './EditorScreenStyles'

export const EditorScreen = () => {
  const data = useSelector((state) => state.dataUsers.dataUsers);
  const navigation = useNavigation();

  const renderItem = (data) => {
    const item = data.item;
    return (
      <View style={Styles.item}>
        <Text style={Styles.text}>{item.login}</Text>
        <Pressable onPress={() => selectUserDetailHandler(item.login)}>
          <Ionicons name="pencil" size={22} />
        </Pressable>
      </View>
    );
  };

  const selectUserDetailHandler = (login) => {
    navigation.navigate("EditorUserDetail", {
      userLogin: login,
    });
  };

  return (
    <>
      {!data.length ? (
        <View style={Styles.noDataContainer}>
          <Text style={Styles.noDataText}>No users</Text>
        </View>
      ) : (
        <View>
          <Text style={Styles.editorText}>Tap to edit!</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
          <Text style={Styles.infoText}>
            Remember that you only can edit bio, blog, location, name and email
          </Text>
        </View>
      )}
    </>
  );
};
