var canvas;

//screen text
var title;
var firstOption;
var secondOption;
var thridOption;

//inputs
var greeting;
var nameInput;
var egpInput;

//level change background/animation booleans
var startGame;
var superhero;
var door;
var redCoat;
var heroX = 0;

var timer = 60;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	background(120);
	beginning();
}

function draw() {
  background(0);
}

//Screen 1
function beginning(){
	
	background(0);
	greeting = createElement('h1', 'Welcome to Ego, a Superhero Choose Your Own Adventure game.');
	title = createElement('h2', 'Are you a:');
  	firstOption = createA('#','Man');
  	superhero = createImg("Kyle_Bunk1.gif");
  	superhero.position(heroX, 80);

	createElement('br');
  	secondOption = createA('#','Woman');
	createElement('br');
  	thirdOption = createA('#', 'Prefer not to say');
	
	firstOption.mousePressed(Man);
	secondOption.mousePressed(Woman);
	thirdOption.mousePressed(Not_Say);

}

//Screen 2
function Man(){
	background(0);
	superhero.hide();
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	
	title.html("So, you are a Man?");
	
	firstOption = createA('#','Confirm');
	createElement('br');
  	startOver = createA("index.html",'No, Go back.');
	
	firstOption.mousePressed(Yes);
}

function Woman(){
	background(0);
	superhero.hide();
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	
	title.html("So, you are a Woman?");
	
	firstOption = createA('#','Confirm');
	createElement('br');
  	startOver = createA("index.html",'No, Go back.');
	
	firstOption.mousePressed(Yes_Woman);
}

function Not_Say(){
	background(0);
	superhero.hide();
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	
	title.html("So, you prefer not stay?");
	
	firstOption = createA('#','Confirm');
	createElement('br');
  	startOver = createA("index.html",'No, Go back.');
	
	firstOption.mousePressed(Yes_Not);
}

//Screen 3
function Yes(){
	firstOption.hide();
	startOver.hide();
	greeting.hide();
	
	title.html("Do you prefer:");
	
	firstOption = createA('#','Men');
	createElement('br');
  	secondOption = createA('#','Women');
	createElement('br');
  	thirdOption = createA('#','Does not matter');
	
	firstOption.mousePressed(Difficulty_Man_Man);
	secondOption.mousePressed(Difficulty_Man_Woman);
	thirdOption.mousePressed(Difficulty_Man_Bi);
}

function Yes_Woman(){
	firstOption.hide();
	startOver.hide();
	greeting.hide();
	
	title.html("Do you prefer:");
	
	firstOption = createA('#','Men');
	createElement('br');
  	secondOption = createA('#','Women');
	createElement('br');
  	thirdOption = createA('#','Does not matter');
	
	firstOption.mousePressed(Difficulty_Woman_Man);
	secondOption.mousePressed(Difficulty_Woman_Woman);
	thirdOption.mousePressed(Difficulty_Woman_Bi);
}

function Yes_Not(){
	firstOption.hide();
	startOver.hide();
	greeting.hide();
	
	title.html("Do you prefer:");
	
	firstOption = createA('#','Men');
	createElement('br');
  	secondOption = createA('#','Women');
	createElement('br');
  	thirdOption = createA('#','Does not matter');

  	firstOption.mousePressed(Difficulty_Not_Man);
	secondOption.mousePressed(Difficulty_Not_Woman);
	thirdOption.mousePressed(Difficulty_Not_Bi);
}

//Screen 4
function Difficulty_Man_Man(){
	background(0);
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	
	title.html("Are you a:");
	
	firstOption = createA('#','Superhero: Society loves you including law enforcement (Easy)');
	createElement('br');
  	secondOption = createA('#','Vigilante: Society has mixed opinions about you, law enforcement are tasked to arrest you. (Medium)');
	createElement('br');
  	thirdOption = createA('#','Villain: Society hates you, you have to deal with the law enforcement and superheroes. (Hard)');

  	firstOption.mousePressed(Name_Man_Man_Hero);
	secondOption.mousePressed(Name_Man_Man_Vil);
	thirdOption.mousePressed(Name_Man_Man_Villian);
}

function Difficulty_Man_Woman(){
	background(0);
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	
	title.html("Are you a:");
	
	firstOption = createA('#','Superhero: Society loves you including law enforcement (Easy)');
	createElement('br');
  	secondOption = createA('#','Vigilante: Society has mixed opinions about you, law enforcement are tasked to arrest you. (Medium)');
	createElement('br');
  	thirdOption = createA('#','Villain: Society hates you, you have to deal with the law enforcement and superheroes. (Hard)');

  	firstOption.mousePressed(Name_Man_Woman_Hero);
	secondOption.mousePressed(Name_Man_Woman_Vil);
	thirdOption.mousePressed(Name_Man_Woman_Villian);
}

function Difficulty_Man_Bi(){
	background(0);
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	
	title.html("Are you a:");
	
	firstOption = createA('#','Superhero: Society loves you including law enforcement (Easy)');
	createElement('br');
  	secondOption = createA('#','Vigilante: Society has mixed opinions about you, law enforcement are tasked to arrest you. (Medium)');
	createElement('br');
  	thirdOption = createA('#','Villain: Society hates you, you have to deal with the law enforcement and superheroes. (Hard)');

  	firstOption.mousePressed(Name_Man_Bi_Hero);
	secondOption.mousePressed(Name_Man_Bi_Vil);
	thirdOption.mousePressed(Name_Man_Bi_Villian);
}

function Difficulty_Woman_Man(){
	background(0);
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	
	title.html("Are you a:");
	
	firstOption = createA('#','Superhero: Society loves you including law enforcement (Easy)');
	createElement('br');
  	secondOption = createA('#','Vigilante: Society has mixed opinions about you, law enforcement are tasked to arrest you. (Medium)');
	createElement('br');
  	thirdOption = createA('#','Villain: Society hates you, you have to deal with the law enforcement and superheroes. (Hard)');

  	firstOption.mousePressed(Name_Woman_Man_Hero);
	secondOption.mousePressed(Name_Woman_Man_Vil);
	thirdOption.mousePressed(Name_Woman_Man_Villian);
}

function Difficulty_Woman_Woman(){
	background(0);
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	
	title.html("Are you a:");
	
	firstOption = createA('#','Superhero: Society loves you including law enforcement (Easy)');
	createElement('br');
  	secondOption = createA('#','Vigilante: Society has mixed opinions about you, law enforcement are tasked to arrest you. (Medium)');
	createElement('br');
  	thirdOption = createA('#','Villain: Society hates you, you have to deal with the law enforcement and superheroes. (Hard)');

  	firstOption.mousePressed(Name_Woman_Woman_Hero);
	secondOption.mousePressed(Name_Woman_Woman_Vil);
	thirdOption.mousePressed(Name_Woman_Woman_Villian);
}

function Difficulty_Woman_Bi(){
	background(0);
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	
	title.html("Are you a:");
	
	firstOption = createA('#','Superhero: Society loves you including law enforcement (Easy)');
	createElement('br');
  	secondOption = createA('#','Vigilante: Society has mixed opinions about you, law enforcement are tasked to arrest you. (Medium)');
	createElement('br');
  	thirdOption = createA('#','Villain: Society hates you, you have to deal with the law enforcement and superheroes. (Hard)');

  	firstOption.mousePressed(Name_Woman_Bi_Hero);
	secondOption.mousePressed(Name_Woman_Bi_Vil);
	thirdOption.mousePressed(Name_Woman_Bi_Villian);
}

function Difficulty_Not_Man(){
	background(0);
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	
	title.html("Are you a:");
	
	firstOption = createA('#','Superhero: Society loves you including law enforcement (Easy)');
	createElement('br');
  	secondOption = createA('#','Vigilante: Society has mixed opinions about you, law enforcement are tasked to arrest you. (Medium)');
	createElement('br');
  	thirdOption = createA('#','Villain: Society hates you, you have to deal with the law enforcement and superheroes. (Hard)');

  	firstOption.mousePressed(Name_Not_Man_Hero);
	secondOption.mousePressed(Name_Not_Man_Vil);
	thirdOption.mousePressed(Name_Not_Man_Villian);
}

function Difficulty_Not_Woman(){
	background(0);
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	
	title.html("Are you a:");
	
	firstOption = createA('#','Superhero: Society loves you including law enforcement (Easy)');
	createElement('br');
  	secondOption = createA('#','Vigilante: Society has mixed opinions about you, law enforcement are tasked to arrest you. (Medium)');
	createElement('br');
  	thirdOption = createA('#','Villain: Society hates you, you have to deal with the law enforcement and superheroes. (Hard)');

  	firstOption.mousePressed(Name_Not_Woman_Hero);
	secondOption.mousePressed(Name_Not_Woman_Vil);
	thirdOption.mousePressed(Name_Not_Woman_Villian);
}

function Difficulty_Not_Bi(){
	background(0);
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	
	title.html("Are you a:");
	
	firstOption = createA('#','Superhero: Society loves you including law enforcement (Easy)');
	createElement('br');
  	secondOption = createA('#','Vigilante: Society has mixed opinions about you, law enforcement are tasked to arrest you. (Medium)');
	createElement('br');
  	thirdOption = createA('#','Villain: Society hates you, you have to deal with the law enforcement and superheroes. (Hard)');

  	firstOption.mousePressed(Name_Not_Bi_Hero);
	secondOption.mousePressed(Name_Not_Bi_Vil);
	thirdOption.mousePressed(Name_Not_Bi_Villian);
}

//Screen 5
//Man
function Name_Man_Man_Hero(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Man_Man_Hero);
}

function Name_Man_Man_Vil(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Man_Man_Vil);
}

function Name_Man_Man_Villian(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Man_Man_Villan);
}

function Name_Man_Woman_Hero(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Man_Woman_Hero);
}

function Name_Man_Woman_Vil(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Man_Woman_Vil);
}

function Name_Man_Woman_Villian(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Man_Woman_Villan);
}

function Name_Man_Bi_Hero(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Man_Bi_Hero);
}

function Name_Man_Bi_Vil(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Man_Bi_Vil);
}

function Name_Man_Bi_Villian(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Man_Bi_Villan);
}

//Woman
function Name_Woman_Man_Hero(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Woman_Man_Hero);
}

function Name_Woman_Man_Vil(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Woman_Man_Vil);
}

function Name_Woman_Man_Villian(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Woman_Man_Villan);
}

function Name_Woman_Woman_Hero(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Woman_Woman_Hero);
}

function Name_Woman_Woman_Vil(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Woman_Woman_Vil);
}

function Name_Woman_Woman_Villian(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Woman_Woman_Villan);
}

function Name_Woman_Bi_Hero(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Woman_Bi_Hero);
}

function Name_Woman_Bi_Vil(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Woman_Bi_Vil);
}

function Name_Woman_Bi_Villian(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Woman_Bi_Villan);
}

//Non-Binary
function Name_Not_Man_Hero(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Not_Man_Hero);
}

