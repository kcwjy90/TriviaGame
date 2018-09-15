

var constel = [

    {
        name: "Taurus",
        symbol: "♉︎",
        image: "assets/images/Taurus.jpg"
    },

    
    {
        name: "Aries",
        symbol: "♈︎",
        image: "assets/images/Aries.jpg"
    },

    {
        name: "Gemini",
        symbol: "♊︎",
        image: "assets/images/Gemini.jpg"
    },

    {
        name: "Cancer",
        symbol: "♋︎",
        image: "assets/images/Cancer.jpg"
    },

    {
        name: "Leo",
        symbol: "♈︎",
        image: "assets/images/Leo.jpg"
    },

    {
        name: "Libra",
        symbol: "♎︎",
        image: "assets/images/Libra.jpg"
    },

   {
        name: "Scorpius",
        symbol: "♏︎",
        image: "assets/images/Scorpius.jpg"
    },

    {
        name: "Sagittarius",
        symbol: "♐︎",
        image: "assets/images/Sagittarius.jpg"
    },

    {
        name: "Capricorn",
        symbol: "♑︎",
        image: "assets/images/Capricorn.jpg"
    },

    {
        name: "Aquarius",
        symbol: "♒︎",
        image: "assets/images/Aquarius.jpg"
    },

    {
        name: "Pisces",
        symbol: "♓︎",
        image: "assets/images/Pisces.jpg"
    },

    {
        name: "Virgo",
        symbol: "♍︎",
        image: "assets/images/Virgo.jpg"
    },

    //repeat from here to pull later
    {
        name: "Taurus",
        symbol: "♉︎",
        image: "assets/images/Taurus.jpg"
    },

    
    {
        name: "Aries",
        symbol: "♈︎",
        image: "assets/images/Aries.jpg"
    },

    {
        name: "Gemini",
        symbol: "♊︎",
        image: "assets/images/Gemini.jpg"
    },

    {
        name: "Cancer",
        symbol: "♋︎",
        image: "assets/images/Cancer.jpg"
    },

    {
        name: "Leo",
        symbol: "♈︎",
        image: "assets/images/Leo.jpg"
    }
];

//right answer
var roundAnswer;
var indexRoundAnswer;
//getting the ID of the right answer
var roundAnswerIn; 
var roundAnswerId;

//wrong answers
var falseAnswer1;
var falseAnswer2;
var falseAnswer3;
var nonAnswerDiv1;
var nonAnswerDiv2;
var nonAnswerDiv3;
var counter = 0;

//to remove roundanswer from constel and put in here.
var usedAnswer = [];
//html-ing the right answer to the div
var answerDiv;

//div number. remove div number with the correct answer so false answers can go here.
var possibleAnswer = [0, 1, 2, 3];


//reflecting score on html
var rightAnswer = 0;
var wrongAnswer = 0;

//time
var number = 10;
var intervalId;


  function run(){
        intervalId = setInterval(decrement, 1000);
    };
    
    function stop(){
        clearInterval(intervalId)
    };
    
    function decrement(){
        number--;
        $(".consTime").html("OO:0"+number);

        
    if (number === 0) {

        counter++;
        stop();
        wrongAnswer++
        $(".wrongCount").html(wrongAnswer);
        usedAnswer = constel.splice(indexRoundAnswer, 1);
        possibleAnswer = [0, 1, 2, 3];
        number = 10;
        gameStart ();
        if(counter === 7){
            alert("good job! you got "+rightAnswer+" points!!!")
            alert("Let's Play Again")
            window.location.reload();
        };
    
        
        };
    };

// console.log(constel[Math.floor(Math.random()*12)].name);
gameStart();

function gameStart (){

    stop();
    decrement();
    run();

  

    roundAnswer = constel[Math.floor(Math.random()*3)];
    $(".mainImage").html('<img class="constImage" src="'+roundAnswer.image+'">');
    console.log(roundAnswer);
    answerDiv = Math.floor(Math.random()*4);
    //this is to compare id that the answer is in with the id the guesser chooses
    roundAnswerIn = $("#answer"+answerDiv).html(roundAnswer.name);
    roundAnswerId = roundAnswerIn[0].id;
    //this is to put false answers into other divs that are not occupied by the answer
    possibleAnswer.splice(answerDiv, 1);
  
    
    
    if (constel.length > 8) {
    falseAnswer1 = constel[Math.floor(Math.random()*2)+3];
    nonAnswerDiv1 = $("#answer"+possibleAnswer[0]).html(falseAnswer1.name);
    falseAnswer2 = constel[Math.floor(Math.random()*2)+5];
    nonAnswerDiv2 = $("#answer"+possibleAnswer[1]).html(falseAnswer2.name);
    falseAnswer3 = constel[Math.floor(Math.random()*2)+7];
    nonAnswerDiv3 = $("#answer"+possibleAnswer[2]).html(falseAnswer3.name);
    } else {
        falseAnswer1 = usedAnswer[Math.floor(Math.random()*2)];
        nonAnswerDiv1 = $("#answer"+possibleAnswer[0]).html(falseAnswer1.name);
        falseAnswer2 = usedAnswer[Math.floor(Math.random()*2)+2];
        nonAnswerDiv2 = $("#answer"+possibleAnswer[1]).html(falseAnswer2.name);
        falseAnswer3 = usedAnswer[Math.floor(Math.random()*2)+4];
        nonAnswerDiv3 = $("#answer"+possibleAnswer[2]).html(falseAnswer3.name);
    };
    //putting used answer so there is no repeat
    indexRoundAnswer = constel.indexOf(roundAnswer);
    console.log(usedAnswer);

};



