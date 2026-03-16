// 내 코드
function solution(progresses, speeds) {
    let answer = [];
    while (progresses.length > 0) {
        let deployCount = 0;
        let day = 0;
        day = Math.ceil(((100 - progresses[0]) / speeds[0]))
        
        for (let i=0; i < progresses.length; i++) {
            progresses[i] = progresses[i] + speeds[i] * day;
        }
        while (progresses.length > 0) {
            if (progresses[0] >= 100) {
                deployCount++;
                progresses.shift();
                speeds.shift();
            } else {
                break;
            }
        }

        answer.push(deployCount);
    }
    return answer;
}

// 제출 후 최적화한 코드 & 다른 해결 방법
function solution(progresses, speeds) {
	let answer = [];
	let days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
	
	let maxDay = days[0];
	let count = 1;
	
	for (let i = 1; i < days.length; i++) {
		// 기준일보다 빨리 작업이 끝났다면 배포
		if (days[i] <= maxDay) {
			count++;
		} else {
			// 기준일보다 오래걸리면 이전까지 쌓인 기능 배포 후에 기준일을 갱신한다.
			answer.push(count);
			count = 1;
			maxDay = days[i];
		}
	}
	answer.push(count); // 마지막 남은 그룹 추가
	
	return answer;
}