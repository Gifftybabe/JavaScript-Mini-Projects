let highscore = 0;
let trial = 10;

let theNumber = Math.trunc(Math.random() * 10) + 1;

console.log(theNumber)

document.querySelector(".play").addEventListener("click", function() {
    let guess =  Number(document.querySelector(".guess").value);

    if (!guess) {
        document.querySelector(".heading").textContent = "Input A Number";
    }

    else if (guess > theNumber) {
        if (trial > 1){
            document.querySelector(".heading").textContent = "Guess Too High";

            trial --;

            document.querySelector(".trial").textContent = trial;

            document.querySelector(".number").innerHTML = `<img src="https://gifdb.com/images/high/nope-blue-cat-head-0rqxl1jpq20weopy.gif" width="120" height="120"  alt="Correct Image">`;

        }else {
            document.querySelector(".heading").textContent = "You Loose...";

            trial = 0;

            document.querySelector(".trial").textContent = trial;

            document.querySelector("body").style.backgroundColor = "#a90000";

            document.querySelector(".number").innerHTML = `<img src="https://media.tenor.com/1plWI277cB4AAAAM/sad-sorry.gif" width="120" height="120"  alt="Correct Image">`;

            document.querySelector(".guess").style.pointerEvents = 'none';


        }

    }

    else if (guess < theNumber) {
        if (trial > 1) {

            document.querySelector(".heading").textContent = "Guess Too Low";

            trial --;

            document.querySelector(".trial").textContent = trial;

            document.querySelector(".number").innerHTML = `<img src="https://gifdb.com/images/high/finger-wag-and-shaking-head-4awsur35j23o7i0g.gif" width="120" height="120"  alt="Correct Image">`;

        }else {
            document.querySelector(".heading").textContent = "You Loose...";

            trial = 0;

            document.querySelector(".trial").textContent = trial;

            document.querySelector("body").style.backgroundColor = "#a90000";

            document.querySelector(".number").innerHTML = `<img src="https://media.tenor.com/1plWI277cB4AAAAM/sad-sorry.gif" width="120" height="120"  alt="Correct Image">`;


            document.querySelector(".guess").style.pointerEvents = 'none';


        }

    }

    else if (guess === theNumber){
        if (trial > highscore) {
            highscore = trial;
            document.querySelector(".highscore").textContent =  trial;
        }else {
            highscore = highscore;
            document.querySelector(".highscore").textContent =  highscore;
        }

        document.querySelector(".number").innerHTML = `<img src="https://media2.giphy.com/media/lMBcCPM0VYfhh2zCAy/200w.gif?cid=6c09b952xnxw79c9xzd1zb4vn6vfta1gkjmynrr0pkgzcdi9&ep=v1_gifs_search&rid=200w.gif&ct=g" width="120" height="120"  alt="Image">`;

        document.querySelector(".heading").textContent = "You Win!!!";

        document.querySelector("body").style.backgroundColor = "#188351";

        document.querySelector(".guess").style.pointerEvents = 'none';
    }
})

//  Reset
document.querySelector(".reset").addEventListener("click", function() {

    highscore = 0;
    trial = 10;

     theNumber = Math.trunc(Math.random() * 10) + 1;

     console.log(theNumber);

     document.querySelector("body").style.backgroundColor = "rgb(28, 27, 27)";

     document.querySelector(".highscore").textContent = highscore;

     document.querySelector(".trial").textContent = trial;

     document.querySelector(".number").innerHTML = `<img src="https://media.tenor.com/cR8ujewMmSgAAAAM/question-lignon.gif" width="120" height="120"  alt="">`;

     document.querySelector(".heading").textContent = "Guess The Number"

     document.querySelector(".guess").value = "";

     document.querySelector(".guess").style.pointerEvents = 'visible';


});

// Continue
document.querySelector(".continue").addEventListener("click", function() {
    if (trial > highscore) {
        highscore = trial;
        document.querySelector(".highscore").textContent = trial;
    }else {
        highscore = highscore;
        document.querySelector(".highscore").textContent = highscore;
    }

    trial = 10;

     theNumber = Math.trunc(Math.random() * 10) + 1;

     console.log(theNumber);

     document.querySelector("body").style.backgroundColor = "rgb(28, 27, 27)";

     document.querySelector(".trial").textContent = trial;

     document.querySelector(".number").innerHTML = `<img src="https://media.tenor.com/cR8ujewMmSgAAAAM/question-lignon.gif" width="120" height="120"  alt="">`;

     document.querySelector(".heading").textContent = "Guess The Number"


     document.querySelector(".guess").value = "";

     document.querySelector(".guess").style.pointerEvents = 'visible';



});