$(".answer").on("click", function(){

    counter++;
    
    if ((this).id == roundAnswerId){
        rightAnswer++
        $(".rightCount").html(rightAnswer);
        usedAnswer = constel.splice(indexRoundAnswer, 1);
        possibleAnswer = [0, 1, 2, 3];
        number = 10;
    } else {
        wrongAnswer++
        $(".wrongCount").html(wrongAnswer);
        usedAnswer = constel.splice(indexRoundAnswer, 1);
        possibleAnswer = [0, 1, 2, 3];
        number = 10;
    } ;

    if(counter === 7){
        alert("good job! you got "+rightAnswer+" points!!!")
        alert("Let's Play Again")
        window.location.reload();
    };

    gameStart ();


    })

   


   
 // roundAnswerIn = $("answer"+answerDiv).html(roundAnswer.name);
    // roundAnswerClass = roundAnswerIn[0];
    
    // console.log(roundAnswerClass);

    // $(".answer").on("click", function(){
    //     userGuess.push((this));
    //     console.log(userGuess);

    // }
    // usedAnswer.push(roundAnswer);
    
    // roundAnswerClass = roundAnswer.className;
    // console.log(roundAnswer.className);
    // )

//     // console.log(usedAnswer[i].name);
//     wait = setTimeout(function() { 

//         window.location.reload();

//         }, 10000)
// }

// console.log(constel[3].symbol);
// $(".mainImage").append('<img class="constImage" src="'+constel[3].image+'">');
// $(".answer1").append(constel.ariesInfo.symbol);
// $(".answer1").append(constel.ariesInfo.name);


//how do i make it so there is no repeat. remove?
//how do i pull 3 other random answers
//4개중에 select 된 애가 유저가 선택한걸줄 어떻게 아는가?



// for (var i = 0; i < constel.length; i++) {
//     roundAnswer = constel[Math.floor(Math.random(i)*12)];
//     $(".mainImage").html('<img class="constImage" src="'+roundAnswer.image+'">');
//     answerDiv = Math.floor(Math.random()*4);
//     // console.log(answerDiv.name);
//     roundAnswerIn = $(".answer"+answerDiv).html(roundAnswer.name);
//     roundAnswerClass = roundAnswerIn[0];
//     console.log(roundAnswerIn);
//     console.log(roundAnswerClass);

// function gameStart (){
//     roundAnswer = constel[Math.floor(Math.random()*constel.length)];
//     $(".mainImage").html('<img class="constImage" src="'+roundAnswer.image+'">');
    
//     answerDiv = Math.floor(Math.random()*4);
//     //this is to compare id that the answer is in with the id the guesser chooses
//     roundAnswerIn = $("#answer"+answerDiv).html(roundAnswer.name);
//     roundAnswerId = roundAnswerIn[0].id;
//     //this is to put false answers into other divs that are not occupied by the answer
//     possibleAnswer.splice(answerDiv, 1);
//     //this is to remove right answer into the div usedAnswer for no repeat
//     indexRoundAnswer = constel.indexOf(roundAnswer);
//     usedAnswer = constel.splice(indexRoundAnswer, 1);
    

    
//     // console.log(indexRoundAnswer);
//     // console.log(usedAnswer);
//     // console.log(constel);
    
//     // console.log(answerIndex);
  
//     if (constel.length > 4) {
//     answerIndex.splice(indexRoundAnswer, 1);
//     answerIndex;
  
//     falseAnswerOption1 = answerIndex[0];
//     falseAnswer1 = constel[falseAnswerOption1];

//     nonAnswerDiv1 = $("#answer"+possibleAnswer[0]).html(falseAnswer1.name);

//     answerIndex.splice(falseAnswerOption1, 1);
//     answerIndex;
//     falseAnswerOption2 = answerIndex[1];
//     falseAnswer2 = constel[falseAnswerOption2];

//     nonAnswerDiv2 = $("#answer"+possibleAnswer[1]).html(falseAnswer2.name);

//     answerIndex.splice(falseAnswerOption2, 1);
//     answerIndex;
//     falseAnswerOption3 = answerIndex[2];
//     falseAnswer3 = constel[falseAnswerOption3];

//     nonAnswerDiv3 = $("#answer"+possibleAnswer[2]).html(falseAnswer3.name);
//     } else {
//         falseAnswer1 = usedAnswer[Math.floor(Math.random()*2)];
//         console.log(falseAnswer1);
//         nonAnswerDiv1 = $("#answer"+possibleAnswer[0]).html(falseAnswer1.name);
//         falseAnswer2 = usedAnswer[Math.floor(Math.random()*2)+2];
//         console.log(falseAnswer2);
//         nonAnswerDiv2 = $("#answer"+possibleAnswer[1]).html(falseAnswer2.name);
//         falseAnswer3 = usedAnswer[Math.floor(Math.random()*2)+4];
//         console.log(falseAnswer3);
//         nonAnswerDiv3 = $("#answer"+possibleAnswer[2]).html(falseAnswer3.name);
//     };
//     //putting used answer so there is no repeat
    
    
    

// };