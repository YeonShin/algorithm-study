function solution(s) {
    let answer = [];
    
    let zero = 0;
    let transform = 0;
    
    while (s.length > 1) {
        let count = 0;
        for (let i=0; i<s.length; i++) {
            if (s[i] === '0') {
                count++;
            }
        }
        
        zero += count;
        
        s = (s.length - count).toString(2);
        transform++;
    }
    
    answer.push(transform);
    answer.push(zero)
    
    return answer;
}