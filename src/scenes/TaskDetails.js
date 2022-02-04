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
  View, Button, TextArea
} from "native-base";
import axios from "axios";

const TaskDetails = ({navigation, route}) => {
  let params = route.params;

  const [taskNote, setNote] = useState("")

  const onSubmit = () => {
    console.log("Dodawannko! dla usera")
    console.log(taskNote)
    axios.post("http://10.0.2.2:8080/api/userTasks",
      {
        id: null,
        value: params.value,
        time: params.time,
        note: taskNote,
        status: false
      })
      .then(response => {
        console.log("Wysłano do planu dnia!!")
        console.log(response.status)
        navigation.navigate("Zadania");
      })
      .catch((err) => {
        console.log("Error")
        console.log(err.status)
      })
  }

  return(
    <NativeBaseProvider>
      <View flex={1}>
        <Box bg={"gray.300"} flex={1} alignItems={'center'}>
            <Heading size={"2xl"} marginTop={25}>
              {params.value}
            </Heading>
          <Heading size={"xl"} marginTop={25}>
            {"Czas trwania: " + params.time + " minut"}
          </Heading>
          <Heading size={"md"} marginTop={25}>
            {"Notatka do zadania:"}
          </Heading>
          <TextArea marginTop={3} value={taskNote}
                    onChangeText={setNote}
                    w="75%" maxW="300"
          />

          <Button marginTop={14} small primary onPress={onSubmit}>
            <Text color={"white"}>
              Dodaj zadanie!
            </Text>
          </Button>
        </Box>
      </View>
    </NativeBaseProvider>
  )
}

export default TaskDetails;
