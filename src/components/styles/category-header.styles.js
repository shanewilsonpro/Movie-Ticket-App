import { StyleSheet } from "react-native";
import { FONTFAMILY, FONTSIZE, COLORS, SPACING } from "../../theme/theme";

export const styles = StyleSheet.create({
  Text: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.White,
    paddingHorizontal: SPACING.space_36,
    paddingVertical: SPACING.space_28,
  },
});
