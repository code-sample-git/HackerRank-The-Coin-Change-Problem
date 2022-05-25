
function getWays(n, c) {
    //Sort the arry in ascending order
    c.sort(function(a, b) {
        return a - b;
    });
    //Call the DP function
    return countCombination(n, c, 0);
}

//Declare a map to cache result from the DP function to enhance performance.
const resultMap = new Map();

function countCombination(value, c, i){
    
    var count = 0;          //assume count is zero.

    if(value == 0){
        count= 1;
    }else if(value >=c[i]){
        
        var key=value+'-'+i;    //set key for caching. c is stastic in this question so use the value and i only.
    
        //Return immediately if cache available.
        if(resultMap.get(key) != undefined){
            return resultMap.get(key);
        }
        
        //no cache. has to do the calculation.
        var quotient = value / c[i];
        if(i<c.length-1){   
            for(var j=0; j<= quotient; j++){
                count+=countCombination(value-j*c[i], c, i+1) ; //value minus j*coin, try j from 0 to the quotient.
            } 
        }else if(value%c[i]==0){    //edge case (if i = clength-1, this is the max value it can be.) Count 1 if remainder = 0.
                count = 1;
        }
    }
    resultMap.set(key, count);  //Cache the result
    return count;
}