function Name_Not_Man_Vil(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Not_Man_Vil);
}

function Name_Not_Man_Villian(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Not_Man_Villan);
}

function Name_Not_Woman_Hero(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Not_Woman_Hero);
}

function Name_Not_Woman_Vil(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Not_Woman_Vil);
}

function Name_Not_Woman_Villian(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Not_Woman_Villan);
}

function Name_Not_Bi_Hero(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Not_Bi_Hero);
}

function Name_Not_Bi_Vil(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Not_Bi_Vil);
}

function Name_Not_Bi_Villian(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	greeting.hide();
	title.hide();
  	background(0);

  	title1 = createP("Please type in your name and press enter.");

  	createElement('br');

  	nameInput = createInput();
  	nameInput.changed(Ego_Not_Bi_Villan);
}

//Screen 6
function Ego_Man_Man_Hero(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Superhero name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	egoInput.changed(startStory_M_Homo_Hero);
}

function Ego_Man_Man_Vil(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Vigilante name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	egoInput.changed(startStory_M_Homo_Vil);
}

function Ego_Man_Man_Villan(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Villain name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	egoInput.changed(startStory_M_Homo_Villian);
}

function Ego_Man_Woman_Hero(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Superhero name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	egoInput.changed(startStory_M_Hetero_Hero);
}

function Ego_Man_Woman_Vil(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Vigilante name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	egoInput.changed(startStory_M_Hetero_Vil);
}

function Ego_Man_Woman_Villan(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Villain name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	egoInput.changed(startStory_M_Hetero_Villian);
}

function Ego_Man_Bi_Hero(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Superhero name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	egoInput.changed(startStory_M_Bi_Hero);
}

function Ego_Man_Bi_Vil(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Vigilante name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	egoInput.changed(startStory_M_Bi_Vil);
}

function Ego_Man_Bi_Villan(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Villain name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	egoInput.changed(startStory_M_Bi_Villian);
}

//Woman
function Ego_Woman_Woman_Hero(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Superhero name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	//egoInput.changed(startStory_W_Homo_Hero);
}

function Ego_Woman_Woman_Vil(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Vigilante name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	//egoInput.changed(startStory_W_Homo_Vil);
}

function Ego_Woman_Woman_Villan(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Villain name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	//egoInput.changed(startStory_W_Homo_Villian);
}

function Ego_Woman_Man_Hero(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Superhero name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	//egoInput.changed(startStory_W_Hetero_Hero);
}

function Ego_Woman_Man_Vil(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Vigilante name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	//egoInput.changed(startStory_W_Hetro_Vil);
}

function Ego_Woman_Man_Villan(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Villain name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	//egoInput.changed(startStory_W_Hetro_Villian);
}

function Ego_Woman_Bi_Hero(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Superhero name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	//egoInput.changed(startStory_W_Bi_Hero);
}

function Ego_Woman_Bi_Vil(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Vigilante name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	//egoInput.changed(startStory_W_Bi_Vil);
}

function Ego_Woman_Bi_Villan(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Villain name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	//egoInput.changed(startStory_W_Bi_Villian);
}

//Non
function Ego_Not_Woman_Hero(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Superhero name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	//egoInput.changed(startStory_N_Homo_Hero);
}

function Ego_Not_Woman_Vil(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Vigilante name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	//egoInput.changed(startStory_N_Homo_Vil);
}

function Ego_Not_Woman_Villan(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Villain name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	//egoInput.changed(startStory_N_Homo_Villian);
}

function Ego_Not_Man_Hero(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Superhero name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	//egoInput.changed(startStory_N_Hetero_Hero);
}

function Ego_Not_Man_Vil(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Vigilante name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	//egoInput.changed(startStory_N_Hetro_Vil);
}

function Ego_Not_Man_Villan(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Villain name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	//egoInput.changed(startStory_N_Hetro_Villian);
}

function Ego_Not_Bi_Hero(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Superhero name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	//egoInput.changed(startStory_N_Bi_Hero);
}

function Ego_Not_Bi_Vil(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Vigilante name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	//egoInput.changed(startStory_N_Bi_Vil);
}

function Ego_Not_Bi_Villan(){
	nameInput.hide();

	title1.html (nameInput.value() + ", please type in your Villain name and press enter.");

	createElement('br');

  	egoInput = createInput();
  	//egoInput.changed(startStory_N_Bi_Villian);
}	

//Screen 7
//Man
function startStory_M_Homo_Hero(){
	background(0);
	egoInput.hide();
	title1.hide();

	title = createElement('h2',"You woke up in a great mood today. The sun was shining brightly in the sky, your breakfast came out perfectly, and this is the day that you start to live your best life possible. Today is the day you start at Legion. Legion is a fortune 500 company that employs people with powers and gives them the opportunity to make a positive change in the world. Legion is the type of company that everyone looked up to and wants to work for. They get thousands of applications a year. Yet, here you are walking through the tallest building in the world with state-of-the-art technology and being greeted by a tall handsome man with the most beautiful brown eyes you have ever seen.");
	title.position(0,10);

	firstOption = createA('#','Contiune');

	firstOption.position(650,220);

	firstOption.mousePressed(conStory_M_Homo_Hero);

}

//Screen 8
//Man
function conStory_M_Homo_Hero(){
	background(0);
	title.hide();
	firstOption.hide()

	title = createElement('h2',"“Hi, you must be, " + nameInput.value() + "! Welcome to Legion. I’m Angelo Lancaster and you will be working under me while you intern here.” Angelo said with a 1000-watt smile on his face. Just looking at his face made me optimistic for the future.");
	title1 = createElement('h2',"How would you like to reply?");
	title.position(0,10);
	title1.position(540,90);
	

	firstOption = createA('#','Stutter');
	createElement('br');
	secondOption = createA('#','Confindently');

	firstOption.mousePressed(Stutter_M_Homo_Hero);
	secondOption.mousePressed(Confindently_M_Homo_Hero);

}

//Screen 9
function Stutter_M_Homo_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"“He-He-Hello, Mr.Lancaster. I, um, looking forward to working with you.” You finally managed to stutter through your sentence. You cannot believe the first thing you said to your boss was a struggle sentence. You were in the middle of mentally beating yourself up when all of a sudden you heard laughter. You look up to see your boss laughing lightly into his hand. He pretended to cough when he realized you were looking at him. “Sorry, it just your nervousness remembered me a lot of myself when I started here. I was so nervous that I spilled coffee all over an important client.” He continued to laugh, this time without hiding it.");
	title.position(0,10);
	title1 = createElement('h2',"Don’t worry, "  + nameInput.value() + " it is nice to meet you, and please call me Angelo. Now follow me and I’ll show you to your desk and after you get settled I’ll show you the ropes of this place.” He says while walking and giving me a wink when he mentioned showing me around.")
	title1.position(0,150);

	firstOption = createA('#','Contiune');

	firstOption.position(650,250);

	firstOption.mousePressed(Pen_M_Homo_Hero);

}

function Confindently_M_Homo_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"“Hello, Mr. Lancaster. I am looking forward to working with you.” You exclaimed while holding out my hand. He smiles even brighter and take my hand and gives it a firm shake. “Nice to meet you,"  + nameInput.value() + ", and please call me Angelo. Now follow me and I’ll show you to your desk and after you get settled I’ll show you the ropes of this place” He says while walking and giving me a wink when he mentioned showing me around.");
	title.position(0,10);

	firstOption = createA('#','Contiune');

	firstOption.position(650,220);

	firstOption.mousePressed(Pen_M_Homo_Hero);

}
//Screen 10
//Man
function Pen_M_Homo_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();

	title = createElement('h2', "By the time it was ready to leave for the day, you did not want to leave. Angelo kept his promise and showed you around and let you know that you were working in Operative Coordination, which meant you were going to help him decide where Legion’s super-powered employees are going to go and positively change the world. You were so excited about doing something amazing like you always dreamt of. Everything was going great until you walked into the lobby and you drop your pen.");
	title.position(0,10);

	title1 = createElement('h2',"Are you going to pick up the pen?")
	title1.position(525,120);

	firstOption = createA('#','Yes, that’s my lucky pen.');
	firstOption.position(620,180);
	createElement('br');
	secondOption = createA('#','No, it is just a pen. I can always get another one.');
	secondOption.position(540,200);

	firstOption.mousePressed(OneEncounter_M_Homo_Hero);
	secondOption.mousePressed(OneDead_M_Homo_Hero);
}

//Screen 11
//Man
function OneEncounter_M_Homo_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You look at the pen and of course you are going to pick it up. You aced tests with this pen. When you bend down and picked it up, you also realized that you shoe was untied. Just as you go to tie your shoes, you felt a rush of wind rush over your head, following with a loud crashing sound. You looked up to find a destroyed, wooden desk right in front of you. ‘What the hell?’ You think as you turn around to the direction the desk came from. What you saw shocked you to the core. Two people were fighting just behind you and one of them clearly has powers. One of them is wearing a green and black suit using some sort of psychic powers and the other person was wearing a red trench coat and hat and jumping around as if not having powers does not put her at a disadvantage here. The red trench coat lady lands a heavily blow on the one in green. They land just a couple feet from you. They get up and you two make eye contact and they smile at you. All of a sudden you have an intense sense of dread.");
	title.position(0,10);

	title1 = createElement('h2',"Get up and run away?");
	title1.position(560,230);

	firstOption = createA('#','Um, duh! Get me away from the green psycho.');
	firstOption.position(530,290);
	createElement('br');
	secondOption = createA('#','No, who is this green psycho and why are they smiling at me?');
	secondOption.position(500,320);

	firstOption.mousePressed(Run_M_Homo_Hero);
	secondOption.mousePressed(GreenEncounter_M_Homo_Hero);

}

//Screen 12
function OneDead_M_Homo_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You look at the pen and shrug. 'Who cares about a pen?’ you think. You continued to walk through the lobby not thinking twice about the pen. You were so focused on what restaurant to eat at that you didn’t realize a desk heading straight for the back of your head. Next thing you know, everything goes black.")
	title.position(0,10);

	title1 = createElement('h2',"Congratulations. You died by a desk.")
	title1.position(525,130);

	firstOption = createA('#','Really!? All because I didn’t pick up a pen. Go back!');
	firstOption.mousePressed(Pen_M_Homo_Hero);
}

//Screen 13
function Run_M_Homo_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You get up as quick as you can and run in the direction of… actually you don’t know where you are running to.")
	title.position(0,10);

	firstOption = createA('#','Beautiful person in red. (click red hat)');
	firstOption.position(500,180);
	createElement('br');
	secondOption = createA('#','The Door. (click the door)');
	secondOption.position(540,200);

	redCoat = createImg("redCoat.png");
  	redCoat.position(0, 80);

  	door = createImg("door.png");
  	door.position(1100, 80);

	redCoat.mousePressed(RedEncounter_M_Homo_Hero);
	door.mousePressed(Green2Encounter_M_Homo_Hero);

}

