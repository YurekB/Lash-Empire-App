import { Text, View, Button, Image } from "react-native";
import s from "./Styles";

const Login = ({ navigation }) => {
  return (
    <View style={s.default}>
      <Image style={s.img} source={require("../assets/lashLogo.png")} />
      <Text>LOGIN ACCOUNT FEATURE IN DEVELOPMENT</Text>
      <Button
        title="Go to home"
        style={s.default}
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default Login;
