import { View, Text, Image, StyleSheet } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";

export const DetailUser = ({ route }) => {
  const userLogin = route.params.userLogin;
  const [user, setUser] = useState([]);

  const getData = () => {
    axios
      .get(`https://api.github.com/users/${userLogin}`)
      .then((response) => {
        const user = response.data;
        setUser(user);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const url = user.avatar_url;

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: url }} />
      </View>
      <View>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>Name: {user.name}</Text>
          <Text style={styles.text}>Followers: {user.followers}</Text>
          <Text style={styles.text}>Following: {user.following}</Text>
          <Text style={styles.text}>Public repos: {user.public_repos}</Text>
        </View>
        <View style={styles.extraInfo}>
          <Text style={styles.titleExtra}>Info extra</Text>
          {user.bio && (
            <Text style={styles.extraInfoText}>Bio: {user.bio}</Text>
          )}
          {user.blog && (
            <Text style={styles.extraInfoText}>URL blog: {user.blog}</Text>
          )}
          {user.location && (
            <Text style={styles.extraInfoText}>Location: {user.location}</Text>
          )}
          {user.email && (
            <Text style={styles.extraInfoText}>Email: {user.email}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    flex: 1,
    height: 100,
  },
  image: {
    width: 50,
  },
  infoContainer: {
    backgroundColor: "#607196",
    margin: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 6,
    paddingLeft: 20,
    paddingVertical: 6,
  },
  text: {
    color: "#fff",
    marginVertical: 4,
    fontSize: 16,
  },
  titleExtra: {
    fontSize: 20,
    color: "#607196",
    marginTop: 10,
  },
  extraInfo: {
    marginHorizontal: 20,
    paddingVertical: 6,
    paddingLeft: 20,
    backgroundColor: "#E8E9ED",
  },
  extraInfoText: {
    marginVertical: 6,
    fontSize: 15,
  },
});
