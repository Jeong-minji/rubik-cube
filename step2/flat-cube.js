let arr = [['R', 'R', 'W'], ['G', 'C', 'W'], ['G', 'B', 'B']];
const result = document.querySelector(".result");

const showResult = () => {
  arr.map(x => console.log(x));
  console.log("\n");
}

let user = prompt("CUBE >");

const topLeft = () => {
  let temp = arr[0][0];
  for(let i = 0; i < 2; i++) {
    arr[0][i] = arr[0][i+1];
  }

  arr[0][2] = temp;
  showResult();
}

const bottomLeft = () => {
  let temp = arr[2][0];
  for(let i = 0; i < 2; i++) {
    arr[2][i] = arr[2][i+1];
  }

  arr[2][2] = temp;
  showResult();
}

const topRight = () => {
  let temp = arr[0][2]
  for(let i = 2; i >= 1; i--)
    arr[0][i] = arr[0][i-1];

  arr[0][0] = temp;
  showResult();
}

const bottomRight = () => {
  let temp = arr[2][2]
  for(let i = 2; i >= 1; i--)
    arr[2][i] = arr[2][i-1];

  arr[2][0] = temp;
  showResult();
}

const rightUp = () => {
    let temp = arr[0][2];
    for(let i = 0; i < 2; i++) {
        arr[i][2] = arr[i+1][2];
    }

    arr[2][2] = temp;
    showResult();
}

const leftUp = () => {
    let temp = arr[0][0];
    for(let i = 0; i < 2; i++) {
        arr[i][0] = arr[i+1][0];
    }

    arr[2][0] = temp;
    showResult();
}

const rightDown = () => {
    let temp = arr[2][2]
    for(let i = 2; i >= 1; i--)
        arr[i][2] = arr[i-1][2];

    arr[0][2] = temp;
    showResult();
}

const leftDown = () => {
    let temp = arr[2][0]
    for(let i = 2; i >= 1; i--)
        arr[i][0] = arr[i-1][0];

    arr[0][0] = temp;
    showResult();
}

const init = () => {
  showResult();
  leftDown();
}

init();