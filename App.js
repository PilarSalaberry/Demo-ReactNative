import { StatusBar } from "expo-status-bar";
import { UserScreen } from "./screens/UserScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#FFC759" },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            contentStyle: { backgroundColor: "#FFFFFF" },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen}  options={{title: 'Demo 1'}} />
          <Stack.Screen name="UsersList" component={UserScreen} options={{title: 'Demo 1'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
