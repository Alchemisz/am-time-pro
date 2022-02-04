import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Button } from 'react-native'
import {Camera} from 'expo-camera'

export default function CameraScreen({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const inputEl=useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={styles.camera} type={type} ref={inputEl}>
        <View style={styles.buttonContainer}>
          <Button
            style={{flex:1}} title={"Flip"}
            onPress={() => {
              console.log("FLIP!")
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}/>
          <Button
            style={{flex:1}} title={"Snap"}
            onPress={async () => {
                console.log("SNAP1" + hasPermission)
              if (inputEl.current) {
                console.log("SNAP2")
                let photo = await inputEl.current.takePictureAsync({quality: 0.2,});
                global.tempImage = photo.uri;
                console.log("CAMERA:"  + photo.uri)
                navigation.navigate("Profile", {state: true});
              }
            }}
          />
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
