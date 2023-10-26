import { StyleSheet } from "react-native";
import {
  COLORS,
  BORDERRADIUS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
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
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
    textAlign: "center",
    paddingVertical: SPACING.space_10,
  },
});
