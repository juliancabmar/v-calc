import React from 'react';
import { Text, View, Image } from 'react-native';

export function VeroyJuly({navigation}) {
  return (
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', height: '100%', borderWidth: 1, backgroundColor: '#800040'}} >
      <Image style={{flex: 4, width: '100%', height: '100%', alignSelf: 'center', resizeMode: 'contain', borderWidth: 1}}  source={require('../assets/photo.jpg')} />
      <Text style={{flex: 1, color: 'red', fontSize: 40, textAlign: 'center', paddingTop: '10%', fontFamily: 'serif', fontStyle: 'italic'}}>Vero + July = ∞</Text>
      <Text style={{flex: 1, color: 'cyan', fontSize: 25, textAlign: 'center', fontFamily: 'serif', fontStyle: 'italic'}}>09-11-2013</Text>
    </View>
  );
}

