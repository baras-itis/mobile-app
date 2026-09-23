import { useAudioPlayer } from "expo-audio";
import React, { useEffect, useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function Music() {
  // Играет ли в данный момент трек
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [now, setNow] = useState(new Date());

  // Номер трека
  const [trackId, setTrackId] = useState<number | null>(0);
  const [changeTrack, setChangeTrack] = useState<boolean>(false);
  // Список треков
  const track_list = [
    require("../assets/music/my1.mp3"),
    require("../assets/music/my2.mp3"),
    require("../assets/music/my3.mp3"),
  ];

  // запрашиваем первый трек
  const track = require("../assets/music/my1.mp3");
  // плеер играет трек из парамтера
  const player = useAudioPlayer(track);
  // Заднее изображение
  const source = require("../assets/background.gif");

  // async функция выполняется после всех синхронных и не блокирует поток
  async function playSound() {
    await setIsPlaying(!isPlaying);
    isPlaying ? player.play() : player.pause();
  }

  async function prevSong() {
    if (trackId <= 0) {
      await setTrackId(track_list.length - 1);
      await player.replace(null);
      player.replace(track_list[trackId]);
    } else {
      await setTrackId(trackId - 1);
      player.replace(track_list[trackId]);
    }
    console.log(trackId);
  }

  async function nextSong() {
    if (trackId === track_list.length - 1) {
      setTrackId(0);
      await player.replace(null);
      player.replace(track_list[trackId]);
    } else {
      setTrackId(trackId + 1);
      player.replace(track_list[trackId]);
    }
    console.log(trackId);
  }

  useEffect(() => {
    setNow(new Date());

    const id = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <ImageBackground source={source} className="relative h-full w-full">
      <View className="flex place-items-center text-center gap-20 border h-full place-content-center place-self-center w-full">
        <View>
          <Text className="flex flex-1 font-black text-7xl tracking-tighter w-full py-10 border rounded-full   px-10 box-shadow-xl bg-neutral-100/50  ">
            {now.getHours()}:{now.getMinutes()}
          </Text>
        </View>
        {/** Управление треком */}
        <View className="flex flex-row gap-5">
          <TouchableOpacity
            className=" rounded-full bg-purple-200/40 border w-10 h-10 place-items-center place-content-center
            
            "
            onPress={() => prevSong()}
          >
            <Text>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className=" rounded-full bg-purple-200/40 border w-10 h-10 place-items-center place-content-center"
            onPress={() => playSound()}
          >
            <Text>{isPlaying ? "|>" : "||"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className=" rounded-full bg-purple-200/40 border w-10 h-10 place-items-center place-content-center"
            onPress={() => nextSong()}
          >
            <Text>{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
