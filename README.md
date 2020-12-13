Submit code for Codesquad Test

## Step1. 단어 밀어내기

### [동작방법]

1. 단어, 정수(-100 <= N <= 100), L/R 을 prompt로 입력받음
   → 입력받은 문자열을 배열에 저장
2. 숫자별 밀어내는 규칙
   - 양수: 숫자의 절댓값 % 단어의 길이 만큼 해당 방향으로 밀어냄 \_ count
   - 음수: 단어의 길이 - (숫자의 절댓값 % 단어의 길이) 만큼 해당 방향으로 밀어냄 \_ word.length - count
3. 방향별 밀어내는 규칙
   - 왼쪽: 단어의 앞에서 count 만큼 잘라내어, 단어의 뒤에 붙임 \_ DirectionL(word, count)
   - 오른쪽: 단어의 뒤에서 count 만큼 잘라내어, 단어의 앞에 붙임 \_ DirectionR(word, count)
4. 'L'이나 'l'이 입력되면 DirectionL(), 'R'이나 'r'이 입력되면 DirectionR() 호출

## Step2. 평면 큐브

### [동작방법]

1. showResult(array) 함수
   - 3x3 배열을 이중 for문으로 출력하고, 3개씩 출력할 때마다 <br>을 삽입해 줄바꿈
   - document.createElement로 div를 생성하고 answer에 저장된 출력값을 append하여, HTML에 추가
2. topLeft(), bottomLeft(), topRight(), bottomRight(), leftUp(), leftDown(), rightUp(), rightDown()
   - 밀려나서 배열의 앞/뒤에 붙을 숫자는 temp에 저장했다가 마지막에 적절한 index에 삽입
   - 나머지는 for문을 통해 index를 늘리거나 줄여가며 한 칸씩 이동
3. 맨 처음에 showResult(array)를 호출하여, 기본값을 출력
4. pattern_char 정규식을 통하여 U, R, L, B, ' 가 아닌 다른 문자는 입력할 수 없도록 검사
5. 사용자가 input을 입력한 뒤, button을 click → js에서 EventListener가 작동
6. EventListener
   - 사용자가 입력한 문자열을 split하여 각 배열에 저장
     → ex) R'를 입력했을 때, R과 " ' "를 따로 인식하여 한 개의 문자로 인식하지 못하는 문제 발생
   - if 문을 이용하여 각 입력값에 맞는 함수를 불러오되, 현재 index의 다음 index 까지 검사하여,
     다음 index의 값이 " ' "인 경우에는 [문자']에 해당하는 함수를 불러옴
   - 함수를 통해 값이 업데이트된 array를 showResult(arr)를 불러와 결과값을 화면에 출력
   - Q값이 입력되면 alert창에 "Bye" 출력한 뒤, break를 통해 for문 탈출
   - input.value="" 를 통해 입력값이 다 실행되고 나면, input 창 초기화
