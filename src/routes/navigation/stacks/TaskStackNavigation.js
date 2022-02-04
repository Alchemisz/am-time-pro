import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tasks from "../../../scenes/Tasks";
import TaskDetails from "../../../scenes/TaskDetails";

const Stack = createStackNavigator()

const TaskStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Zadania"
      component={Tasks}
      options={
        {headerShown: false}
      }
    />
    <Stack.Screen
      name="Szczegóły Zadania"
      component={TaskDetails}
    />
  </Stack.Navigator>
)

export default TaskStackNavigation;
