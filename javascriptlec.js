//-------------------------------for-of loop
// It only use to the string
// syntax is for(let val for strvar)
// let str="MAHANTESH"
// let size=0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("string size=",size);
// // ----------------------------------------for-in loop
// // It Only use to objects
// // Syntax is for (let val in objvar)
// let student={
//     name :"Mahantesh",
//     age:20,
//     cgpa:8,
//     ispass:true,
// };
//  for (let key in student) {
//     console.log("key=",key,"value=",student[key])
    
//  }
//----------------------practice question 1
// let n=100,sum=0;

// for (let i = 0; i <=n ; i++) {
//     if (i%2==0) {
//         console.log("even=",i);
//     }
    
// }
//------------------------------practice question 2 GAME
// let gameNum=10;

// let userNum=prompt("Guess the game number :");
// while (userNum!=gameNum) {
//     userNum= prompt("You entered a rong number, Guss again");
// }
// conseconsole.log("Congratulation, u entered a right number ");
//--------------------------------------------------------------------------string Length
// using str.lenght
//----------------------------------Access the tring by nousing str[0,1,2,3,4,,5]
// let str="Mahanetsh";

// console.log(str[0]);
//----------------------------------------------------------Temolate Literals

// let specialstring ='This is the template literals';
// console.log(typeof specialstring)
//--------------------------------------------------String interpolation
// --------------is defind as ${expression} back trick ``
// let specialString = `This is the template literals ${1 + 2 + 3}`;
// console.log(specialString);
//-----------------------------------------------------string Methods in JS
// 1 = str.toUpperCase() 2 = str.toLowerCase() 3 = str.strim() 4=str.slice(start,end) 5=str1.concat(str2) 6=str.replace(searchval,newVal) 7=str.charAt(idx)
//let str="Mahanetsh";
//str=str.toUpperCase(); Direct change the string
//let newstr=str.toUpperCase(); chnage the new string that also same that lower case method
//let str="      Mahanetsh    kore "; satrting spacess are remove
//console.log(str.trim());


//----------------------------------------------------------  ARRYA
// let marks=[43,54,87,77];

// for(let i=0 ;i<marks.length;i++)
// {
//     let offer =marks[i] / 10;
//     marks[i]=marks[i]-offer;
    
// }
// console.log(marks);
//------------------------------------------------------------  ARRYA METHODS
//1..Push(): Add to end 2..Pop():Delete from end & return  3..toString():converts arrya to string   4..Concat(): joins multiple arrya & returns result  5..Unishift(): Add to start  6..Shift():Delete from start & return  7..Slice():Returns a piece of the arrya 8..Splice():Chnage orignal arrya( startAdd , remove , replace)
// let arr=["blomberg","Microsoft","Uber","Google","IBM","Netflix"];
// // arr.splice(0,1);
// arr.splice(2,1,"OLA")
// // arr.push("amazon");
//----------------------------------------------------------------------  FUNCTION
//-------------------------------------------------------forEach = That is higher order function
//---------------------------------------ARROW FUNCTION
// const arrowSum = (a,b) => {
//     console.log(a+b);
// };
// const arrowMul = (a,b) =>{
//     console.log(a*b);
// }
//-------------------------------------count vowels
// function countVowel(str)
// {
//     let count=0;
//     for(const char of str){
//         if(char ==="a"||char ==="e"||char ==="i"||char ==="o"||char ==="u"){
//             count++;
//         }
//     }
//     console.log(count);
    
// }
/*
                                          D O M
                                    Document Object Model
        DOM Manipulation
  1-Select with id = documment.getElementByid("myid")
  2-Select with class= document.getElemntByClass("myClass")
  3-Select with tag = document.getElementByTagNmae("p")

    1.
let heading= document.getElementById("heading");
console.dir(headimg); 
    2.
let heading= document.getElementsByClassName("myClass");
console.dir(headimg); 
    3.
let paragraph= document.getElementsByTagName("p");
console.dir(paragraph); 

                                            Properties
       1.tagNmae:returns tag for element nodes
       2.innerText:returns the text content of the element and all its children
       3.inner HTML:retunrs the plain text or HTML conntents in the element 
       4.textContent:retunrs textual content even for hidden element


    Q1

let h2 =document.querySelectorAll("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText+"From Apna College student";
  Q2
let newBtn=document.createElement("button");
newBtn.innerText = "Click me!";
newBtn.style.color="white";
newBtn.style.backgroundColor="red";
document.querySelector("body").prepend(newBtn);
  Q3


  EVENTS
  let modBtn =document.querySelector("#mode");
  modBtn.addEventListener("click",() => {
    console.log("I am mahantyesh");
  });
  let mode ="light";


  modBtn.addEventListener("click",()=>{
    if (mode==="light") {
        mode="dark";
        document.querySelector("body").style.backgroundColor="black";
    } else{
        mode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(mode);
  });

  let modBtn =document.querySelector("#mode");
  modBtn.addEventListener("mouseover",() => {
    console.log("I am mahantyesh");
  });
  let mode ="light";


  modBtn.addEventListener("mouseover",()=>{
    if (mode==="light") {
        mode="dark";
        document.querySelector("body").style.backgroundColor="black";
    } else{
        mode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(mode);
  });
    */