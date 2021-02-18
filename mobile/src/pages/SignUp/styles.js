import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DDF0FF",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  groupContainer: {
    height: 600,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#F0386B",
    fontSize: 48,
    fontWeight: "bold",
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
    height: 60,
    borderRadius: 14,
  },

  inputLabel: {
    color: "#F0386B",
    fontWeight: "bold",
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
  inputContainer: {
    paddingBottom: 10,
  },
});

export default styles;
