// 누적 합 or 그리디
function solution(book_time) {
    var answer = 0;
    let room = new Map(
        Array.from({length: book_time.length}, (_, index) => [index+1, null])
    ); // 최악의 경우 방의 수는 book_time의 수 만큼 될 것 따라서 예약 건수만큼 방의 크기를 잡아둔다.
    // book_time을 순회하면서 동시에 room을 순회하면 시간 복잡도는 O(N^2)
    // N = 1000 이므로 O(1,000,000) 가능한 시간 소요일 듯.
    
    
    // 문자열 시간을 분 단위 정수로 변환 및 대실 시작 시간을 기준으로 오름차순 정렬
    // 추가로 청소 시간 10분을 퇴실시간에 더해준다.
    book_time = book_time.map((item) => {
        const start = item[0].split(":");
        const end = item[1].split(":");
        
        return [parseInt(start[0]) * 60 + parseInt(start[1]), parseInt(end[0]) * 60 + parseInt(end[1]) + 10]
    }).sort((a, b) => {
        return a[0] - b[0]
    })
    
    
    // book_time을 루프를 돌면서 동시에 room들의 상황도 확인한다.
    for (let i=0; i<book_time.length; i++) {
        for (let j = 1; j<room.size + 1; j++) {
            const currentRoom = room.get(j); // 현재 방의 상황을 얻어오고

            // 빈 방을 새로 개설하여 배정하는 경우
            if (currentRoom === null) {
                room.set(j, book_time[i]);
                answer++;
                break;
            }
            
            // 기존 방의 퇴실 시점(청소 포함) 이후에 입실이 가능해 이어주는 경우
            if (currentRoom !== null && currentRoom[1] <= book_time[i][0]) {
                room.set(j, book_time[i]);
                break;
            }
            
        }
    }
    return answer;
}

// 다른 풀이
function solution(book_time) {
    // 하루 전체 분(Minute)을 커버하는 배열 생성 (24시간 * 60분 + 여유 공간 10분)
    const timeLine = new Array(24 * 60 + 10).fill(0);
    
    book_time.forEach(([start, end]) => {
        const [sH, sM] = start.split(":").map(Number);
        const [eH, eM] = end.split(":").map(Number);
        
        const startTime = sH * 60 + sM;
        const endTime = eH * 60 + eM + 10; // 청소 시간 포함
        
        timeLine[startTime] += 1; // 입실 시점
        timeLine[endTime] -= 1;   // 퇴실(+청소완료) 시점
    });
    
    let maxRooms = 0;
    let currentRooms = 0;
    
    // 누적합을 구하며 동시에 최댓값 갱신
    // timeline을 돌면서 현재 누적합이 곧 현재 시간대에 필요한 방의 숫자가 될 것
    // 이 방의 숫자가 가장 큰 시점이 곧 maxRooms
    for (let i = 0; i < timeLine.length; i++) {
        currentRooms += timeLine[i];
        if (currentRooms > maxRooms) {
            maxRooms = currentRooms;
        }
    }
    
    return maxRooms;
}