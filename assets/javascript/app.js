

var constel = [

    {
        name: " Aries",
        symbol: "♈︎",
        image: "assets/images/Aries.jpg"
        },

    {
        name: "Taurus",
        symbol: "♉︎",
        image: "︎/assets/images/Taurus.jpg"
    },

    {
        name: "Gemini",
        symbol: "♊︎",
        image: "︎assets/images/Gemini.jpg"
    },

    {
        name: "Cancer",
        symbol: "♋︎",
        image: "︎assets/images/Cancer.jpg"
    },

    {
        name: " Leo",
        symbol: "♈︎",
        image: "︎assets/images/Leo.jpg"
    },

    {
        name: "Libra",
        symbol: "♎︎",
        image: "︎assets/images/Libra.jpg"
    },

   {
        name: "Scorpius",
        symbol: "♏︎",
        image: "︎assets/images/Scorpius.jpg"
    },

    {
        name: "Sagittarius",
        symbol: "♐︎",
        image: "︎assets/images/Sagittarius.jpg"
    },

    {
        name: "Capricorn",
        symbol: "♑︎",
        image: "︎assets/images/Capricorn.jpg"
    },

    {
        name: "Aquarius",
        symbol: "♒︎",
        image: "︎assets/images/Aquarius.jpg"
    },

    {
        name: "Pisces",
        symbol: "♓︎",
        image: "︎assets/images/Pisces.jpg"
    },

    {
        name: "Virgo",
        symbol: "♍︎",
        image: "assets/images/Virgo.jpg"
    }
];

var roundAnswer;
var chosen;
var usedAnswer = [];

// console.log(constel[Math.floor(Math.random()*12)].name);

$(".mainImage").append('<img class="constImage" src="'+constel[0].image+'">');
$(".mainImage").append('<img class="constImage" src="'+constel[1].image+'">');

for (var i = 0; i < constel.length; i++) {
    roundAnswer = constel[Math.floor(Math.random()*12)];
    $(".mainImage").append('<img class="constImage" src="'+constel[i].image+'">');
    usedAnswer.push(roundAnswer);
    console.log(usedAnswer[i].name);
    alert("stop");
    
}

// console.log(constel[3].symbol);
// $(".mainImage").append('<img class="constImage" src="'+constel[3].image+'">');
// $(".answer1").append(constel.ariesInfo.symbol);
// $(".answer1").append(constel.ariesInfo.name);






