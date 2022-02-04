import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tasks from "../../../scenes/Tasks";
import TaskDetails from "../../../scenes/TaskDetails";
import LoginScreen from "../../../scenes/LoginScreen";
import Router from "../../Routes";
import DrawerNavigator from "../drawer";

const Stack = createStackNavigator()

const TaskStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={
        {headerShown: false}
      }
    />
    <Stack.Screen
      name="Logged"
      component={DrawerNavigator}
      options={
        {headerShown: false}
      }
    />
  </Stack.Navigator>
)

export default TaskStackNavigation;
