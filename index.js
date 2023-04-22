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
    typewords.innerText=" ";
    document.getElementById("msg").innerText = "";
    sentencebtn.innerText = "Start";
    let date = new Date();
        endtime = date.getTime();
        const totalTime = (endtime - starttime) / 1000;
        const userTypedWords = typewords.value;
        const wordsCount = wordCounter(userTypedWords);
        const speed = Math.round((wordsCount / totalTime) * 60);
        const finalMsg = `You typed total ${wordsCount} words at speed of ${speed} words per minute.`;
        document.getElementById("result").innerHTML = finalMsg;
        
});

    function wordCounter(str) {
        const words = str.split(" ").filter((word) => word !== "");
        return words.length;
      }

     



async function getRandomSentence() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  return data.content;
  
}

