// 구현
function solution(players, m, k) {
    // 시간대별 서버 운영 상태 및 증설한 서버 수를 담을 배열
    let serverStatus = new Array(players.length).fill(1);
    let serverAdd = new Array(players.length).fill(0);
    
    for (let i = 0; i < players.length; i++) {
        // 만약 해당 시간대 이용자가 현재 시간대 기준 (n + 1) * m명 미만이라면 증설을 하지 않는다.
        if (players[i] < serverStatus[i] * m) {
            continue;
        } else {
            // i~i+1 시간대의 이용자 수를 수용하기 위해 필요한 총 서버의 수를 구한다.
            const requiredServer = Math.floor(players[i] / m) + 1
            serverAdd[i] = requiredServer - serverStatus[i];
            
            let idx = i;
            
            // 증설한 서버는 k시간 동안 운영되어야 한다.
            // 이 때 인덱스를 23~24시를 넘지 않도록 제한
            while (idx < players.length && idx < i+k) {
                serverStatus[idx] += serverAdd[i]; // 현재 운영중인 서버 수에 증설한 서버 수 추가
                idx++;
            }
        }
    }

    // 서버 증설 횟수의 누적 합을 반환
    return serverAdd.reduce((acc, cur) => acc + cur, 0);
}

// 다른 풀이
function solution(players, m, k) {
    let answer = 0;
    let currentSpawnedServers = 0; // 현재 가동 중인 총 증설 서버 수
    // 각 시간대별로 "추가로 증설된 서버 수"를 기록 (크기 24)
    const addedServers = new Array(players.length).fill(0);
    
    for (let i = 0; i < players.length; i++) {
        // k시간 전에 증설되어 현재 시간(i)에 만료되는 서버가 있다면 회수
        if (i >= k) {
            currentSpawnedServers -= addedServers[i - k];
        }
        
        // 현재 이용자 수를 감당하기 위해 필요한 총 증설 서버 수
        const requiredServers = Math.floor(players[i] / m);
        
        // 부족한 만큼 서버를 새로 증설
        if (currentSpawnedServers < requiredServers) {
            const needToBuild = requiredServers - currentSpawnedServers;
            addedServers[i] = needToBuild;    // i번째 시간대에 증설 기록
            currentSpawnedServers += needToBuild; // 현재 가동 수치에 누적
            answer += needToBuild;            // 총 증설 횟수 누적
        }
    }
    
    return answer;
}
