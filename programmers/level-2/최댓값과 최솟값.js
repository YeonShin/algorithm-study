function solution(s) {
    var answer = '';
    const numbers = s.split(" ");
    
    return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
}