import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ResizeMode, Video } from "expo-av";
import { ArrowRightIcon, EnvelopeIcon } from "react-native-heroicons/outline";
import { useForm } from "react-hook-form";

export default function HomeScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <Video
        source={require("../assets/videos/Splash_design.mp4")}
        rate={1.0}
        volume={1.0}
        isMuted={true}
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
      <View className="flex-1 mt-24 px-6">
        <Text className="text-white text-4xl font-bold">Soo</Text>
        <Text className="text-white text-4xl font-bold">and Carrots</Text>
      </View>
      <View style={{ padding: 20 }}>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-[#253BFF] py-2 pr-1 rounded-full flex-row items-center justify-between mb-4"
        >
          <View className="flex-row pl-4 items-center space-x-4">
            <EnvelopeIcon className="text-white" color="white" />
            <Text className="text-white text-lg">Sign up for free</Text>
          </View>
          <View className="flex-row justify-center items-center border border-white rounded-full w-11 h-11">
            <ArrowRightIcon className="text-white" color="white" size={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-gray-800 py-2 pr-1 rounded-full flex-row items-center justify-between"
        >
          <View className="flex-row pl-4 items-center space-x-4">
            <EnvelopeIcon className="text-white" color="white" />
            <Text className="text-white text-lg">Continue with Email</Text>
          </View>
          <View className="flex-row justify-center items-center border border-white rounded-full w-11 h-11">
            <ArrowRightIcon className="text-white" color="white" size={20} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
