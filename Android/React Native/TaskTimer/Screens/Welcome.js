import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Image } from 'react-native'
import { Text, View } from 'react-native'

function Welcome() {
  return (
    <View>
        <StatusBar style='light'/>
        <SafeAreaView className="">
            <View>
            <Text className=""></Text>
            </View>
        </SafeAreaView>
    </View>
  )
}

export default Welcome