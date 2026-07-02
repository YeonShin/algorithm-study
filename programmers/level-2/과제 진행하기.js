// 구현&스택
function solution(plans) {
    var answer = [];
    
    // 데이터 전처리: 시작 시간을 '분(Minute)' 단위로 변환 및 정수화
    let parsePlans = [];
    
    for (const plan of plans) {
        const newPlan = plan.map((item, index) => {
            if (index === 1) {
                const split = item.split(":");
                
                const hour = parseInt(split[0], 10) * 60;
                const min = parseInt(split[1], 10);
                
                return hour + min
            }
            
            if (index === 2) {
                return parseInt(plan[2])
            }
            return item
        })
        
        parsePlans.push(newPlan)
    }
    
    // 시작 시간 기준 오름차순 정렬
    parsePlans.sort((a, b) => {
        return a[1] - b[1]
    })
    
    // 중단된 과제들을 보관하는 스택
    let stack = []
    
    let currentTask = null; // 현재 진행 중인 과제
    let currentTime = 0; // 시뮬레이션 상의 현재 시각
    
    
    for (const plan of parsePlans) {
        // 첫 과제 시작 세팅
        if (currentTask === null) {
            currentTask = plan
            currentTime = currentTask[1];
            continue;
        }
        
        const nextStart = plan[1];
        // 다음 과제 시작 전까지 쓸 수 있는 여유 시간
        let restTime = nextStart - currentTime
        
        // 다음 과제 시작 전까지 현재 과제를 끝낼 수 없는 경우
        if (restTime < currentTask[2]) {
            currentTask[2] -= restTime; // 진행한 만큼 소요 시간 차감
            stack.push(currentTask) // 대기 스택으로 이동
            
            currentTask = plan; // 새 과제 시작
            currentTime = nextStart;
        } else {
            // 다음 과제 시작 전에 현재 과제를 끝낼 수 있는 경우
            currentTime += currentTask[2];
            restTime -= currentTask[2];
            answer.push(currentTask[0]) // 과제 완료 처리
            currentTask = null;
            
            // 멈춘 과제 꺼내서 남은 여유 시간 동안 수행
            while (stack.length > 0) {
                currentTask = stack.pop();
                
                if (currentTask[2] <= restTime) {
                    currentTime += currentTask[2];
                    restTime -= currentTask[2];
                    answer.push(currentTask[0]);
                    currentTask = null;
                } else {
                    // 대기 과제를 하다가 새 과제 시간이 된 경우
                    currentTime += restTime;
                    currentTask[2] -= restTime; 
                    stack.push(currentTask);
                    currentTask = null;
                    
                    break;
                }
            }
            
            // 대기열 정리가 끝나면 새 과제 시작
            currentTask = plan;
            currentTime = nextStart;
        }
    }
    
    // 더 이상 새로 시작할 과제가 없을 때 남은 작업 처리
    if (currentTask) {
        answer.push(currentTask[0]);
    }
    
    // 가장 최근에 중단된 과제부터 순서대로 완료
    while (stack.length > 0) {
        answer.push(stack.pop()[0])
    }
    
    return answer;
}