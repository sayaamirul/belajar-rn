import { Link } from "expo-router";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TeamCard from "../../components/TeamCard";

const DATA = [
  {
    id: "1",
    name: "Evos",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6xEfueHGOm18C4d8B5ulSNCMBs8EBvN91A&s",
  },
  {
    id: "2",
    name: "Onic",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT60dry2JRzfvyeH1WZ5GLVLsltGcotzzUK3A&s",
  },
  {
    id: "3",
    name: "RRQ",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/RRQ_%28Rex_Regum_Qeon%29_Logo_%28SVG%29_-_Vector69Com.svg/1200px-RRQ_%28Rex_Regum_Qeon%29_Logo_%28SVG%29_-_Vector69Com.svg.png",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={DATA}
        renderItem={({ item }) => <TeamCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
