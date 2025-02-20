$(document).ready(function () {
    $("#rollButton").click(function () {
        $("#rollButton").addClass("pressed");
        setTimeout(function(){
            $("#rollButton").removeClass("pressed");
         }, 100);

        var diceSound = new Audio("./sound.mp3");
        diceSound.play()

        setTimeout(() => {
            diceSound.pause();
            diceSound.currentTime = 0;
        }, 500); 

        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        var dice1 = $(".img1");
        var dice2 = $(".img2");

        dice1.css("animation", "rotate 0.5s linear");
        dice2.css("animation", "rotate 0.5s linear");

        setTimeout(function () {
            dice1.attr("src", `./images/dice${randomNumber1}.png`);
            dice2.attr("src", `./images/dice${randomNumber2}.png`);

            dice1.css("animation", "");
            dice2.css("animation", "");

            let resultText = "";
            if (randomNumber1 > randomNumber2) {
                resultText = "Player 1 Wins! 🚩";
            } else if (randomNumber1 < randomNumber2) {
                resultText = "🚩 Player 2 Wins!";
            } else {
                resultText = "It's a Draw!";
            }

            $("h1").text(resultText);
        }, 500);
    });
});
