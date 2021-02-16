import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LogIn from "./src/pages/LogIn";
import Forgot from "./src/pages/Forgot";
import SignUp from "./src/pages/SignUp";
import NewPassword from "./src/pages/NewPassword";
import PasswordChanged from "./src/pages/PasswordChanged";
import Welcome from "./src/pages/Welcome";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        headerStyle: { backgroundColor: "#DDF0FF", elevation: 0 },
        headerTitle: false,
      }}
    >
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="PasswordChanged" component={PasswordChanged} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default Routes;
