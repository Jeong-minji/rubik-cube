let arr = [['R', 'R', 'W'], ['G', 'C', 'W'], ['G', 'B', 'B']];
const input = document.getElementById("input");
const btn_submit = document.getElementById("btn_submit");
const result = document.getElementById("result");

const showResult = (arr) => {
  let div = document.createElement("div");
  let answer = "";
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      answer += arr[i][j] + " ";
    }
    if(arr[i+1] == "'") {
      continue;
    } else {
      answer += "</br>";
    }
  }
  div.innerHTML = answer;
  result.appendChild(div);
}

const topLeft = () => {
  let temp = arr[0][0];
  for(let i = 0; i < 2; i++) {
    arr[0][i] = arr[0][i+1];
  }
  arr[0][2] = temp;
  return arr;
}

const bottomLeft = () => {
  let temp = arr[2][0];
  for(let i = 0; i < 2; i++) {
    arr[2][i] = arr[2][i+1];
  }
  arr[2][2] = temp;
  return arr;
}

const topRight = () => {
  let temp = arr[0][2]
  for(let i = 2; i >= 1; i--)
    arr[0][i] = arr[0][i-1];
  arr[0][0] = temp;
  return arr;
}

const bottomRight = () => {
  let temp = arr[2][2]
  for(let i = 2; i >= 1; i--)
    arr[2][i] = arr[2][i-1];
  arr[2][0] = temp;
  return arr;
}

const rightUp = () => {
  let temp = arr[0][2];
  for(let i = 0; i < 2; i++) {
      arr[i][2] = arr[i+1][2];
  }
  arr[2][2] = temp;
  return arr;
}

const leftUp = () => {
  let temp = arr[0][0];
  for(let i = 0; i < 2; i++) {
      arr[i][0] = arr[i+1][0];
  }
  arr[2][0] = temp;
  return arr;
}

const rightDown = () => {
  let temp = arr[2][2]
  for(let i = 2; i >= 1; i--)
      arr[i][2] = arr[i-1][2];
  arr[0][2] = temp;
  return arr;
}

const leftDown = () => {
  let temp = arr[2][0]
  for(let i = 2; i >= 1; i--)
      arr[i][0] = arr[i-1][0];
  arr[0][0] = temp;
  return arr;
}

showResult(arr);
let user_arr = "";
let pattern_char = /[URLBQ']/;

btn_submit.addEventListener("click", function() {
  user_arr = (input.value).split("");
  
  for(let i = 0; i < user_arr.length; i++) {
    

    if(!pattern_char.test(user_arr[i])) {
      alert("You can use U, R, L, B, Q");
    }

    if(user_arr[i] == "U") {
      if(user_arr[i + 1] == "'") {
        showResult(user_arr[i]+"'");
        showResult(topRight(arr));
      } else {
        showResult(user_arr[i]);
        showResult(topLeft(arr));
      }
    } else if(user_arr[i] == "R") {
      if(user_arr[i + 1] == "'") {
        showResult(user_arr[i]+"'");
        showResult(rightDown(arr));
      } else {
        showResult(user_arr[i]);
        showResult(rightUp(arr));
      }
    } else if(user_arr[i] == "L") {
      if(user_arr[i + 1] == "'") {
        showResult(user_arr[i]+"'");
        showResult(leftUp(arr));
      } else {
        showResult(user_arr[i]);
        showResult(leftDown(arr));
      }
    } else if(user_arr[i] == "B") {
      if(user_arr[i + 1] == "'") {
        showResult(user_arr[i]+"'");
        showResult(bottomLeft(arr));
      } else {
        showResult(user_arr[i]);
        showResult(bottomRight(arr));
      }
    } else if(user_arr[i] == "Q") {
      alert("Bye~");
      break;
    } 
  }
  input.value = "";
});