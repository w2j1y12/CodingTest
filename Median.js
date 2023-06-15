/*
<문제 설명>
중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 
예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 
정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

<제한사항>
array의 길이는 홀수입니다.
0 < array의 길이 < 100
-1,000 < array의 원소 < 1,000
*/

function solution(array) {
    var newArr = array.sort(function(a,b) {
        return a-b;
    });
    var med = Math.floor(newArr.length/2);
    return newArr[med];
}

console.log(solution([9,-1,0]));

// array를 정렬해야 함
// 숫자(정수) 오름차순 (or 내림차순) 해야하기 때문에 a-b 필요
// 아니면 [1,4,3,10] -> [1,10,3,4] 이렇게 됨
