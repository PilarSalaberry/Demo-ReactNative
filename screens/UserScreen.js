import { Text, View, FlatList } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Styles } from "../utilities/Styles";

export const UserScreen = () => {
  const [apiUsers, setApiUsers] = useState([]);

  const getData = () => {
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        const users = response.data;
        setApiUsers(users);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const userCardHandler = (itemData) =>{
    const item = itemData.item;
    return (
        <Card id={item.id} login={item.login} url={item.avatar_url} />
    )
  }

  return (
    <>
      <View style={Styles.containerUserScreen}>
        <Text style={Styles.title}>Users</Text>
        <View>
          <FlatList
            data={apiUsers.slice(0,8)}
            renderItem={userCardHandler}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
};


