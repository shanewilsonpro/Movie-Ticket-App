import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    display: "flex",
    backgroundColor: COLORS.Black,
  },
  ScrollViewContainer: {
    flex: 1,
  },
  LoadingContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  InputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
  },
  ContainerGap36: {
    gap: SPACING.space_36,
  },
});
