import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDF0FF",
    justifyContent: "center",
  },
  groupContainer: {
    width: "100%",
    height: 600,
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
    height: 60,
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
    height: 60,
    borderRadius: 14,
  },
  inputLabel: {
    color: "#F0386B",
    fontWeight: "bold",
  },
  titleContainer: {
    paddingBottom: 50,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  inputContainer: {
    paddingBottom: 6,
  },
});

export default styles;
