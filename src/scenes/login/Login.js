import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import {
  TextInput, Button, Snackbar, useTheme,
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({ navigation }) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = React.useState(false)

  const { colors } = useTheme()

  const onToggleSnackBar = () => setVisible(!visible)

  const onDismissSnackBar = () => setVisible(false)

  const checkLogin = () => {
    if (
      login
      && password
      && login === 'User@time4work.pl'
      && password === 'Password'
    ) {
      storeData().then(() => {
        navigation.navigate('Twoje Zadania')
      })
    } else {
      setVisible(true)
    }
  }

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('login', 'true')
    } catch (e) {
      // saving error
    }
  }
  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        style={{ backgroundColor: 'red' }}
      >
        Login or password is incorrect
      </Snackbar>
      <View style={{ paddingLeft: 24, paddingRight: 24 }}>
        <Icon style={styles.icon} name="user-clock" size={90} color="#000" />
        <TextInput
          label="Adres e-mail"
          style={{ marginBottom: 15 }}
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          label="Hasło"
          style={{ marginBottom: 15 }}
          value={password}
          onChangeText={setPassword}
        />
        <Button
          mode="contained"
          onPress={() => checkLogin()}
          style={{ background: colors.primary }}
        >
          Zaloguj się!
        </Button>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  icon: {
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 80,
  },
})
