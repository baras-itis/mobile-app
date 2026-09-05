import { Link } from "expo-router";
import { ImageBackground, Text, TouchableHighlight, View } from "react-native";
const backgroundImage = require("../assets/background.gif")

export default function Music() {
    return (


        <ImageBackground
            source={backgroundImage}
            resizeMode="cover"
            className="h-screen place-items-center place-content-center"
        >
            <View className="w-screen h-screen bg-black/50 place-items-center place-content-center">
                <Link href={"/"} className="absolute top-0  left-0 p-5 border m-4 rounded-fulls h-10 w-10 place-items-center rounded-lg place-content-center  border-red">
                    <Text className="text-white">{"<"}</Text>
                </Link>
                <View>
                    <Text className="text-white text-4xl">
                        Some text
                    </Text>
                </View>
                <View className="grid grid-cols-3 place-content-around  h-30  gap-3">
                    <TouchableHighlight className="border h-10 w-10 place-items-center rounded-lg place-content-center  border-white">
                        <Text className="text-white">{"<"}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight className="border h-10 w-10 place-items-center place-content-center rounded-lg border-white">
                        <Text className="text-white">{"||"}</Text>

                    </TouchableHighlight>
                    <TouchableHighlight className="border h-10 w-10 place-items-center rounded-lg place-content-center  border-white">
                        <Text className="text-white">{">"}</Text>

                    </TouchableHighlight>
                </View>
            </View>

        </ImageBackground>

    )
}