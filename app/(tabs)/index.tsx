import { Link } from "expo-router";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TeamCard from "../../components/TeamCard";

const DATA = [
  {
    id: "1",
    title: "Hot Frosty (2024)",
    poster:
      "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/iEh7c4tOZMmUQmfvpoRxPfY7tR3.jpg",
    overwiew:
      "When a young widow's magic scarf brings a dashing snowman to life, can he help her rediscover romance, laughter and holiday cheer before he melts away?",
  },
  {
    id: "2",
    title: "Gladiator II (2024)",
    poster:
      "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    overwiew:
      "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
  },
  {
    id: "3",
    title: "Arcane (2021)",
    poster:
      "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/abf8tHznhSvl9BAElD2cQeRr7do.jpg",
    overwiew:
      "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
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
        numColumns={2}
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
