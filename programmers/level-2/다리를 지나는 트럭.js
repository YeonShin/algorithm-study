// 스택&큐
function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    // 다리를 건너는 트럭 배열 [0, 0, 0, 0]
    const bridge = new Array(bridge_length).fill(0); 
    let currentWeight = 0
    
    do {
        // 다리를 건넌 트럭을 제외하고 트럭의 weight 만큼 현재 weight 감소
        const elapsed = bridge.shift();
        currentWeight -= elapsed;
        
        // 만약 대기중인 트럭이 남아있다면
        if (truck_weights.length > 0) {
            // currentWeight에 대기중인 트럭의 weight를 합한 값이 weight를 넘는지 확인
            if (currentWeight + truck_weights[0] > weight) {
                // 트럭이 추가로 더 다리에 오를 수 없다면 0을 추가
                bridge.push(0);
                answer++;
            } else {
                // 대기 중인 트럭을 다리위에 올린다. 현재 weight 값도 증가
                const truck = truck_weights.shift();
                currentWeight += truck;
                bridge.push(truck)

                answer++;
            }
        } else {
            // 대기중인 트럭이 더이상 없다면 다리에 더 올리지 않는다.
            bridge.push(0);
            answer++;
        }
    // currentWeight 값이 0보다 크다면 즉, 다리를 건너고 있는 트럭이 하나 이상 있다면 반복
    } while (currentWeight > 0)

    return answer;
}

// 최적화된 풀이
class Queue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }
    
    size() {
        return this.rear - this.front;
    }
    
    enqueue(value) {
        this.storage[this.rear] = value;
        this.rear += 1;
    }
    
    dequeue() {
        if (this.size() === 0) return null;
        const temp = this.storage[this.front];
        delete this.storage[this.front];
        this.front += 1;
        return temp;
    }
}

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    const bridge = new Queue();

    for (let i=0; i < bridge_length; i++) {
        bridge.enqueue(0);
    }

    const truckQueue = new Queue();
    for (const truck of truck_weights) {
        truckQueue.enqueue(truck)
    }
    
    let currentWeight = 0
    
    do {
        // 다리를 건넌 트럭을 제외하고 트럭의 weight 만큼 현재 weight 감소
        const elapsed = bridge.dequeue();
        currentWeight -= elapsed;
        
        // 만약 대기중인 트럭이 남아있다면
        if (truckQueue.size() > 0) {
            const nextTruck = truckQueue.storage[truckQueue.front];

            // currentWeight에 대기중인 트럭의 weight를 합한 값이 weight를 넘는지 확인
            if (currentWeight + nextTruck > weight) {
                // 트럭이 추가로 더 다리에 오를 수 없다면 0을 추가
                bridge.enqueue(0);
                answer++;
            } else {
                // 대기 중인 트럭을 다리위에 올린다. 현재 weight 값도 증가
                const truck = truckQueue.dequeue();
                currentWeight += truck;
                bridge.enqueue(truck)

                answer++;
            }
        } else {
            // 대기중인 트럭이 더이상 없다면 다리에 더 올리지 않는다.
            bridge.enqueue(0);
            answer++;
        }
    // currentWeight 값이 0보다 크다면 즉, 다리를 건너고 있는 트럭이 하나 이상 있다면 반복
    } while (currentWeight > 0)

    return answer;
}