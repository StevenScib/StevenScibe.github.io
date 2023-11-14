function check(playerChoice){
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoice) {
        document.getElementById('winner').innerText = "It's a tie! :/";
    } 
    else if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            document.getElementById('winner').innerText = 'You win! Rock beats scissors. :)';
        } else {
            document.getElementById('winner').innerText = 'You lose! Paper beats rock. :(';
        }
    } 
    else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            document.getElementById('winner').innerText = 'You win! Paper beats rock. :)';
        } else {
            document.getElementById('winner').innerText = 'You lose! Scissors beats paper. :(';
        }
    } 
    else if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            document.getElementById('winner').innerText = 'You win! Scissors beats paper. :)';
        } else {
            document.getElementById('winner').innerText = 'You lose! Rock beats scissors. :(';
        }
    } 
}