// 해시
function solution(fees, records) {
    var answer = [];
    const defaultTime = fees[0];
    const defaultPrice = fees[1];
    const unitTime = fees[2];
    const unitPrice = fees[3];
    
    // 주어진 입/출차 내역을 차량번호를 기준으로 오름차순으로 정렬
    records.sort((a, b) => {
        const aSplit = a.split(" ");
        const bSplit = b.split(" ");
        
        return aSplit[1] - bSplit[1]
    })
    
    const hash = new Map();
    
    // 주어진 입/출차 내역을 차량번호를 key로 입/출차시간을 value로 해시 구조로 저장
    // M = 
    records.forEach((record) => {
        const temp = record.split(" "); // 문자열을 공백 기준으로 분리
        const value = hash.get(temp[1]) || []; // 이미 있는지 확인해서 없다면 생성
        value.push(temp[0])
        hash.set(temp[1], value)
    })
    
    // hash의 길이는 곧 차량번호의 수와 같음
    hash.forEach((records) => {
        let total = defaultPrice; // 특정 차량의 총 주차요금
        let elapsedTime = 0; // 특정 차량의 누적 주차 시간(분)
        let inTime = 0; // 입차 시간(분)
        let outTime = 0; // 출차 시간(분)
        
        // 입/출차 내역의 길이가 홀수라면 마지막 출차내역이 없다는 의미이므로
        // 이 경우에는 records의 마지막 출차시간을 23:59로 설정해준다.
        if (records.length % 2 !== 0) {
            records.push("23:59");
        }
        
        // 총 주차 시간 계산
        for (let i=0; i < records.length; i+=2) {
            const inStr = records[i].split(":");
            inTime = parseInt(inStr[0]) * 60 + parseInt(inStr[1]);
            
            const outStr = records[i+1].split(":");
            outTime = parseInt(outStr[0]) * 60 + parseInt(outStr[1]);
            
            elapsedTime += outTime - inTime;
        }
        
        // 만약 누적 주차 시간이 기본 시간보다 크다면 추가 요금 부과
        if (elapsedTime > defaultTime) {
            total += Math.ceil((elapsedTime - defaultTime) / unitTime) * unitPrice
        }
       
        answer.push(total)
    })
    return answer;
}

// 최적화된 풀이
function solution(fees, records) {
    var answer = [];
    const [defaultTime, defaultPrice, unitTime, unitPrice] = fees;
    
    const hash = new Map();
    
    // 주어진 입/출차 내역을 차량번호를 key로 입/출차시간을 value로 해시 구조로 저장
    records.forEach((record) => {
        const [time, carNumber, type] = record.split(" "); // 문자열을 공백 기준으로 분리
        if (!hash.has(carNumber)) {
            hash.set(carNumber, [])
        }
        hash.get(carNumber).push(time)
    })
    
    const sortedCarNumbers = [...hash.keys()].sort();
    
    // hash의 길이는 곧 차량번호의 수와 같음
    sortedCarNumbers.forEach((carNumber) => {
        const times = hash.get(carNumber);
        
        let elapsedTime = 0;
        let total = defaultPrice;
        
        // 입/출차 내역의 길이가 홀수라면 마지막 출차내역이 없다는 의미이므로
        // 이 경우에는 records의 마지막 출차시간을 23:59로 설정해준다.
        if (times.length % 2 !== 0) {
            times.push("23:59");
        }
        
        
        
        for (let i=0; i < times.length; i+=2) {
            const inStr = times[i].split(":");
            const inTime = parseInt(inStr[0]) * 60 + parseInt(inStr[1]);
            
            const outStr = times[i+1].split(":");
            const outTime = parseInt(outStr[0]) * 60 + parseInt(outStr[1]);
            
            elapsedTime += outTime - inTime;
        }
        
        // 만약 누적 주차 시간이 기본 시간보다 크다면 추가 요금 부과
        if (elapsedTime > defaultTime) {
            total += Math.ceil((elapsedTime - defaultTime) / unitTime) * unitPrice
        }
        
        answer.push(total)
    })
    return answer;
}