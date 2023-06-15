/* 
<문제 설명>
정수 num1과 num2가 매개변수로 주어집니다.
두 수가 같으면 1 다르면 -1을 return 하도록 solution 함수를 완성해주세요.

<제한사항>
0 <= num1 <= 10000
0 <= num2 <= 10000
*/

function solution(num1, num2) {
    if(num1 === num2) return 1;
    else return -1;
}

console.log(solution(2,3));
console.log(solution(11,11));
console.log(solution(7,99));

// 다른 사람 풀이

function solution(num1, num2) {
    var answer = num1 === num2 ? 1 : -1;
    return answer;
}

function solution(num1, num2) {
    return ((num1 == num2)-0.5)*2;
}
