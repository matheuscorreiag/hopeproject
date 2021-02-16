import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDF0FF",
    justifyContent: "center",
  },
  groupContainer: {
    width: "100%",
    height: 500,
    alignItems: "center",
  },
  title: {
    color: "#F0386B",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    width: 350,
  },
  changePassButton: {
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
  input: {
    backgroundColor: "#FFF",
    width: 255,
    height: 72,
    borderRadius: 14,
  },
  inputLabel: {
    color: "#F0386B",
    fontWeight: "bold",
  },
  titleContainer: {
    paddingBottom: 10,
  },
  buttonContainer: {
    paddingTop: 10,
  },
});

export default styles;
