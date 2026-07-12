// 구현
function solution(r1, r2) {
    let answer = 0; // 최종 점의 개수

    let dots = 0 // 1사분면 내, +x축 위의 점의 수 
    
    for (let i = 1; i <= r2; i++) {
        const x = i;
        
        let maxY = 0;
        let minY = 0
        
        maxY = Math.floor(Math.sqrt(r2 * r2 - x*x))
        
        if (x < r1) {
            minY = Math.ceil(Math.sqrt(r1 * r1 - x*x))
        } else {
            minY = 0
        }

        dots += maxY - minY + 1
        
    }
    
    // 총 네 개의 사분면 만큼 곱해서 결과 계산
    answer = answer + dots * 4;
    
    return answer;
}