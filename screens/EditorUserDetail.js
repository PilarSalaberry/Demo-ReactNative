import { View, Text } from 'react-native'

export const EditorUserDetail =({route}) => {
    const userLogin = route.params.userLogin;

  return (
    <View>
      <Text>EditorUserDetail</Text>
      <Text>Hi ${userLogin}</Text>
    </View>
  )
}