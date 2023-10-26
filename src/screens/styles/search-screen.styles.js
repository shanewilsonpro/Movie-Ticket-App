import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SPACING } from "../../theme/theme";

const { width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  Container: {
    display: "flex",
    flex: 1,
    width,
    alignItems: "center",
    backgroundColor: COLORS.Black,
  },
  InputHeaderContainer: {
    display: "flex",
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
    marginBottom: SPACING.space_28 - SPACING.space_12,
  },
  CenterContainer: {
    alignItems: "center",
  },
});
