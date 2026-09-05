import { Stack } from "expo-router";
import '../../global.css';
export default function RootLayout() {
    return (
        <Stack screenOptions={{
            // Hide the header for all other routes.
            headerShown: false,
        }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="music" options={{ headerShown: false }} />
        </Stack>
    )
}