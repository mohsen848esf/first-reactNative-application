import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from "react-native";
import Constants from "expo-constants";
import ListItem from "../components/list/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/list/ListItemSeparator";
import colors from "../config/colors";
import ListItemDeleteAction from "../components/list/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "عنوان -۱",
    description: "توضیحات",
    image: require("../assets/user-g1.jpg"),
  },
  {
    id: 2,
    title: "عنوان -۲",
    description: "توضیحات",
    image: require("../assets/user-b1.jpg"),
  },
  {
    id: 3,
    title: "عنوان -۳",
    description: "توضیحات",
    image: require("../assets/user-g2.jpg"),
  },
  {
    id: 4,
    title: "عنوان -۴",
    description: "توضیحات",
    image: require("../assets/user-g4.jpg"),
  },
  {
    id: 5,
    title: "عنوان -۵",
    description: "توضیحات",
    image: require("../assets/user-b2.jpg"),
  },
];
function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (messageId) => {
    setMessages(messages.filter((m) => m.id !== messageId));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message", item)}
            renderActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([initialMessages[0]]);
          // setRefreshing()
        }}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default MessageScreen;
