const answer = document.querySelector(".answer");

let user_input = prompt("입력: ");
let input_arr = user_input.split(" ");

let word = input_arr[0];
let direction = input_arr[2];
let count;
let calc =  Math.abs(input_arr[1]) % word.length;

if(input_arr[1] < 0) {
    count =  word.length - calc;
} else {
    count = calc;
}

const DirectionL = (word, count) => {
    let slice_word = word.substr(0, count);
    word = word.replace(slice_word, "");
    let new_word = word + slice_word;

    return new_word;
}

const DirectionR = (word, count) => {
    let slice_word = word.substr(word.length-count,count);
    word = word.replace(slice_word, "");
    let new_word = slice_word + word;

    return new_word;
}

if(direction == 'L' || direction == 'l') {
    answer.innerHTML = DirectionL(word, count);
} else if(direction == 'R' || direction == 'r') {
    answer.innerHTML = DirectionR(word, count);
}