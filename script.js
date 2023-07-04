function clickEffect(e){
      var d=document.createElement("div");
      d.className="clickEffect";
      d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
      document.body.appendChild(d);
      d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
    }
    document.addEventListener('click',clickEffect);

//-----------------------------
function clickEffect2(e){
      var d=document.createElement("div");
      d.className="clickEffect2";
      d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
      document.body.appendChild(d);
      d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
    }
    document.addEventListener('click',clickEffect2);

//------------------ show and hide pages -----------------------//
const startPage=document.querySelector(".start-page");
const rulesPage=document.querySelector(".rules");
const quizTemplate=document.querySelector(".quiz-template");
const ratePage=document.querySelector(".rate");
    function showStartpage(){
        startPage.classList.remove("hidden");
    }
    function hideStartpage(){
        startPage.classList.add("hidden");
    }

    function showeRulesPage(){
        rulesPage.classList.remove("hidden");
    }
  
    function hideRulesPage(){
        rulesPage.classList.add("hidden");
    }

    function showQuizPage(){
        quizTemplate.classList.remove("hidden");
    }
    function hideQuizPage(){
        quizTemplate.classList.add("hidden");
    }
    function showRatePage(){
        ratePage.classList.remove("hidden");
        document.querySelector(".rate-container").classList.add("fix-scroll")
    }
    function hideRatePage(){
        ratePage.classList.add("hidden");
        document.querySelector(".rate-container").classList.remove("fix-scroll")
    }
    

// --------------------- time bar function ------------------------//
const timeBar = document.querySelector(".time-bar");
const timeNumber = document.querySelector(".time-box");
timeNumber.innerHTML = 5;


function startBarTime() {
  timeBar.style.transition = "width 5s linear";  // edited 
  setTimeout(() => {
        timeBar.style.width = "100%";
  }, 1000);
}

let interval;
let quizEnd=false;
function startTimer() {
  let counter = 5; //edited
 interval = setInterval(() => {
    timeNumber.innerHTML = counter--;
    if (parseInt(timeNumber.innerHTML) === 0) {
    quizEnd=true;
    clearInterval(interval);
    console.log(quizEnd);
    }
  }, 1000);
}

// Start both functions at the same time
function startTiming(){
    timeBar.style.transition="width 5s linear"
    startBarTime();
    startTimer();
}
  
 //----------------------------------------------------------------//
 //----------------------- start to rules -------------------------//
 hideRatePage();
 showStartpage();
 const startBtn=document.querySelector(".start-btn");
 function StartToRules(){
    startBtn.addEventListener("click",()=>{
        hideStartpage();
        showeRulesPage();
    })
 }
 //------------------------ rules Exit quiz--------------------//
 const exitBtnRules=document.querySelector(".Exit-btn");
 function exitQuizRules(){
     exitBtnRules.addEventListener("click",()=>{
       hideRulesPage();
       showStartpage(); 
     })
 }
 //------------------------- rulez continue to quiz ------------//
 const continueBtnRules=document.querySelector(".Continue-btn");
 function  continueQuizRules(){
    continueBtnRules.addEventListener("click",()=>{
        hideRulesPage();
        showQuizPage();
        startTiming();
    })
 }
hideStartpage();
showQuizPage();

//---------------------------------------------------------------------
const questionText=document.querySelector(".question");
const firstChoice=document.querySelector(".first-choice");
const secondChoice=document.querySelector(".second-choice");
const thirdChoice=document.querySelector(".third-choice");
const forthChoice=document.querySelector(".forth-choice");
const multichoix=[firstChoice,secondChoice,thirdChoice,forthChoice];
const svgTrueString=` <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="256.000000pt" height="256.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(26, 210, 72)" stroke="none">
                        <path d="M1073 2436 c-152 -29 -330 -103 -458 -189 -78 -53 -214 -185 -276 -267 -61 -81 -138 -230 -173 -335 -76 -229 -75 -506 2 -735 60 -175 139 -306 266 -438 139 -145 288 -240 474 -303 231 -79 508 -80 737 -3 172 57 312 142 443 268 145 139 240 288 303 474 78 231 80 508 3 737 -35 105 -112 254 -173 335 -63 84 -199 214 -280 269 -94 64 -253 136 -366 167 -85 22 -125 27 -265 30 -112 2 -188 -1 -237 -10z m722 -740 c39 -16 65 -60 65 -108 0 -30 -32 -65 -348 -380 l-347 -348 -45 0 c-44 0 -45 1 -227 182 -120 120 -186 193 -191 213 -21 75 35 141 112 131 35 -4 55 -20 173 -138 l133 -133 293 292 c160 160 299 293 307 296 25 9 39 8 75 -7z"/>
                        </g>
                        </svg>`
