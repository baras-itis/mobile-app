import { Link } from "expo-router";
import { Text, View } from "react-native";
import "../../global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-900 text-neutral-50">
      <Text className="text-3xl font-bold text-neutral-100 font-thin tracking-tight uppercase">
        Music App
      </Text>
      <Link href="/tracks" className="text-white py-20 italic tracking-widest">go to Tracks </Link>
      <Link href="/(auth)/sign-in" className="text-white   tracking-widest">Go to sign in</Link>
      <Link href="/(auth)/sign-up" className="text-white   tracking-widest">Go to sign up</Link>


      <Link href="/subscriptions/spotify">Spotify</Link>
      <Link href={{
        pathname: "/subscriptions/[id]",
        params: { id: "claude" }
      }}>Claude</Link>

    </View>
  );
}