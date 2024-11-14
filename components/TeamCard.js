import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const TeamCard = ({ item }) => {
  return (
    <Link
      href={{
        pathname: "/team/[team]",
        params: { team: item.id },
      }}
    >
      <View className="p-4 m-2 bg-red-400 rounded-xl">
        <Image
          className="rounded-xl"
          source={{
            uri: item.poster,
            height: 150,
            width: 150,
          }}
        />
        <Text className="text-center font-bold text-white">{item.title}</Text>
        <Text className="text-center text-white">{item.overview}</Text>
      </View>
    </Link>
  );
};

export default TeamCard;
