
import { Text, Pressable } from "react-native";


export const Button = ({style, onPress, children}) => {
  return (
    <Pressable onPress={onPress} android_ripple={{color: '#E8E9ED'}} >
    <Text style={style}>{children}</Text>
  </Pressable>
  );
};