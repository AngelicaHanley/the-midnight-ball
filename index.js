const story = [

    {
        title: "Arrival at the Royal Ball",
        text: `It is the most anticipated evening of the season, and you have arrived at the royal palace with your family. Your mother has spent the entire carriage ride reminding you to behave like a proper young lady. 
        
                She is determined to find you a suitable husband before the Midnight Ball ends. As you enter the ballroom, your mother spots a wealthy gentleman she insists you must meet.  However, a mysterious stranger catches your eye as he approaches you. What will you do?`,
        choices: [
            { text: "Accept a dance with the mysterious stranger.", nextScene: 1 },
            { text: "Listen to your mother and meet the wealthy gentleman.", nextScene: 2 },
        ]
    },

    {
        title: "The Mysterious Stranger",
        text:   `Before your mother can introduce you to another gentleman, the mysterious stranger approaches you. "Would you honor me with a dance, my lady?" You accept, and the two of you spend the dance laughing and talking. 
                
                Unlike the other gentlemen at the ball, he seems remarkably uninterested in discussing his background or family connections. As the music ends, he invites you for a walk through the palace gardens. Unfortunately, you spot your mother approaching you. What will you do?`,
        choices: [
            { text: "Accept his invitation to the gardens.", nextScene: 4 },
            { text: "Politely decline and return to your mother.", nextScene: 2 },
            { text: "Excuse yourself and escape to the royal library.", nextScene: 9 }
        ]
    },
    {
        title: "Lord Bash",
        text:   `Your mother looks delighted as she introduces you to Lord Bash, a wealthy gentleman from a respectable family. Lord Bash begins boasting about his beautiful estate and impressive collection of art. Just as you begin to lose interest, he lowers his voice. "Have you heard? The queen has been accused of secretly purchasing an extravagant diamond necklace using money from the royal treasury!" 
        
                Intrigued by the rumor, you remember hearing stories that the palace gardens contain hidden passages. And after listening to Lord Bash boast about himself for far too long, you are desperate to escape his company. What will you do?`,
        choices: [
            { text: "Investigate the rumors about the necklace.", nextScene: 3 },
            { text: "Make an excuse and escape to the royal library.", nextScene: 9 }
        ]
    },
    {
        title: "The Palace Gardens",
        text:   `You wander through the moonlit palace gardens, enjoying the fresh evening air and a welcome escape from the endless conversations about marriage. As you wander along the flowered pathways, you notice something unusual: a doorway hidden behind a stone fountain.
                
                You remember hearing rumors earlier about the queen's missing diamond necklace. Could the doorway be hiding something important? What will you do?`,
        choices: [
            { text: "Investigate the mysterious doorway.", nextScene: 6 }
        ]
    },
    {
        title: "A Walk in the Gardens",
        text:   `You accept the mysterious gentleman's invitation, and together you wander through the moonlit gardens. He admits that he rarely enjoys an evening without everyone needing something from him. Before you can ask what he means, the palace bells begin to ring in the distance.
                
                "I'm afraid I must return to the ballroom," he says, looking disappointed. He promises that you will see him again before the evening is over. With midnight approaching, will you follow the mysterious gentleman or explore the gardens on your own?`,
        choices: [
            { text: "Return to the ballroom for the royal announcement.", nextScene: 5 },
            { text: "Stay behind and explore the palace gardens.", nextScene: 3 }
        ]
    },
    {
        title: "The Midnight Announcement",
        text:   `The palace clock strikes midnight. The music stops, and the queen starts addressing her guests. "Ladies and gentlemen, it is my pleasure to introduce His Royal Highness, the Crown Prince!" 
                
                To your surprise, the charming gentleman you encountered earlier in the evening steps forward.  You can hardly believe your eyes! As the crowd applauds, the prince searches the ballroom until his gaze meets yours.`,
        choices: [
            { text: "Approach the prince.", nextScene: 7 }
        ]
    },
    {
        title: "The Hidden Passage",
        text:   `You open the covered doorway and see a narrow passage leading beneath the palace.
                At the end of the passage, you find a small chamber with a jewelry box. Inside lies an extravagant diamond necklace! Next to it, you discover a letter with the queen's signature. 
                
                However, with closer inspection, you notice that the signature has been forged.
                Someone has been using the queen's name to get expensive jewels without her knowing!
                With midnight approaching, you realize that you must clear her name.`,
        choices: [
            { text: "Bring the necklace and letter to the queen.", nextScene: 8 }
        ]
    },
    {
        title: "The Mysterious Prince",
        text:   `The prince approaches you with a shy smile. "I believe I owe you another dance, my lady."
                You laugh, still shocked that the charming stranger you met earlier is actually the crown prince.
                
                Across the ballroom, your mother looks as though she might faint from excitement. As the final waltz begins, the prince takes your hand. Perhaps this evening was the beginning of your happily ever after. THE END!`,
        choices: []
    },
    {
        title: "The Queen's Necklace",
        text:   `Just as the palace clock strikes midnight, you approach the queen with the diamond necklace and the forged letter. The queen examines the evidence in astonishment. For weeks, she has been accused of purchasing this necklace using money from the royal treasury, despite insisting she knew nothing about it.
                
                Your discovery proves that someone had forged her signature and framed her. The queen publicly thanks you for uncovering the truth and restoring her reputation. By morning, the entire kingdom is celebrating your bravery and cleverness. 
                
                Your mother is delighted to announce that her daughter is now a trusted friend of the royal family. You may not have found a match tonight, but you saved the queen's reputation and made history. THE END!`,
        choices: []
    },
    {
        title: "The Royal Library",
        text:   `You finally escape the crowded ballroom and wander into a new hallway of the palace. Looking for a quiet spot, you enter the royal library. As you admire the room, you notice an old portrait of a young woman who looks a lot like your mother. Under the portrait, you notice a faded inscription with your grandmother's name. 
                
                As you take a closer look, you discover a letter tucked behind the portrait. The letter reveals that your grandmother belonged to a distant branch of the royal family! With midnight approaching, you must decide what to do with this shocking discovery.`,
        choices: [
            { text: "Bring the letter to the queen and reveal the secret.", nextScene: 10 },
            { text: "Keep the family secret and investigate the necklace rumors instead.", nextScene: 3 }
        ]
    },

    {
        title: "The Secret Royal Connection",
        text:   `As the palace clock strikes midnight, you approach the queen with the mysterious letter. The queen examines it carefully before looking at you in astonishment. She reveals that your grandmother belonged to a distant branch of the royal family, a connection that had been kept secret for generations due to a long-forgotten family scandal. You are a descendant of royalty! 

                With this being revealed, the queen welcomes you as a newly discovered member of the royal family. Across the ballroom, your mother looks completely speechless for the first time all evening. You arrived at the Midnight Ball expecting a night of dancing, but instead discovered a royal secret about your own family. Perhaps you were destined for royalty after all. THE END!`,
        choices: []
    }
];

