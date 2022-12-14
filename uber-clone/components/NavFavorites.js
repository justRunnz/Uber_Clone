import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from "@rneui/themed";
import tw from 'tailwind-react-native-classnames';


const data = [
    {
        id: "1",
        icon: "home",
        location: "Home",
        destination: "Code Street, London, UK",
    },
    {
        id: "2",
        icon: "briefcase",
        location: "Work",
        destination: "London Eye, London, UK",
    },
]


const NavFavorites = () => {
  return (
    <FlatList 
        data={data} 
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => ( 
            <View style={[tw`border-b border-gray-200`, {height: 0.5}]}/>
        )}
        renderItem={({item : {location, destination ,icon}}) => (
            <TouchableOpacity style = {tw`flex-row items-center p-5`}>
                <Icon
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                />
                <View>
                    <Text style = {tw`text-lg font-semibold`}>{location}</Text>
                    <Text style = {tw`text-sm`}>{destination}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavFavorites

const styles = StyleSheet.create({})