function GreenEncounter_M_Homo_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You decided to ignore Greenie and contiuned to tie your shoes. You hoped that if you ignored Oscar the Grunge then they would go away. You plan of course didn’t work cause next thing you know is you see feet indictating someone is standing in front of you. You didn’t have to look up to know who it was, but you looked anyways. When you look up you were greeted  the same wicked smile from before. “Hello, darling.” Is all you hear before everything goes dark. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Homo_Hero);

}

function RedEncounter_M_Homo_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();
	redCoat.hide();
	door.hide();

	title = createElement('h2',"You run towards the man in red and as you ran towards your possible savior, you hear footsteps behind you. Hearing that just made you run faster towards the red individual. “Help me!” You scream as you run faster. The red individual finally decided to literally jump into action and managed to land between you and the green freak. You run further into the building and hid into the first room you could see. You don’t know how long you stayed in that room but eventually you hear footsteps approaching and the door opens. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Homo_Hero);

}

function Green2Encounter_M_Homo_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();
	redCoat.hide();
	door.hide();

	title = createElement('h2',"You run towards the door as fast as you can. Whatever going on you do not want any part of it. As you ran towards your freedom, you hear footsteps behind you. Hearing that just made you run faster towards the door. However, as you get to the door, the green freak appears in front of you with the same wicked smile.“Hello, darling.” Is all you hear before everything goes dark. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Homo_Vil);

}

//Vil
function startStory_M_Homo_Vil(){
	background(0);
	egoInput.hide();
	title1.hide();

	title = createElement('h2',"You woke up in a great mood today. The sun was shining brightly in the sky, your breakfast came out perfectly, and this is the day that you start to live your best life possible. Today is the day you start at Legion. Legion is a fortune 500 company that employs people with powers and gives them the opportunity to make a positive change in the world. Legion is the type of company that everyone looked up to and wants to work for. They get thousands of applications a year. Yet, here you are walking through the tallest building in the world with state-of-the-art technology and being greeted by a tall handsome man with the most beautiful brown eyes you have ever seen.");
	title.position(0,10);

	firstOption = createA('#','Contiune');

	firstOption.position(650,220);

	firstOption.mousePressed(conStory_M_Homo_Vil);

}

function conStory_M_Homo_Vil(){
	background(0);
	title.hide();
	firstOption.hide()

	title = createElement('h2',"“Hi, you must be, " + nameInput.value() + "! Welcome to Legion. I’m Angelo Lancaster and you will be working under me while you intern here.” Angelo said with a 1000-watt smile on his face. Just looking at his face made me optimistic for the future.");
	title1 = createElement('h2',"How would you like to reply?");
	title.position(0,10);
	title1.position(540,90);
	

	firstOption = createA('#','Stutter');
	createElement('br');
	secondOption = createA('#','Confindently');

	firstOption.mousePressed(Stutter_M_Homo_Vil);
	secondOption.mousePressed(Confindently_M_Homo_Vil);

}

//Screen 9
function Stutter_M_Homo_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"“He-He-Hello, Mr.Lancaster. I, um, looking forward to working with you.” You finally managed to stutter through your sentence. You cannot believe the first thing you said to your boss was a struggle sentence. You were in the middle of mentally beating yourself up when all of a sudden you heard laughter. You look up to see your boss laughing lightly into his hand. He pretended to cough when he realized you were looking at him. “Sorry, it just your nervousness remembered me a lot of myself when I started here. I was so nervous that I spilled coffee all over an important client.” He continued to laugh, this time without hiding it.");
	title.position(0,10);
	title1 = createElement('h2',"Don’t worry, "  + nameInput.value() + " it is nice to meet you, and please call me Angelo. Now follow me and I’ll show you to your desk and after you get settled I’ll show you the ropes of this place.” He says while walking and giving me a wink when he mentioned showing me around.")
	title1.position(0,150);

	firstOption = createA('#','Contiune');

	firstOption.position(650,250);

	firstOption.mousePressed(Pen_M_Homo_Vil);

}

function Confindently_M_Homo_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"“Hello, Mr. Lancaster, I am looking forward to working with you.” You exclaimed while holding out my hand. He smiles even brighter and take my hand and gives it a firm shake. “Nice to meet you, "  + nameInput.value() + ", and please call me Angelo. Now follow me and I’ll show you to your desk and after you get settled I’ll show you the ropes of this place” He says while walking and giving me a wink when he mentioned showing me around.");
	title.position(0,10);

	firstOption = createA('#','Contiune');

	firstOption.position(650,220);

	firstOption.mousePressed(Pen_M_Homo_Vil);

}
//Screen 10
//Man
function Pen_M_Homo_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();

	title = createElement('h2', "By the time it was ready to leave for the day, you did not want to leave. Angelo kept his promise and showed you around and let you know that you were working in Operative Coordination, which meant you were going to help him decide where Legion’s super-powered employees are going to go and positively change the world. You were so excited about doing something amazing like you always dreamt of. Everything was going great until you walked into the lobby and you drop your pen.");
	title.position(0,10);

	title1 = createElement('h2',"Are you going to pick up the pen?")
	title1.position(525,120);

	firstOption = createA('#','Yes, that’s my lucky pen.');
	firstOption.position(620,180);
	createElement('br');
	secondOption = createA('#','No, it is just a pen. I can always get another one.');
	secondOption.position(540,200);

	firstOption.mousePressed(OneEncounter_M_Homo_Vil);
	secondOption.mousePressed(OneDead_M_Homo_Vil);
}

//Screen 11
//Man
function OneEncounter_M_Homo_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You look at the pen and of course you are going to pick it up. You aced tests with this pen. When you bend down and picked it up, you also realized that you shoe was untied. Just as you go to tie your shoes, you felt a rush of wind rush over your head, following with a loud crashing sound. You looked up to find a destroyed, wooden desk right in front of you. ‘What the hell?’ You think as you turn around to the direction the desk came from. What you saw shocked you to the core. Two people were fighting just behind you and one of them clearly has powers. One of them is wearing a green and black suit using some sort of psychic powers and the other person was wearing a red trench coat and hat and jumping around as if not having powers does not put her at a disadvantage here. The red trench coat lady lands a heavily blow on the one in green. They land just a couple feet from you. They get up and you two make eye contact and they smile at you. All of a sudden you have an intense sense of dread.");
	title.position(0,10);

	title1 = createElement('h2',"Get up and run away?");
	title1.position(560,230);

	firstOption = createA('#','Um, duh! Get me away from the green psycho.');
	firstOption.position(530,290);
	createElement('br');
	secondOption = createA('#','No, who is this green psycho and why are they smiling at me?');
	secondOption.position(500,320);

	firstOption.mousePressed(Run_M_Homo_Vil);
	secondOption.mousePressed(GreenEncounter_M_Homo_Vil);

}

//Screen 12
function OneDead_M_Homo_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You look at the pen and shrug. 'Who cares about a pen?’ you think. You continued to walk through the lobby not thinking twice about the pen. You were so focused on what restaurant to eat at that you didn’t realize a desk heading straight for the back of your head. Next thing you know, everything goes black.")
	title.position(0,10);

	title1 = createElement('h2',"Congratulations. You died by a desk.")
	title1.position(525,130);

	firstOption = createA('#','Really!? All because I didn’t pick up a pen. Go back!');
	firstOption.mousePressed(Pen_M_Homo_Vil);
}

//Screen 13
function Run_M_Homo_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You get up as quick as you can and run in the direction of… actually you don’t know where you are running to.")
	title.position(0,10);

	firstOption = createA('#','Beautiful person in red. (click red hat)');
	firstOption.position(500,180);
	createElement('br');
	secondOption = createA('#','The Door. (click the door)');
	secondOption.position(540,200);

	redCoat = createImg("redCoat.png");
  	redCoat.position(0, 80);

  	door = createImg("door.png");
  	door.position(1100, 80);

	redCoat.mousePressed(RedEncounter_M_Homo_Vil);
	door.mousePressed(Green2Encounter_M_Homo_Vil);

}

function GreenEncounter_M_Homo_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You decided to ignore Greenie and contiuned to tie your shoes. You hoped that if you ignored Oscar the Grunge then they would go away. You plan of course didn’t work cause next thing you know is you see feet indictating someone is standing in front of you. You didn’t have to look up to know who it was, but you looked anyways. When you look up you were greeted  the same wicked smile from before. “Hello, darling.” Is all you hear before everything goes dark. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Homo_Vil);

}

function RedEncounter_M_Homo_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();
	redCoat.hide();
	door.hide();

	title = createElement('h2',"You run towards the man in red and as you ran towards your possible savior, you hear footsteps behind you. Hearing that just made you run faster towards the red individual. “Help me!” You scream as you run faster. The red individual finally decided to literally jump into action and managed to land between you and the green freak. You run further into the building and hid into the first room you could see. You don’t know how long you stayed in that room but eventually you hear footsteps approaching and the door opens. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Homo_Vil);

}

function Green2Encounter_M_Homo_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();
	redCoat.hide();
	door.hide();

	title = createElement('h2',"You run towards the door as fast as you can. Whatever going on you do not want any part of it. As you ran towards your freedom, you hear footsteps behind you. Hearing that just made you run faster towards the door. However, as you get to the door, the green freak appears in front of you with the same wicked smile.“Hello, darling.” Is all you hear before everything goes dark. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Homo_Vil);

}

//Vil
function startStory_M_Homo_Villian(){
	background(0);
	egoInput.hide();
	title1.hide();

	title = createElement('h2',"You woke up in a great mood today. The sun was shining brightly in the sky, your breakfast came out perfectly, and this is the day that you start to live your best life possible. Today is the day you start at Legion. Legion is a fortune 500 company that employs people with powers and gives them the opportunity to make a positive change in the world. Legion is the type of company that everyone looked up to and wants to work for. They get thousands of applications a year. Yet, here you are walking through the tallest building in the world with state-of-the-art technology and being greeted by a tall handsome man with the most beautiful brown eyes you have ever seen.");
	title.position(0,10);

	firstOption = createA('#','Contiune');

	firstOption.position(650,220);

	firstOption.mousePressed(conStory_M_Homo_Villian);

}

function conStory_M_Homo_Villian(){
	background(0);
	title.hide();
	firstOption.hide()

	title = createElement('h2',"“Hi, you must be, " + nameInput.value() + "! Welcome to Legion. I’m Angelo Lancaster and you will be working under me while you intern here.” Angelo said with a 1000-watt smile on his face. Just looking at his face made me optimistic for the future.");
	title1 = createElement('h2',"How would you like to reply?");
	title.position(0,10);
	title1.position(540,90);
	

	firstOption = createA('#','Stutter');
	createElement('br');
	secondOption = createA('#','Confindently');

	firstOption.mousePressed(Stutter_M_Homo_Villian);
	secondOption.mousePressed(Confindently_M_Homo_Villian);

}

