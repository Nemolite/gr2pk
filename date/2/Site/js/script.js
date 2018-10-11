/*
var a=4,b=6;
if (a>3 && b>3)
console.log("Yes");
else
console.log("No");
console.log("-------------------------");
if ((a>3 && b>=7)||a+b>10)
console.log("Yes");
else
console.log("No");
console.log("-------------------------");
if (a*b!=1)
console.log("Yes");
else
console.log("No");
console.log("-------------------------");
var z=13,y=2,n=229;
var sum=z+y;
if (z=>y)
{ if
(sum=>n)
console.log("Yes");
else
console.log("No");}
else
{console.log("no");
}

var z=13,y=2,n=229;
var sum2=z+y;
var raz=z-y;
if (y!=z)
if (z=>y)
{ if
(sum=>n)
console.log("Yes1");
else
console.log("No1");}
else {
if (raz=>n)

console.log("Yes2");
else
console.log("No2");

}






var z=13,y=2,n=16;
var sum2=z+y;
var raz=z-y;
if (y != z)
if (z >= y)
{ if
(sum2 >= n)
console.log("Yes1");
else
console.log("No1");}
else {
if (raz >= n)
console.log("Yes2");
else
console.log("No2");
}


var u,t,num;
u=18;
t=28;
for( var k=0; k<=10; k++ ) 
 {
  num=u+t;
  console.log(k);
  console.log(num);
  console.log("_____");
  
 }

 console.log(" _____________________");
for( var k=0; k<=5; k++ ) 
{      
       console.log("|                     |",k);
       }

var total=0;
 console.log(" _____________________");
for( var k=0; k<=30; k=k+2) {
total=total+k;
console.log(total,k);
}
var one=4;
var two=2;


var kajdiy,pop,total=0;
for (var k=0; k<=30; k++) {
pop=k%2;
if (pop!=0)
total=total+k;
console.log(total,k);
}

   var a=15,b=7;
   switch ((a+b)/2) {
case 10: {
console.log("10");
break;}
case 11:{
console.log("11");
}
case 12: {var kajdiy,pop,total=0;
for (var k=0; k<=30; k++) {
pop=k%2;
if (pop!=0)
total=total+k;
console.log(total,k);
}
}
case 0 :{
var z=13,y=2,n=229;
var sum2=z+y;
var raz=z-y;
if (y!=z)
if (z=>y)
{ if
(sum=>n)
console.log("Yes1");
else
console.log("No1");}
else {
if (raz=>n)

console.log("Yes2");
else
console.log("No2");
break;
}
}}
console.log("lkl");


var a=-10;
var total=0;
while (a<10){
	console.log("summ",total);
	total=total+a;
	a++;
}
console.log("summ",total);


var a=0;
var total=0;
do {

	console.log("summ",total);
	total=total+a;
	a=a+2; //a+=2
}
while (a<=50)
console.log(total)

var a = {};
a.properties1="svoustvo"
a.properties2=123,
a.properties3=false,
a.properties4=true,
a.properties5="easy"
// Objeckt a 
for (var t in a){
	console.log(t);
	console.log(a[t]);
	console.log("___________")
}
// svoustva obj
//for (var t in a){
//	console.log(t);
//}

var str = function() {
	var a=prompt('First, word')
	var b=prompt('Second, word')
	var c=prompt('Third, word ')
    var total_word=a+" "+b+" "+c;
    return total_word;

}

var end=function()
console.log(end)


var sr_str = function(){
	var d=prompt('word')
    var z=prompt('word')
    var tmp=d+" "+z
if (d===z) 
	return tmp;
}    
var end=sr_str()
console.log(end)

var sr_str = function(){
	var d=prompt('word 1')
    // var z=prompt('word 2')
    console.log(d.charAt(0)) // => "h": пер­вый сим­вол.
    console.log(d.charAt(d.length-1)) // => "d": по­след­ний сим­вол.
console.log(d.substring(1,4)) // => "ell": 2-й, 3-й и 4-й сим­во­лы.
console.log(d.slice(1,4)) // => "ell": то же са­мое
console.log(d.slice(-3)) // => "rld": по­след­ние 3 сим­во­ла
console.log(d.indexOf("l")) // => 2: по­зи­ция пер­во­го сим­во­ла l.
console.log(d.lastIndexOf("l")) // => 10: по­зи­ция по­след­не­го сим­во­ла l.
console.log(d.indexOf("l", 3)) // => 3: по­зи­ция пер­во­го сим­во­ла "l", сле­дую­ще­го
console.log(d.split(", ")) // => ["hello", "world"] раз­би­ва­ет на под­стро­ки
console.log(d.replace("h", "H")) // => "Hello, world": за­ме­ща­ет все вхо­ж­де­ния под­стро­ки
console.log(d.toUpperCase()) 

}
var end=sr_str()
console.log(end)
console.log("_______________")

var sr_str = function(){
	var d=prompt('word 1')
	var total=0;
	for (var i = 0; i < d.length; i++) {
		if (d[i] == "i") {
		total=total+1;
	}
	}
	console.log(total);
}

sr_str();
*/
var arr = Array(10);
arr.join("-")
for (var i = 0; i<arr.length; i++) {
	arr[i] = i;
}

console.log(arr);
	






