import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {selectDestination, selectOrigin} from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_API_KEY} from '@env';
const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  useEffect(() => {
    if (!origin && !destination) return;
    if (Platform.OS === 'ios') {
      mapRef?.current?.fitToElements(false);
    } else {
      mapRef?.current?.fitToCoordinates([origin, destination], {
        animated: true,
        edgePadding: {
          top: 50,
          right: 50,
          bottom: 50,
          left: 50,
        },
      });
    }
  }, [origin, destination]);
  return (
    <MapView
      ref={mapRef}
      style={{
        flex: 1,
      }}
      provider={Platform.OS == 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor={'black'}
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          identifier="Origin"
          description={origin.description}
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          identifier="Destination"
          description={destination.description}
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
