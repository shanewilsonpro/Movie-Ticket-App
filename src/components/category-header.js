import React from "react";
import { Text } from "react-native";

import { styles } from "./styles/category-header.styles";

const CategoryHeader = ({ title }) => {
  return <Text style={styles.Text}>{title}</Text>;
};

export default CategoryHeader;
