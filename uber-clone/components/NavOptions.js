import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';
import { selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';

const data = [
    {
        id: "1",
        title: 'Get a Ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen',
    },
    {
        id: "2",
        title: 'Order Food',
        image: 'https://links.papareact.com/28w',
        screen: 'Eatscreen', // For later
    },
]

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);


  return (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({item}) => (
            <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-4 pt-4 bg-gray-200 m-2 w-40`}
                disabled={!origin}
            >
                <View style={tw`${!origin && "opacity-20"}`}>
                    <Image
                        style={{
                            width: 120,
                            height: 120,
                            resizeMode: 'contain',
                        }}
                        source={{uri: item.image}}
                    />
                    <Text style = {tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name="arrowright" 
                        color="white" 
                        type="antdesign"
                    />
                </View>
            </TouchableOpacity>
        )}
    />

  );
};

export default NavOptions