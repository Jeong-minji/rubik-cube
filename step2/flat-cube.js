let arr = [['R', 'R', 'W'], ['G', 'C', 'W'], ['G', 'B', 'B']];
const input = document.getElementById("input");
const btn_submit = document.getElementById("btn_submit");
const result = document.getElementById("result");

const showResult = (arr) => {                           // 각 함수를 실행하고 난 뒤의 결과값을 보여주는 함수
  let div = document.createElement("div");              // 결과값을 나타낼 div를 생성하여 결과값을 append
  let answer = "";
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      answer += arr[i][j] + " ";
    }
    if(arr[i+1] == "'") {                               // "'" 기호가 오면 줄바꿈 하지 않고 붙여씀
      continue;
    } else {
      answer += "</br>";                                // 3글자씩 출력하고 줄바꿈
    }
  }
  div.innerHTML = answer;
  result.appendChild(div);
}

const topLeft = () => {                                 // 각 기호에 맞는 함수 생성
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

showResult(arr);                                              // 맨 처음에 기본값 출력

let pattern_char = /[URLBQ']/;                                // U,R,L,B,Q,' 외의 다른 값은 입력하지 못하도록 하기 위한 정규식

btn_submit.addEventListener("click", function() {             // input에 값을 입력하고 submit 버튼을 click 했을 때 실행할 함수
  user_arr = (input.value).split("");
  
  for(let i = 0; i < user_arr.length; i++) {                  
    if(!pattern_char.test(user_arr[i])) {                     // 정규식에서 허용한 문자가 아닐 경우, 경고창
      alert("You can use U, R, L, B, Q");
    }

    if(user_arr[i] == "U") {                                  // 입력값을 입력했을 때
      if(user_arr[i + 1] == "'") {                            // 다음 입력값이 "'" 이면 U'에 맞는 함수 불러오기
        showResult(user_arr[i]+"'");
        showResult(topRight(arr));
      } else {                                                // 아니면 U에 맞는 함수 불러오기
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
    } else if(user_arr[i] == "Q") {                           // Q를 입력하면 "Bye" 알림을 띄우고 
      alert("Bye~");                                          // for문 종료
      break;
    } 
  }
  input.value = "";                                          // 모든 출력이 끝난 뒤, input을 비워줌
});