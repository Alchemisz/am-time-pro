import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import Profile from 'scenes/profile'
import Login from 'scenes/login'
import Tasks from '../../../scenes/Tasks'
import TabNavigator from '../tabs'
import DrawerMenu from './DrawerMenu'
import TaskStackNavigation from "../stacks/TaskStackNavigation";
import AddTask from "../../../scenes/AddTask";

const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Login" drawerContent={DrawerMenuContainer}>
    <Drawer.Screen name="Twoje Zadania" component={TabNavigator} />
    <Drawer.Screen name="Login" component={Login} />
    <Drawer.Screen name="Zadania" component={TaskStackNavigation} />
    <Drawer.Screen name="Dodaj Zadanie" component={AddTask} />
  </Drawer.Navigator>
)

export default DrawerNavigator
