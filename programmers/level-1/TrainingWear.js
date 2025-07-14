function solution(n, lost, reserve) {
    var answer = 0;
    let lostDuplicate = []
    let reserveDuplicate = []

    lost.sort((a, b) => {
        return a-b;
    })

    reserve.sort((a, b) => {
        return a - b;
    })

    // 여벌 학생이 도난당한 경우 처리
    lost.forEach((item, idx) => {
        const duplicate = reserve.findIndex((re) => re === item);
        if (duplicate !== -1) {
            lostDuplicate.push(item);
            reserveDuplicate.push(reserve[duplicate])
        }
    });


    console.log(lostDuplicate, reserveDuplicate)

    lost = lost.filter((item) => {
        return lostDuplicate.find((lo) => lo === item) === undefined
    })

    reserve = reserve.filter((item) => {
        return reserveDuplicate.find((re) => re === item) === undefined
    })


    console.log(lost, reserve)

    answer = n - lost.length;

    reserve.forEach((item, idx) => {
        const nearLeft = lost.findIndex((lo) => lo === item - 1);
        const nearRight = lost.findIndex((lo) => lo === item + 1);

        console.log(item, ": left: ", nearLeft, ", right: ", nearRight);

        if (nearLeft === -1 && nearRight === -1) {

        } else if (nearLeft === -1 && nearRight !== -1) {
            lost.splice(nearRight, 1);
        } else {
            lost.splice(nearLeft, 1);
        }
    })


    answer = n - lost.length;


    return answer;
}