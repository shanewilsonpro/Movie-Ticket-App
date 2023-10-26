import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { COLORS, FONTSIZE } from "../theme/theme";
import CustomIcon from "./custom-icon";

import { styles } from "./styles/input-header.styles";

const InputHeader = ({ searchFunction }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.InputBox}>
      <TextInput
        style={styles.TextInput}
        onChangeText={(textInput) => setSearchText(textInput)}
        value={searchText}
        placeholder="Search your Movies..."
        placeholderTextColor={COLORS.WhiteRGBA32}
      />
      <TouchableOpacity
        style={styles.SearchIcon}
        onPress={() => searchFunction(searchText)}
      >
        <CustomIcon
          name="search"
          color={COLORS.Orange}
          size={FONTSIZE.size_20}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputHeader;
