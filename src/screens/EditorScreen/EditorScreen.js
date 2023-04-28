import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const EditorScreen = () => {
  const data = useSelector((state) => state.dataUsers.dataUsers);
  const navigation = useNavigation();

  const renderItem = (data) => {
    const item = data.item;
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{item.login}</Text>
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
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>No users</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.editorText}>Tap to edit!</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
          <Text style={styles.infoText}>
            Remember that you only can edit bio, blog, location, name and email
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "#E8E9ED",
    margin: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    color: "#607196",
  },
  editorText: {
    fontSize: 26,
    textAlign: "center",
    margin: 10,
    color: "#FFC759",
  },
  noDataContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  noDataText: {
    fontSize: 20,
    color: "#607196",
  },
  infoText: {
    paddingHorizontal: 18,
    marginVertical: 10
  }
});
