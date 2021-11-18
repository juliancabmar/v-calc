
export function calculate() {
  let res = '';
  try {
    res = global.screen.replace(/x/g,'*');
    res = res.replace(/÷/g,'/');
    return realEval(res);
  }
  catch (err){
    return global.screen;
  }
}



export function realEval (str) {
  if (str.length > 0) {
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


export function openParenthesis() {
  if (!checkLast(global.screen,['0','1','2','3','4','5','6','7','8','9',')','.'])){
    global.screen += '(';
  }
}

export function closeParenthesis() {
  if (!checkLast(global.screen,['x','÷','+','-','(','.']) & (global.screen != '') & parNotClosed(global.screen)){
    global.screen += ')';
  } 
} 

export function operators(oper) { 
  if (!checkLast(global.screen,['x','÷','+','-','(','.']) & (global.screen != '')){
    global.screen += oper;
  }
  else if (checkLast(global.screen,['x','÷','+','-'])) {
    global.screen =  global.screen.slice(0, -1) + oper;
  }
}

export function numbers(num) {
  let size = global.screen.length;
  if (size > 0) {
    
    let last = global.screen[size -1];
    
    if (size == 1){
      if (last != '0') {
        global.screen += num;
      }
    }
    if (size > 1) {
      let lasttwo = global.screen.slice(size - 2);

      if (!check(last,[')']) & !check(lasttwo,['+0','-0','÷0','x0','(0'])){
        if (num == '00') { 
          if (!check(last,['(','+','-','*','÷'])) {
            global.screen+=num;
          }
        }
        else {
          global.screen+=num;
        }
      }
    }
  }

  else {
    if (num != '00') {
      global.screen += num;
    }
  }
}


export function point() {
  let size = global.screen.length;
  if (size > 0) {
    let last = global.screen[size -1];
    if (size == 1) {
      if (!check(last,['+','-','÷','x','(',')','.'])) {
        global.screen += '.';
      }
    }
    if (size > 1) {
      if (!isPrevPoint(global.screen) & !check(last,['+','-','÷','x','(',')'])) {
        global.screen += '.';
      }
    }
  }
}