const svgFalseString=`<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="256.000000pt" height="256.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(255, 34, 34)" stroke="none">
                        <path d="M1125 2389 c-367 -54 -681 -282 -849 -616 -212 -424 -126 -943 214 -1283 439 -439 1141 -439 1580 0 438 439 438 1141 0 1580 -249 248 -604 368 -945 319z m-83 -756 l238 -237 238 237 c204 203 242 237 267 237 34 -1 56 -15 73 -47 27 -49 19 -60 -225 -305 l-237 -238 237 -238 c162 -163 237 -245 237 -260 0 -52 -40 -92 -92 -92 -15 0 -97 75 -260 237 l-238 238 -233 -232 c-144 -145 -242 -234 -259 -238 -48 -12 -97 28 -98 80 0 25 34 63 237 267 l237 238 -237 238 c-212 213 -237 241 -237 270 0 44 38 82 82 82 29 0 57 -25 270 -237z"/>
                        </g>
                        </svg>`
const svgTrueElement = new DOMParser().parseFromString(svgTrueString, "image/svg+xml").documentElement;
const svgFalseElement = new DOMParser().parseFromString(svgFalseString, "image/svg+xml").documentElement;

//---------------------------------------------------------------------------------
const counterTrueAnswer=0;
class OneQuiz{
    constructor(question){
        this.question=question;
        this.choices=[];
        this.affectQuestionText();
    }
    affectQuestionText(){
        questionText.innerText=this.question;
    }
    setQuetion(newQuestion){
        this.question=newQuestion;
    }
    addChoice1(choiceTxt,logicValue){
     let choice1=new OneChoice(firstChoice,choiceTxt,logicValue);
     this.choices.push(choice1);
    }
    addChoice2(choiceTxt,logicValue){
        let choice2=new OneChoice(secondChoice,choiceTxt,logicValue);
        this.choices.push(choice2);
       }
    addChoice3(choiceTxt,logicValue){
        let choice3=new OneChoice(thirdChoice,choiceTxt,logicValue);
        this.choices.push(choice3);
    }
    addChoice4(choiceTxt,logicValue){
        let choice4=new OneChoice(forthChoice,choiceTxt,logicValue);
        this.choices.push(choice4);
    }

    SelectChoice(){
        this.choices.forEach(function(choix){
            choix.select();
        });

    }

}
 
 class OneChoice{
    constructor(choiceElement,textChoice,ifTrueChoice){
        this.choiceElement=choiceElement;
        this.textChoice=textChoice; // the choice text
        this.ifTrueChoice=ifTrueChoice; // boolean
        this.selected=false;
        // this.svgChoice=this.svgChoice; // the true icon or the false icon
        this.affectTextChoice();
    }

    select(){
        this.choiceElement.addEventListener("click",()=>{
            if(this.ifTrueChoice===true){
                if(this.choiceElement.contains(svgFalseElement)){
                    this.choiceElement.removeChild(svgFalseElement);
                }
                this.choiceElement.appendChild(svgTrueElement);
                this.choiceElement.style.backgroundColor='rgba(134, 196, 255, 0.70)';
               
            }else{
                if(this.choiceElement.contains(svgTrueElement)){
                    this.choiceElement.removeChild(svgTrueElement);
                }
                this.choiceElement.appendChild(svgFalseElement);
                this.choiceElement.style.backgroundColor='rgba(134, 196, 255, 0.70)';
                const truechoice=test2.choices.find((choice)=>choice.ifTrueChoice===true);
                truechoice.choiceElement.appendChild(svgTrueElement);
                truechoice.choiceElement.style.backgroundColor='rgba(134, 196, 255, 0.70)';
               
            }
            this.selected=true;
            const unselectedchoices=test2.choices.filter((choice)=>choice.selected===false)
            unselectedchoices.forEach((choice)=>{
            choice.choiceElement.style.pointerEvents='none';
            });
            clearInterval(interval);
            let currentwidth=parseInt(timeNumber.innerText)*100/15;
            timeBar.style.width=`${currentwidth}%`
            timeBar.style.transition = "width 10000000000000000000000000000000000000000000000000000000s linear"; 
        })
    }
    affectTextChoice(){
        this.choiceElement.querySelector("p").innerText=this.textChoice;
    }
    

}

