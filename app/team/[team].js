import { View, Text, Image } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
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

const TeamDetail = () => {
  const { team } = useLocalSearchParams();
  const selectedTeam = DATA.filter(function (item) {
    return item.name === team;
  });

  console.log(selectedTeam);

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
      <TeamCard item={selectedTeam[0]} />
    </SafeAreaView>
  );
};

export default TeamDetail;
