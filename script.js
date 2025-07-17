
function startGame(choose)
{
	removeElem();
	getComputerChoice = parseInt(Math.random() * 3);
	getHumanChoice = choose;
	let array = ['Rock', 'Paper', 'Scissor'];
	let p = document.createElement('p');
	let form = document.querySelector('.form');
	p.textContent = "";
	if (array[getComputerChoice] == 'Rock' && getHumanChoice == 'Paper'
			|| array[getComputerChoice] == 'Paper' && getHumanChoice == 'Scissor'
			|| array[getComputerChoice] == 'Scissor' && getHumanChoice == 'Rock')
		p.textContent = "You win :)";
	else if(array[getComputerChoice] == 'Paper' && getHumanChoice == 'Rock'
			|| array[getComputerChoice] == 'Scissor' && getHumanChoice == 'Paper'
			|| array[getComputerChoice] == 'Rock' && getHumanChoice == 'Scissor')
		p.textContent = "You lose :(";
	else
		p.textContent = "Draw";
	form.append(p);
}

function removeElem()
{
	if (document.querySelector('p'))
		document.querySelector('p').remove();
}