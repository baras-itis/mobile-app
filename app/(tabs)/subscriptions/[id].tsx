// Like nextjs

import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from "react-native";
import "../../../global.css";

const SubscriptionsDetails = () => {
    const { id } = useLocalSearchParams<{ id: string }>()
    return (
        <View>
            <Text>
                Sub details :{id}
            </Text>
            <Link href="/">Go Back</Link>
        </View>
    )
}

export default SubscriptionsDetails;