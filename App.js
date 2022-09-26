import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./componenets/HomeScreen";
import Login from "./componenets/Login";
import IndividualBooking from "./componenets/IndividualBooking";
import s from "./componenets/Styles";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My home",
            headerStyle: s.header,
          }}
        />
        <Stack.Screen
          name="IndividualBooking"
          component={IndividualBooking}
          options={{
            title: "Make A Booking",
            headerStyle: s.header,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
