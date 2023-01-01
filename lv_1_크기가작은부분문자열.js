function solution(t, p) {
    var answer = 0;
    var cnt = p.split('').length
    var item = []
        console.log(t.length-(cnt-1))
    for(let i = 0; i < t.length-(cnt-1); i++){    
        let num = 0
        let target = 0
        let k = 1
        for(let j = i ; j < i+cnt; j++) {            
            num = t[j] * Math.pow(10, cnt - k)            
            target += num
            k++
        }        
        if(1) {
            item.push(target)
        }                
        num = 0
        target = 0
    }
        
    answer = item
    console.log(item)
    return answer;
}

solution("3141592","271")

solution("10203","15")