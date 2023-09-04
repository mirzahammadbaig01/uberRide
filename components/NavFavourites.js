import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'I10/2, street 10 , house no 1267',
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Office',
    destination: 'Devsinc, Islamabad, 10/3',
  },
];
const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <View style={tw`bg-gray-100 h-0.5`} />}
      renderItem={({item: {location, destination, icon}}) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type={'ionicon'}
            color={'white'}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
