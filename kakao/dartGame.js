function solution(dartResult) {    
    console.log(dartResult)
    let num = 0, int = 0, pow = 0, answer = 0
    
    function addNum() {
        num = Math.pow(int, pow)
    }
    for(let i = 0; i < dartResult.length; i++) {
        if(Number(dartResult[i])){
            int = dartResult[i]
        }        
        else if(String(dartResult[i])){
            if(dartResult[i] == "S"){
                pow = 1 
            }else if(dartResult[i] == "D"){
                pow = 2
            }else if (dartResult[i] == "T"){
                pow = 3
            }
            addNum()
        }else if (dartResult[i] == "*"){
            answer -=nu
        }                        
    }

    
    return answer;
}

let input = "1S2D3T*"
console.log(solution(input))