import { View, Text, ScrollView } from "react-native";
import { Input } from "../../components/Input/Input";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { updateProfileInfo} from '../../store/userSlice'
import { Button } from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import {Styles} from './EditorUserDetailStyles'

export const EditorForm = ({ data}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
 

  const [bio, setBio] = useState("");
  const [blog, setBlog] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    data.bio = bio;
    data.blog = blog;
    data.location = location;
    data.email = email;
    data.name = name;
   dispatch(updateProfileInfo(data))
   navigation.navigate('EditedUserDetail')
  };

  const clearInputsHandler=()=> {
    setBio('')
    setBlog('')
    setLocation('')
    setEmail('')
    setName('')
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={clearInputsHandler} style={Styles.buttonClear}>Clear</Button>
      )
    })
  }, [navigation])

  return (
    <ScrollView >
      <View style={Styles.form}>
        <Text style={Styles.infoText}>Login: {data.login}</Text>
        <Text style={Styles.infoText}>Id: {data.id}</Text>
        <Text style={Styles.infoText}>Followers: {data.followers}</Text>
        <Input
          label="Bio"
          onChange={(newBio) => setBio(newBio)}
          placeholder={data.bio} defaultValue={bio}
        />
        <Input
          label="Blog"
          onChange={(newBlog) => setBlog(newBlog)}
          placeholder={data.blog} defaultValue={blog}
        />
        <Input
          label="Location"
          onChange={(newLocation) => setLocation(newLocation)}
          placeholder={data.location} defaultValue={location}
        />
        <Input
          label="Email"
          onChange={(newEmail) => setEmail(newEmail)}
          placeholder={data.email} defaultValue={email}
        />
        <Input
          label="Name"
          onChange={(newName) => setName(newName)}
          placeholder={data.name} defaultValue={name}
        />
        <View style={Styles.buttonContainer}>
          <Button style={Styles.button} onPress={handleSubmit}>
            Confirm
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
