import React, {useState, useRef} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import {openParenthesis,
        closeParenthesis,
        numbers,
        operators,
        point,
        calculate} from '../methods/methods';


var rend = new Array();

export function Calculator({navigation}) {
  
  const [screen, setScreen] = useState('');
  const [subScreen, setSubScreen] = useState('');
  const [value, setValue] = useState(0);
  const [items, setItems] = useState();
  const [displayC, setDisplayC] = useState('flex');
  const [txtButton, setTxtButton] = useState('V');
  const scrollRef = useRef()

  function Item(operation, result){
    return (<TouchableOpacity onPress={()=>{
              setScreen(result);
              global.screen = result;
              setValue(0);
              setTxtButton('V');
              setDisplayC('flex');

              }}>
              <Text style={{fontSize: 20, textAlign: 'right', paddingTop: 2, paddingRight: 2, paddingBottom: 3}}>{operation} = {result}</Text>
            </TouchableOpacity>);
  }
  

  return (
    <View style={{flex: 1, justifyContent: 'flex-end', backgroundColor:'lightgrey'}}>
    <View  style={{flex: (0.08 + value), flexDirection: 'column', alignItems: 'center', height: '100%', backgroundColor: 'white' }} >
    <ScrollView ref={scrollRef} onContentSizeChange={() => scrollRef.current.scrollToEnd()} style={{flex: 1, width: '100%', flexDirection: 'column', height: '100%', borderWidth: 1, borderColor: 'grey', backgroundColor: 'white'}} >
      {items}
    </ScrollView>
    <TouchableOpacity onPress={()=>{
      if (value) {
        setValue(0);
        setTxtButton('V');
        setDisplayC('flex');
      }
      else {
        setValue(0.22);
        setTxtButton('Ʌ');
        setDisplayC('none');
      }
    }} style={{
        height: 25,
        width: '17%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor:'lightgrey',
        borderWidth: 1,
        borderColor: 'grey'}}>
    <Text style={{fontSize: 15, fontFamily: 'sans-serif', fontWeight: 'bold', justifyContent: 'center', textAlign: 'center'}}>{txtButton}</Text>
    </TouchableOpacity>
    </View>

    <View style={{flex: (0.22), justifyContent: 'flex-end', backgroundColor: 'white', display: displayC }}>
      <Text style={{fontSize: (() => {
        if (screen.length > 28) {
          return 45*(28 / screen.length);
        }
        else {
          return 45;
        }
      })(), textAlign: 'right', backgroundColor: 'white', paddingBottom: 5}}>
      {screen}
      </Text>
      <Text style={{fontSize: 20, textAlign: 'right', color: 'grey', backgroundColor: 'white', paddingRight: 5}}>
      {subScreen}
      </Text>
      </View>
      <View style={{flex: 0.7, backgroundColor: 'black'}}>
        <View style={{flex: 0.25, flexDirection: 'row', backgroundColor: 'black'}}>
          <TouchableOpacity style={{
            flex: 0.25,
            borderWidth: 1,
            backgroundColor: '#800040',
            justifyContent: 'center',
            borderRadius: 20}} onPress={() => {global.screen = ''; setScreen(global.screen); setSubScreen('')}}>
            <Text style={{justifyContent: 'center',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              fontSize: 45, color: 'white'
              }}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex: 0.25,
            borderWidth: 1,
            backgroundColor: '#800040',
            justifyContent: 'center',
            borderRadius: 20}} onPress={() => {
              if (!(/^-[0-9]$/).test(screen)) {
                global.screen = global.screen.slice(0, -1);
                setScreen(global.screen)
              }
            }
            }><Text style={{
              justifyContent: 'center',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              fontSize: 45, color: 'white'
              }}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex: 0.25,
            borderWidth: 1,
            backgroundColor: 'blue',
            justifyContent: 'center',
            borderRadius: 20}} onPress={() => {
              if ((/[0-9]/).test(screen.slice(-1))) {
                global.screen += '/100';
                global.screen = calculate();
                setScreen(calculate);
                setSubScreen(calculate);
              }
            }}><Text style={{
              justifyContent: 'center',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              fontSize: 40, color: 'magenta'
              }}>%</Text>
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
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('7'); setScreen(global.screen); setSubScreen(calculate());}}><Text style={styles.botones_num_Texts}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('8'); setScreen(global.screen); setSubScreen(calculate());}}><Text style={styles.botones_num_Texts}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('9'); setScreen(global.screen); setSubScreen(calculate());}}><Text style={styles.botones_num_Texts}>9</Text>
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
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('4'); setScreen(global.screen); setSubScreen(calculate());}}><Text style={styles.botones_num_Texts}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('5'); setScreen(global.screen); setSubScreen(calculate());}}><Text style={styles.botones_num_Texts}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('6'); setScreen(global.screen); setSubScreen(calculate());}}><Text style={styles.botones_num_Texts}>6</Text>
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
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('1'); setScreen(global.screen); setSubScreen(calculate());}}><Text style={styles.botones_num_Texts}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('2'); setScreen(global.screen); setSubScreen(calculate());}}><Text style={styles.botones_num_Texts}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('3'); setScreen(global.screen); setSubScreen(calculate());}}><Text style={styles.botones_num_Texts}>3</Text>
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
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('00'); setScreen(global.screen); setSubScreen(calculate());}}><Text style={styles.botones_num_Texts}>00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={() => {numbers('0'); setScreen(global.screen); setSubScreen(calculate());}}><Text style={styles.botones_num_Texts}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={() => {point(); setScreen(global.screen)}}><Text style={styles.botones_num_Texts}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex: 0.25,
            borderWidth: 1,
            backgroundColor: 'green',
            justifyContent: 'center',
              borderRadius: 20}} onPress={() => {
                if (global.screen.length > 0) {
                  if (global.screen == "161180+131282") {
                    global.screen = "";
                    setScreen(global.screen);
                    navigation.navigate('Vero + July');
                  }
                  else {
                    global.screen = calculate();
                    if (screen != global.screen) {
                      rend.push(Item(screen, global.screen));
                      rend = rend.map((component)=> component);
                      setItems(rend);
                    }
                    setScreen(global.screen);
                    setSubScreen('');
                  }
                }
              }}><Text style={{justifyContent: 'center',
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
