import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Input } from "./Input";
import { useState } from "react";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileInfo } from "../../store/userSlice";

export const EditorForm = ({ data }) => {
  const dispatch = useDispatch();
 

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
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.infoText}>Login: {data.login}</Text>
        <Text style={styles.infoText}>Id: {data.id}</Text>
        <Text style={styles.infoText}>Followers: {data.followers}</Text>
        <Input
          label="Bio"
          onChange={(newBio) => setBio(newBio)}
          placeholder={data.bio}
        />
        <Input
          label="Blog"
          onChange={(newBlog) => setBlog(newBlog)}
          placeholder={data.blog}
        />
        <Input
          label="Location"
          onChange={(newLocation) => setLocation(newLocation)}
          placeholder={data.location}
        />
        <Input
          label="Email"
          onChange={(newEmail) => setEmail(newEmail)}
          placeholder={data.email}
        />
        <Input
          label="Name"
          onChange={(newName) => setName(newName)}
          placeholder={data.name}
        />
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={handleSubmit}>
            Ok
          </Button>
          <Button style={styles.button} onPress={() => {}}>
            Back
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
  },
  infoText: {
    fontSize: 16,
    color: "#607196",
    marginVertical: 4,
  },
  button: {
    backgroundColor: "#607196",
    width: 50,
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
});
