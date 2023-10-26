import { StyleSheet } from "react-native";
import {
  COLORS,
  BORDERRADIUS,
  SPACING,
  FONTFAMILY,
  FONTSIZE,
} from "../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    display: "flex",
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  CardImage: {
    aspectRatio: 2 / 3,
    borderRadius: BORDERRADIUS.radius_20,
  },
  TextTitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_24,
    color: COLORS.White,
    textAlign: "center",
    paddingVertical: SPACING.space_10,
  },
  RateContainer: {
    flexDirection: "row",
    gap: SPACING.space_10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: SPACING.space_10,
  },
  StarIcon: {
    fontSize: FONTSIZE.size_20,
    color: COLORS.Yellow,
  },
  VoteText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
  },
  GenreContainer: {
    flex: 1,
    flexDirection: "row",
    gap: SPACING.space_20,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  GenreBox: {
    borderColor: COLORS.WhiteRGBA50,
    borderWidth: 1,
    paddingVertical: SPACING.space_4,
    paddingHorizontal: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_25,
  },
  GenreText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.WhiteRGBA75,
  },
});
