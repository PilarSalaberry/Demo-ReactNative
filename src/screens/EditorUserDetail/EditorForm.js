import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Input } from "../../components/Input/Input";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { updateProfileInfo} from '../../store/userSlice'
import { Button } from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";

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
        <Button onPress={clearInputsHandler} style={styles.buttonClear}>Clear</Button>
      )
    })
  }, [navigation])

  return (
    <ScrollView >
      <View style={styles.form}>
        <Text style={styles.infoText}>Login: {data.login}</Text>
        <Text style={styles.infoText}>Id: {data.id}</Text>
        <Text style={styles.infoText}>Followers: {data.followers}</Text>
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
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={handleSubmit}>
            Confirm
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 10,
    marginHorizontal: 24,
    marginBottom: 50
  },
  infoText: {
    fontSize: 16,
    color: "#607196",
    marginVertical: 4,
  },
  button: {
    backgroundColor: "#607196",
    width: 150,
    color: "#fff",
    borderRadius: 10,
    textAlign: "center",
    padding: 8,
    marginTop: 6,

  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonClear:{
    backgroundColor: '#607196',
    padding: 8,
    borderRadius: 10,
    color: '#fff'
  }
});
