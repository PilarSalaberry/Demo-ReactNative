import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditorScreen } from "../screens/EditorScreen";

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
      {/* <Stack.Screen name="EditDetailUSer" component={}/> */}
    </Stack.Navigator>
  );
};
