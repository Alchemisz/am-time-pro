import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, View, StatusBar, Image,
} from 'react-native'
import { colors } from 'theme'
import {Avatar, Box, Button, Center, Text, VStack} from 'native-base'
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import * as FileSystem from 'expo-file-system';

global.tempImage = "empty";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})


const Profile = ({ navigation, route }) => {

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log("Profile: RENDER!")
      console.log(global.tempImage)
    })
  });

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content"/>
      <NativeBaseProvider>
        <Center flex={1}>
          <VStack space={2} flex={1} flexDirection={"column"} justifyContent={"center"}>
            <Box>
              <Avatar size={"2xl"} source={{
                uri: (tempImage === "empty") ?
                "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg" : tempImage
              }}>
                {"AK"}
              </Avatar>
            </Box>
            <Box>
              <Button small primary onPress={() => navigation.navigate("Camera Screen")}>
                <Text>{"Zmień profilowe!"}</Text>
              </Button>
            </Box>
          </VStack>
          <Box flex={1}>
            <Text fontSize="xl">Username: User@time4work.pl</Text>
          </Box>
        </Center>
      </NativeBaseProvider>
    </View>
  )
}

export default Profile
