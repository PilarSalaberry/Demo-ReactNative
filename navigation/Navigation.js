import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { EditorStackNavigation } from "./EditorStackNavigation";
import { HomeStackNavigation } from "./HomeStackNavigation";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const BottomTab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#FFC759",
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
        }}
      >
        <BottomTab.Screen
          name="HomeStackNavigation"
          component={HomeStackNavigation}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons name="home" size={24} color="#FFC759" />
            ),
            title: "Home",
          }}
        />
        <BottomTab.Screen
          name="EditorStack"
          component={EditorStackNavigation}
          options={{
            tabBarIcon: () => (
              <Ionicons name="pencil" size={24} color="#FFC759" />
            ),
            tabBarLabel: "Editor",
            headerShown: false,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