// ! PLAN: Game Structures !
//Track the current scene
//Create function to start the game

//Create function to display current scene
//Create function to update scene title, text, and options
//Update choices (buttons) helper
//Create function to handle user selections

//Create function to check if the scene is an ending (so the last scene with no choices)
//Create function to restart the game
//Display Play Again button when the game ends

let currentScene = 0
const sceneTitle = document.querySelector(".sceneTitle")
const storyText = document.querySelector(".storyText")
const choices = document.querySelector(".choices")

function startGame() {
    currentScene = 0
    displayScene()
}

function displayScene() {
    updateSceneComponents()
    if(isGameOver()){
        //display play again button
        createPlayAgainButton()
    } else {
        updateChoices()
    }
}

function updateSceneComponents() {
    sceneTitle.textContent = story[currentScene].title
    storyText.textContent = story[currentScene].text
}

function updateChoices() {
    //reset button html
    choices.innerHTML = ""
    //create choice buttons (depending on number of choices)
    story[currentScene].choices.forEach(choice => {
        const button = document.createElement("button")
        button.textContent = choice.text
        button.classList.add("choiceButton")
        //choices event listener
        button.addEventListener("click", () => {
            updateScene(choice.nextScene)
        })
        choices.appendChild(button);
    });
}

function updateScene(nextScene){
    currentScene= nextScene
    displayScene()
}

function isGameOver() {
    let gameOver = false
    if (story[currentScene].choices.length === 0){
        gameOver = true
    }
    return gameOver
}

function createPlayAgainButton() {
    choices.innerHTML = ""
    const playAgainButton = document.createElement("button")
    playAgainButton.textContent = "Play Again"
    playAgainButton.classList.add("playAgainButton")
    choices.appendChild(playAgainButton);

    playAgainButton.addEventListener("click", () => {
        startGame()
    })
}

startGame()
