import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DDF0FF",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  groupContainer: {
    alignItems: "center",
  },
  title: {
    height: 300,
    color: "#F0386B",
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleContainer: {
    paddingBottom: 10,
  },
  buttonText: {
    color: "#F8C0C8",
    fontSize: 20,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#FFF",
    width: 255,
    height: 72,
    borderRadius: 14,
  },
  button: {
    backgroundColor: "#F0386B",
    width: 255,
    height: 72,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    paddingTop: 20,
  },
});

export default styles;
