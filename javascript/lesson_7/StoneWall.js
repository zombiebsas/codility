function solution(H) {
	var bricks=[];
  var bricksHeight=0;
  var result=0;
  
  
  for(var index=0;index<H.length;index++){
		do{
      if(bricks.length===0){
        bricks.push(H[index]);
        result++;
        bricksHeight=H[index];
      }else if(bricksHeight<H[index]){
        bricks.push(H[index]-bricksHeight);
        result++;
        bricksHeight=H[index];
      }else if(bricksHeight>H[index]){
        bricksHeight-=bricks.pop();
      }
		}while(bricksHeight !== H[index]);
  }
    
  return result;
}