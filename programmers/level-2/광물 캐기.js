// 그리디 & 정렬
function solution(picks, minerals) {
    var answer = 0;
    
    // 곡괭이의 효율을 나타냄 pick[선택한 곡괭이][캘 광석]
    const pick = [[1, 1, 1], [5, 1, 1], [25, 5, 1]];
    
    const totalPicks = picks.reduce((acc, cur) => acc + cur, 0);
    minerals = minerals.slice(0, totalPicks * 5);
    
    const chunks = new Array();
    let chunk = new Array(3).fill(0) // [diaCount, ironCount, stoneCount]
    for (let i=0; i<minerals.length; i++) {
        
        if (minerals[i] === 'diamond') chunk[0]++;
        else if (minerals[i] === 'iron') chunk[1]++;
        else if (minerals[i] === 'stone') chunk[2]++

        // 5개를 모두 채웠다면 묶음 배열에 푸시하고 초기화
        if (i % 5 === 4) {
            chunks.push(chunk);
            chunk = [0, 0, 0];
        }
    }
    
    // 5개 단위로 떨어지지 않고 남은 자투리 광물 묶음 처리
    if (chunk.reduce((acc, cur) => acc + cur, 0) !== 0) {
        chunks.push(chunk);
    }
    
    
    
    chunks.sort((a, b) => {
        const [diaA, ironA, stoneA] = a;
        const [diaB, ironB, stoneB] = b;
        
        if (diaA !== diaB) return diaB - diaA
        
        if (ironA !== ironB) return ironB - ironA
        
        if (stoneA !== stoneB) return stoneB - stoneA;
    })
    
    
    for (const chunk of chunks) {
        let pickIndex = -1;
        
        // 이번 청크에 사용할 곡괭이 결정
        if (picks[0] > 0) pickIndex = 0;
        else if (picks[1] > 0) pickIndex = 1;
        else if (picks[2] > 0) pickIndex = 2;
        else break;
        
        // 결정된 곡괭이로 해당 청크 피로도 누적 계산
        for (let i = 0; i < chunk.length; i++) {
            answer += pick[pickIndex][i] * chunk[i];
        }
        
        // 사용한 곡괭이 개수 차감
        picks[pickIndex] -= 1;
    }
    

    return answer;
}

// DFS
function solution(picks, minerals) {
    let minFatigue = Infinity;
    
    const pickFatigue = [
        [1, 1, 1],   // 다이아 곡괭이
        [5, 1, 1],   // 철 곡괭이
        [25, 5, 1]   // 돌 곡괭이
    ];
    
    // minerals를 숫자로 미리 변환해두어 조회를 빠르게 만든다. (dia: 0, iron: 1, stone: 2)
    const convertedMinerals = minerals.map(m => {
        if (m === 'diamond') return 0;
        if (m === 'iron') return 1;
        return 2;
    });

    // dfs(현재 캘 광물의 시작 인덱스, 현재까지 누적 피로도, 잔여 곡괭이 배열)
    function dfs(idx, fatigue, currentPicks) {
        // [종료 조건 1] 모든 광물을 다 캤거나
        // [종료 조건 2] 사용할 수 있는 곡괭이를 모두 다 썼을 때
        const hasNoPicks = currentPicks.every(p => p === 0);
        if (idx >= convertedMinerals.length || hasNoPicks) {
            minFatigue = Math.min(minFatigue, fatigue);
            return;
        }

        // 현재 캘 광물 묶음 분리 (최대 5개)
        const currentChunk = convertedMinerals.slice(idx, idx + 5);

        // 3종류의 곡괭이를 하나씩 써보기
        for (let i = 0; i < 3; i++) {
            if (currentPicks[i] > 0) {
                // 이번 곡괭이를 선택하여 발생하는 피로도 계산
                let chunkFatigue = 0;
                currentChunk.forEach(m => {
                    chunkFatigue += pickFatigue[i][m];
                });

                // 사용한 곡괭이 개수 차감
                const nextPicks = [...currentPicks];
                nextPicks[i]--;

                // 다음 5개 묶음으로 재귀 호출
                dfs(idx + 5, fatigue + chunkFatigue, nextPicks);
            }
        }
    }

    dfs(0, 0, picks);
    return minFatigue;
}

// DP
function solution(picks, minerals) {
    const pickFatigue = [
        [1, 1, 1],   // 다이아
        [5, 1, 1],   // 철
        [25, 5, 1]   // 돌
    ];
    
    const convertedMinerals = minerals.map(m => {
        if (m === 'diamond') return 0;
        if (m === 'iron') return 1;
        return 2;
    });

    // 중복 탐색을 막기 위한 메모이제이션 Map 객체
    const memo = new Map();

    function dp(idx, d, i, s) {
        // [종료 조건] 광물을 다 캤거나 곡괭이가 고갈되었을 때
        if (idx >= convertedMinerals.length || (d === 0 && i === 0 && s === 0)) {
            return 0;
        }

        // 현재 상태를 유일한 key 문자열로 생성
        const key = `${idx},${d},${i},${s}`;
        if (memo.has(key)) return memo.get(key);

        const currentChunk = convertedMinerals.slice(idx, idx + 5);
        let minCost = Infinity;

        // 1. 다이아 곡괭이 사용
        if (d > 0) {
            let cost = currentChunk.reduce((acc, m) => acc + pickFatigue[0][m], 0);
            minCost = Math.min(minCost, cost + dp(idx + 5, d - 1, i, s));
        }

        // 2. 철 곡괭이 사용
        if (i > 0) {
            let cost = currentChunk.reduce((acc, m) => acc + pickFatigue[1][m], 0);
            minCost = Math.min(minCost, cost + dp(idx + 5, d, i - 1, s));
        }

        // 3. 돌 곡괭이 사용
        if (s > 0) {
            let cost = currentChunk.reduce((acc, m) => acc + pickFatigue[2][m], 0);
            minCost = Math.min(minCost, cost + dp(idx + 5, d, i, s - 1));
        }

        memo.set(key, minCost);
        return minCost;
    }

    return dp(0, picks[0], picks[1], picks[2]);
}