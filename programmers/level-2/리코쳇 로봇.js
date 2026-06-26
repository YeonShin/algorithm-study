// BFS
function solution(board) {
    let moveCount = 0;
    
    // 시작 위치 파악
    let startIdx = null;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'R') {
                startIdx = [i, j]
            }
        }
    }
    
    
    // 큐에 시작 지점 먼저 삽입
    let queue = new Array();
    let isEscaped = false;
    let visited = Array.from({length: board.length}, () => Array(board[0].length).fill(0))
    
    queue.push(startIdx);
    visited[startIdx[0]][startIdx[1]] = 1;
    
    
    // 큐가 빌때 까지 루프 (더 이상 방문할 곳이 없을 때 까지)
    while (queue.length > 0) {
        const current = queue.shift();
        
        const dy = [-1, 1, 0, 0];
        const dx = [0, 0, -1, 1];
        
        for (let i=0; i<4; i++) {
            let ny = current[0] + dy[i];
            let nx = current[1] + dx[i];
            
            // 상하좌우 이동 시 게임판을 벗어나지않았는지?
            while (ny >= 0 && ny < board.length && nx >= 0 && nx < board[0].length 
                   && (board[ny][nx] !== 'D')) {
                
                ny += dy[i];
                nx += dx[i];
            }
            
            // 장애물 위치, 벽 위치까지 도달했으므로 다시 한칸 뒤로 물리기
            ny -= dy[i];
            nx -= dx[i];
            
            if (ny === current[0] && nx === current[1]) {
                continue;
            }
                
                
            // 이동한 위치가 장애물 아니고 이전에 방문하지 않은 위치라면 방문과 이동거리를 기록하고 큐에 삽입
            if (visited[ny][nx] === 0) {
                visited[ny][nx] = visited[current[0]][current[1]] + 1;
                queue.push([ny, nx])
            }

            // 만약 목표지점에 도착했다면 누적 이동거리 기록하고 루프 탈출
            if (board[ny][nx] === 'G') {
                moveCount += visited[ny][nx] - 1;
                isEscaped = true;
                break;
            }
        }
        
        if (isEscaped) {
	            break;
        }
    }
    
    return isEscaped ? moveCount : -1;
}

// 다른 풀이
function solution(board) {
    let moveCount = 0;
    
    // 시작과 목표지점의 위치 파악
    let startIdx = null;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'R') {
                startIdx = [i, j]
                break;
            }
        }
        if (startIdx) break;
    }
    
    
    // 큐에 시작 지점 먼저 삽입
    let queue = [startIdx];
    let isEscaped = false;
    let visited = Array.from({length: board.length}, () => Array(board[0].length).fill(0))
    visited[startIdx[0]][startIdx[1]] = 1;
    
    let head = 0;
    
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    
    // 큐가 빌때 까지 루프 (head가 큐의 길이와 같아지면 종료)
    while (queue.length > head) {
        const current = queue[head];
        
        head++;
        
        if (board[current[0]][current[1]] === 'G') {
            return visited[current[0]][current[1]] - 1;
        }
        
        for (let i=0; i<4; i++) {
            let ny = current[0];
            let nx = current[1];
            
            // 상하좌우 이동 시 게임판을 벗어나지않았는지?
            while (ny + dy[i] >= 0 && ny + dy[i] < board.length && nx + dx[i] >= 0 && nx + dx[i] < board[0].length 
                   && (board[ny + dy[i]][nx + dx[i]] !== 'D')) {
                
                ny += dy[i];
                nx += dx[i];
            }
                
                
            // 이동한 위치가 장애물 아니고 이전에 방문하지 않은 위치라면 방문과 이동거리를 기록하고 큐에 삽입
            if (visited[ny][nx] === 0) {
                visited[ny][nx] = visited[current[0]][current[1]] + 1;
                queue.push([ny, nx])
            }
        }
    }
    
    return isEscaped ? moveCount : -1;
}