//Screen 9
function Stutter_M_Homo_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"“He-He-Hello, Mr.Lancaster. I, um, looking forward to working with you.” You finally managed to stutter through your sentence. You cannot believe the first thing you said to your boss was a struggle sentence. You were in the middle of mentally beating yourself up when all of a sudden you heard laughter. You look up to see your boss laughing lightly into his hand. He pretended to cough when he realized you were looking at him. “Sorry, it just your nervousness remembered me a lot of myself when I started here. I was so nervous that I spilled coffee all over an important client.” He continued to laugh, this time without hiding it.");
	title.position(0,10);
	title1 = createElement('h2',"Don’t worry, "  + nameInput.value() + " it is nice to meet you, and please call me Angelo. Now follow me and I’ll show you to your desk and after you get settled I’ll show you the ropes of this place.” He says while walking and giving me a wink when he mentioned showing me around.")
	title1.position(0,150);

	firstOption = createA('#','Contiune');

	firstOption.position(650,250);

	firstOption.mousePressed(Pen_M_Homo_Villian);

}

function Confindently_M_Homo_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"“Hello, Mr. Lancaster. I am looking forward to working with you.” You exclaimed while holding out my hand. He smiles even brighter and take my hand and gives it a firm shake. “Nice to meet you,"  + nameInput.value() + ", and please call me Angelo. Now follow me and I’ll show you to your desk and after you get settled I’ll show you the ropes of this place” He says while walking and giving me a wink when he mentioned showing me around.");
	title.position(0,10);

	firstOption = createA('#','Contiune');

	firstOption.position(650,220);

	firstOption.mousePressed(Pen_M_Homo_Villian);

}
//Screen 10
//Man
function Pen_M_Homo_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();

	title = createElement('h2', "By the time it was ready to leave for the day, you did not want to leave. Angelo kept him promise and showed you around and let you know that you were working in Operative Coordination, which meant you were going to help him decide where Legion’s super-powered employees are going to go and positively change the world. You were so excited about doing something amazing like you always dreamt of. Everything was going great until you walked into the lobby and you drop your pen.");
	title.position(0,10);

	title1 = createElement('h2',"Are you going to pick up the pen?")
	title1.position(525,120);

	firstOption = createA('#','Yes, that’s my lucky pen.');
	firstOption.position(620,180);
	createElement('br');
	secondOption = createA('#','No, it is just a pen. I can always get another one.');
	secondOption.position(540,200);

	firstOption.mousePressed(OneEncounter_M_Homo_Villian);
	secondOption.mousePressed(OneDead_M_Homo_Villian);
}

//Screen 11
//Man
function OneEncounter_M_Homo_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You look at the pen and of course you are going to pick it up. You aced tests with this pen. When you bend down and picked it up, you also realized that you shoe was untied. Just as you go to tie your shoes, you felt a rush of wind rush over your head, following with a loud crashing sound. You looked up to find a destroyed, wooden desk right in front of you. ‘What the hell?’ You think as you turn around to the direction the desk came from. What you saw shocked you to the core. Two people were fighting just behind you and one of them clearly has powers. One of them is wearing a green and black suit using some sort of psychic powers and the other person was wearing a red trench coat and hat and jumping around as if not having powers does not put her at a disadvantage here. The red trench coat lady lands a heavily blow on the one in green. They land just a couple feet from you. They get up and you two make eye contact and they smile at you. All of a sudden you have an intense sense of dread.");
	title.position(0,10);

	title1 = createElement('h2',"Get up and run away?");
	title1.position(560,230);

	firstOption = createA('#','Um, duh! Get me away from the green psycho.');
	firstOption.position(530,290);
	createElement('br');
	secondOption = createA('#','No, who is this green psycho and why are they smiling at me?');
	secondOption.position(500,320);

	firstOption.mousePressed(Run_M_Homo_Villian);
	secondOption.mousePressed(GreenEncounter_M_Homo_Villian);

}

//Screen 12
function OneDead_M_Homo_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You look at the pen and shrug. 'Who cares about a pen?’ you think. You continued to walk through the lobby not thinking twice about the pen. You were so focused on what restaurant to eat at that you didn’t realize a desk heading straight for the back of your head. Next thing you know, everything goes black.")
	title.position(0,10);

	title1 = createElement('h2',"Congratulations. You died by a desk.")
	title1.position(525,130);

	firstOption = createA('#','Really!? All because I didn’t pick up a pen. Go back!');
	firstOption.mousePressed(Pen_M_Homo_Villian);
}

//Screen 13
function Run_M_Homo_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You get up as quick as you can and run in the direction of… actually you don’t know where you are running to.")
	title.position(0,10);

	firstOption = createA('#','Beautiful person in red. (click red hat)');
	firstOption.position(500,180);
	createElement('br');
	secondOption = createA('#','The Door. (click the door)');
	secondOption.position(540,200);

	redCoat = createImg("redCoat.png");
  	redCoat.position(0, 80);

  	door = createImg("door.png");
  	door.position(1100, 80);

	redCoat.mousePressed(RedEncounter_M_Homo_Villian);
	door.mousePressed(Green2Encounter_M_Homo_Villian);

}

function GreenEncounter_M_Homo_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You decided to ignore Greenie and contiuned to tie your shoes. You hoped that if you ignored Oscar the Grunge then they would go away. You plan of course didn’t work cause next thing you know is you see feet indictating someone is standing in front of you. You didn’t have to look up to know who it was, but you looked anyways. When you look up you were greeted  the same wicked smile from before. “Hello, darling.” Is all you hear before everything goes dark. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Homo_Villian);

}

function RedEncounter_M_Homo_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();
	redCoat.hide();
	door.hide();

	title = createElement('h2',"You run towards the man in red and as you ran towards your possible savior, you hear footsteps behind you. Hearing that just made you run faster towards the red individual. “Help me!” You scream as you run faster. The red individual finally decided to literally jump into action and managed to land between you and the green freak. You run further into the building and hid into the first room you could see. You don’t know how long you stayed in that room but eventually you hear footsteps approaching and the door opens. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Homo_Villian);

}

function Green2Encounter_M_Homo_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();
	redCoat.hide();
	door.hide();

	title = createElement('h2',"You run towards the door as fast as you can. Whatever going on you do not want any part of it. As you ran towards your freedom, you hear footsteps behind you. Hearing that just made you run faster towards the door. However, as you get to the door, the green freak appears in front of you with the same wicked smile.“Hello, darling.” Is all you hear before everything goes dark. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Homo_Villian);

}

//Straight
function startStory_M_Hetero_Hero(){
	background(0);
	egoInput.hide();
	title1.hide();

	title = createElement('h2',"You woke up in a great mood today. The sun was shining brightly in the sky, your breakfast came out perfectly, and this is the day that you start to live your best life possible. Today is the day you start at Legion. Legion is a fortune 500 company that employs people with powers and gives them the opportunity to make a positive change in the world. Legion is the type of company that everyone looked up to and wants to work for. They get thousands of applications a year. Yet, here you are walking through the tallest building in the world with state-of-the-art technology and being greeted by a tall handsome man with the most beautiful brown eyes you have ever seen.");
	title.position(0,10);

	firstOption = createA('#','Contiune');

	firstOption.position(650,220);

	firstOption.mousePressed(conStory_M_Hetero_Hero);

}

function conStory_M_Hetero_Hero(){
	background(0);
	title.hide();Hetero
	firstOption.hide()

	title = createElement('h2',"“Hi, you must be, " + nameInput.value() + "! Welcome to Legion. I’m Vivianne Lancaster and you will be working under me while you intern here.” Vivianne said with a 1000-watt smile on her face. Just looking at her face made me optimistic for the future.");
	title1 = createElement('h2',"How would you like to reply?");
	title.position(0,10);
	title1.position(540,90);
	

	firstOption = createA('#','Stutter');
	createElement('br');
	secondOption = createA('#','Confindently');

	firstOption.mousePressed(Stutter_M_Hetero_Hero);
	secondOption.mousePressed(Confindently_M_Hetero_Hero);

}

//Screen 9
function Stutter_M_Hetero_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"“He-He-Hello, Ms.Lancaster. I, um, looking forward to working with you.” You finally managed to stutter through your sentence. You cannot believe the first thing you said to your boss was a struggle sentence. You were in the middle of mentally beating yourself up when all of a sudden you heard laughter. You look up to see your boss laughing lightly into her hand. She pretended to cough when she realized you were looking at her. “Sorry, it just your nervousness remembered me a lot of myself when I started here. I was so nervous that I spilled coffee all over an important client.” She continued to laugh, this time without hiding it.");
	title.position(0,10);
	title1 = createElement('h2',"Don’t worry, "  + nameInput.value() + " it is nice to meet you, and please call me Vivianne. Now follow me and I’ll show you to your desk and after you get settled I’ll show you the ropes of this place.” She says while walking and giving me a wink when she mentioned showing me around.")
	title1.position(0,150);

	firstOption = createA('#','Contiune');

	firstOption.position(650,250);

	firstOption.mousePressed(Pen_M_Hetero_Hero);

}

function Confindently_M_Hetero_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"“Hello, Ms. Lancaster. I am looking forward to working with you.” You exclaimed while holding out my hand. He smiles even brighter and take my hand and gives it a firm shake. “Nice to meet you,"  + nameInput.value() + ", and please call me Vivianne. Now follow me and I’ll show you to your desk and after you get settled I’ll show you the ropes of this place” He says while walking and giving me a wink when he mentioned showing me around.");
	title.position(0,10);

	firstOption = createA('#','Contiune');

	firstOption.position(650,220);

	firstOption.mousePressed(Pen_M_Hetero_Hero);

}
//Screen 10
//Man
function Pen_M_Hetero_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();

	title = createElement('h2', "By the time it was ready to leave for the day, you did not want to leave. Vivianne kept her promise and showed you around and let you know that you were working in Operative Coordination, which meant you were going to help her decide where Legion’s super-powered employees are going to go and positively change the world. You were so excited about doing something amazing like you always dreamt of. Everything was going great until you walked into the lobby and you drop your pen.");
	title.position(0,10);

	title1 = createElement('h2',"Are you going to pick up the pen?")
	title1.position(525,120);

	firstOption = createA('#','Yes, that’s my lucky pen.');
	firstOption.position(620,180);
	createElement('br');
	secondOption = createA('#','No, it is just a pen. I can always get another one.');
	secondOption.position(540,200);

	firstOption.mousePressed(OneEncounter_M_Hetero_Hero);
	secondOption.mousePressed(OneDead_M_Hetero_Hero);
}

