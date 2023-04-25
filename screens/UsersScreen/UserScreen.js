import { Text, View, FlatList } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Styles } from "./UsersStyles";
import List from "../../components/List/List";

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



  return (
    <>
      <View style={Styles.containerUserScreen}>
        <Text style={Styles.title}>Users</Text>
        <View>

          <List apiUsers={apiUsers}/>
        </View>
      </View>
    </>
  );
};
