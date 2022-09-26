import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: "rgb(227, 205, 184)",
    alignItems: "center",
    justifyContent: "center",
    fontColor: "white",
  },
  defaultBooking: {
    flex: 1,
    backgroundColor: "rgb(227, 205, 184)",
    alignItems: "center",
    fontColor: "white",
  },
  img: {
    flex: 1,
    width: 300,
    resizeMode: "contain",
    padding: 1,
    maxHeight: 300,
  },
  header: {
    backgroundColor: "rgb(216, 187, 159)",
  },
});

export default s;
