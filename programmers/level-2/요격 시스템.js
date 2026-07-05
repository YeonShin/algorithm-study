// 그리디
function solution(targets) {
    let count = 0;
    // 시작점(s)을 기준으로 오름차순 정렬
    targets.sort((a, b) => a[0] - b[0])
    
    let x = null;
    let y = null;
    
    for (const target of targets) {
        // 첫 시작 세팅 (초기화)
        if (!x && !y) { 
            [x, y] = target;
            continue;
        }
        
        // 다음 폭격 시작 전까지 현재 폭격들과 함께 요격할 수 있는 범위인 경우
        if (y > target[0]) {
            x = target[0];
            y = Math.min(y, target[1])
        } else {
            // 함께 요격이 불가능한 경우 기존 요격 처리 후 새 범위 지정
            [x, y] = target;
            count++;
        }
    }
    
    // 루프가 종료된 후 남아있는 잔여 요격 처리
    count++;
    return count;
}

// 다른 풀이
function solution(targets) {
    let count = 0;
    
    // 끝점(e)을 기준으로 오름차순 정렬
    targets.sort((a, b) => a[1] - b[1]);
    
    // 마지막으로 요격 미사일을 발사한 x 좌표 위치
    let lastShot = -1;
    
    for (const target of targets) {
        const [s, e] = target;
        
        // 최근에 쏜 요격 미사일이 새로운 폭격 미사일의 시작점과 겹치지 않는 경우
        // (s와 lastShot이 같아도 요격할 수 없음)
        if (s >= lastShot) {
            count++;
            lastShot = e; // 현재 미사일의 끝점 직전에 쏜 것으로 갱신
        }
    }
    
    return count;
}