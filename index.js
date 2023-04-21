let starttime,endtime;
const boolean=true;
var typewords=document.getElementById("mywords");
var sentencebtn=document.getElementById("btn");
var resultbtn=document.getElementById("Resultbutton");
var msg=document.getElementById("msg");
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


})
function Wordcounter(str) {
    if (str === undefined || str === null) {
        console.log("Invalid input: string is undefined or null");
        return 0;
    }

    let response = str.split(" ").length;
    console.log(response);
    return response;
}

resultbtn.addEventListener("click", () => {
    document.getElementById("msg").innerHTML = "";
    sentencebtn.innerText = "Start";
    let date = new Date();
    endtime = date.getTime();
    let totaltime = ((endtime - starttime) / 1000);
    console.log(totaltime, "hello");
    let totalstr = typewords.value;
    let wordcount = Wordcounter(totalstr);
    let speed=Math.round((wordcount/totaltime)*60);
    let finalmsg="your total speed at"+speed+"in a "+"at per minute";
    finalmsg+=comparewords(msg.innerText,totalstr);
    msg.innerText=finalmsg;
    msg.style.color="black";
    console.log(finalmsg);
});
function comparewords(str1, str2) {
    if (str2 === undefined || str2 === null) {
        console.log("Invalid input: string is undefined or null");
        return 0;
    }

    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;
    words1.forEach(function(index, item) {
        if (item == words2[index]) {
            cnt++;
        }
    });
    let errorwords = words1.length - cnt;
    return "  " + cnt +"   " +"  correct out of " +"  "+ words1.length +"  " + "   words and total number of errors are  " +" "+ errorwords + ".";
}


async function getRandomSentence() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  return data.content;
  
}

