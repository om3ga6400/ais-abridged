const { Script, Scene, Character, VNEngine } = SimpleVN;

const script = new Script();

const n = new Character();

const z = new Character("Zebede");
const a = new Character("Axl");
const p = new Character("Paxton");
const j = new Character("Jackson");
const s = new Character("Smith Jones");
const q = new Character("???");

const bs = new Character();

const scene1 = new Scene("scene1", {
  background: "backgrounds/1.jpg",
});

const scene2 = new Scene("scene2", {
  background: "backgrounds/2.jpg",
});

const scene3 = new Scene("scene3", {
  background: "backgrounds/3.webp",
  presentation: "chapter",
});

const scene4 = new Scene("scene4", {
  background: "backgrounds/4.jpg",
});

const scene5 = new Scene("scene5", {
  background: "backgrounds/5.png",
});

const scene6 = new Scene("scene6", {
  background: "backgrounds/3.webp",
  presentation: "chapter",
});

const scene7 = new Scene("scene7", {
  background: "backgrounds/5.png",
});

const scene8 = new Scene("scene8", {
  background: "backgrounds/6.png",
});

const scene9 = new Scene("scene9", {
  background: "backgrounds/7.png",
});

const scene10 = new Scene("scene10", {
  background: "backgrounds/3.webp",
  presentation: "chapter",
});

const scene11 = new Scene("scene11", {
  background: "backgrounds/8.png",
});

const scene12 = new Scene("scene12", {
  background: "backgrounds/9.png",
});

script.addScene(scene1);

scene1.add(n);
scene1.add(z);
scene1.add(a);

n.say("Two men begin to walk up to a building", { effect: "typewriter" });

z.say("Finally we made it here, axl you said something about an ability holder here correct?", { effect: "typewriter" });

n.say("Zebede looks up as he asks the question", { effect: "typewriter" });

a.say("Yeah his name is paxton I think", { effect: "typewriter" });

z.say("you think?", { effect: "typewriter" });

a.say("I can't always be right ok", { effect: "typewriter" });

z.say("And why am I even giving you a piggyback ride in the first place", { effect: "typewriter" });

a.say("cause I'm tired ok!", { effect: "typewriter" });
a.say("Just go in the building", { effect: "typewriter" });

n.say("Axl gets off zebede and they begin to walk into the building", { effect: "typewriter" });
n.say("Paxton had been looking out the window watching their conversation", { effect: "typewriter" });
n.say("Axl and zebede walk up the stairs", { effect: "typewriter" });

script.addScene(scene2);

scene2.add(n);
scene2.add(p);
scene2.add(z);
scene2.add(a);

n.say("As they walk up the stairs they see him standing at the top staring at them", { effect: "typewriter" });

p.say("What business do you have", { effect: "typewriter" });

n.say("Zebede dodges the question and runs at paxton", { effect: "typewriter" });
n.say("Zebede tries to punch paxton but paxton grabs ahold of his arm and throws him to the ground [shake]", { effect: "typewriter" });
n.say("Paxton steps on his back and starts to pull his arms up breaking them [shake]", { effect: "typewriter" });

z.say("COME HELP ME AXL", { effect: "typewriter" });

n.say("Axl runs up and punches paxton in the face and grabbing zebede in the process [shake]", { effect: "typewriter" });

a.say("stop being so reckless", { effect: "typewriter" });

n.say("Zebede ignores axl and goes in for another punch and misses", { effect: "typewriter" });
n.say("Axl decides to run behind them and try to hit paxton in the back", { effect: "typewriter" });
n.say("Paxton turns around but sees no one as axl run in front instead", { effect: "typewriter" });
n.say("Before he can react axl manages to punch paxton in the face [shake]", { effect: "typewriter" });
n.say("Paxton gets sent through a wall and starts to walk towards the 2", { effect: "typewriter" });
n.say("Zebedee charges at Paxton while Axl tries to go behind him to hit Paxton from both sides", { effect: "typewriter" });
n.say("Paxton stops moving, closes his eyes, and holds his hands out", { effect: "typewriter" });
n.say("Axl and Zebede begin to close in on Paxton, but as soon as they get close Paxton opens his eyes and creates black voids around him [blackflash]", { effect: "typewriter" });
n.say("Axl and Zebede stop right before they fall into the voids", { effect: "typewriter" });

a.say("What is that?!", { effect: "typewriter" });

