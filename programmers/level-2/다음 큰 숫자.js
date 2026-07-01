// 구현
function solution(n) {
    var answer = 0;
    // 20자리 고정 길이의 2진수 배열로 변환
    let binaryN = n.toString(2).padStart(20, '0').split('');
    
    let count = 0;
    
     // 오른쪽(낮은 자릿수)부터 역순으로 탐색
    for (let i=binaryN.length - 1; i >= 0; i--) {
        // 기존 1을 지우고 갯수를 누적
        if (binaryN[i] === '1') {
            count++;
            binaryN[i] = '0';
            continue;
        }
        
        // 처음 만나는 0을 1로 올려서 숫자를 키움
        if (count > 0 && binaryN[i] === '0') {
            binaryN[i] = '1';
            count--;
            break;
        }
    }
    
    // 남은 1들을 가장 오른쪽 끝부터 채움 (가장 작은 수 만들기)
    for (let i=0; i<count; i++) {
        const end = binaryN.length - 1;
        
        binaryN[end - i] = '1';
    }
    
    // 배열을 문자열로 합친 뒤 10진수 정수로 복원
    answer = parseInt(binaryN.join(''), 2)
    return answer;
}