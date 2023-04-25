import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/Home/HomeScreen";
import { UserScreen } from "./screens/UsersScreen/UserScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EditorScreen } from "./screens/EditorScreen";
import { Ionicons } from "@expo/vector-icons";
import UserDetailScreen from "./screens/UserDetailScreen";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const BottomTab = createBottomTabNavigator();

  const BottomTabs = () => {
    return (
      <BottomTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#FFC759",
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons name="home" size={24} color="#FFC759" />
            ),
          }}
        />
        <BottomTab.Screen
          name="EditorScreen"
          component={EditorScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons name="pencil" size={24} color="#FFC759" />
            ),
            tabBarLabel: "Editor",
          }}
        />
      </BottomTab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#FFC759" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          contentStyle: { backgroundColor: "#FFFFFF" },
        }}
      >
        <Stack.Screen
          name="Tabs"
          component={BottomTabs}
          options={{ title: "Demo 1" }}
        />
        <Stack.Screen
          name="UsersList"
          component={UserScreen}
          options={{ title: "Demo 1" }}
        />
        <Stack.Screen
          component={UserDetailScreen}
          name="UserDetailScreen"
          options={{ title: "Demo 1" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
