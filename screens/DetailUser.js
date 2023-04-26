import { View, Text, Image } from 'react-native'
import axios from "axios";
import { useEffect, useState } from 'react';

export const DetailUser = ({route}) => {

  const userLogin = route.params.userLogin;
  const [user, setUser] = useState([])
  const bio = user.bio

  const getData = () => {
    axios
      .get(`https://api.github.com/users/${userLogin}`)
      .then((response) => {
        const user = response.data;
        setUser(user)
      })
      .catch((err) => console.log(err));
      console.log(user.login)
  }


  useEffect(() => {
    getData();

  }, []);

  return (
    <View>
      <Text>DetailUser</Text>
      <View>
        <Image source={{uri: user.url}}/>
        <View>
        <Text>{user.name}</Text>
        <Text>Followers:{user.followers}</Text>
        <Text>Following:{user.following}</Text>
        <Text>Public repos:{user.public_repos}</Text>
        </View>
      </View>
    </View>
  )
}