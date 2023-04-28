import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditorScreen } from "../screens/EditorScreen/EditorScreen";
import { EditorUserDetail } from "../screens/EditorUserDetail/EditorUserDetail";
import {EditedUserDetail} from '../screens/EditorUserDetail/EditedUserDetail'
import { Button } from '../components/Button/Button';


export const EditorStackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#FFC759" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        contentStyle: { backgroundColor: "#FFFFFF" },
      }}
    >
      <Stack.Screen name="Editor" component={EditorScreen} />
      <Stack.Screen name="EditorUserDetail" component={EditorUserDetail} options={{title:'User Detail Edit', headerRight:() => (
        <Button>Clean</Button>
      )}}/>
      <Stack.Screen name="EditedUserDetail" component={EditedUserDetail} options={{title: 'User Edited'}}/>
    </Stack.Navigator>
  );
};
