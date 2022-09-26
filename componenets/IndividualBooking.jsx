import { Text, View, Image } from "react-native";
import s from "./Styles";

const IndividualBooking = ({ route, navigation }) => {
  const { appID } = route.params;

  return (
    <View style={s.defaultBooking}>
      <Image style={s.img} source={require("../assets/lashLogo.png")} />
      <Text>Make a booking</Text>
      <Text>My Booking Slot: {appID}</Text>
    </View>
  );
};

export default IndividualBooking;
