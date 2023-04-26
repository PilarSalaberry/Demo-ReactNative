import { View, Text, Image } from "react-native";
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

  return (
    <View>
      <Text>DetailUser</Text>
      <View>
        <Image source={{ uri: user.avatar_url }} />
        <View>
          <Text>Name: {user.name}</Text>
          <Text>Followers:{user.followers}</Text>
          <Text>Following:{user.following}</Text>
          <Text>Public repos:{user.public_repos}</Text>
          {user.bio && <Text>Bio: {user.bio}</Text>}
          {user.blog && <Text>URL blog: {user.blog}</Text>}
          {user.location && <Text>Location: {user.location}</Text>}
          {user.email && <Text>Email: {user.email}</Text>}
        </View>
      </View>
    </View>
  );
};
