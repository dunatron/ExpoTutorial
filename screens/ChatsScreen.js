import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
  Button
} from "react-native";

import { GiftedChat } from "react-native-gifted-chat";

const ChatsScreen = props => {
  const [messages, setMessages] = useState([]);
  const sendMessageHandler = sentMessages => {
    setMessages(currentMessages => [...currentMessages, ...sentMessages]);
  };
  return (
    <GiftedChat
      messages={messages}
      onSend={sendMessageHandler}
      user={{
        _id: 1
      }}
    />
  );
};

ChatsScreen.navigationOptions = {
  title: "Chats",
  navigationOptions: {
    tabBarLabel: "Chats!"
  }
};

export default ChatsScreen;
