// 정렬
function solution(data, col, row_begin, row_end) {
    var answer = 0;

    data.sort((a, b) => {
        if (a[col-1] === b[col-1]) {
            return b[0] - a[0]
        }
        
        return a[col - 1] - b[col - 1];
    })
    
    const S = new Array(data.length + 1).fill(0);
    S[0] = NaN;

    for (let i = 1; i < data.length; i++) {
        for (let j = 1; j < data[i].length; j++) {
            S[i] += data[i][j] % (i)
        }
    }
    
    for (let i = row_begin; i <= row_end; i++) {
        answer ^= S[i];
    }
    
    return answer;
}

// 다른 풀이
function solution(data, col, row_begin, row_end) {
    // 1. 정렬
    data.sort((a, b) => a[col - 1] === b[col - 1] ? b[0] - a[0] : a[col - 1] - b[col - 1]);

    var answer = 0;

    // 2. 범위 순회 및 누적
    for (let i = row_begin - 1; i < row_end; i++) {
        // 현재 행의 모든 요소를 reduce로 더함
        const currentS = data[i].reduce((acc, val) => acc + (val % (i + 1)), 0);
        answer ^= currentS;
    }

    return answer;
}