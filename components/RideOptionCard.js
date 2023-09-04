import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 'Uber-X-123',
    title: 'Uber-X',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-XL-456',
    title: 'Uber-XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-LUX-789',
    title: 'Uber-LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];
const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View style={tw`flex-row`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={[tw`z-50 top-7 left-4 mr-5 w-10 rounded-full`]}>
          <Icon name="chevron-left" type="fontawsome" />
        </TouchableOpacity>
        <Text style={tw` ml-20 top-3 w-full py-4 text-xl`}>Select a Ride</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={tw`bg-gray-100 h-0.5`} />}
        renderItem={({item: {id, title, multiplier, image}, item}) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-10 ${
              id === selected?.id && 'bg-gray-200'
            }`}>
            <Image
              source={{uri: image}}
              style={{width: 100, height: 100, resizeMode: 'contain'}}
            />
            <View style={tw`-ml-6 mt-3`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text style={tw`text-gray-500`}>Time it will take</Text>
            </View>
            <Text style={tw`text-xl mt-3 font-semibold`}>99$</Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 bottom-4 rounded-full ${
            !selected && 'bg-gray-400'
          }`}>
          <Text style={tw`text-center text-white text-xl`}>
            Chose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
