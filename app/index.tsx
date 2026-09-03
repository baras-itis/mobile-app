import { Link } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEpttw_XrMnaBGCP4nR7NV_Ezeo4XEq-TaNqX33RlDe3fJ21HoNWjElUt&s=10" }

export default function Index() {
    return (
        <View>
            <ImageBackground
                source={image}
                resizeMode="cover"
                className="h-screen  place-items-center place-content-around  "
            >
                <Text className="text-8xl uppercase text-white font-black  p-10 ">Lo-Fi</Text>

                <View className="grid grid-cols-3 gap-10 place-items-center place-conent-beetween ">
                    <TouchableOpacity className="bg-black/30 rounded-xl">
                        <Text className="text-white text-xs font-black p-3 text-center ">
                            Background Image
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-black/50 rounded-xl">
                        <Text className="text-purple-200  font-black p-3">
                            <Link href="/music">Go Listening</Link>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-black/30 rounded-xl">                        <Text className="text-white font-black p-3">
                        Volume
                    </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

