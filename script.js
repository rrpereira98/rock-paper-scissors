let pChoice = $("p.pChoice"),
    cChoice = $("p.cChoice"),
    player = "",
    computer = "",
    score1 = 0,
    score2 = 0;


$("i#rock").click(function () {
    let choice = pChoice.html("<i class='a" + $(this).attr("class") + "'></i>");
    player = "rock";

    cpuChoice();

    winningCondition();
});

$("i#paper").click(function () {
    let choice = pChoice.html("<i class='a" + $(this).attr("class") + "'></i>");
    player = "paper"

    cpuChoice();

    winningCondition();
});

$("i#scissors").click(function () {
    let choice = pChoice.html("<i class='a" + $(this).attr("class") + "'></i>");
    player = "scissors"

    cpuChoice();

    winningCondition();
});
//click pedra, click paper, e click tesoura
// $("i.choice").click(function () {
//     let choice = pChoice.html("<i class='a" + $(this).attr("class") + "'></i>")
//     $("i.achoice").removeClass("achoice")

//     cpuChoice()

//     console.log(choice.html())
// })




function cpuChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            cChoice.html("<i class='fas fa-hand-rock'></i>")
            computer = "rock";
            break;
        case 1:
            cChoice.html("<i class='fas fa-hand-paper'></i>")
            computer = "paper";
            break;
        case 2:
            cChoice.html("<i class='fas fa-hand-scissors'></i>")
            computer = "scissors";
            break;

        default:
            break;
    }
}

function winningCondition() {
    switch (player) {
        case "rock":
            if (computer === "paper") {
                score2++;
                $(".score2").text(score2)
                win("#circle2")
            } else if (computer === "scissors") {
                score1++;
                $(".score1").text(score1)
                win("#circle1")
            } else {
                draw()
            }
            break;
        case "paper":
            if (computer === "scissors") {
                score2++;
                $(".score2").text(score2)
                win("#circle2")
            } else if (computer === "rock") {
                score1++;
                $(".score1").text(score1)
                win("#circle1")
            } else {
                draw()
            }
            break;
        case "scissors":
            if (computer === "rock") {
                score2++;
                $(".score2").text(score2)
                win("#circle2")
            } else if (computer === "paper") {
                score1++;
                $(".score1").text(score1)
                win("#circle1")
            } else {
                draw()
            }
            break;

        default:
            break;
    }
}

function win(circle) {
    $(circle).css("border", "13px solid #28a745");
    setTimeout(function (cirlce) {
        $(circle).css("border", "13px solid #353535")
    }, 300)
}

function draw() {
    $(".circle").css("border", "13px solid #FFC107");
    setTimeout(function (cirlce) {
        $(".circle").css("border", "13px solid #353535")
    }, 300)
}
