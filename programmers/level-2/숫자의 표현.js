function solution(n) {
    var answer = 0;
    
    const numbers = new Array(n);
    
    for (let i=0; i < numbers.length; i++) {
        numbers[i] = i+1;
    }
    
    const prefix = new Array(numbers.length + 1).fill(0);
    
    for (let i = 1; i<numbers.length + 1; i++) {
        prefix[i] = prefix[i - 1] + i;
    }
    
    let start = 0;
    let end = 0;
    
    while (end < numbers.length) {
        if (prefix[end + 1] - prefix[start] === n) {
            answer++;
            end++;
        } else if (prefix[end + 1] - prefix[start] > n) {
            start++;
        } else if (prefix[end + 1] - prefix[start] < n) {
            end++;
        }
    }
    
    return answer;
}