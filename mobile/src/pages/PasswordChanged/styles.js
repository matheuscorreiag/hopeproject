import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DDF0FF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  groupContainer: {
    height: 500,
    alignItems: "center",
  },
  imageContainer: {
    paddingBottom: 10,
    alignItems: "center",
  },
  title: {
    color: "#F0386B",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  logInButton: {
    backgroundColor: "#F0386B",
    width: 255,
    height: 72,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#F8C0C8",
    fontSize: 20,
    fontWeight: "bold",
  },
  titleContainer: {
    paddingBottom: 20,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});

export default styles;
