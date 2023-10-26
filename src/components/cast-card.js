import React from "react";
import { Text, View, Image } from "react-native";

import { SPACING } from "../theme/theme";

import { styles } from "./styles/cast-card.styles";

const CastCard = ({
  shouldMarginatedAtEnd,
  isFirst,
  isLast,
  cardWidth,
  title,
  subtitle,
  imagePath,
}) => {
  return (
    <View
      style={[
        styles.container,
        shouldMarginatedAtEnd
          ? isFirst
            ? { marginLeft: SPACING.space_24 }
            : isLast
            ? { marginRight: SPACING.space_24 }
            : {}
          : {},
        { maxWidth: cardWidth },
      ]}
    >
      <Image
        source={{ uri: imagePath }}
        style={[styles.cardImage, { width: cardWidth }]}
      />
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.subtitle} numberOfLines={1}>
        {subtitle}
      </Text>
    </View>
  );
};

export default CastCard;
