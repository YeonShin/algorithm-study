// DFS/BFS
function solution(numbers, target) {
    var answer = 0;
    let current = 0;
    
    const permutation = (current, depth) => {
        if (numbers.length < depth) return;
        if ((numbers.length === depth) && (current === target)) {
            answer++;
        }
        const number = numbers[depth] === undefined ? 0 : numbers[depth];
        
        permutation(current + number, depth + 1);
        permutation(current - number, depth + 1);

    }
    
    permutation(current, 0);
    
    
    return answer;
}