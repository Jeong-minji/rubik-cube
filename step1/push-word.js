const answer = document.querySelector(".answer");

let user_input = prompt("입력: ");
let input_arr = user_input.split(" ");

let word = input_arr[0];                                        // 입력받은 값 배열의 0번째는 단어, 2번째는 방향
let direction = input_arr[2];
let calc =  Math.abs(input_arr[1]) % word.length;               // 입력받은 숫자의 절댓값을 단어의 길이만큼 나눈 나머지만큼 미는 규칙
let count;

if(input_arr[1] < 0) {                                          // count값이 음수이면 글자수에서 밀어야 하는 숫자만큼을 빼야함
    count =  word.length - calc;
} else {
    count = calc;
}

const DirectionL = (word, count) => {                          
    let slice_word = word.substr(0, count);                     // 왼쪽으로 밀 때는 단어의 앞부터 count만큼 잘라서 
    word = word.replace(slice_word, "");
    let new_word = word + slice_word;                           // 단어의 뒤에 붙여야 함

    return new_word;
}

const DirectionR = (word, count) => {
    let slice_word = word.substr(word.length-count,count);      // 오른쪽으로 밀 때는 단어의 뒤부터 count만큼 잘라서
    word = word.replace(slice_word, "");
    let new_word = slice_word + word;                           // 단어의 앞에 붙어야 함

    return new_word;
}

if(direction == 'L' || direction == 'l') {
    answer.innerHTML = DirectionL(word, count);
} else if(direction == 'R' || direction == 'r') {
    answer.innerHTML = DirectionR(word, count);
}