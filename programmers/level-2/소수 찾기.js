// 완전 탐색 (DFS)
function isPrime(number) {
    if (number <= 1) return false;
    
    for (let i = 2; i<=Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    var answer = 0;
    const set = new Set(); // 만들 수 있는 숫자 조합을 저장할 Set 집합 (중복을 허용 X)
    const arr = numbers.split("") // 숫자의 각 자리를 분해하여 배열로 변환
    const visited = new Array(arr.length).fill(false);
    
    const permutation = (current, depth) => {
        if (depth > 0) set.add(parseInt(current));
        if (depth === arr.length) return;
        
        for (let i=0; i < arr.length; i++) {
            if (visited[i] === false) {
                visited[i] = true;
                permutation(current + arr[i], depth + 1);
                visited[i] = false;
            }
            
        }
    }
    
    permutation("", 0);
    
    set.forEach((num) => {
        if (isPrime(num)) {
            answer++;
        }
    })
    return answer;
}


// 최적화된 코드
function isPrime(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false; // 짝수인 경우 제외
    
    for (let i = 3; i<=Math.sqrt(number); i+=2) {
        if (number % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    var answer = 0;
    const set = new Set(); // 만들 수 있는 숫자 조합을 저장할 Set 집합 (중복을 허용 X)
    const arr = numbers.split("") // 숫자의 각 자리를 분해하여 배열로 변환
    const visited = new Array(arr.length).fill(false);
    
    const permutation = (current, depth) => {
        if (depth > 0) set.add(parseInt(current));
        if (depth === arr.length) return;
        
        for (let i=0; i < arr.length; i++) {
            if (visited[i] === false) {
                visited[i] = true;
                permutation(current + arr[i], depth + 1);
                visited[i] = false;
            }
            
        }
    }
    
    permutation("", 0);
    
    set.forEach((num) => {
        if (isPrime(num)) {
            answer++;
        }
    })
    return answer;
}