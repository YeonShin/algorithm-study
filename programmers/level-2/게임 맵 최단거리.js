// BFS
function solution(maps) {
    var answer = 0;
    
    const m = maps.length; // 행 개수
    const n = maps[0].length; // 열 개수
    
    const visited = Array.from({length: m}, () => Array.from({length: n}, () => false));
    
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];
    
    function bfs(startRow, startCol) {
        const queue = [[startRow, startCol, 1]];
        visited[startRow][startCol] = true;
        
        while (queue.length > 0) {
            const [row, col, dist] = queue.shift();
            
            // 목적지에 도달했다면
            if (row === m - 1 && col === n - 1) {
                return dist;
            }
            
            for (let i=0; i<4; i++) {
                const nr = row + dr[i];
                const nc = col + dc[i];
                
                // maps를 벗어나지 않고
                if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
		                // 이동 가능한 길(1)이며 아직 미방문인 경우
                    if (maps[nr][nc] === 1 && !visited[nr][nc]) {
                        visited[nr][nc] = true;
                        queue.push([nr, nc, dist + 1])
                    }
                }
            }
        }
        
        return -1
    }
    
    answer = bfs(0, 0)
    
    return answer;
}


// 최적화된 코드
function solution(maps) {
    const m = maps.length;    // 행 개수
    const n = maps[0].length; // 열 개수
    
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];
    
    function bfs(startRow, startCol) {
        const queue = [[startRow, startCol, 1]];
        visited[startRow][startCol] = true;
        
        let head = 0; // shift()의 O(K) 오버헤드를 방지하기 위한 포인터
        
        while (head < queue.length) {
            const [row, col, dist] = queue[head++];
            
            // 목적지에 도달했다면
            if (row === m - 1 && col === n - 1) {
                return dist;
            }
            
            for (let i = 0; i < 4; i++) {
                const nr = row + dr[i];
                const nc = col + dc[i];
                
                // maps를 벗어나지 않고
                if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
                    // 이동 가능한 길(1)이며 아직 미방문인 경우
                    if (maps[nr][nc] === 1 && !visited[nr][nc]) {
                        visited[nr][nc] = true;
                        queue.push([nr, nc, dist + 1]);
                    }
                }
            }
        }
        
        return -1;
    }
    
    return bfs(0, 0);
}