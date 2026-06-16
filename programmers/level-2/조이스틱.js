// 그리디
function solution(name) {
    var answer = 0;
    const input = new Array(name.length).fill('A');

    // 조이스틱을 상하 움직이는 횟수 계산 O(N)
    for (let i=0; i<input.length; i++) {
        const diff = name[i].charCodeAt(0) - input[i].charCodeAt(0);
        if (diff > 13) {
            answer += (26 - diff);
        } else {
            answer += diff;
        }
    }
    
    // 조이스틱을 좌우 움직이는 횟수 계산
    let minMove = input.length - 1; // 우선 커서를 반대로 유턴하지 않고 그대로 직진하는 경우 최소 이동 횟수로 설정
    
    for (let i=0; i<input.length; i++) {
        // 다음 인덱스가 'A'가 아닐때 까지 탐색
        let nextIdx = i+1;
        while (nextIdx < input.length && name[nextIdx] === 'A') {
            nextIdx++;
        }
        
        // 현재 위치 i에서 다음 위치 nextIdx까지 0에서 시작해서 현재 위치 i를 찍고 유턴해서 nextIdx를 찍는 경우 이동 횟수
        const leftUTurn = i * 2 + (input.length - nextIdx);
        // 현재 위치 i에서 다음 위치 nextIdx까지 마지막 인덱스에서 시작해서 nextIdx를 찍고 유턴해서 i를 찍는 경우 이동 횟수
        const rightUTurn = (input.length - nextIdx) * 2 + i;
        
        // 이 세 가지 방법 중 가장 덜 이동하는 경우를 minMove로 갱신
        minMove = Math.min(minMove, leftUTurn, rightUTurn)
    }

    // 조이스틱을 상하 움직이는 횟수와 좌우 움직이는 횟수를 더하여 반환
    return answer + minMove;
}