import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import { colors } from 'theme'
import {NativeBaseProvider, ScrollView, VStack} from "native-base";
import YourTaskList from "../../components/YourTasksList";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginTop: 10,
  },
})


const Home = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <NativeBaseProvider>
        <ScrollView>
              <YourTaskList nav={navigation} />
        </ScrollView>
    </NativeBaseProvider>
  </View>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
