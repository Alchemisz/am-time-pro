import React, {useEffect, useState} from "react";
import {
  Heading,
  VStack,
} from "native-base";
import YourTask from "./YourTask";
import axios from "axios";

const YourTaskList = (props) => {

  let navigation = props.nav

  const [tasks, setTasks] = useState([
    {key: 1, value: "Siłownia", time: 60, note: "Notatka", status: true},
    {key: 2, value: "Basen", time: 30, note: "Notatka 2", status: false},
    {key: 3, value: "Trening", time: 60, note: "Notatka 3", status: false},
    {key: 4, value: "Kolacja", time: 60, note: "Notatka 4", status: false},
    {key: 5, value: "Spanko", time: 60, note: "Notatka 5", status: false},
  ])

  const [click, setClick] = useState(true);
  const [sum, setSum] = useState(0)

  const update = () => {
    axios.get("http://10.0.2.2:8080/api/userTasks")
      .then(response => {
        console.log("Pobrano dane GET! (userTasks)")
        setTasks(response.data)
      })
      .catch((err) => {
        console.log(err.status)
      })
  }

  navigation.addListener('focus', () => {
    console.log("Zmiana stanu!")
    update();
  })
  useEffect(() => {
    update();
  }, [click])


  const renderCards = () => {
    return tasks.map(element => <YourTask task={element} setClickedFunc={setClick} click={click}/>)
  }

  return(
      <VStack space={4} marginTop={"10px"} alignItems="center">
        <Heading>Twoje aktywne zadnia!</Heading>
        {renderCards()}
        {/*<Heading marginBottom={5}>Szacowany czas: {sum} minut!</Heading>*/}
      </VStack>
  )
}

export default YourTaskList
