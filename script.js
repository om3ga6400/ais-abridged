const { Script, Scene, Character, VNEngine } = SimpleVN;

const script = new Script();

const n = new Character();
const z = new Character("Zebede");
const a = new Character("Axl");
const p = new Character("Paxton");

const scene1 = new Scene("scene1", {
  background: "backgrounds/State_Office_Building.jpg",
});

const scene2 = new Scene("scene2", {
  background: "backgrounds/Inside_Office.jpg",
});

const scene3 = new Scene("scene3", {
  background: "backgrounds/Black.webp",
  presentation: "chapter",
});

const scene4 = new Scene("scene4", {
  background: "backgrounds/Inside_Office.jpg",
});

script.addScene(scene1);

scene1.add(n);
n.say("Two men begin to walk up to a building");

scene1.add(z);
z.say("Finally we made it here, axl you said something about an ability holder here correct?");

n.say("Zebede looks up as he asks the question");

scene1.add(a);
a.say("Yeah his name is paxton I think");

z.say("you think?");

a.say("I can't always be right ok");

z.say("And why am I even giving you a piggyback ride in the first place");

a.say("cause I'm tired ok!");
a.say("Just go in the building");

n.say("Axl gets off zebede and they begin to walk into the building");
n.say("Paxton had been looking out the window watching their conversation");
n.say("Axl and zebede walk up the stairs");

script.addScene(scene2);

scene2.add(n);
n.say("As they walk up the stairs they see him standing at the top staring at them");

scene2.add(p);
p.say("What business do you have");

n.say("Zebede dodges the question and runs at paxton");
n.say("Zebede tries to punch paxton but paxton grabs ahold of his arm and throws him to the ground");
n.say("Paxton steps on his back and starts to pull his arms up breaking them");

scene2.add(z);
z.say("COME HELP ME AXL");

n.say("Axl runs up and punches paxton in the face and grabbing zebede in the process");

scene2.add(a);
a.say("stop being so reckless");

n.say("Zebede ignores axl and goes in for another punch and misses");
n.say("Axl decides to run behind them and try to hit paxton in the back");
n.say("Paxton turns around but sees no one as axl run in front instead");
n.say("Before he can react axl manages to punch paxton in the face");
n.say("Paxton gets sent through a wall and starts to walk towards the 2");
n.say("Zebedee charges at Paxton while Axl tries to go behind him to hit Paxton from both sides");
n.say("Paxton stops moving, closes his eyes, and holds his hands out");
n.say("Axl and Zebede begin to close in on Paxton, but as soon as they get close Paxton opens his eyes and creates black voids around him");
n.say("Axl and Zebede stop right before they fall into the voids");

a.say("What is that?!");

n.say("Zebede continues to charge forward before breaking through the voids");

p.say("What? That's impossible!");

n.say("Axl comes through the opening as well and they start to jump Paxton");
n.say("Paxton falls to the ground and Zebede kicks him in the stomach");
n.say("Axl and Zebede punch Paxton at the same time, sending him to a different building");

script.addScene(scene3);

scene3.add(n);
n.say("Chapter 1: WacDonalds");

const engine = new VNEngine({
  script: script,
  container: "#game-container",
  startScene: "scene1",
  renderer: {
    assetsDirectory: "assets",
  },
});
