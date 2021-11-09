import React, {useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {openParenthesis,
        closeParenthesis,
        numbers,
        operators,
        realEval} from '../methods/methods';



export function Calculator({navigation}) {
  
  const [screen, setScreen] = useState('');

  function calculate(){
    if (global.screen == "161180+131282") {
      global.screen = "";
      setScreen(global.screen);
      navigation.navigate('Vero + July');
    }
    else {
    let p = new Promise((res, rej) => {
    try {
      global.screen = global.screen.replace(/x/g,'*');
      global.screen = global.screen.replace(/÷/g,'/');
      global.screen = realEval(global.screen);
      res(global.screen);
    }
    catch(err){};
    });
    p.then((value)=>setScreen(value));
    }
  }


  return (
    <View style={{flex: 1, justifyContent: 'flex-end', backgroundColor:'lightgrey'}}>
      <View style={{flex: 0.20, justifyContent: 'flex-end', backgroundColor: 'white'}}>
      <Text style={{fontSize: 45, textAlign: 'right', backgroundColor: 'white'}}>
      {screen}
      </Text>
      </View>
      <View style={{flex: 0.75, backgroundColor: 'black'}}>
        <View style={{flex: 0.25, flexDirection: 'row', backgroundColor: 'black'}}>
          <TouchableOpacity style={{
            flex: 0.25,
            borderWidth: 1,
            backgroundColor: '#800040',
            justifyContent: 'center',
            borderRadius: 20}} onPress={() => {global.screen = ''; setScreen(global.screen)}}>
            <Text style={{justifyContent: 'center',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              fontSize: 45, color: 'white'
              }}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex: 0.25,
            borderWidth: 1,
            backgroundColor: 'blue',
            justifyContent: 'center',
            borderRadius: 20}} onPress={() => {openParenthesis(); setScreen(global.screen)}}><Text style={{
              justifyContent: 'center',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              fontSize: 35, color: 'magenta'
              }}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex: 0.25,
            borderWidth: 1,
            backgroundColor: 'blue',
            justifyContent: 'center',
            borderRadius: 20}} onPress={() => {closeParenthesis(); setScreen(global.screen)}}><Text style={{
              justifyContent: 'center',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              fontSize: 35, color: 'magenta'
              }}>)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex: 0.25,
            borderWidth: 1,
            backgroundColor: 'blue',
            justifyContent: 'center',
            borderRadius: 20}} onPress={() => {operators('÷'); setScreen(global.screen)}}><Text style={{justifyContent: 'center',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              fontSize: 65, color: 'magenta'
              }}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.25, flexDirection: 'row', backgroundColor: 'black'}}>
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('7'), setScreen(global.screen)}}><Text style={styles.botones_num_Texts}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('8'), setScreen(global.screen)}}><Text style={styles.botones_num_Texts}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('9'), setScreen(global.screen)}}><Text style={styles.botones_num_Texts}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex: 0.25,
            borderWidth: 1,
            backgroundColor: 'blue',
            justifyContent: 'center',
            borderRadius: 20}} onPress={() => {operators('x'); setScreen(global.screen)}}><Text style={{justifyContent: 'center',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              fontSize: 40, color: 'magenta'
              }}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.25, flexDirection: 'row', backgroundColor: 'black'}}>
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('4'), setScreen(global.screen)}}><Text style={styles.botones_num_Texts}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('5'), setScreen(global.screen)}}><Text style={styles.botones_num_Texts}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('6'), setScreen(global.screen)}}><Text style={styles.botones_num_Texts}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex: 0.25,
            borderWidth: 1,
            backgroundColor: 'blue',
            justifyContent: 'center',
            borderRadius: 20}} onPress={() => {operators('-'); setScreen(global.screen)}}><Text style={{justifyContent: 'center',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              fontSize: 65, color: 'magenta'
              }}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.25, flexDirection: 'row', backgroundColor: 'black'}}>
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('1'), setScreen(global.screen)}}><Text style={styles.botones_num_Texts}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('2'), setScreen(global.screen)}}><Text style={styles.botones_num_Texts}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('3'), setScreen(global.screen)}}><Text style={styles.botones_num_Texts}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex: 0.25,
            borderWidth: 1,
            backgroundColor: 'blue',
            justifyContent: 'center',
            borderRadius: 20}} onPress={() => {operators('+'); setScreen(global.screen)}}><Text style={{justifyContent: 'center',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              fontSize: 55, color: 'magenta'
              }}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.25, flexDirection: 'row', backgroundColor: 'black'}}>
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('00'), setScreen(global.screen)}}><Text style={styles.botones_num_Texts}>00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('0'), setScreen(global.screen)}}><Text style={styles.botones_num_Texts}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={() => {point(); setScreen(global.screen)}}><Text style={styles.botones_num_Texts}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex: 0.25,
            borderWidth: 1,
            backgroundColor: 'green',
            justifyContent: 'center',
            borderRadius: 20}} onPress={calculate}><Text style={{justifyContent: 'center',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              fontSize: 55, color: 'yellow'
              }}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

let styles = {
    botones_def: {
      flex: 0.25,
      borderWidth: 1,
      backgroundColor: '#1B4D3E',
      justifyContent: 'center',
      borderColor: 'lightgrey',
      borderRadius: 20,
    },
    botones_num_Texts: {
      textAlign: 'center',
      fontFamily: 'sans-serif',
      fontSize: 50,
      color: '#5dc1b9'
    }

  }
