/*let p=document.querySelector('.para');
console.log(p);
p.style.background= "#ccc"
document.getElementById('text').textContent="this really"

// change style
p.style.fontSize="60px";
let val = document.getElementsByClassName('para');
let valarr= Array.from(val);

console.log(val);
console.log(valarr);
valarr.forEach(function(elem){elem.style.color= "#afdfee"})*/

function rand(min,max){
	return Math.floor(Math.random() * (max-min +1))+ min;
}
let bout = document.querySelector('input.btn');
let info = document.querySelector('#info');

let ran = rand(0,100);
console.log(ran);

bout.addEventListener('click', function(e){
	  e.preventDefault();
	
	  let val = document.querySelector('#num').value;

    let vall = Number(val);
       console.log(val);
	   console.log(vall);
	   
	   if(!isNaN(vall)){
	   if(vall==ran){
		   info.innerHTML="bravo";
	   }
	   else if(vall<ran){
		   info.innerHTML="pi gwo";
	   }
	   else{
		   info.innerHTML="pi piti ";
	   }
	   }
	   else{
		   info.innerHTML="sa pa yon chif ";
	   }
	   
	   
});


