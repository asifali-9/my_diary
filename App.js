// import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, View, StatusBar } from "react-native";
import {
  NavigationContainer,
  useNavigation,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./src/navigations/BottomTabNavigator";
import UserProfileScreen from "./src/screens/UserProfileScreen";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import SignupScreen from "./src/screens/userProfile/SignupScreen";
import LoginScreen from "./src/screens/userProfile/LoginScreen";
import WelcomeScreen from "./src/screens/userProfile/WelcomeScreen";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  // const navigation = useNavigation();
  const navigationRef = useNavigationContainerRef();
  const [isHeaderShow, setIsHeaderShow] = useState(true)

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor={"#0f172a"} />
      <Stack.Navigator>
        <Stack.Screen
          name="Navigator"
          component={BottomTabNavigator}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="UserProfile"
          component={UserProfileScreen}
          options={{
            headerStyle: { backgroundColor: "#0f172a" },
            headerTintColor: "white",
            headerTitle: ''
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#0f172a" },
            headerTintColor: "white",
            headerTitle: ''
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#0f172a" },
            headerTintColor: "white",
            headerTitle: ''
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#0f172a" },
            headerTintColor: "white",
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