//Screen 11
//Man
function OneEncounter_M_Hetero_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You look at the pen and of course you are going to pick it up. You aced tests with this pen. When you bend down and picked it up, you also realized that you shoe was untied. Just as you go to tie your shoes, you felt a rush of wind rush over your head, following with a loud crashing sound. You looked up to find a destroyed, wooden desk right in front of you. ‘What the hell?’ You think as you turn around to the direction the desk came from. What you saw shocked you to the core. Two people were fighting just behind you and one of them clearly has powers. One of them is wearing a green and black suit using some sort of psychic powers and the other person was wearing a red trench coat and hat and jumping around as if not having powers does not put her at a disadvantage here. The red trench coat lady lands a heavily blow on the one in green. They land just a couple feet from you. They get up and you two make eye contact and they smile at you. All of a sudden you have an intense sense of dread.");
	title.position(0,10);

	title1 = createElement('h2',"Get up and run away?");
	title1.position(560,230);

	firstOption = createA('#','Um, duh! Get me away from the green psycho.');
	firstOption.position(530,290);
	createElement('br');
	secondOption = createA('#','No, who is this green psycho and why are they smiling at me?');
	secondOption.position(500,320);

	firstOption.mousePressed(Run_M_Hetero_Hero);
	secondOption.mousePressed(GreenEncounter_M_Hetero_Hero);

}

//Screen 12
function OneDead_M_Hetero_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You look at the pen and shrug. 'Who cares about a pen?’ you think. You continued to walk through the lobby not thinking twice about the pen. You were so focused on what restaurant to eat at that you didn’t realize a desk heading straight for the back of your head. Next thing you know, everything goes black.")
	title.position(0,10);

	title1 = createElement('h2',"Congratulations. You died by a desk.")
	title1.position(525,130);

	firstOption = createA('#','Really!? All because I didn’t pick up a pen. Go back!');
	firstOption.mousePressed(Pen_M_Hetero_Hero);
}

//Screen 13
function Run_M_Hetero_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You get up as quick as you can and run in the direction of… actually you don’t know where you are running to.")
	title.position(0,10);

	firstOption = createA('#','Beautiful person in red. (click red hat)');
	firstOption.position(500,180);
	createElement('br');
	secondOption = createA('#','The Door. (click the door)');
	secondOption.position(540,200);

	redCoat = createImg("redCoat.png");
  	redCoat.position(0, 80);

  	door = createImg("door.png");
  	door.position(1100, 80);

	redCoat.mousePressed(RedEncounter_M_Hetero_Hero);
	door.mousePressed(Green2Encounter_M_Hetero_Hero);

}

function GreenEncounter_M_Hetero_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You decided to ignore Greenie and contiuned to tie your shoes. You hoped that if you ignored Oscar the Grunge then they would go away. You plan of course didn’t work cause next thing you know is you see feet indictating someone is standing in front of you. You didn’t have to look up to know who it was, but you looked anyways. When you look up you were greeted  the same wicked smile from before. “Hello, darling.” Is all you hear before everything goes dark. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Hetero_Hero);

}

function RedEncounter_M_Hetero_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();
	redCoat.hide();
	door.hide();

	title = createElement('h2',"You run towards the lady in red and as you ran towards your possible savior, you hear footsteps behind you. Hearing that just made you run faster towards the red individual. “Help me!” You scream as you run faster. The red individual finally decided to literally jump into action and managed to land between you and the green freak. You run further into the building and hid into the first room you could see. You don’t know how long you stayed in that room but eventually you hear footsteps approaching and the door opens. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Hetero_Hero);

}

function Green2Encounter_M_Hetero_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();
	redCoat.hide();
	door.hide();

	title = createElement('h2',"You run towards the door as fast as you can. Whatever going on you do not want any part of it. As you ran towards your freedom, you hear footsteps behind you. Hearing that just made you run faster towards the door. However, as you get to the door, the green freak appears in front of you with the same wicked smile.“Hello, darling.” Is all you hear before everything goes dark. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Hetero_Hero);

}

function startStory_M_Hetero_Vil(){
	background(0);
	egoInput.hide();
	title1.hide();

	title = createElement('h2',"You woke up in a great mood today. The sun was shining brightly in the sky, your breakfast came out perfectly, and this is the day that you start to live your best life possible. Today is the day you start at Legion. Legion is a fortune 500 company that employs people with powers and gives them the opportunity to make a positive change in the world. Legion is the type of company that everyone looked up to and wants to work for. They get thousands of applications a year. Yet, here you are walking through the tallest building in the world with state-of-the-art technology and being greeted by a tall handsome man with the most beautiful brown eyes you have ever seen.");
	title.position(0,10);

	firstOption = createA('#','Contiune');

	firstOption.position(650,220);

	firstOption.mousePressed(conStory_M_Hetero_Vil);

}

function conStory_M_Hetero_Vil(){
	background(0);
	title.hide();Hetero
	firstOption.hide()

	title = createElement('h2',"“Hi, you must be, " + nameInput.value() + "! Welcome to Legion. I’m Vivianne Lancaster and you will be working under me while you intern here.” Vivianne said with a 1000-watt smile on her face. Just looking at her face made me optimistic for the future.");
	title1 = createElement('h2',"How would you like to reply?");
	title.position(0,10);
	title1.position(540,90);
	

	firstOption = createA('#','Stutter');
	createElement('br');
	secondOption = createA('#','Confindently');

	firstOption.mousePressed(Stutter_M_Hetero_Vil);
	secondOption.mousePressed(Confindently_M_Hetero_Vil);

}

//Screen 9
function Stutter_M_Hetero_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"“He-He-Hello, Ms.Lancaster. I, um, looking forward to working with you.” You finally managed to stutter through your sentence. You cannot believe the first thing you said to your boss was a struggle sentence. You were in the middle of mentally beating yourself up when all of a sudden you heard laughter. You look up to see your boss laughing lightly into her hand. She pretended to cough when she realized you were looking at her. “Sorry, it just your nervousness remembered me a lot of myself when I started here. I was so nervous that I spilled coffee all over an important client.” She continued to laugh, this time without hiding it.");
	title.position(0,10);
	title1 = createElement('h2',"Don’t worry, "  + nameInput.value() + " it is nice to meet you, and please call me Vivianne. Now follow me and I’ll show you to your desk and after you get settled I’ll show you the ropes of this place.” She says while walking and giving me a wink when she mentioned showing me around.")
	title1.position(0,150);

	firstOption = createA('#','Contiune');

	firstOption.position(650,250);

	firstOption.mousePressed(Pen_M_Hetero_Vil);

}

function Confindently_M_Hetero_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"“Hello, Ms. Lancaster. I am looking forward to working with you.” You exclaimed while holding out my hand. He smiles even brighter and take my hand and gives it a firm shake. “Nice to meet you,"  + nameInput.value() + ", and please call me Vivianne. Now follow me and I’ll show you to your desk and after you get settled I’ll show you the ropes of this place” He says while walking and giving me a wink when he mentioned showing me around.");
	title.position(0,10);

	firstOption = createA('#','Contiune');

	firstOption.position(650,220);

	firstOption.mousePressed(Pen_M_Hetero_Vil);

}
//Screen 10
//Man
function Pen_M_Hetero_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();

	title = createElement('h2', "By the time it was ready to leave for the day, you did not want to leave. Vivianne kept her promise and showed you around and let you know that you were working in Operative Coordination, which meant you were going to help her decide where Legion’s super-powered employees are going to go and positively change the world. You were so excited about doing something amazing like you always dreamt of. Everything was going great until you walked into the lobby and you drop your pen.");
	title.position(0,10);

	title1 = createElement('h2',"Are you going to pick up the pen?")
	title1.position(525,120);

	firstOption = createA('#','Yes, that’s my lucky pen.');
	firstOption.position(620,180);
	createElement('br');
	secondOption = createA('#','No, it is just a pen. I can always get another one.');
	secondOption.position(540,200);

	firstOption.mousePressed(OneEncounter_M_Hetero_Vil);
	secondOption.mousePressed(OneDead_M_Hetero_Vil);
}

//Screen 11
//Man
function OneEncounter_M_Hetero_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You look at the pen and of course you are going to pick it up. You aced tests with this pen. When you bend down and picked it up, you also realized that you shoe was untied. Just as you go to tie your shoes, you felt a rush of wind rush over your head, following with a loud crashing sound. You looked up to find a destroyed, wooden desk right in front of you. ‘What the hell?’ You think as you turn around to the direction the desk came from. What you saw shocked you to the core. Two people were fighting just behind you and one of them clearly has powers. One of them is wearing a green and black suit using some sort of psychic powers and the other person was wearing a red trench coat and hat and jumping around as if not having powers does not put her at a disadvantage here. The red trench coat lady lands a heavily blow on the one in green. They land just a couple feet from you. They get up and you two make eye contact and they smile at you. All of a sudden you have an intense sense of dread.");
	title.position(0,10);

	title1 = createElement('h2',"Get up and run away?");
	title1.position(560,230);

	firstOption = createA('#','Um, duh! Get me away from the green psycho.');
	firstOption.position(530,290);
	createElement('br');
	secondOption = createA('#','No, who is this green psycho and why are they smiling at me?');
	secondOption.position(500,320);

	firstOption.mousePressed(Run_M_Hetero_Vil);
	secondOption.mousePressed(GreenEncounter_M_Hetero_Vil);

}

//Screen 12
function OneDead_M_Hetero_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You look at the pen and shrug. 'Who cares about a pen?’ you think. You continued to walk through the lobby not thinking twice about the pen. You were so focused on what restaurant to eat at that you didn’t realize a desk heading straight for the back of your head. Next thing you know, everything goes black.")
	title.position(0,10);

	title1 = createElement('h2',"Congratulations. You died by a desk.")
	title1.position(525,130);

	firstOption = createA('#','Really!? All because I didn’t pick up a pen. Go back!');
	firstOption.mousePressed(Pen_M_Hetero_Vil);
}

//Screen 13
function Run_M_Hetero_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You get up as quick as you can and run in the direction of… actually you don’t know where you are running to.")
	title.position(0,10);

	firstOption = createA('#','Beautiful person in red. (click red hat)');
	firstOption.position(500,180);
	createElement('br');
	secondOption = createA('#','The Door. (click the door)');
	secondOption.position(540,200);

	redCoat = createImg("redCoat.png");
  	redCoat.position(0, 80);

  	door = createImg("door.png");
  	door.position(1100, 80);

	redCoat.mousePressed(RedEncounter_M_Hetero_Vil);
	door.mousePressed(Green2Encounter_M_Hetero_Vil);

}

function GreenEncounter_M_Hetero_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You decided to ignore Greenie and contiuned to tie your shoes. You hoped that if you ignored Oscar the Grunge then they would go away. You plan of course didn’t work cause next thing you know is you see feet indictating someone is standing in front of you. You didn’t have to look up to know who it was, but you looked anyways. When you look up you were greeted  the same wicked smile from before. “Hello, darling.” Is all you hear before everything goes dark. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Hetero_Vil);

}

function RedEncounter_M_Hetero_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();
	redCoat.hide();
	door.hide();

	title = createElement('h2',"You run towards the lady in red and as you ran towards your possible savior, you hear footsteps behind you. Hearing that just made you run faster towards the red individual. “Help me!” You scream as you run faster. The red individual finally decided to literally jump into action and managed to land between you and the green freak. You run further into the building and hid into the first room you could see. You don’t know how long you stayed in that room but eventually you hear footsteps approaching and the door opens. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Hetero_Vil);

}

