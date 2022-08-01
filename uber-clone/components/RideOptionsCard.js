import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';
import { selectTravelTimeInformation } from '../slices/navSlice';
import { useSelector } from 'react-redux';


const data = [
  {
    id: "Uber-X",
    title: 'Uber',
    multiplier: 1.,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-XL',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-Lux',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];

const SURGE_CHARGE_RAGE = 1.5;


const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInfo = useSelector(selectTravelTimeInformation);


  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity 
          onPress={() => navigation.navigate('NavigateCard')}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="font-awesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInfo?.distance?.text} </Text>
      </View>


      {/* FLATLIST */}
      <FlatList data={data}
        renderItem={({ item: { id, title, multiplier, image}, item }) => (
          <TouchableOpacity 
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-10 ${id === selected?.id && 'bg-gray-200'}`}
          >
            <Image 
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain'
              }}
              source={{ uri: image }}
            />

            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInfo?.duration?.text}</Text>
            </View>
            <Text style={tw`text-xl`}>

              {new Intl.NumberFormat('fr-FR', {
                style: 'currency', 
                currency: 'EUR',
              }).format(
                (travelTimeInfo?.duration.value * SURGE_CHARGE_RAGE * multiplier) / 100
              )}



            </Text>
            
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-100'}`}>
          <Text style={tw`text-center text-white text-xl`}>You selected {selected?.title}</Text>
        </TouchableOpacity>
        
      </View>
        
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})