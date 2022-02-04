import {Box, Pressable, Text} from "native-base";
import React, {useState} from "react";
import {TouchableOpacity} from "react-native";
import axios from "axios";

const YourTaskCard = (props) => {
  let task = props.task;
  let setClick = props.setClickedFunc;
  let click = props.click;

  const setPut = () => {
      axios.put("http://10.0.2.2:8080/api/userTasks",{
        id: task.id,
        value: task.value,
        time: task.time,
        note: task.note,
        status: (!task.status),
      }).then(res => console.log(res.status))
  }

  return (
    <Box width={"90%"} bg={task.status ? "red.500" : "green.500"} rounded="md" >
      <TouchableOpacity onPress={async () => {
        await setPut();
        await setClick(!click)
      }}>
        <Box width={"100%"} _text={{
          color: "white",
          padding: "6px",
          textAlign: "center",
        }} shadow={3}>
          {task.value}
          {task.note}
          {"Status: " + (((task.status) ? "Wykonano!" : "Do zrobienia!")) + " Szacowany czas: " + task.time + " minut"}
        </Box>
      </TouchableOpacity>
    </Box>
  )
}

export default YourTaskCard;
