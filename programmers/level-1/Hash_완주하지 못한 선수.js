/* 내 코드 */
function solution(participant, completion) {
    let answer = ''
    const newMap = new Map();
    
    participant.forEach((part) => {
        if (!newMap.get(part)) {
            newMap.set(part, 1)
        } else {
            newMap.set(part, newMap.get(part) + 1)
        }
    })
    
    completion.forEach((comp) => {
        if (newMap.get(comp)) {
            newMap.set(comp, newMap.get(comp) - 1)
        }
    })
    
    participant.forEach((part) => {
        if (newMap.get(part) ) {
            answer = part;
            return ;
        }
    })
    
    return answer;
}

/* 최적화된 코드 */
function solution(participant, completion) {
    let answer = ''
    const newMap = new Map();
    
    participant.forEach((part) => {
        if (!newMap.get(part)) {
            newMap.set(part, 1)
        } else {
            newMap.set(part, newMap.get(part) + 1)
        }
    })
    
    completion.forEach((comp) => {
        if (newMap.get(comp)) {
            newMap.set(comp, newMap.get(comp) - 1)
        }
    })
    
    participant.some((part) => {
        if (newMap.get(part) > 0) {
            answer = part;
            return true;
        }
        return false;
    })
    
    return answer;
}