// const test=new OneChoice();
// test.choiceElement=firstChoice;
// test.textChoice="hiiiii";
// test.ifTrueChoice=false;
// test.select();/
// test.affectTextChoice();

const test2=new OneQuiz("1.Is Abdderahmane a Web developer?");
test2.addChoice1("No he's expert in maths",false);
test2.addChoice2("Yes he's a Web developer",false);
test2.addChoice3("No he's a physician",false);
test2.addChoice4("No he's a footballer",true);
//----------------------------------the second quiz------//

test2.SelectChoice();
startTiming();
setTimeout(function(){
    if(quizEnd){
        test2.choices.forEach((choix)=>{
            if(choix.ifTrueChoice===true){
                choix.choiceElement.appendChild(svgTrueElement);
                choix.choiceElement.style.backgroundColor='rgba(134, 196, 255, 0.70)';  
            } 
            choix.choiceElement.style.pointerEvents='none';           
   
        }) 
    }
},6000);

 const nextQuizBtn=document.querySelector(".next-btn");
function goToNextQuiz(){
        nextQuizBtn.addEventListener("click",()=>{
        timeBar.style.transition="width 0s linear"
         timeBar.style.width='0%' 
         timeNumber.innerHTML="5";
        const quizTwo=new OneQuiz("2.Can you make it to Algiers ?");
        quizTwo.addChoice1("No I don't think",false);
        quizTwo.addChoice2("Yes of course you can",false);
        quizTwo.addChoice3("No it's hard",true);
        quizTwo.addChoice4("No you'll not",false);
        quizTwo.choices.forEach((choix)=>{
                        choix.selected=false;
                        choix.choiceElement.style.pointerEvents='auto';
                        if(choix.choiceElement.contains(svgTrueElement)){
                            choix.choiceElement.removeChild(svgTrueElement);
                            choix.choiceElement.style.backgroundColor=''
                        }else  if(choix.choiceElement.contains(svgFalseElement)){
                            choix.choiceElement.removeChild(svgFalseElement);
                            choix.choiceElement.style.backgroundColor=''
                        }  
                    }) 
                setTimeout(startTiming,0.1);
                quizTwo.SelectChoice();
                console.log(quizTwo.choices[2].choiceElement.contains(svgTrueElement)+" here");

})
}

goToNextQuiz();

// function resetQuiz(){
//         
//         test2.setQuetion("2. Can you make it to Algiers ?")
//         test2.addChoice1("No that's impossible",false);
//         test2.addChoice2("Yes you will amke it inchallah",true);
//         test2.addChoice3("No you're unlucky asf the bus won't come",false);
//         test2.addChoice4("No bro where's your bugatti",false);
//         test2.choices.forEach((choix)=>{
//             choix.selected=false;
//             choix.choiceElement.style.pointerEvents='auto';
//             choix.choiceElement.style.backgroundColor='rgba(134, 196, 255, 0.135)'; 
//             if(choix.choiceElement.contains(svgTrueElement)){
//                 choix.choiceElement.removeChild(svgTrueElement);
//             }else  if(choix.choiceElement.contains(svgFalseElement)){
//                 choix.choiceElement.removeChild(svgFalseElement);
//             } 
//         })       
// }




// i'll improve myself more and i'll return to youu




