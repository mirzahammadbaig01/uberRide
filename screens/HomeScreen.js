import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from '@env';
import {useDispatch} from 'react-redux';
import {setDestination, setOrigin} from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
          source={{
            uri: 'https://1000logos.net/wp-content/uploads/2017/09/Uber-logo.png',
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              }),
            );
            dispatch(setDestination(null));
          }}
          returnKeyType={'search'}
          fetchDetails={true}
          minLength={2}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          nearbyPlacesAPI="GoglePlacesSearch"
          debounce={400}
        />

        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
