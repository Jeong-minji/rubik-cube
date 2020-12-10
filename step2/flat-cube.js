let arr = [['R', 'R', 'W'], ['G', 'C', 'W'], ['G', 'B', 'B']];
const result = document.querySelector(".result");

const showResult = (arr) => {
  let a = document.createElement("div");
  let answer = "";
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      answer += arr[i][j] + " ";
    }
    answer += "</br>";
  }
  a.innerHTML = answer;
  result.appendChild(a);
}

let user = prompt("CUBE >");
let user_arr = user.split("");

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

const init = () => {
  showResult(arr);

  for(let i = 0; i < user_arr.length; i++) {
    console.log(user_arr[i]);

    if(user_arr[i] == "U") {
      showResult(topLeft(arr));
    } else if(user_arr[i] == "U'") {
      showResult(topRight(arr));
    } else if(user_arr[i] == "R") {
      showResult(rightUp(arr));
    } else if(user_arr[i] == "R'") {
      showResult(rightDown(arr));
    } else if(user_arr[i] == "L") {
      showResult(leftDown(arr));
    } else if(user_arr[i] == "L'") {
      showResult(leftUp(arr));
    } else if(user_arr[i] == "B") {
      showResult(bottomRight(arr));
    } else if(user_arr[i] == "B'") {
      showResult(bottomLeft(arr));
    } else if(user_arr[i] == "Q") {
      console.log("bye~");
      break;
    } else {
      alert("you can't use " + user_arr[i]);
      break;
    }
  }
}

init();