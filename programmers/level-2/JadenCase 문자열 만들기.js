function solution(s) {
    var answer = '';
    let split = s.split(" ");
    
    for (let i=0; i<split.length; i++) {
        for (let j=0; j<split[i].length; j++) {
            if (j === 0) {
                answer += split[i][j].toUpperCase();
            }
            else {
                answer += split[i][j].toLowerCase();
            }
        }
        answer += " "
    }
    
    answer = answer.slice(0, -1);
    return answer;
}