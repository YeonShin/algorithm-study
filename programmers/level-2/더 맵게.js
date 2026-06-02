// Heap
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    getRoot() {
        return this.heap[0];
    }
    
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    
    add(value) {
        this.heap.push(value);
        this.bubbleup();
    }
    
    bubbleup() {
        let index = this.heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2)
        while (
            parentIndex >= 0
            && this.heap[index] < this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2)
        }
    }
    
    poll() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        
        const value = this.heap[0];
        this.heap[0] = this.heap.pop(); // 마지막노드를 루트 노드로
        this.bubbledown();
        return value;
    }
    
    bubbledown() {
        let index = 0;
        let leftIndex = index * 2 + 1;
        let rightIndex = index * 2 + 2;
        
        while(
            (leftIndex < this.heap.length 
	            && this.heap[leftIndex] < this.heap[index]) 
	            || (rightIndex < this.heap.length 
		            && this.heap[rightIndex] < this.heap[index])) {
                let smallIndex = leftIndex;
                if (this.heap[rightIndex] 
	                && this.heap[smallIndex] > this.heap[rightIndex]) {
                    smallIndex = rightIndex;
                }
                this.swap(index, smallIndex);
                index = smallIndex;
                leftIndex = index * 2 + 1;
                rightIndex = index * 2 + 2;
        
            }
        
    }
}

function solution(scoville, K) {
    var answer = 0;
    const heap = new MinHeap();
    scoville.forEach((item) => {
        heap.add(item);
    })
    
    let lowest = 0;
    let secondLowest = 0;
    while (heap.size() > 1 && heap.getRoot() < K) {
        lowest = heap.poll();
        secondLowest = heap.poll();
        const mixScoville = lowest + (secondLowest * 2);
        heap.add(mixScoville);
        answer++;
    }
    
    if (heap.getRoot() < K) {
        answer = -1;
    }
    
    return answer;
}


// 최적화된 코드
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    getRoot() {
        return this.heap[0];
    }
    
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    
    add(value) {
        this.heap.push(value);
        this.bubbleup();
    }
    
    bubbleup() {
        let index = this.heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2)
        while (
            parentIndex >= 0
            && this.heap[index] < this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2)
        }
    }
    
    poll() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        
        const value = this.heap[0];
        this.heap[0] = this.heap.pop(); // 마지막노드를 루트 노드로
        this.bubbledown();
        return value;
    }
    
    bubbledown() {
        let index = 0;

        
        while(true) {
            let leftIndex = index * 2 + 1;
            let rightIndex = index * 2 + 2;
            let smallIndex = index;
            
            if (leftIndex < this.heap.length 
            && this.heap[smallIndex] > this.heap[leftIndex]) 
            {
                smallIndex = leftIndex;
            }
            
            if (rightIndex < this.heap.length 
            && this.heap[smallIndex] > this.heap[rightIndex]) 
            {
                smallIndex = rightIndex;
            }
            
            if (smallIndex === index) break;
            
            this.swap(index, smallIndex);
            index = smallIndex;
        }
    }
}

function solution(scoville, K) {
    var answer = 0;
    const heap = new MinHeap();
    scoville.forEach((item) => {
        heap.add(item);
    })
    
    let lowest = 0;
    let secondLowest = 0;
    while (heap.size() > 1 && heap.getRoot() < K) {
        lowest = heap.poll();
        secondLowest = heap.poll();
        const mixScoville = lowest + (secondLowest * 2);
        heap.add(mixScoville);
        answer++;
    }
    
    if (heap.getRoot() < K) {
        answer = -1;
    }
    
    return answer;
}