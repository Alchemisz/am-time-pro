import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Profile from 'scenes/profile'
import Details from 'scenes/details'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import ProfileStackNavigation from './ProfileNavigation'


const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
}

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Ekran główny"
      component={Home}
      options={({ navigation }) => ({
        title: 'Ekran Główny',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <ProfileStackNavigation/>
)
