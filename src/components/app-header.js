import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import CustomIcon from "./custom-icon";

import { styles } from "./styles/app-header.styles";

const AppHeader = ({ action, name, header }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBG} onPress={() => action()}>
        <CustomIcon name={name} style={styles.iconStyle} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{header}</Text>
      <View style={styles.emptyContainer}></View>
    </View>
  );
};

export default AppHeader;
