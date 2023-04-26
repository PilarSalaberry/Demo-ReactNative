import { FlatList } from "react-native";
import { Card } from "../Card/Card";

export default function List({ apiUsers }) {
  const userCardHandler = (itemData) => {
    const item = itemData.item;
    return <Card id={item.id} login={item.login} url={item.avatar_url} />;
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
