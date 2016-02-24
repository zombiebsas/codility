function solution(A){
  var circles=[];
  var intersections=0;
	var circle={};

  for(var center=0;center<A.length;center++){
    circle={'left':center-A[center],'right':center+A[center]};
    for(var index=0;index<circles.length && intersections<=10000000;index++){
      if(intersects(circle,circles[index])){
      	intersections++;
      }
    }
    circles[center]=circle;
  }
  if(intersections > 10000000){
  	intersections=-1;
  }
  return intersections;
}

function intersects(circle1,circle2){
	return !(circle1.right<circle2.left || circle1.left>circle2.right);
}