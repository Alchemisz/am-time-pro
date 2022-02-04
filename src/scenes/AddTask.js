import React, {useState} from "react";
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  View, FormControl, Input, Button
} from "native-base";
import TaskCard from "../components/TaskCard";
import axios from "axios";

const Tasks = ({navigation}) => {

  const [taskName, setTaskName] = useState("")
  const [time, setTime] = useState(null)

  const onSubmit = () => {
    axios.post("http://10.0.2.2:8080/api/tasks", {id: null, value: taskName, time:time})
      .then(response => {
          console.log("Wysłano (nowe zadanie)!")
          console.log(response.status)
          navigation.navigate("Zadania");
      })
      .catch((err) => {
        console.log(err.status)
      })
  }

  return(
    <NativeBaseProvider>
      <Center flex={1} flexDirection={"row"} justifyContent={"flex-start"}>
        <View flex={1} bg={"red.400"}/>
        <View flex={5}>

        <VStack width={"90%"} space={5} marginTop={"10px"} alignItems="center">
          <Heading>Dodaj nowe zadanie:</Heading>
          <Box width={"100%"}>
            <FormControl.Label _text={{
              bold: true
            }}>Nazwa zadania:</FormControl.Label>
            <Input placeholder="Nazwa" onChangeText={setTaskName} />
          </Box>
          <Box width={"100%"}>
            <FormControl.Label _text={{
              bold: true
            }}>Czas wykonania:</FormControl.Label>
            <Input keyboardType="numeric" onChangeText={setTime} />
          </Box>
          <Button width={"60%"} onPress={onSubmit} mt="5" colorScheme="cyan">
            Dodaj
          </Button>
        </VStack>
        </View>
        <View flex={1}/>
      </Center>
    </NativeBaseProvider>
  )
}

export default Tasks
