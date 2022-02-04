import {Box, Pressable, Text} from "native-base";
import React, {useState} from "react";
import {TouchableOpacity} from "react-native";

const TaskCard = (props) => {
  const element = props.task
  const nav = props.nav
  return (
      <Box width={"90%"} bg="primary.500" rounded="md" >
        <TouchableOpacity onPress={() => nav.navigate("Szczegóły Zadania", element)}>
          <Box width={"100%"} _text={{
            color: "white",
            padding: "10px",
            textAlign: "center",
          }} shadow={3}>
            {element.value}
          </Box>
        </TouchableOpacity>
      </Box>
  )
}

export default TaskCard;
