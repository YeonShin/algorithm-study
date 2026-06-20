// BFS
function solution(maps) {
    var answer = 0;
    let start, lever, exit = [];
    const queue = new Array();
    let visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(0))
    
    for (let i=0; i < maps.length; i++) {
        for (let j=0; j<maps[i].length; j++) {
            if (maps[i][j] === 'S') {
                start = [i, j];
            }
            
            if (maps[i][j] === 'L') {
                lever = [i, j];
            }
            
            if (maps[i][j] === 'E') {
                exit = [i, j];
            }
        }
    }
    
    // 시작지점을 현재 위치로 삼고 큐에 삽입
    let current = start;
    queue.push(current);
    visited[current[0]][current[1]] = 1;
    
    let isTrigger = false; // 레버를 당겼는지 여부
    let isEscaped = false; // 출구로 탈출했는지 여부
    
    
    // 큐에 더 이상 항목이 없을때 까지 즉 더 이상 방문할 칸이 없을때까지 반복
    while (queue.length > 0) {
        current = queue.shift();
        
        // 상하좌우 인덱스 기록
        const up = [current[0] - 1, current[1]];
        const down = [current[0] + 1, current[1]];
        const left = [current[0], current[1] - 1];
        const right = [current[0], current[1] + 1];
        
        // up[0] >= 0: 미로를 벗어나는지 체크
        // maps[up[0]][up[1]] !== 'X' 이동할 수 없는 벽인지 체크
        // visited[up[0]][up[1]] === 0 방문한 적 없는 칸인지 체크
        if (up[0] >= 0 && maps[up[0]][up[1]] !== 'X' && visited[up[0]][up[1]] === 0) {
            visited[up[0]][up[1]] = visited[current[0]][current[1]] + 1; // 현재 칸 이동 시간 + 1 기록
            queue.push(up); // 방문할 칸을 큐에 삽입
            
            // 레버가 당겨지지 않았고, 방문할 위치가 레버가 있는 칸이라면
            if (!isTrigger && up[0] === lever[0] && up[1] === lever[1]) {
                isTrigger = true;
                answer += (visited[up[0]][up[1]] - 1); // Start -> Lever 까지 기록된 이동 시간을 answer에 우선 더해둔다.
                visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(0)) // visited 초기화
                visited[up[0]][up[1]] = 1; // 현재 레버 위치를 visited = 1 기록
                queue.length = 0; // 큐를 비우고 현재 위치를 삽입
                queue.push(up);
                continue;
            }
            
            // 만약 레버가 당겨진 상태에서 출구에 도달했다면
            if (isTrigger && up[0] === exit[0] && up[1] === exit[1]) {
                isEscaped = true;
                answer += (visited[up[0]][up[1]] - 1); // 탈출하면서 이동 시간을 더해준다.
                break;
            }
        }
        
        if (down[0] < maps.length && maps[down[0]][down[1]] !== 'X' && visited[down[0]][down[1]] === 0) {
            visited[down[0]][down[1]] = visited[current[0]][current[1]] + 1;
            queue.push(down)
            
            if (!isTrigger && down[0] === lever[0] && down[1] === lever[1]) {
                isTrigger = true;
                answer += (visited[down[0]][down[1]] - 1);
                visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(0))
                visited[down[0]][down[1]] = 1;
                queue.length = 0;
                queue.push(down);
                continue;
            }
            
            if (isTrigger && down[0] === exit[0] && down[1] === exit[1]) {
                isEscaped = true;
                answer += (visited[down[0]][down[1]] - 1);
                break;
            }
        }
        
        if (left[1] >= 0 && maps[left[0]][left[1]] !== 'X' && visited[left[0]][left[1]] === 0) {
            visited[left[0]][left[1]] = visited[current[0]][current[1]] + 1;
            queue.push(left)
            
            if (!isTrigger && left[0] === lever[0] && left[1] === lever[1]) {
                isTrigger = true;
                answer += (visited[left[0]][left[1]] - 1);
                visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(0))
                visited[left[0]][left[1]] = 1;
                queue.length = 0;
                queue.push(left);
                continue;
            }
            
            if (isTrigger && left[0] === exit[0] && left[1] === exit[1]) {
                isEscaped = true;
                answer += (visited[left[0]][left[1]] - 1);
                break;
            }
        }
        
        if (right[1] < maps[0].length && maps[right[0]][right[1]] !== 'X' && visited[right[0]][right[1]] === 0) {
            visited[right[0]][right[1]] = visited[current[0]][current[1]] + 1;
            queue.push(right)
            
            if (!isTrigger && right[0] === lever[0] && right[1] === lever[1]) {
                isTrigger = true;
                answer += (visited[right[0]][right[1]] - 1);
                visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(0))
                visited[right[0]][right[1]] = 1;
                queue.length = 0;
                queue.push(right);
                continue;
            }
            
            if (isTrigger && right[0] === exit[0] && right[1] === exit[1]) {
                isEscaped = true;
                answer += (visited[right[0]][right[1]] - 1);
                break;
            }
        }
    }

    // 탈출하지 못했다면 -1을 반환 아니라면 answer 반환
    return !isEscaped ? -1 : answer;
}

