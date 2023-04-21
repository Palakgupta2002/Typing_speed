let starttime,endtime;
const boolean=true;
var typewords=document.getElementById("mywords");
var sentencebtn=document.getElementById("btn");
var resultbtn=document.getElementById("Resultbutton");
sentencebtn.addEventListener("click",()=>{
    if(boolean==true){
    getRandomSentence().then((sentense)=>{
        document.getElementById("msg").innerHTML=sentense;
        let date=new Date();
        starttime=date.getTime();
        sentencebtn.innerText="done";
        document.getElementById("result").innerText="";
    }).catch((error)=>{
        document.getElementById("msg").innerText="Error occur to fetching";
    })

}
boolean=false;

})
resultbtn.addEventListener("click",()=>{
    if(boolean==false){
    getRandomresult().then(()=>{
        document.getElementById("msg").innerHTML=" "; 
    }).catch((error)=>{
        document.getElementById("result").innerText="Error occur to fetching result";
    })
}
getRandomSentence();

})


async function getRandomSentence() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  console.log(data);
  return data.content;
  
}

