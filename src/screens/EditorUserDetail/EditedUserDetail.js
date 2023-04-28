import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { clearUsers } from "../../store/createSlice";
import { clearUser } from "../../store/userSlice";
import { useEffect } from "react";

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
      <View style={styles.newInfoContainer}>
        <Text style={styles.newInfoTitle}>New data for: '{newData.login}'</Text>
        {newData.bio && (
          <Text style={styles.newInfoText}>Bio: {newData.bio}</Text>
        )}
        {newData.blog && (
          <Text style={styles.newInfoText}>Blog: {newData.blog}</Text>
        )}
        {newData.location && (
          <Text style={styles.newInfoText}>Location: {newData.location}</Text>
        )}
        {newData.email && (
          <Text style={styles.newInfoText}>Email: {newData.email}</Text>
        )}
        {newData.name && (
          <Text style={styles.newInfoText}>Name: {newData.name}</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  newInfoContainer: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 8,
  },
  newInfoTitle: {
    fontSize: 24,
    textAlign: "center",
    color: "#FFC759",
    marginVertical: 10,
  },
  newInfoText: {
    fontSize: 18,
    backgroundColor: "#E8E9ED",
    marginVertical: 6,
    marginHorizontal: 8,
    padding: 8,
    borderRadius: 10,
    color: "#607196",
  },
});
