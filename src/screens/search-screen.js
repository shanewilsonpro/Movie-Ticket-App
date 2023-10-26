import React, { useState } from "react";
import { View, Dimensions, StatusBar, FlatList } from "react-native";
import { SPACING } from "../theme/theme";
import { baseImagePath, searchMovies } from "../api/apicalls";
import InputHeader from "../components/input-header";
import SubMovieCard from "../components/sub-movie-card";

import { styles } from "./styles/search-screen.styles";

const { width } = Dimensions.get("screen");

const SearchScreen = ({ navigation }) => {
  const [searchList, setSearchList] = useState([]);

  const searchMoviesFunction = async (name) => {
    try {
      let response = await fetch(searchMovies(name));
      let json = await response.json();
      setSearchList(json.results);
    } catch (error) {
      console.error("Something went wrong in searchMoviesFunction ", error);
    }
  };

  return (
    <View style={styles.Container}>
      <StatusBar hidden />

      <View>
        <FlatList
          data={searchList}
          keyExtractor={(item) => item.id}
          bounces={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.InputHeaderContainer}>
              <InputHeader searchFunction={searchMoviesFunction} />
            </View>
          }
          contentContainerStyle={styles.CenterContainer}
          renderItem={({ item, index }) => (
            <SubMovieCard
              shoudlMarginatedAtEnd={false}
              shouldMarginatedAround={true}
              cardFunction={() => {
                navigation.push("MovieDetails", { movieid: item.id });
              }}
              cardWidth={width / 2 - SPACING.space_12 * 2}
              title={item.original_title}
              imagePath={baseImagePath("w342", item.poster_path)}
            />
          )}
        />
      </View>
    </View>
  );
};

export default SearchScreen;
