import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDF0FF",
    justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 200,
    resizeMode: "contain",
  },
  groupContainer: {
    backgroundColor: "#DDF0FF",
    alignItems: "center",
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
  title: {
    color: "#F0386B",
    fontSize: 48,
    fontWeight: "bold",
  },
  buttonContainer: {
    paddingTop: 10,
  },
  logInButton: {
    backgroundColor: "#F0386B",
    width: 250,
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
  forgotPassContainer: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 80,
  },
  forgotPassButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F0386B",
  },
  signUpButton: {
    flexDirection: "row",
  },
  newHere: {
    fontSize: 18,
    color: "#F8C0C8",
    fontWeight: "bold",
  },
  signUp: {
    fontSize: 18,
    color: "#F0386B",
    fontWeight: "bold",
  },
});

export default styles;