function Green2Encounter_M_Hetero_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();
	redCoat.hide();
	door.hide();

	title = createElement('h2',"You run towards the door as fast as you can. Whatever going on you do not want any part of it. As you ran towards your freedom, you hear footsteps behind you. Hearing that just made you run faster towards the door. However, as you get to the door, the green freak appears in front of you with the same wicked smile.“Hello, darling.” Is all you hear before everything goes dark. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Hetero_Vil);

}

//Villian
function startStory_M_Hetero_Villian(){
	background(0);
	egoInput.hide();
	title1.hide();

	title = createElement('h2',"You woke up in a great mood today. The sun was shining brightly in the sky, your breakfast came out perfectly, and this is the day that you start to live your best life possible. Today is the day you start at Legion. Legion is a fortune 500 company that employs people with powers and gives them the opportunity to make a positive change in the world. Legion is the type of company that everyone looked up to and wants to work for. They get thousands of applications a year. Yet, here you are walking through the tallest building in the world with state-of-the-art technology and being greeted by a tall beautiful woman with the most beautiful brown eyes you have ever seen.");
	title.position(0,10);

	firstOption = createA('#','Contiune');

	firstOption.position(650,220);

	firstOption.mousePressed(conStory_M_Hetero_Villian);

}

function conStory_M_Hetero_Villian(){
	background(0);
	title.hide();
	firstOption.hide()

	title = createElement('h2',"“Hi, you must be, " + nameInput.value() + "! Welcome to Legion. I’m Vivianne Lancaster and you will be working under me while you intern here.” Vivianne said with a 1000-watt smile on her face. Just looking at her face made me optimistic for the future.");
	title1 = createElement('h2',"How would you like to reply?");
	title.position(0,10);
	title1.position(540,90);
	

	firstOption = createA('#','Stutter');
	createElement('br');
	secondOption = createA('#','Confindently');

	firstOption.mousePressed(Stutter_M_Hetero_Villian);
	secondOption.mousePressed(Confindently_M_Hetero_Villian);

}

//Screen 9
function Stutter_M_Hetero_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"“He-He-Hello, Ms.Lancaster. I, um, looking forward to working with you.” You finally managed to stutter through your sentence. You cannot believe the first thing you said to your boss was a struggle sentence. You were in the middle of mentally beating yourself up when all of a sudden you heard laughter. You look up to see your boss laughing lightly into her hand. She pretended to cough when she realized you were looking at her. “Sorry, it just your nervousness remembered me a lot of myself when I started here. I was so nervous that I spilled coffee all over an important client.” She continued to laugh, this time without hiding it.");
	title.position(0,10);
	title1 = createElement('h2',"Don’t worry, "  + nameInput.value() + " it is nice to meet you, and please call me Vivianne. Now follow me and I’ll show you to your desk and after you get settled I’ll show you the ropes of this place.” She says while walking and giving me a wink when he mentioned showing me around.")
	title1.position(0,150);

	firstOption = createA('#','Contiune');

	firstOption.position(650,250);

	firstOption.mousePressed(Pen_M_Hetero_Villian);

}

function Confindently_M_Hetero_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"“Hello, Ms. Lancaster. I am looking forward to working with you.” You exclaimed while holding out my hand. He smiles even brighter and take my hand and gives it a firm shake. “Nice to meet you,"  + nameInput.value() + ", and please call me Vivianne. Now follow me and I’ll show you to your desk and after you get settled I’ll show you the ropes of this place” He says while walking and giving me a wink when he mentioned showing me around.");
	title.position(0,10);

	firstOption = createA('#','Contiune');

	firstOption.position(650,220);

	firstOption.mousePressed(Pen_M_Hetero_Villian);

}
//Screen 10
//Man
function Pen_M_Hetero_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();

	title = createElement('h2', "By the time it was ready to leave for the day, you did not want to leave. Vivianne kept her promise and showed you around and let you know that you were working in Operative Coordination, which meant you were going to help him/her decide where Legion’s super-powered employees are going to go and positively change the world. You were so excited about doing something amazing like you always dreamt of. Everything was going great until you walked into the lobby and you drop your pen.");
	title.position(0,10);

	title1 = createElement('h2',"Are you going to pick up the pen?")
	title1.position(525,120);

	firstOption = createA('#','Yes, that’s my lucky pen.');
	firstOption.position(620,180);
	createElement('br');
	secondOption = createA('#','No, it is just a pen. I can always get another one.');
	secondOption.position(540,200);

	firstOption.mousePressed(OneEncounter_M_Hetero_Villian);
	secondOption.mousePressed(OneDead_M_Hetero_Villian);
}

//Screen 11
//Man
function OneEncounter_M_Hetero_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You look at the pen and of course you are going to pick it up. You aced tests with this pen. When you bend down and picked it up, you also realized that you shoe was untied. Just as you go to tie your shoes, you felt a rush of wind rush over your head, following with a loud crashing sound. You looked up to find a destroyed, wooden desk right in front of you. ‘What the hell?’ You think as you turn around to the direction the desk came from. What you saw shocked you to the core. Two people were fighting just behind you and one of them clearly has powers. One of them is wearing a green and black suit using some sort of psychic powers and the other person was wearing a red trench coat and hat and jumping around as if not having powers does not put her at a disadvantage here. The red trench coat lady lands a heavily blow on the one in green. They land just a couple feet from you. They get up and you two make eye contact and they smile at you. All of a sudden you have an intense sense of dread.");
	title.position(0,10);

	title1 = createElement('h2',"Get up and run away?");
	title1.position(560,230);

	firstOption = createA('#','Um, duh! Get me away from the green psycho.');
	firstOption.position(530,290);
	createElement('br');
	secondOption = createA('#','No, who is this green psycho and why are they smiling at me?');
	secondOption.position(500,320);

	firstOption.mousePressed(Run_M_Hetero_Villian);
	secondOption.mousePressed(GreenEncounter_M_Hetero_Villian);

}

//Screen 12
function OneDead_M_Hetero_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You look at the pen and shrug. 'Who cares about a pen?’ you think. You continued to walk through the lobby not thinking twice about the pen. You were so focused on what restaurant to eat at that you didn’t realize a desk heading straight for the back of your head. Next thing you know, everything goes black.")
	title.position(0,10);

	title1 = createElement('h2',"Congratulations. You died by a desk.")
	title1.position(525,130);

	firstOption = createA('#','Really!? All because I didn’t pick up a pen. Go back!');
	firstOption.mousePressed(Pen_M_Hetero_Villian);
}

//Screen 13
function Run_M_Hetero_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();Bi
	secondOption.hide();

	title = createElement('h2',"You get up as quick as you can and run in the direction of… actually you don’t know where you are running to.")
	title.position(0,10);

	firstOption = createA('#','Beautiful person in red. (click red hat)');
	firstOption.position(500,180);
	createElement('br');
	secondOption = createA('#','The Door. (click the door)');
	secondOption.position(540,200);

	redCoat = createImg("redCoat.png");
  	redCoat.position(0, 80);

  	door = createImg("door.png");
  	door.position(1100, 80);

	redCoat.mousePressed(RedEncounter_M_Hetero_Villian);
	door.mousePressed(Green2Encounter_M_Hetero_Villian);

}

function GreenEncounter_M_Hetero_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You decided to ignore Greenie and contiuned to tie your shoes. You hoped that if you ignored Oscar the Grunge then they would go away. You plan of course didn’t work cause next thing you know is you see feet indictating someone is standing in front of you. You didn’t have to look up to know who it was, but you looked anyways. When you look up you were greeted  the same wicked smile from before. “Hello, darling.” Is all you hear before everything goes dark. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Hetero_Villian);

}

function RedEncounter_M_Hetero_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();
	redCoat.hide();
	door.hide();

	title = createElement('h2',"You run towards the lady in red and as you ran towards your possible savior, you hear footsteps behind you. Hearing that just made you run faster towards the red individual. “Help me!” You scream as you run faster. The red individual finally decided to literally jump into action and managed to land between you and the green freak. You run further into the building and hid into the first room you could see. You don’t know how long you stayed in that room but eventually you hear footsteps approaching and the door opens. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Hetero_Villian);

}

function Green2Encounter_M_Hetero_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();
	redCoat.hide();
	door.hide();

	title = createElement('h2',"You run towards the door as fast as you can. Whatever going on you do not want any part of it. As you ran towards your freedom, you hear footsteps behind you. Hearing that just made you run faster towards the door. However, as you get to the door, the green freak appears in front of you with the same wicked smile.“Hello, darling.” Is all you hear before everything goes dark. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Hetero_Villian);

}


//Bi
function startStory_M_Bi_Hero(){
	background(0);
	egoInput.hide();
	title1.hide();

	title = createElement('h2',"You woke up in a great mood today. The sun was shining brightly in the sky, your breakfast came out perfectly, and this is the day that you start to live your best life possible. Today is the day you start at Legion. Legion is a fortune 500 company that employs people with powers and gives them the opportunity to make a positive change in the world. Legion is the type of company that everyone looked up to and wants to work for. They get thousands of applications a year. Yet, here you are walking through the tallest building in the world with state-of-the-art technology and being greeted by a tall handsome man with the most beautiful brown eyes you have ever seen.");
	title.position(0,10);

	firstOption = createA('#','Contiune');

	firstOption.position(650,220);

	firstOption.mousePressed(conStory_M_Bi_Hero);

}

function conStory_M_Bi_Hero(){
	background(0);
	title.hide();
	firstOption.hide()

	title = createElement('h2',"“Hi, you must be, " + nameInput.value() + "! Welcome to Legion. I’m Angelo Lancaster and you will be working under me while you intern here.” Angelo said with a 1000-watt smile on his face. Just looking at his face made me optimistic for the future.");
	title1 = createElement('h2',"How would you like to reply?");
	title.position(0,10);
	title1.position(540,90);
	

	firstOption = createA('#','Stutter');
	createElement('br');
	secondOption = createA('#','Confindently');

	firstOption.mousePressed(Stutter_M_Bi_Hero);
	secondOption.mousePressed(Confindently_M_Bi_Hero);

}

//Screen 9
function Stutter_M_Bi_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"“He-He-Hello, Mr.Lancaster. I, um, looking forward to working with you.” You finally managed to stutter through your sentence. You cannot believe the first thing you said to your boss was a struggle sentence. You were in the middle of mentally beating yourself up when all of a sudden you heard laughter. You look up to see your boss laughing lightly into his hand. He pretended to cough when he realized you were looking at him. “Sorry, it just your nervousness remembered me a lot of myself when I started here. I was so nervous that I spilled coffee all over an important client.” He continued to laugh, this time without hiding it.");
	title.position(0,10);
	title1 = createElement('h2',"Don’t worry, "  + nameInput.value() + " it is nice to meet you, and please call me Angelo. Now follow me and I’ll show you to your desk and after you get settled I’ll show you the ropes of this place.” He says while walking and giving me a wink when he mentioned showing me around.")
	title1.position(0,150);

	firstOption = createA('#','Contiune');

	firstOption.position(650,250);

	firstOption.mousePressed(Pen_M_Bi_Hero);

}

