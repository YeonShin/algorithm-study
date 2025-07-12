function solution(n, w, num) {
    var answer = 0;

    let boxes = [];
    let level = [];

    for (let i=1; i<=n; i++) {
        level.push(i);

        if(i%w === 0) {
            boxes.push(level);

            level = [];
        }
    }

    boxes.push(level);
    let findIdx;
    let floor;
    if (num % w === 0) {
        findIdx = w-1;
        floor = Math.floor(num / w) - 1;
    } else {
        findIdx = num % w - 1;
        floor = Math.floor(num / w);
    }



    if (num / w)


    console.log(findIdx, floor)

    console.log(boxes)

    boxes.forEach((item, idx) => {
        if (idx >= floor && (idx - floor) % 2 === 0 && item[findIdx] !== undefined && item[findIdx] >= num) {
            answer++;
        } else if (idx >= floor && (idx - floor) % 2 !== 0 && item[w - (findIdx + 1)] !== undefined && item[w - (findIdx + 1)] >= num) {
            answer++
        }
    })


    return answer;
}