n.say("Zebede continues to charge forward before breaking through the voids", { effect: "typewriter" });

p.say("What? That's impossible!", { effect: "typewriter" });

n.say("Axl comes through the opening as well and they start to jump Paxton [shake]", { effect: "typewriter" });
n.say("Paxton falls to the ground and Zebede kicks him in the stomach [shake]", { effect: "typewriter" });
n.say("Axl and Zebede punch Paxton at the same time, sending him to a different building [shake]", { effect: "typewriter" });

script.addScene(scene3);

scene3.add(n);

n.say("WHY DO I SIT NEXT TO LANDON AND COLLIN");

script.addScene(scene4);

scene4.add(j);
scene4.add(n);

j.say("WHAT THE F### JUST HAPPENED", { effect: "typewriter" });

n.say("Jackson had actually seen the entire fight, after completing his shift he went back since he forgot his wallet at his desk", {
  effect: "typewriter",
});

j.say("I'M NOT STAYING HERE ANYMORE", { effect: "typewriter" });

n.say("Jackson ran out of the building as fast as possible making sure to stay near the wall so paxton or anyone else didn't see", {
  effect: "typewriter",
});

script.addScene(scene5);

scene5.add(p);
scene5.add(n);
scene5.add(z);
scene5.add(q);
scene5.add(j);

p.say("what an annoyance", { effect: "typewriter" });

n.say("Zebede crawls on the road trying to get away", { effect: "typewriter" });

p.say("do you think you can get away", { effect: "typewriter" });

n.say("Paxton puts his arm up summoning a black void as big as the entire building on the road [blackflash]", { effect: "typewriter" });

n.say("Zebede looks up in terror", { effect: "typewriter" });

z.say("h-h-h-he-help me", { effect: "typewriter" });

p.say("no ones here to help you", { effect: "typewriter" });

q.say("STOP!!!", { effect: "typewriter" });

n.say("Paxton looks right at the new voice", { effect: "typewriter" });

p.say("JACKSON?!", { effect: "typewriter" });

j.say("Stop I won't let you kill him", { effect: "typewriter" });

p.say("hahaa you think you can stop me you dont have any idea what I am, and you don't even have an ability", { effect: "typewriter" });

j.say("are you sure about that", { effect: "typewriter" });

n.say("Jackson snaps", { effect: "typewriter" });
n.say("Paxton eyes light up as he sees a bright light grow fast [flash]", { effect: "typewriter" });

j.say("Its time...for you to d#e", { effect: "typewriter" });

script.addScene(scene6);

// basicly using char sprites so that i dont have to do images manually

scene6.add(bs, { position: { x: "50%", y: "30%" } });

bs.image = "gay/1.png";
bs.say("ㅤ");
bs.image = "gay/2.png";
bs.say("ㅤ");
bs.image = "gay/3.png";
bs.say("ㅤ");
bs.image = "gay/4.png";
bs.say("ㅤ");
bs.image = "gay/5.png";
bs.say("ㅤ");

script.addScene(scene7);

scene7.add(n);
scene7.add(p);
scene7.add(j);
scene7.add(q);
scene7.add(s);

n.say("The explosion from jacksons ability makes paxtons arm completely burned Paxton coughs and starts hyperventilating", { effect: "typewriter" });

p.say("Your going to be a problem", { effect: "typewriter" });
p.say("I can't win by myself but I'm not alone", { effect: "typewriter" });

j.say("then who's with you?", { effect: "typewriter" });

p.say("The first human with an ability was alive 30 years ago but he died", { effect: "typewriter" });
p.say("Ryan had the ability to copy anything, the real reason he d#ed wasn't from anyone", { effect: "typewriter" });

j.say("Then who k#lled him", { effect: "typewriter" });

p.say("Himself", { effect: "typewriter" });

j.say("What??", { effect: "typewriter" });

p.say("when he was alive i forced him to do his final vow, I forced him to copy Smith Jones.", { effect: "typewriter" });

j.say("Wait does that mean", { effect: "typewriter" });

p.say("yes Smith Jones COME HERE", { effect: "typewriter" });

n.say("Jackson looks over and sees a man he takes one step forward and the second his foot touches the ground he's already right next to paxton from 200 feet away.", { effect: "typewriter" });

q.say("Hello my name is Smith Jones... what's yours.", { effect: "typewriter" });

script.addScene(scene8);

scene8.add(j);
scene8.add(s);
scene8.add(n);
scene8.add(p);

