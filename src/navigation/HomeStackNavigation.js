import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/Home/HomeScreen";
import { DetailUser } from "../screens/DetailUser/DetailUser";
import { UsersScreen } from "../screens/UsersScreen/UsersScreen";

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
      <Stack.Screen name="UsersScreen" component={UsersScreen} />
      <Stack.Screen name="DetailUser" component={DetailUser} />
    </Stack.Navigator>
  );
};
