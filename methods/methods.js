
export function calculate(stateSet){
  if (global.screen == "161180+131282") {
    global.screen = "";
    stateSet(global.screen);
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
    p.then((value)=>stateSet(value));

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


export function C(stateSet){
  global.screen ='';
  stateSet(global.screen);
}

export function openParenthesis(stateSet) {
  if (!checkLast(global.screen,['0','1','2','3','4','5','6','7','8','9',')','.'])){
    global.screen += '(';
    stateSet(global.screen);
  }
}

export function closeParenthesis(stateSet) {
  if (!checkLast(global.screen,['x','÷','+','-','(','.']) & (global.screen != '') & parNotClosed(global.screen)){
    global.screen += ')';
    stateSet(global.screen);
  } 
} 

export function operators(oper, stateSet) { 
  if (!checkLast(global.screen,['x','÷','+','-','(','.']) & (global.screen != '')){
    global.screen += oper;
    stateSet(global.screen);
  }
  else if (checkLast(global.screen,['x','÷','+','-'])) {
    global.screen =  global.screen.slice(0, -1) + oper;
    stateSet(global.screen);

  }
}

export function numbers(num, stateSet) {
  let size = global.screen.length;
  if (size > 0) {
    
    let last = global.screen[size -1];
    
    if (size == 1){
      if (last != '0') {
        global.screen += num;
        stateSet(global.screen);
      }
    }
    if (size > 1) {
      let lasttwo = global.screen.slice(size - 2);

      if (!check(last,[')']) & !check(lasttwo,['+0','-0','÷0','x0'])){
        global.screen+=num;
        stateSet(global.screen);
      }
    }
  }
  else {
    if (num != '00') {
      global.screen += num;
      stateSet(global.screen);
    }
  }
}

export function point(stateSet) {
  let size = global.screen.length;
  if (size > 0) {
    let last = global.screen[size -1];
    if (size == 1) {
      if (!check(last,['+','-','÷','x','(',')','.'])) {
        global.screen += '.';
        stateSet(global.screen);
      }
    }
    if (size > 1) {
      if (!isPrevPoint(global.screen) & !check(last,['+','-','÷','x','(',')'])) {
        global.screen += '.';
        stateSet(global.screen);
      }
    }
  }
}