function Confindently_M_Bi_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"“Hello, Mr. Lancaster. I am looking forward to working with you.” You exclaimed while holding out my hand. He smiles even brighter and take my hand and gives it a firm shake. “Nice to meet you,"  + nameInput.value() + ", and please call me Angelo. Now follow me and I’ll show you to your desk and after you get settled I’ll show you the ropes of this place” He says while walking and giving me a wink when he mentioned showing me around.");
	title.position(0,10);

	firstOption = createA('#','Contiune');

	firstOption.position(650,220);

	firstOption.mousePressed(Pen_M_Bi_Hero);

}
//Screen 10
//Man
function Pen_M_Bi_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();

	title = createElement('h2', "By the time it was ready to leave for the day, you did not want to leave. Angelo kept his promise and showed you around and let you know that you were working in Operative Coordination, which meant you were going to help him decide where Legion’s super-powered employees are going to go and positively change the world. You were so excited about doing something amazing like you always dreamt of. Everything was going great until you walked into the lobby and you drop your pen.");
	title.position(0,10);

	title1 = createElement('h2',"Are you going to pick up the pen?")
	title1.position(525,120);

	firstOption = createA('#','Yes, that’s my lucky pen.');
	firstOption.position(620,180);
	createElement('br');
	secondOption = createA('#','No, it is just a pen. I can always get another one.');
	secondOption.position(540,200);

	firstOption.mousePressed(OneEncounter_M_Bi_Hero);
	secondOption.mousePressed(OneDead_M_Bi_Hero);
}

//Screen 11
//Man
function OneEncounter_M_Bi_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You look at the pen and of course you are going to pick it up. You aced tests with this pen. When you bend down and picked it up, you also realized that you shoe was untied. Just as you go to tie your shoes, you felt a rush of wind rush over your head, following with a loud crashing sound. You looked up to find a destroyed, wooden desk right in front of you. ‘What the hell?’ You think as you turn around to the direction the desk came from. What you saw shocked you to the core. Two people were fighting just behind you and one of them clearly has powers. One of them is wearing a green and black suit using some sort of psychic powers and the other person was wearing a red trench coat and hat and jumping around as if not having powers does not put her at a disadvantage here. The red trench coat lady lands a heavily blow on the one in green. They land just a couple feet from you. They get up and you two make eye contact and they smile at you. All of a sudden you have an intense sense of dread.");
	title.position(0,10);

	title1 = createElement('h2',"Get up and run away?");
	title1.position(560,230);

	firstOption = createA('#','Um, duh! Get me away from the green psycho.');
	firstOption.position(530,290);
	createElement('br');
	secondOption = createA('#','No, who is this green psycho and why are they smiling at me?');
	secondOption.position(500,320);

	firstOption.mousePressed(Run_M_Bi_Hero);
	secondOption.mousePressed(GreenEncounter_M_Bi_Hero);

}

//Screen 12
function OneDead_M_Bi_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You look at the pen and shrug. 'Who cares about a pen?’ you think. You continued to walk through the lobby not thinking twice about the pen. You were so focused on what restaurant to eat at that you didn’t realize a desk heading straight for the back of your head. Next thing you know, everything goes black.")
	title.position(0,10);

	title1 = createElement('h2',"Congratulations. You died by a desk.")
	title1.position(525,130);

	firstOption = createA('#','Really!? All because I didn’t pick up a pen. Go back!');
	firstOption.mousePressed(Pen_M_Bi_Hero);
}

//Screen 13
function Run_M_Bi_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You get up as quick as you can and run in the direction of… actually you don’t know where you are running to.")
	title.position(0,10);

	firstOption = createA('#','Beautiful person in red. (click red hat)');
	firstOption.position(500,180);
	createElement('br');
	secondOption = createA('#','The Door. (click the door)');
	secondOption.position(540,200);

	redCoat = createImg("redCoat.png");
  	redCoat.position(0, 80);

  	door = createImg("door.png");
  	door.position(1100, 80);

	redCoat.mousePressed(RedEncounter_M_Bi_Hero);
	door.mousePressed(Green2Encounter_M_Bi_Hero);

}

function GreenEncounter_M_Bi_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You decided to ignore Greenie and contiuned to tie your shoes. You hoped that if you ignored Oscar the Grunge then they would go away. You plan of course didn’t work cause next thing you know is you see feet indictating someone is standing in front of you. You didn’t have to look up to know who it was, but you looked anyways. When you look up you were greeted  the same wicked smile from before. “Hello, darling.” Is all you hear before everything goes dark. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Bi_Hero);

}

function RedEncounter_M_Bi_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();
	redCoat.hide();
	door.hide();

	title = createElement('h2',"You run towards the man in red and as you ran towards your possible savior, you hear footsteps behind you. Hearing that just made you run faster towards the red individual. “Help me!” You scream as you run faster. The red individual finally decided to literally jump into action and managed to land between you and the green freak. You run further into the building and hid into the first room you could see. You don’t know how long you stayed in that room but eventually you hear footsteps approaching and the door opens. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Bi_Hero);

}

function Green2Encounter_M_Bi_Hero(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();
	redCoat.hide();
	door.hide();

	title = createElement('h2',"You run towards the door as fast as you can. Whatever going on you do not want any part of it. As you ran towards your freedom, you hear footsteps behind you. Hearing that just made you run faster towards the door. However, as you get to the door, the green freak appears in front of you with the same wicked smile.“Hello, darling.” Is all you hear before everything goes dark. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Bi_Hero);

}

function startStory_M_Bi_Vil(){
	background(0);
	egoInput.hide();
	title1.hide();

	title = createElement('h2',"You woke up in a great mood today. The sun was shining brightly in the sky, your breakfast came out perfectly, and this is the day that you start to live your best life possible. Today is the day you start at Legion. Legion is a fortune 500 company that employs people with powers and gives them the opportunity to make a positive change in the world. Legion is the type of company that everyone looked up to and wants to work for. They get thousands of applications a year. Yet, here you are walking through the tallest building in the world with state-of-the-art technology and being greeted by a tall handsome man with the most beautiful brown eyes you have ever seen.");
	title.position(0,10);

	firstOption = createA('#','Contiune');

	firstOption.position(650,220);

	firstOption.mousePressed(conStory_M_Bi_Vil);

}

function conStory_M_Bi_Vil(){
	background(0);
	title.hide();
	firstOption.hide()

	title = createElement('h2',"“Hi, you must be, " + nameInput.value() + "! Welcome to Legion. I’m Angelo Lancaster and you will be working under me while you intern here.” Angelo said with a 1000-watt smile on his face. Just looking at his face made me optimistic for the future.");
	title1 = createElement('h2',"How would you like to reply?");
	title.position(0,10);
	title1.position(540,90);
	

	firstOption = createA('#','Stutter');
	createElement('br');
	secondOption = createA('#','Confindently');

	firstOption.mousePressed(Stutter_M_Bi_Vil);
	secondOption.mousePressed(Confindently_M_Bi_Vil);

}

//Screen 9
function Stutter_M_Bi_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"“He-He-Hello, Mr.Lancaster. I, um, looking forward to working with you.” You finally managed to stutter through your sentence. You cannot believe the first thing you said to your boss was a struggle sentence. You were in the middle of mentally beating yourself up when all of a sudden you heard laughter. You look up to see your boss laughing lightly into his hand. He pretended to cough when he realized you were looking at him. “Sorry, it just your nervousness remembered me a lot of myself when I started here. I was so nervous that I spilled coffee all over an important client.” He continued to laugh, this time without hiding it.");
	title.position(0,10);
	title1 = createElement('h2',"Don’t worry, "  + nameInput.value() + " it is nice to meet you, and please call me Angelo. Now follow me and I’ll show you to your desk and after you get settled I’ll show you the ropes of this place.” He says while walking and giving me a wink when he mentioned showing me around.")
	title1.position(0,150);

	firstOption = createA('#','Contiune');

	firstOption.position(650,250);

	firstOption.mousePressed(Pen_M_Bi_Vil);

}

function Confindently_M_Bi_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"“Hello, Mr. Lancaster. I am looking forward to working with you.” You exclaimed while holding out my hand. He smiles even brighter and take my hand and gives it a firm shake. “Nice to meet you,"  + nameInput.value() + ", and please call me Angelo. Now follow me and I’ll show you to your desk and after you get settled I’ll show you the ropes of this place” He says while walking and giving me a wink when he mentioned showing me around.");
	title.position(0,10);

	firstOption = createA('#','Contiune');

	firstOption.position(650,220);

	firstOption.mousePressed(Pen_M_Bi_Vil);

}
//Screen 10
//Man
function Pen_M_Bi_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();

	title = createElement('h2', "By the time it was ready to leave for the day, you did not want to leave. Angelo kept his promise and showed you around and let you know that you were working in Operative Coordination, which meant you were going to help him decide where Legion’s super-powered employees are going to go and positively change the world. You were so excited about doing something amazing like you always dreamt of. Everything was going great until you walked into the lobby and you drop your pen.");
	title.position(0,10);

	title1 = createElement('h2',"Are you going to pick up the pen?")
	title1.position(525,120);

	firstOption = createA('#','Yes, that’s my lucky pen.');
	firstOption.position(620,180);
	createElement('br');
	secondOption = createA('#','No, it is just a pen. I can always get another one.');
	secondOption.position(540,200);

	firstOption.mousePressed(OneEncounter_M_Bi_Vil);
	secondOption.mousePressed(OneDead_M_Bi_Vil);
}

//Screen 11
//Man
function OneEncounter_M_Bi_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You look at the pen and of course you are going to pick it up. You aced tests with this pen. When you bend down and picked it up, you also realized that you shoe was untied. Just as you go to tie your shoes, you felt a rush of wind rush over your head, following with a loud crashing sound. You looked up to find a destroyed, wooden desk right in front of you. ‘What the hell?’ You think as you turn around to the direction the desk came from. What you saw shocked you to the core. Two people were fighting just behind you and one of them clearly has powers. One of them is wearing a green and black suit using some sort of psychic powers and the other person was wearing a red trench coat and hat and jumping around as if not having powers does not put her at a disadvantage here. The red trench coat lady lands a heavily blow on the one in green. They land just a couple feet from you. They get up and you two make eye contact and they smile at you. All of a sudden you have an intense sense of dread.");
	title.position(0,10);

	title1 = createElement('h2',"Get up and run away?");
	title1.position(560,230);

	firstOption = createA('#','Um, duh! Get me away from the green psycho.');
	firstOption.position(530,290);
	createElement('br');
	secondOption = createA('#','No, who is this green psycho and why are they smiling at me?');
	secondOption.position(500,320);

	firstOption.mousePressed(Run_M_Bi_Vil);
	secondOption.mousePressed(GreenEncounter_M_Bi_Vil);

}

