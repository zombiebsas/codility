function solution(A, B) {

	var downstream=[];
  var fish;
  var alive=0;
  
  for(var index=0;index<A.length;index++){
    fish=A[index];
    if(B[index]===0){
    	while(downstream.length>0 && fish!==null){
        if(downstream[downstream.length-1]>fish){
        	fish=null;
        }else{
        	downstream.pop();
        }
      }
      if(fish!==null){
      	alive++;
      }
    }else{
    	downstream.push(fish);
    }
  }
	return alive+downstream.length;
}