# rubik-cube

Submit code for Codesquad test

## Step1. 단어 밀어내기

### [동작 방법]

1. 단어, 정수(-100 <= N <= 100), L/R 을 prompt로 입력받음
   -> 입력받은 문자열을 배열에 저장

2. 숫자별 밀어내는 규칙
   (1) 양수: 숫자의 절댓값 % 단어의 길이 만큼 해당 방향으로 밀어냄 _ count
   (2) 음수: 단어의 길이 - (숫자의 절댓값 % 단어의 길이) 만큼 해당 방향으로 밀어냄 _ word.length - count

3. 방향별 밀어내는 규칙
   (1) 왼쪽: 단어의 앞에서 count 만큼 잘라내어, 단어의 뒤에 붙임 _ DirectionL(word, count)
   (2) 오른쪽: 단어의 뒤에서 count 만큼 잘라내어, 단어의 앞에 붙임 _ DirectionR(word, count)

4. 'L'이나 'l'이 입력되면 DirectionL(), 'R'이나 'r'이 입력되면 DirectionR() 호출
