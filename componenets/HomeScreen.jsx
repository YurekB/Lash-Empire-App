import { Text, View, FlatList, Button } from "react-native";
import s from "./Styles";

const HomeScreen = ({ navigation }) => {
  const availableTimes = [
    { key: "Sep 12 12:30" },
    { key: "Sep 13 12:30" },
    { key: "Sep 14 12:30" },
    { key: "Sep 15 12:30" },
  ];

  return (
    <View style={s.default}>
      <Text>Home Screen</Text>
      <Text>Available Times:</Text>
      <FlatList
        data={availableTimes}
        renderItem={({ item }) => (
          <View>
            <Text style={s.default}>{item.key}</Text>
            <Button
              title="Book"
              onPress={() => {
                navigation.navigate("IndividualBooking", {
                  appID: item.key,
                });
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
