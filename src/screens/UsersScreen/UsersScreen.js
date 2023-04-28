import { Text, View } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Styles } from "./UsersStyles";
import {List} from '../../components/List/List'
import { useDispatch } from "react-redux";
import { setDataUsers, clearUsers } from "../../store/createSlice";
import { useNavigation } from "@react-navigation/native";

export const UsersScreen = ({ route }) => {
  const [apiUsers, setApiUsers] = useState([]);
  const dispatch = useDispatch();
  const quantity = route.params.quantity;
  const navigation = useNavigation();

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
    dispatch(setDataUsers(apiUsers));
  }, [apiUsers]);

  const handleBeforeRemove = () => {
    dispatch(clearUsers());
  };

  useEffect(() => {
    const clear = navigation.addListener("beforeRemove", handleBeforeRemove);
    return clear;
  }, []);

  const selectUserDetailHandler = (login) => {
    navigation.navigate("DetailUser", {
      userLogin: login,
    });
  };

  return (
    <>
      <View style={Styles.containerUsersScreen}>
        <Text style={Styles.title}>Users</Text>
        <View>
          <List apiUsers={apiUsers} onPress={selectUserDetailHandler} />
        </View>
      </View>
    </>
  );
};
