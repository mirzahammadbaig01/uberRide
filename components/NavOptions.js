import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectOrigin} from '../slices/navSlice';
import Icon from 'react-native-vector-icons/AntDesign';

const data = [
  {
    id: '1234',
    title: 'Get a Ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '1235',
    title: 'Order Food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];
const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      horizontal
      renderItem={({item}) => (
        <TouchableOpacity
          disabled={!origin}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          onPress={() => navigation.navigate(item.screen)}>
          <View style={tw`${!origin && 'opacity-50'} `}>
            <Image
              style={{width: 120, height: 120, resizeMode: 'contain'}}
              source={{uri: item.image}}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>

            <View style={tw`rounded-full p-2 w-11 mt-4 bg-black items-center`}>
              <Icon name="arrowright" color={'white'} style={tw`text-xl`} />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
