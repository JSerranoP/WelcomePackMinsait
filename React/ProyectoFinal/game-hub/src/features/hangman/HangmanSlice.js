import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wordsList: [
        "Aardvark",
        "Albatross",
        "Alligator",
        "Alpaca",
        "Ant",
        "Anteater",
        "Antelope",
        "Ape",
        "Armadillo",
        "Donkey",
        "Baboon",
        "Badger",
        "Barracuda",
        "Bat",
        "Bear",
        "Beaver",
        "Bee",
        "Bison",
        "Boar",
        "Buffalo",
        "Butterfly",
        "Camel",
        "Capybara",
        "Caribou",
        "Cassowary",
        "Cat",
        "Caterpillar",
        "Cattle",
        "Chamois",
        "Cheetah",
        "Chicken",
        "Chimpanzee",
        "Chinchilla",
        "Chough",
        "Clam",
        "Cobra",
        "Cockroach",
        "Cod",
        "Cormorant",
        "Coyote",
        "Crab",
        "Crane",
        "Crocodile",
        "Crow",
        "Curlew",
        "Deer",
        "Dinosaur",
        "Dog",
        "Dogfish",
        "Dolphin",
        "Dotterel",
        "Dove",
        "Dragonfly",
        "Duck",
        "Dugong",
        "Dunlin",
        "Eagle",
        "Echidna",
        "Eel",
        "Eland",
        "Elephant",
        "Elk",
        "Emu",
        "Falcon",
        "Ferret",
        "Finch",
        "Fish",
        "Flamingo",
        "Fly",
        "Fox",
        "Frog",
        "Gaur",
        "Gazelle",
        "Gerbil",
        "Giraffe",
        "Gnat",
        "Gnu",
        "Goat",
        "Goldfinch",
        "Goldfish",
        "Goose",
        "Gorilla",
        "Goshawk",
        "Grasshopper",
        "Grouse",
        "Guanaco",
        "Gull",
        "Hamster",
        "Hare",
        "Hawk",
        "Hedgehog",
        "Heron",
        "Herring",
        "Hippopotamus",
        "Hornet",
        "Horse",
        "Human",
        "Hummingbird",
        "Hyena",
        "Ibex",
        "Ibis",
        "Jackal",
        "Jaguar",
        "Jay",
        "Jellyfish",
        "Kangaroo",
        "Kingfisher",
        "Koala",
        "Kookabura",
        "Kouprey",
        "Kudu",
        "Lapwing",
        "Lark",
        "Lemur",
        "Leopard",
        "Lion",
        "Llama",
        "Lobster",
        "Locust",
        "Loris",
        "Louse",
        "Lyrebird",
        "Magpie",
        "Mallard",
        "Manatee",
        "Mandrill",
        "Mantis",
        "Marten",
        "Meerkat",
        "Mink",
        "Mole",
        "Mongoose",
        "Monkey",
        "Moose",
        "Mosquito",
        "Mouse",
        "Mule",
        "Narwhal",
        "Newt",
        "Nightingale",
        "Octopus",
        "Okapi",
        "Opossum",
        "Oryx",
        "Ostrich",
        "Otter",
        "Owl",
        "Oyster",
        "Panther",
        "Parrot",
        "Partridge",
        "Peafowl",
        "Pelican",
        "Penguin",
        "Pheasant",
        "Pig",
        "Pigeon",
        "Pony",
        "Porcupine",
        "Porpoise",
        "Quail",
        "Quelea",
        "Quetzal",
        "Rabbit",
        "Raccoon",
        "Rail",
        "Ram",
        "Rat",
        "Raven",
        "Red deer",
        "Red panda",
        "Reindeer",
        "Rhinoceros",
        "Rook",
        "Salamander",
        "Salmon",
        "Sand Dollar",
        "Sandpiper",
        "Sardine",
        "Scorpion",
        "Seahorse",
        "Seal",
        "Shark",
        "Sheep",
        "Shrew",
        "Skunk",
        "Snail",
        "Snake",
        "Sparrow",
        "Spider",
        "Spoonbill",
        "Squid",
        "Squirrel",
        "Starling",
        "Stingray",
        "Stinkbug",
        "Stork",
        "Swallow",
        "Swan",
        "Tapir",
        "Tarsier",
        "Termite",
        "Tiger",
        "Toad",
        "Trout",
        "Turkey",
        "Turtle",
        "Viper",
        "Vulture",
        "Wallaby",
        "Walrus",
        "Wasp",
        "Weasel",
        "Whale",
        "Wildcat",
        "Wolf",
        "Wolverine",
        "Wombat",
        "Woodcock",
        "Woodpecker",
        "Worm",
        "Wren",
        "Yak",
        "Zebra"
    ],
    isStarted: false,
    guessWord: [],
    clue: [],
    attemps: 5,
    history: [],
    counter: 0,
    used: [],
};

export function random(array) {
    let number = Math.floor(Math.random() * array.length);
    return number
}

export const HangmanSlice = createSlice({
    name: 'hangman',
    initialState,
    reducers: {
    start: (state) => {
        state.isStarted = true;
        let random = Math.floor(Math.random() * state.wordsList.length);
        state.guessWord = state.wordsList[random].toLowerCase();
        for (let i = 0; i < state.guessWord.length; i++) {
            state.clue.push(' _ ');
        }
    },
    end: (state) => {
        state.isStarted = false;
        state.guessWord = [];
        state.clue = [];
        state.attemps = 5;
        state.history = [];
        state.counter = 0;
        state.used = [];
    },
    checkLetter: (state, action) => {
        if(state.attemps !== 0) {
            if(state.clue.includes(' _ ')) {
                var indices = []
                var idx = state.guessWord.indexOf(action.payload);
                while (idx !== -1) {
                    indices.push(idx);
                    idx = state.guessWord.indexOf(action.payload, idx + 1);
                }
                for (let i = 0; i < indices.length; i++) {
                    state.clue[indices[i]] = action.payload.toUpperCase();
                    state.counter += 1;
                }
                if(indices.length === 0){
                    state.attemps -= 1;
                    state.history.push(action.payload.toUpperCase());
                }
                state.used.push(action.payload);
            }
        }
    },
    checkWin: (state) => {
        if(state.attemps === 0) {
            alert('Ooooooh, has perdido, la palabra era ' + state.guessWord.toUpperCase() + '.¿Quieres volver a jugar?');
        } else {
            if(state.counter === state.clue.length){
                alert('¡Has ganado, enhorabuena!');
            }
        }
    },
}
});

export const { start, end, checkLetter, checkWin } = HangmanSlice.actions;

export const selectStart = (state) => state.hangman.isStarted;
export const selectWord = (state) => state.hangman.guessWord;
export const selectClue = (state) => state.hangman.clue;
export const selectAttemps = (state) => state.hangman.attemps;
export const selectHistory = (state) => state.hangman.history;
export const selectUsed = (state) => state.hangman.used;

export default HangmanSlice.reducer;
