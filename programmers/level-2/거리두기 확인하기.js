// 완전 탐색
function solution(places) {
    let answer = [];
    
    for (const place of places) {
        let isBreak = false; // 대기실의 거리두기 준수 여부
        
        // 먼저 응시자의 위치를 확인하기
        let participants = []
        
        for (let i=0; i<place.length; i++) {
            for (let j=0; j<place[0].length; j++) {
                if (place[i][j] === 'P') {
                    participants.push([i, j])
                }
            }
        }
        
        // 응시자들 간의 맨헤튼 거리를 측정하고
        // 만약 2 이하인 응시자가 있다면
        // 파티션의 존재를 확인하기
        for (let i=0; i<participants.length; i++) {
            for (let j=i+1; j<participants.length; j++) {
                const dx = Math.abs(participants[j][0] - participants[i][0]);
                const dy = Math.abs(participants[j][1] - participants[i][1]);
                
                
                // 맨헤튼 거리가 1 이하라면 벽과 무관하게 무조건 미준수
                if (dx + dy === 1) {
                    isBreak = true;
                }
                
                // 맨헤튼 거리가 2라면
                if (dx + dy === 2) {
                    const part1Y = participants[i][0];
                    const part1X = participants[i][1];
                    
                    const part2Y = participants[j][0];
                    const part2X = participants[j][1];
                    
                    if (part1Y !== part2Y && part1X !== part2X) {
                        const place1 = place[part1Y][part2X]
                        const place2 = place[part2Y][part1X];
                        
                        if (place1 === 'X' && place2 === 'X') {
                            continue;
                        }
                    }
                    
                    if (part1Y === part2Y) {
                        const place1 = place[part1Y][(part1X + part2X) / 2];
                        
                        if (place1 === 'X') {
                            continue;
                        }
                    }
                    
                    if (part1X === part2X) {
                        const place1 = place[(part1Y + part2Y) / 2][part1X];
                        
                        if (place1 === 'X') {
                            continue;
                        }
                    }
                    isBreak = true;
                }
            }
        }
        if (isBreak) {
            answer.push(0);
            continue;
        }
        
        answer.push(1)
    }
    
    return answer;
}

// 다른 풀이 (BFS)
function solution(places) {
    let answer = [];
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    function checkPlace(place) {
        for (let i=0; i<5; i++) {
            for (let j=0; j<5; j++) {
                if (place[i][j] === 'P') {
                    if (!bfs(i, j, place)) return 0;
                }
            }
        }
        return 1
    }
    
    function bfs(startX, startY, place) {
        let queue = [[startX, startY, 0]];
        let visited = Array.from({ length: 5 }, () => Array(5).fill(false));
        
        visited[startX][startY] = true;
        
        while (queue.length > 0) {
            const [x, y, dist] = queue.shift();
            
            if (dist === 2) continue;
            
            for (let i=0; i<4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5 && !visited[nx][ny]) {
                    if (place[nx][ny] === 'P') {
                        return false;
                    }
                    if (place[nx][ny] === 'O') {
                        visited[nx][ny] = true;
                        queue.push([nx, ny, dist + 1])
                    }
                }
            }
        }
        return true
    }
    
    
    return places.map(place => checkPlace(place));
}