//Screen 12
function OneDead_M_Bi_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You look at the pen and shrug. 'Who cares about a pen?’ you think. You continued to walk through the lobby not thinking twice about the pen. You were so focused on what restaurant to eat at that you didn’t realize a desk heading straight for the back of your head. Next thing you know, everything goes black.")
	title.position(0,10);

	title1 = createElement('h2',"Congratulations. You died by a desk.")
	title1.position(525,130);

	firstOption = createA('#','Really!? All because I didn’t pick up a pen. Go back!');
	firstOption.mousePressed(Pen_M_Bi_Vil);
}

//Screen 13
function Run_M_Bi_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You get up as quick as you can and run in the direction of… actually you don’t know where you are running to.")
	title.position(0,10);

	firstOption = createA('#','Beautiful person in red. (click red hat)');
	firstOption.position(500,180);
	createElement('br');
	secondOption = createA('#','The Door. (click the door)');
	secondOption.position(540,200);

	redCoat = createImg("redCoat.png");
  	redCoat.position(0, 80);

  	door = createImg("door.png");
  	door.position(1100, 80);

	redCoat.mousePressed(RedEncounter_M_Bi_Vil);
	door.mousePressed(Green2Encounter_M_Bi_Vil);

}

function GreenEncounter_M_Bi_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You decided to ignore Greenie and contiuned to tie your shoes. You hoped that if you ignored Oscar the Grunge then they would go away. You plan of course didn’t work cause next thing you know is you see feet indictating someone is standing in front of you. You didn’t have to look up to know who it was, but you looked anyways. When you look up you were greeted  the same wicked smile from before. “Hello, darling.” Is all you hear before everything goes dark. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Bi_Vil);

}

function RedEncounter_M_Bi_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();
	redCoat.hide();
	door.hide();

	title = createElement('h2',"You run towards the man in red and as you ran towards your possible savior, you hear footsteps behind you. Hearing that just made you run faster towards the red individual. “Help me!” You scream as you run faster. The red individual finally decided to literally jump into action and managed to land between you and the green freak. You run further into the building and hid into the first room you could see. You don’t know how long you stayed in that room but eventually you hear footsteps approaching and the door opens. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Bi_Vil);

}

function Green2Encounter_M_Bi_Vil(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();
	redCoat.hide();
	door.hide();

	title = createElement('h2',"You run towards the door as fast as you can. Whatever going on you do not want any part of it. As you ran towards your freedom, you hear footsteps behind you. Hearing that just made you run faster towards the door. However, as you get to the door, the green freak appears in front of you with the same wicked smile.“Hello, darling.” Is all you hear before everything goes dark. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Bi_Vil);

}

//Vil
function startStory_M_Bi_Villian(){
	background(0);
	egoInput.hide();
	title1.hide();

	title = createElement('h2',"You woke up in a great mood today. The sun was shining brightly in the sky, your breakfast came out perfectly, and this is the day that you start to live your best life possible. Today is the day you start at Legion. Legion is a fortune 500 company that employs people with powers and gives them the opportunity to make a positive change in the world. Legion is the type of company that everyone looked up to and wants to work for. They get thousands of applications a year. Yet, here you are walking through the tallest building in the world with state-of-the-art technology and being greeted by a tall handsome man with the most beautiful brown eyes you have ever seen.");
	title.position(0,10);

	firstOption = createA('#','Contiune');

	firstOption.position(650,220);

	firstOption.mousePressed(conStory_M_Bi_Villian);

}

function conStory_M_Bi_Villian(){
	background(0);
	title.hide();
	firstOption.hide()

	title = createElement('h2',"“Hi, you must be, " + nameInput.value() + "! Welcome to Legion. I’m Angelo Lancaster and you will be working under me while you intern here.” Angelo said with a 1000-watt smile on his face. Just looking at his face made me optimistic for the future.");
	title1 = createElement('h2',"How would you like to reply?");
	title.position(0,10);
	title1.position(540,90);
	

	firstOption = createA('#','Stutter');
	createElement('br');
	secondOption = createA('#','Confindently');

	firstOption.mousePressed(Stutter_M_Bi_Villian);
	secondOption.mousePressed(Confindently_M_Bi_Villian);

}

//Screen 9
function Stutter_M_Bi_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"“He-He-Hello, Mr.Lancaster. I, um, looking forward to working with you.” You finally managed to stutter through your sentence. You cannot believe the first thing you said to your boss was a struggle sentence. You were in the middle of mentally beating yourself up when all of a sudden you heard laughter. You look up to see your boss laughing lightly into his hand. He pretended to cough when he realized you were looking at him. “Sorry, it just your nervousness remembered me a lot of myself when I started here. I was so nervous that I spilled coffee all over an important client.” He continued to laugh, this time without hiding it.");
	title.position(0,10);
	title1 = createElement('h2',"Don’t worry, "  + nameInput.value() + " it is nice to meet you, and please call me Angelo. Now follow me and I’ll show you to your desk and after you get settled I’ll show you the ropes of this place.” He says while walking and giving me a wink when he mentioned showing me around.")
	title1.position(0,150);

	firstOption = createA('#','Contiune');

	firstOption.position(650,250);

	firstOption.mousePressed(Pen_M_Bi_Villian);

}

function Confindently_M_Bi_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"“Hello, Mr. Lancaster. I am looking forward to working with you.” You exclaimed while holding out my hand. He smiles even brighter and take my hand and gives it a firm shake. “Nice to meet you,"  + nameInput.value() + ", and please call me Angelo. Now follow me and I’ll show you to your desk and after you get settled I’ll show you the ropes of this place” He says while walking and giving me a wink when he mentioned showing me around.");
	title.position(0,10);

	firstOption = createA('#','Contiune');

	firstOption.position(650,220);

	firstOption.mousePressed(Pen_M_Bi_Villian);

}
//Screen 10
//Man
function Pen_M_Bi_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();

	title = createElement('h2', "By the time it was ready to leave for the day, you did not want to leave. Angelo kept his promise and showed you around and let you know that you were working in Operative Coordination, which meant you were going to help him decide where Legion’s super-powered employees are going to go and positively change the world. You were so excited about doing something amazing like you always dreamt of. Everything was going great until you walked into the lobby and you drop your pen.");
	title.position(0,10);

	title1 = createElement('h2',"Are you going to pick up the pen?")
	title1.position(525,120);

	firstOption = createA('#','Yes, that’s my lucky pen.');
	firstOption.position(620,180);
	createElement('br');
	secondOption = createA('#','No, it is just a pen. I can always get another one.');
	secondOption.position(540,200);

	firstOption.mousePressed(OneEncounter_M_Bi_Villian);
	secondOption.mousePressed(OneDead_M_BiVillian);
}

//Screen 11
//Man
function OneEncounter_M_Bi_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You look at the pen and of course you are going to pick it up. You aced tests with this pen. When you bend down and picked it up, you also realized that you shoe was untied. Just as you go to tie your shoes, you felt a rush of wind rush over your head, following with a loud crashing sound. You looked up to find a destroyed, wooden desk right in front of you. ‘What the hell?’ You think as you turn around to the direction the desk came from. What you saw shocked you to the core. Two people were fighting just behind you and one of them clearly has powers. One of them is wearing a green and black suit using some sort of psychic powers and the other person was wearing a red trench coat and hat and jumping around as if not having powers does not put her at a disadvantage here. The red trench coat lady lands a heavily blow on the one in green. They land just a couple feet from you. They get up and you two make eye contact and they smile at you. All of a sudden you have an intense sense of dread.");
	title.position(0,10);

	title1 = createElement('h2',"Get up and run away?");
	title1.position(560,230);

	firstOption = createA('#','Um, duh! Get me away from the green psycho.');
	firstOption.position(530,290);
	createElement('br');
	secondOption = createA('#','No, who is this green psycho and why are they smiling at me?');
	secondOption.position(500,320);

	firstOption.mousePressed(Run_M_Bi_Villian);
	secondOption.mousePressed(GreenEncounter_M_Bi_Villian);

}

//Screen 12
function OneDead_M_Bi_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You look at the pen and shrug. 'Who cares about a pen?’ you think. You continued to walk through the lobby not thinking twice about the pen. You were so focused on what restaurant to eat at that you didn’t realize a desk heading straight for the back of your head. Next thing you know, everything goes black.")
	title.position(0,10);

	title1 = createElement('h2',"Congratulations. You died by a desk.")
	title1.position(525,130);

	firstOption = createA('#','Really!? All because I didn’t pick up a pen. Go back!');
	firstOption.mousePressed(Pen_M_Bi_Villian);
}

//Screen 13
function Run_M_Bi_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();Bi
	secondOption.hide();

	title = createElement('h2',"You get up as quick as you can and run in the direction of… actually you don’t know where you are running to.")
	title.position(0,10);

	firstOption = createA('#','Beautiful person in red. (click red hat)');
	firstOption.position(500,180);
	createElement('br');
	secondOption = createA('#','The Door. (click the door)');
	secondOption.position(540,200);

	redCoat = createImg("redCoat.png");
  	redCoat.position(0, 80);

  	door = createImg("door.png");
  	door.position(1100, 80);

	redCoat.mousePressed(RedEncounter_M_Bi_Villian);
	door.mousePressed(Green2Encounter_M_Bi_Villian);

}

function GreenEncounter_M_Bi_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();

	title = createElement('h2',"You decided to ignore Greenie and contiuned to tie your shoes. You hoped that if you ignored Oscar the Grunge then they would go away. You plan of course didn’t work cause next thing you know is you see feet indictating someone is standing in front of you. You didn’t have to look up to know who it was, but you looked anyways. When you look up you were greeted  the same wicked smile from before. “Hello, darling.” Is all you hear before everything goes dark. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Bi_Villian);

}

function RedEncounter_M_Bi_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();
	redCoat.hide();
	door.hide();

	title = createElement('h2',"You run towards the man in red and as you ran towards your possible savior, you hear footsteps behind you. Hearing that just made you run faster towards the red individual. “Help me!” You scream as you run faster. The red individual finally decided to literally jump into action and managed to land between you and the green freak. You run further into the building and hid into the first room you could see. You don’t know how long you stayed in that room but eventually you hear footsteps approaching and the door opens. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Bi_Villian);

}

function Green2Encounter_M_Bi_Villian(){
	background(0);
	title.hide();
	title1.hide();
	firstOption.hide();
	secondOption.hide();
	redCoat.hide();
	door.hide();

	title = createElement('h2',"You run towards the door as fast as you can. Whatever going on you do not want any part of it. As you ran towards your freedom, you hear footsteps behind you. Hearing that just made you run faster towards the door. However, as you get to the door, the green freak appears in front of you with the same wicked smile.“Hello, darling.” Is all you hear before everything goes dark. To be contiuned…");
	title.position(0,10);

	firstOption = createA('#','Want to Choose another path?');
	firstOption.mousePressed(OneEncounter_M_Bi_Villian);

}

//Woman
