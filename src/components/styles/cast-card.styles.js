import { StyleSheet } from "react-native";
import { BORDERRADIUS, FONTFAMILY, FONTSIZE, COLORS } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  cardImage: {
    aspectRatio: 1920 / 2880,
    borderRadius: BORDERRADIUS.radius_25 * 4,
  },
  title: {
    alignSelf: "stretch",
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.White,
  },
  subtitle: {
    alignSelf: "stretch",
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.White,
  },
});
