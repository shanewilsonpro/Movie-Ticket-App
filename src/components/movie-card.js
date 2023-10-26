import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { SPACING } from "../theme/theme";
import CustomIcon from "./custom-icon";

import { styles } from "./styles/movie-card.styles";

const genres = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentry",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystry",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const MovieCard = ({
  cardFunction,
  shoudlMarginatedAtEnd,
  shouldMarginatedAround,
  isFirst,
  isLast,
  imagePath,
  cardWidth,
  vote_average,
  vote_count,
  title,
  genre,
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

        <View>
          <View style={styles.RateContainer}>
            <CustomIcon name="star" style={styles.StarIcon} />
            <Text style={styles.VoteText}>
              {vote_average} ({vote_count})
            </Text>
          </View>

          <Text numberOfLines={1} style={styles.TextTitle}>
            {title}
          </Text>

          <View style={styles.GenreContainer}>
            {genre.map((item) => {
              return (
                <View key={item} style={styles.GenreBox}>
                  <Text style={styles.GenreText}>{genres[item]}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
