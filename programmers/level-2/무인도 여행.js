// DFS/BFS
function solution(maps) {
    var answer = [];
    
    let visited = Array.from({length: maps.length}, () => new Array(maps[0].length).fill(0))
    
    for (let i=0; i<maps.length; i++) {
        for (let j=0; j<maps[0].length; j++) {
            if (maps[i][j] !== 'X' && !visited[i][j]) {
                let total = 0;
                let stack = []
                
                stack.push([i, j])
                
                visited[i][j] = 1
                
                while (stack.length > 0) {
                    const current = stack.pop();

                    const [y, x] = current;
                    
                    total += parseInt(maps[y][x], 10);


                    const dy = [0, 0, 1, -1];
                    const dx = [1, -1, 0 , 0];

                    for (let i=0; i<4; i++) {
                        const ny = y + dy[i];
                        const nx = x + dx[i];

                        // 밖으로 나가지 않거나 이미 방문한 땅이 아니라면 방문
                        if (nx >= 0 && nx < maps[0].length && ny >= 0 && ny < maps.length && maps[ny][nx] !== 'X' && !visited[ny][nx]) {
                            visited[ny][nx] = 1;
                            const next = [ny, nx]
                            stack.push(next);
                        }
                    }
                }
                
                answer.push(total)
            }
        }
    }
    
    answer.sort((a, b) => a - b)
    
    
    if (answer.length === 0) {
        answer.push(-1)
    }

    
    return answer;
}

// 다른 풀이
function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
    const answer = [];

    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maps[i][j] !== 'X' && !visited[i][j]) {
                let totalFood = 0;
                
                const queue = [[i, j]]; 
                visited[i][j] = true;

                while (queue.length > 0) {
                    // pop() 대신 선입선출을 위해 shift() 사용
                    const [y, x] = queue.shift(); 
                    totalFood += Number(maps[y][x]);

                    for (let d = 0; d < 4; d++) {
                        const ny = y + dy[d];
                        const nx = x + dx[d];

                        if (ny >= 0 && ny < rows && nx >= 0 && nx < cols) {
                            if (!visited[ny][nx] && maps[ny][nx] !== 'X') {
                                visited[ny][nx] = true;
                                queue.push([ny, nx]);
                            }
                        }
                    }
                }
                answer.push(totalFood);
            }
        }
    }

    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