// 최적화된 코드
function solution(maps) {
    var answer = 0;
    let start, lever, exit = [];
    const queue = new Array();
    let visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(0))
    
    // 시작, 레버, 출구 위치 구하기
    for (let i=0; i < maps.length; i++) {
        for (let j=0; j<maps[i].length; j++) {
            if (maps[i][j] === 'S') {
                start = [i, j];
            }
            
            if (maps[i][j] === 'L') {
                lever = [i, j];
            }
            
            if (maps[i][j] === 'E') {
                exit = [i, j];
            }
        }
    }
    
    
    // 시작 지점 세팅
    queue.push(start);
    visited[start[0]][start[1]] = 1;
    
    let isTrigger = false;
    let isEscaped = false;
    
    // BFS 탐색 (큐가 빌때까지 = 방문 가능한 모든 칸을 다 방문할 때까지)
    while (queue.length > 0) {
        const current = queue.shift();
        
        // 상하좌우 탐색을 위한 방향 벡터
        const dy = [-1, 1, 0, 0];
        const dx = [0, 0, -1, 1];
        
        for (let i=0; i<4; i++) {
            // 다음 위치 계산
            const ny = current[0] + dy[i];
            const nx = current[1] + dx[i];
            
            
            // 경계선 체크
            if (ny >= 0 && ny < maps.length && nx >= 0 && nx < maps[0].length) {
                // 벽인지 체크 및 방문한 칸인지 체크
                if (maps[ny][nx] !== 'X' && visited[ny][nx] === 0) {
                    visited[ny][nx] = visited[current[0]][current[1]] + 1;
                    queue.push([ny, nx]);
                    
                    // 아직 레버를 당기지 않았는데, 다음 칸이 레버 칸이라면
                    if (!isTrigger && ny === lever[0] && nx === lever[1]) {
                        isTrigger = true;
                        answer += (visited[ny][nx] -1); // 현재까지 이동 시간 누적
                        
                        // 방문 배열를 초기화하고 큐를 비우고 레버부터 시작
                        visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(0))
                        visited[ny][nx] = 1;
                        queue.length = 0;
                        queue.push([ny, nx]);
                        break;
                    }
                    
                    // 레버를 당겼는데 다음 칸이 출구라면
                    if (isTrigger && ny === exit[0] && nx === exit[1]) {
                        isEscaped = true;
                        answer += (visited[ny][nx] - 1); // 현재까지 이동 시간 누적
                        break;
                    }
                }
            }
        }
        if (isEscaped) break; // 출구를 찾았다면 while문 완전히 탈출
    }

    return !isEscaped ? -1 : answer;
}