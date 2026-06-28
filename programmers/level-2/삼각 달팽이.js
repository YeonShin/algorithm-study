// 구현
function solution(n) {
    let maxNum = 0;
    const arr = new Array(n)
    for(let i=0; i<n; i++) {
        arr[i] = Array(i+1)
        maxNum += i + 1
    }
    
    let currentHeight = 0;
    let currentWidth = 0;
    let round = 0;
    
    let ceil = 0;
    let floor = n - 1;
    
    // 아래로 내려가는 경우: 0
    // 오른쪽으로 가는 경우: 1
    // 왼쪽 위로 대각선으로 올라가는 경우: 2
    let direction = 0;
    
    for (let i=1; i<=maxNum; i++) {
        arr[currentHeight][currentWidth] = i;
        
        // 위 꼭짓점에서 아래로 내려가는 경우
        if (direction === 0) {
            // 바닥까지 닿지 않았고, 이미 채워지지 않았다면 더 아래로 내려감
            if (currentHeight < floor && arr[currentHeight + 1][currentWidth] === undefined) {
                currentHeight++;
            } else {
                // 삼각형의 바닥면을 찍었다면 오른쪽으로 방향 변경
                direction = 1;
                currentWidth++;
            }
        } else if (direction === 1) {
            // 아직 오른쪽으로 이동할 수 있다면
            if (currentWidth + 1 < arr[currentHeight].length 
                && arr[currentHeight][currentWidth + 1] === undefined) {
                currentWidth++;
            } else {
                // 바닥면을 다 채웠다면 방향을 바꾸고 왼쪽 위 대각선 방향으로
                direction = 2;
                currentHeight--;
                currentWidth--;
            }
        } else {
            // 계속 왼쪽 위로 이동 가능하다면
            if (currentHeight > ceil &&
                currentWidth > 0 &&
                arr[currentHeight - 1][currentWidth - 1] === undefined) {
                currentHeight--;
                currentWidth--;
            }
            else {
                // 아니라면 다시 아래 방향으로 이동하고 천장과 바닥 높이 조절
                direction = 0;
                ceil++;
                floor--;

                currentHeight++;
            }
        }
    }


    return arr.flat();
}

// 다른 풀이
function solution(n) {
    const arr = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));

    const dr = [1, 0, -1];
    const dc = [0, 1, -1];

    let row = 0;
    let col = 0;
    let direction = 0;

    const maxNum = n * (n + 1) / 2;

    for (let num = 1; num <= maxNum; num++) {
        arr[row][col] = num;

        // 다음 이동할 위치
        let nextRow = row + dr[direction];
        let nextCol = col + dc[direction];

        // 다음 위치가 배열을 벗어나거나, 이미 채워져있다면 방향 전환
        if (
            nextRow < 0 ||
            nextRow >= n ||
            nextCol < 0 ||
            nextCol > nextRow ||
            arr[nextRow][nextCol] !== 0
        ) {
            direction = (direction + 1) % 3; // 방향 전환: 0 > 1 > 2 > 0 > 1
            nextRow = row + dr[direction];
            nextCol = col + dc[direction];
        }

        row = nextRow;
        col = nextCol;
    }

    return arr.flat();
}