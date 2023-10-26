import { StyleSheet } from "react-native";
import {
  SPACING,
  COLORS,
  BORDERRADIUS,
  FONTFAMILY,
  FONTSIZE,
} from "../../theme/theme";

export const styles = StyleSheet.create({
  InputBox: {
    display: "flex",
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_24,
    borderWidth: 2,
    borderColor: COLORS.WhiteRGBA15,
    borderRadius: BORDERRADIUS.radius_25,
    flexDirection: "row",
  },
  TextInput: {
    width: "90%",
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
  },
  SearchIcon: {
    alignItems: "center",
    justifyContent: "center",
    padding: SPACING.space_10,
  },
});
