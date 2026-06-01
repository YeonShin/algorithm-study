// Sort
function solution(numbers) {
    var answer = '';
    const strNumbers = numbers.map((num) => num.toString()).sort((a, b) => {
        return (b+a) - (a+b)
    });

    strNumbers.forEach((num) => {
        answer += num;
    })

    return Number(answer) !== 0 ? answer : "0";
}
 
// 최적화된 코드
function solution(numbers) {
    var answer = '';
    const strNumbers = numbers.map((num) => num.toString()).sort((a, b) => {
        return (b+a) - (a+b)
    });

    answer = strNumbers.join("")

    return Number(answer) !== 0 ? answer : "0";
}
