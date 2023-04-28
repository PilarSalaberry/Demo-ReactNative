import { View, Text, Image} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import {Styles} from './DetailUserStyles'

export const DetailUser = ({ route, url }) => {
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
    <View style={Styles.rootContainer}>
      <View style={Styles.imageContainer}>
        <Image style={Styles.image} source={{ uri: user.avatar_url }} />
      </View>

      <View style={Styles.infoContainer}>
        <Text style={Styles.text}>Name: {user.name}</Text>
        <Text style={Styles.text}>Followers: {user.followers}</Text>
        <Text style={Styles.text}>Following: {user.following}</Text>
        <Text style={Styles.text}>Public repos: {user.public_repos}</Text>
      </View>
      <View style={Styles.extraInfo}>
        <Text style={Styles.titleExtra}>Info extra</Text>
        {user.bio && <Text style={Styles.extraInfoText}>Bio: {user.bio}</Text>}
        {user.blog && (
          <Text style={Styles.extraInfoText}>URL blog: {user.blog}</Text>
        )}
        {user.location && (
          <Text style={Styles.extraInfoText}>Location: {user.location}</Text>
        )}
        {user.email && (
          <Text style={Styles.extraInfoText}>Email: {user.email}</Text>
        )}
      </View>
    </View>
  );
};