j.say("Wait you aren't an alien!", { effect: "typewriter" });

s.say("No Im human", { effect: "typewriter" });

n.say("Jackson thinks “s### my restriction!”", { effect: "typewriter" });
n.say("Smith Jones runs up and punches him in his stomach as hard as possible [shake]", { effect: "typewriter" });
n.say("Jackson coughs up blood and gets sent through 2 buildings [shake]", { effect: "typewriter" });

p.say("you know you shouldn't stand still in a fight", { effect: "typewriter" });

n.say("Smith Jones throws a knife at jackson. [shake]", { effect: "typewriter" });
n.say("jackson tries to dodge but instead he switches locations with the knife", { effect: "typewriter" });
n.say("jackson gets punched again but paxton appears behind him and kicks him in the back [shake]", { effect: "typewriter" });
n.say("jacksons spine breaks and he manages to doge the next two hits jackson then snaps his fingers [shake]", { effect: "typewriter" });
n.say("Smith Jones switches locations with a passerby k#lling the innocent person [shake]", { effect: "typewriter" });
n.say("paxton barely dodges but gets slightly burnt [shake]", { effect: "typewriter" });
n.say("jackson then snaps 40 times in a single second [shake]", { effect: "typewriter" });
n.say("paxton gets burnt badly [shake]", { effect: "typewriter" });
n.say("Smith jones switches with a rock behind jackson with a katana in hand he stabs through jackson [shake]", { effect: "typewriter" });

s.say("Give up.. You can't win", { effect: "typewriter" });

n.say("Paxton engulfs the whole world in black the only thing that Jackson can see is a black void and paxton [blackflash]", { effect: "typewriter" });

p.say("this is.. The 4th dimension", { effect: "typewriter" });

script.addScene(scene9);

scene9.add(j);
scene9.add(p);
scene9.add(n);

j.say("What?", { effect: "typewriter" });

p.say("there's no escaping this your going to d#e", { effect: "typewriter" });

j.say("are you trapped in here with me?", { effect: "typewriter" });

p.say("no i can leave at any time but I'm going to k#ll you here.", { effect: "typewriter" });

n.say("Jackson has had a restriction on his ability the whole time ever since the fight started his restriction “I cannot attack humans with my ability” After making this restriction he asked for one thing in return “everytime i use my ability it goes first”", { effect: "typewriter" });

j.say("I have one final move [flash]", { effect: "typewriter" });

p.say("and what's that? Well it doesn't matter the safest bet is to use my ultima", { effect: "typewriter" });
p.say("Ultima something stupid [blackflash]", { effect: "typewriter" });

j.say("Vow Supernova [flash]", { effect: "typewriter" });

p.say("That won't work my ability will activate first since i used it first", { effect: "typewriter" });

j.say("Are you sure?", { effect: "typewriter" });

p.say("what?", { effect: "typewriter" });

j.say("my restriction makes it so I can only attack aliens but in return my ability always goes off first", { effect: "typewriter" });

p.say("WHAT", { effect: "typewriter" });

n.say("A gigantic explosion the size of over 100 galaxys happens in the middle of the fight [flash]", { effect: "typewriter" });

p.say("AHHHHHHHHHHH", { effect: "typewriter" });

n.say("Paxtons ultima happens and jackson disappears [blackflash]", { effect: "typewriter" });
n.say("The explosion from jackson manages to destroy the entire 4th dimension paxton made (Paxton can make multiple) even though it was infinite jackson managed to destroy it all", { effect: "typewriter" });
n.say("Paxton walks slowly in the city with Smith Jones", { effect: "typewriter" });

p.say("THAT BI### GOT RID OF MY WHOLE ARM", { effect: "typewriter" });

script.addScene(scene10);

scene10.add(n);

n.say("Chapter 1: The WcDonalds Arc");

const engine = new VNEngine({
  script: script,
  container: "#game-container",
  startScene: "scene1",
  renderer: {
    assetsDirectory: "assets",
    screenEffects: {
      shake(container) {
        container.classList.add("shake");
      },
      flash(container) {
        container.classList.add("flash");
      },
      blackflash(container) {
        container.classList.add("blackflash");
      },
    },
  },
});

const container = document.querySelector("#game-container");
const dialogueBox = container.querySelector(".vn-dialogue-box");

container.addEventListener("click", (e) => {
  if (dialogueBox.contains(e.target)) return;
  dialogueBox.click();
});
