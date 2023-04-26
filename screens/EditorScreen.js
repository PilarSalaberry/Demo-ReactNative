import { View, Text, FlatList, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { Card } from "../components/Card/Card";
import { useNavigation } from "@react-navigation/native";

export const EditorScreen = () => {
  const data = useSelector((state) => state.dataUsers.dataUsers);
  const navigation = useNavigation()
  

  const renderItem = (data) => {
    const item = data.item;
    return (
      <Pressable onPress={()=> selectUserDetailHandler(item.login)}>
        <Card id={item.id} login={item.login} url={item.avatar_url} />
      </Pressable>
    );
  };

  const selectUserDetailHandler = (login) => {
    navigation.navigate('DetailUser', {
      userLogin: login
    });
  };

  return (
    <View>
      <Text>Tap to edit!</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
};
