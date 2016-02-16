function solution(A) {
  var value;
  var result={};
  
  for(var index=0;index<=A.length;index++){
		value=A[index];
    if(result[value]){
    	delete result[value]
    }else{
			result[value]=true;
		}
	}

	var keyNames = Object.keys(result); 

	return parseInt(keyNames[0]);
}