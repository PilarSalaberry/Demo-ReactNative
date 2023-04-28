import { FlatList, Pressable } from "react-native";
import {Card} from '../Card/Card'

export const List = ({ apiUsers, onPress }) => {
  const userCardHandler = (itemData) => {
    const item = itemData.item;
    return (
      <Pressable onPress={() => onPress(item.login)}>
        <Card id={item.id} login={item.login} url={item.avatar_url} />
      </Pressable>
    );
  };

  return (
    <FlatList
      data={apiUsers}
      renderItem={userCardHandler}
      keyExtractor={(item, index) => {
        return item.id;
      }}
    />
  );
}
