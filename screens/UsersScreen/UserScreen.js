import { Text, View, FlatList } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Styles } from "./UsersStyles";
import List from "../../components/List/List";
import { useDispatch } from "react-redux";
import {  setDataUsers, clearUsers } from "../../store/createSlice";
import { useNavigation } from "@react-navigation/native";

export const UserScreen = ({route}) => {
  const [apiUsers, setApiUsers] = useState([]);
  const dispatch = useDispatch();
  const quantity = route.params.quantity
  const navigation = useNavigation()

  const getData = () => {
    axios
      .get(`https://api.github.com/users?per_page=${quantity}`)
      .then((response) => {
        const users = response.data;
        setApiUsers(users);
      })
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    getData();

  }, []);

  useEffect(() => {
    dispatch(setDataUsers(apiUsers))
  }, [apiUsers])

  const handleBeforeRemove =() => {
    dispatch(clearUsers())
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', handleBeforeRemove)
    return unsubscribe
  }, [])

  return (
    <>
      <View style={Styles.containerUserScreen}>
        <Text style={Styles.title}>Users</Text>
        <View>
          <List apiUsers={apiUsers} />
        </View>
      </View>
    </>
  );
};
