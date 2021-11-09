import React, {useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, TouchableOpacity, Image } from 'react-native';

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

function realEval (str) {
  let result = 0;
  let auxStr = eval(str).toString();
  
	if (!auxStr.search(/[0-9]*\.[0-9]*0000[1-9]/g)) {
  	result = Number(auxStr.slice(0,-1));
	}
  else if (!auxStr.search(/[0-9]*\.[0-9]*9999[1-9]/g)) {
    auxStr = auxStr.replace(/9*[0-9]$/g, "");
    auxStr = auxStr.slice(0, - 1) + (Number(auxStr.slice(-1)) + 1).toString()
    result = Number(auxStr);
  }
  else {
    result = Number(auxStr);
  }
  
  return result.toString();
}

function checkLast(str,arrayOfSymbols){
  if (str.length > 0){
    for (let i of arrayOfSymbols) {
      if (str[str.length - 1] == i){
        return true;
      };
    }
  }
  return false;
}

function check(str, comparissionArray){
  for (let i of comparissionArray) {
    if (str == i){
      return true;
    };
  }
  return false;
}

function parNotClosed(str){
  return(((str.match(/\(/g) || []).length - (str.match(/\)/g) || []).length)>0)
}

function isPrevPoint (str) {
  let strRev = str.split("").reverse().join("");
  for (let i of strRev) {
    if (check(i,['x','÷','+','-'])){
      break;
    }
    else if (i == '.') {
      return true;
    }
  }
  return false;
}


function C(){
  global.screen ='';
  setScreen(global.screen);
}

function openParenthesis() {
  if (!checkLast(global.screen,['0','1','2','3','4','5','6','7','8','9',')','.'])){
    global.screen += '(';
    setScreen(global.screen);
  }
}

function closeParenthesis() {
  if (!checkLast(global.screen,['x','÷','+','-','(','.']) & (global.screen != '') & parNotClosed(global.screen)){
    global.screen += ')';
    setScreen(global.screen);
  } 
} 

function operators(oper) { 
  if (!checkLast(global.screen,['x','÷','+','-','(','.']) & (global.screen != '')){
    global.screen += oper;
    setScreen(global.screen);
  }
  else if (checkLast(global.screen,['x','÷','+','-'])) {
    global.screen =  global.screen.slice(0, -1) + oper;
    setScreen(global.screen);

  }
}

function numbers(num) {
  let size = global.screen.length;
  if (size > 0) {
    
    let last = global.screen[size -1];
    
    if (size == 1){
      if (last != '0') {
        global.screen += num;
        setScreen(global.screen);
      }
    }
    if (size > 1) {
      let lasttwo = global.screen.slice(size - 2);

      if (!check(last,[')']) & !check(lasttwo,['+0','-0','÷0','x0'])){
        global.screen+=num;
        setScreen(global.screen);
      }
    }
  }
  else {
    if (num != '00') {
      global.screen += num;
      setScreen(global.screen);
    }
  }
}

function point() {
  let size = global.screen.length;
  if (size > 0) {
    let last = global.screen[size -1];
    if (size == 1) {
      if (!check(last,['+','-','÷','x','(',')','.'])) {
        global.screen += '.';
        setScreen(global.screen);
      }
    }
    if (size > 1) {
      if (!isPrevPoint(global.screen) & !check(last,['+','-','÷','x','(',')'])) {
        global.screen += '.';
        setScreen(global.screen);
      }
    }
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
            borderRadius: 20}} onPress={C}>
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
            borderRadius: 20}} onPress={openParenthesis}><Text style={{
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
            borderRadius: 20}} onPress={closeParenthesis}><Text style={{
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
            borderRadius: 20}} onPress={()=>{operators('÷')}}><Text style={{justifyContent: 'center',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              fontSize: 65, color: 'magenta'
              }}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.25, flexDirection: 'row', backgroundColor: 'black'}}>
          <TouchableOpacity style={styles.botones_def} onPress={()=>{numbers('7')}}><Text style={styles.botones_num_Texts}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={()=>{numbers('8')}}><Text style={styles.botones_num_Texts}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={()=>{numbers('9')}}><Text style={styles.botones_num_Texts}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex: 0.25,
            borderWidth: 1,
            backgroundColor: 'blue',
            justifyContent: 'center',
            borderRadius: 20}} onPress={()=>{operators('x')}}><Text style={{justifyContent: 'center',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              fontSize: 40, color: 'magenta'
              }}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.25, flexDirection: 'row', backgroundColor: 'black'}}>
          <TouchableOpacity style={styles.botones_def} onPress={()=>{numbers('4')}}><Text style={styles.botones_num_Texts}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={()=>{numbers('5')}}><Text style={styles.botones_num_Texts}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={()=>{numbers('6')}}><Text style={styles.botones_num_Texts}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex: 0.25,
            borderWidth: 1,
            backgroundColor: 'blue',
            justifyContent: 'center',
            borderRadius: 20}} onPress={()=>{operators('-')}}><Text style={{justifyContent: 'center',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              fontSize: 65, color: 'magenta'
              }}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.25, flexDirection: 'row', backgroundColor: 'black'}}>
          <TouchableOpacity style={styles.botones_def} onPress={()=>{numbers('1')}}><Text style={styles.botones_num_Texts}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={()=>{numbers('2')}}><Text style={styles.botones_num_Texts}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={()=>{numbers('3')}}><Text style={styles.botones_num_Texts}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex: 0.25,
            borderWidth: 1,
            backgroundColor: 'blue',
            justifyContent: 'center',
            borderRadius: 20}} onPress={()=>{operators('+')}}><Text style={{justifyContent: 'center',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              fontSize: 55, color: 'magenta'
              }}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.25, flexDirection: 'row', backgroundColor: 'black'}}>
          <TouchableOpacity style={styles.botones_def} onPress={()=>{numbers('00')}}><Text style={styles.botones_num_Texts}>00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={()=>{numbers('0')}}><Text style={styles.botones_num_Texts}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={point}><Text style={styles.botones_num_Texts}>.</Text>
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
