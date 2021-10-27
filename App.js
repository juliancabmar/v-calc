import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

global.screen = '';


export default function App() {
  
  const [screen, setScreen] = useState('');

function calculate(){
 let p = new Promise((res, rej)=>{
   try {
    global.screen = global.screen.replace(/x/g,'*');
    global.screen = global.screen.replace(/÷/g,'/');
    global.screen = eval(global.screen);
    res(global.screen);
   }
   catch(err){};
 });
  p.then((value)=>setScreen(value));
}


function checkLast(str,arrayOfSymbols){

  for (let i of arrayOfSymbols) {
    if (str[str.length - 1] == i){
      return true;
    };
  }
  return false;
}

function parNotClosed(str){
  return(((str.match(/\(/g) || []).length - (str.match(/\)/g) || []).length)>0)
}


function C(){
  global.screen='';
  setScreen(global.screen);
}

function openParenthesis() {
  if (!checkLast(global.screen,['0','1','2','3','4','5','6','7','8','9',')','.'])){
    global.screen+='(';
    setScreen(global.screen);
  }
}

function closeParenthesis() {
  if (!checkLast(global.screen,['x','÷','+','-','(','.']) & (global.screen != '') & parNotClosed(global.screen)){
    global.screen+=')';
    setScreen(global.screen);
  } } function operators(oper) { if (!checkLast(global.screen,['x','÷','+','-','(','.']) & (global.screen != '')){
    global.screen+=oper;
    setScreen(global.screen);
  }
}

function numbers(num) {
  if (!checkLast(global.screen,[')'])){
    global.screen+=num;
    setScreen(global.screen);
  }
}

function zero() {
  console.log("ENTRO");
    if (!checkLast(global.screen.slice[0,global.screen.length - 1],['x','÷','+','-','(']) & (global.screen[global.screen.length - 1] != '0')){
      console.log(global.screen);
      global.screen+='0';
      setScreen(global.screen);
    }
}

function doubleZero() {
  if (!checkLast(global.screen,['0',')'])){
    global.screen+='00';
    setScreen(global.screen);
  }
}

function point() {
  if (!checkLast(global.screen,['.',')'])){
    global.screen+='.';
    setScreen(global.screen);
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
          <TouchableOpacity style={styles.botones_def} onPress={doubleZero}><Text style={styles.botones_num_Texts}>00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones_def} onPress={()=>{zero()}}><Text style={styles.botones_num_Texts}>0</Text>
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

