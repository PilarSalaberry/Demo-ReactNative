import { View, Text, StyleSheet } from 'react-native'
import { EditorForm } from '../components/Input/EditorForm';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { setProfileInfo } from '../store/userSlice';


export const EditorUserDetail =({route}) => {
    const userLogin = route.params.userLogin;
    const [userEditDetail, setUserEditDetail ] = useState([])
    const dispatch = useDispatch()

    const getData = () => {
        axios
          .get(`https://api.github.com/users/${userLogin}`)
          .then((response) => {
            const user = response.data;
            setUserEditDetail(user);
          })
          .catch((err) => console.log(err));
      };
    
      useEffect(() => {
        getData();
      }, []);

      useEffect(() => {
        dispatch(setProfileInfo(userEditDetail))
      }, [userEditDetail])


    

  return (
    <View>
      <Text style={styles.editText}>Here you can edit some data</Text>
      <EditorForm data={userEditDetail} />
    </View>
  )
}

const styles = StyleSheet.create({
    editText: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 4
    }
})