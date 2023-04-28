import { View, Text} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { clearUsers } from "../../store/createSlice";
import { clearUser } from "../../store/userSlice";
import { useEffect } from "react";
import {Styles} from './EditorUserDetailStyles'

export const EditedUserDetail = () => {
  const newData = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleBeforeRemove = () => {
    dispatch(clearUsers());
    dispatch(clearUser());
    navigation.navigate('Home')
  };

  useEffect(() => {
    const clear = navigation.addListener("beforeRemove", handleBeforeRemove);
    return clear;
  }, []);

  return (
    <>
      <View style={Styles.newInfoContainer}>
        <Text style={Styles.newInfoTitle}>Edited values for: '{newData.login}'</Text>
        {newData.bio && (
          <Text style={Styles.newInfoText}>Bio: {newData.bio}</Text>
        )}
        {newData.blog && (
          <Text style={Styles.newInfoText}>Blog: {newData.blog}</Text>
        )}
        {newData.location && (
          <Text style={Styles.newInfoText}>Location: {newData.location}</Text>
        )}
        {newData.email && (
          <Text style={Styles.newInfoText}>Email: {newData.email}</Text>
        )}
        {newData.name && (
          <Text style={Styles.newInfoText}>Name: {newData.name}</Text>
        )}
      </View>
    </>
  );
};
