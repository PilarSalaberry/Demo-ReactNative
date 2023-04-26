import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/Home/HomeScreen";
import { UserScreen } from "../screens/UsersScreen/UserScreen";
import { DetailUser } from "../screens/DetailUser";

export const HomeStackNavigation = () => {
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
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UsersList" component={UserScreen} />
      <Stack.Screen name="DetailUser" component={DetailUser} />
    </Stack.Navigator>
  );
};
