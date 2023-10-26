import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { SPACING } from "../theme/theme";

import { styles } from "./styles/sub-movie-card.styles";

const SubMovieCard = ({
  cardFunction,
  shoudlMarginatedAtEnd,
  shouldMarginatedAround,
  cardWidth,
  imagePath,
  title,
  isFirst,
  isLast,
}) => {
  return (
    <TouchableOpacity onPress={() => cardFunction()}>
      <View
        style={[
          styles.Container,
          shoudlMarginatedAtEnd
            ? isFirst
              ? { marginLeft: SPACING.space_36 }
              : isLast
              ? { marginRight: SPACING.space_36 }
              : {}
            : {},
          shouldMarginatedAround ? { margin: SPACING.space_12 } : {},
          { maxWidth: cardWidth },
        ]}
      >
        <Image
          style={[styles.CardImage, { width: cardWidth }]}
          source={{ uri: imagePath }}
        />
        <Text numberOfLines={1} style={styles.TextTitle}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SubMovieCard;
