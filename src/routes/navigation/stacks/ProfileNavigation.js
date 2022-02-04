import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tasks from "../../../scenes/Tasks";
import TaskDetails from "../../../scenes/TaskDetails";
import Profile from "../../../scenes/profile";
import CameraScreen from "../../../scenes/CameraScreen";

const Stack = createStackNavigator()

const ProfileStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={
        {headerShown: false}
      }
    />
    <Stack.Screen
      name="Camera Screen"
      component={CameraScreen}
    />
  </Stack.Navigator>
)

export default ProfileStackNavigation;
