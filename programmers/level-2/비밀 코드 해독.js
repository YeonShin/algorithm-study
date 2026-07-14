// DFS & Brute Force
function solution(n, q, ans) {
    var answer = 0;
    
    const currentCombination = [];
    
    function makeCombination(start, depth) {
        
        if (depth === 5) {
            if (checkValid(currentCombination, q, ans)) {
                answer++;   
            }
            return;
        }
        
        
        
        for (let i=start; i <= n; i++) {
            currentCombination.push(i);
            makeCombination(i + 1, depth + 1);
            currentCombination.pop();
        }
    }
    
    makeCombination(1, 0);
    
    
    
    return answer;
}

function checkValid(current, q, ans) {
    for (let i=0; i<q.length; i++) {
        const currentQ = q[i];
        const expectedAns = ans[i];
        
        let matchCount = 0;
        for (const num of current) {
            if (currentQ.includes(num)) {
                matchCount++;
            }
        }
        
        if (matchCount !== expectedAns) {
            return false
        }
    }
    return true
}