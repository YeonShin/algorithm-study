// 내 코드
function solution(clothes) {
    var answer = 0;
    const newMap = new Map();
    
    for (const element of clothes) {
        if (newMap.has(element[1])) {
            let arr = newMap.get(element[1]);
            arr.push(element[0])
            newMap.set(element[1], arr)
        } else {
            newMap.set(element[1], [element[0]])
        }
    }
    
    newMap.forEach((value, key) => {
        if (answer > 0) {
            answer *= value.length + 1;
        } else {
            answer += value.length + 1
        }
    })
    
    answer -= 1
    
    return answer;
}

// 최적화된 코드
function solution(clothes) {
    let answer = 1;
    const newMap = new Map();
    
    for (const element of clothes) {
        if (newMap.has(element[1])) {
            let arr = newMap.get(element[1]);
            arr.push(element[0])
            newMap.set(element[1], arr)
        } else {
            newMap.set(element[1], [element[0]])
        }
    }
    
    newMap.forEach((value, key) => {
        answer *= value.length + 1;
    })
    
    return answer - 1;
}