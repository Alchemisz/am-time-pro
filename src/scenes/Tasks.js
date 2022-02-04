import React, {useEffect, useState} from "react";
import {
  Heading,
  VStack,
  NativeBaseProvider,
} from "native-base";
import TaskCard from "../components/TaskCard";
import axios from "axios";

const Tasks = ({navigation}) => {
  const [tasks, setTasks] = useState([
    {id: 1, value: "Spacer", time: 20},
    {id: 2, value: "Jedzenie", time: 20},
    {id: 3, value: "Trening", time: 60},
  ])

  useEffect(() => {
    navigation.addListener('focus', () => {
      axios.get("http://10.0.2.2:8080/api/tasks")
        .then(response => {
          console.log("Pobrano (zadania) GET!")
          setTasks(response.data)
        })
        .catch((err) => {
          console.log(err.status)
        })
    })
  }, [])

  const renderCards = () => {
      return tasks.map(element => <TaskCard task={element} nav={navigation}/>)
  }

  return(
    <NativeBaseProvider>
      <VStack space={4} marginTop={"10px"} alignItems="center">
        <Heading>Dostępne czynności</Heading>
        {renderCards()}
      </VStack>
    </NativeBaseProvider>
  )
}

export default Tasks
