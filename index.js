let emojiMap = {
    "excited" : "🤩",
    "happy" : "😄",
    "funny" : "😂",
    "shrug" : "🤷‍♀️",
    "wink" : "😉",
    "pizza" : "🍕",
    "coffee" : "☕",
    "cake" : "🎂",
    "cupcake" : "🧁",
    "donut" : "🍩",
    "disgusted" : "🤢",
    "money" : "🤑",
    "roll eye" : "🙄",
    "drums" : "🥁",
    "piano" : "🎹",
    "grapes" : "🍇",
    "mushroom" : "🍄",
    "tangerine" : "🍊",
    "lemon" : "🍋",
    "bread" : "🍞",
    "cheese" : "🧀",
    "pancakes" : "🥞",
    "kiwi" : "🥝",
    "banana" :"🍌",
    "carrot" : "🥕",
    "apple" : "🍎",
    "cherry" : "🍒",
    "watermelon" : "🍉",
    "lollipop" : "🍭",
    "chocolate" : "🍫",
    "milk" : "🥛",
    "cow" : "🐮",
    "monkey" : "🐒",
    "dog" : "🐶",
    "fox" : "🦊",
    "cat" : "🐱",
    "donkey" : "🫏",
    "tiger" : "🐯",
    "lion" : "🦁",
    "pig" :" 🐷",
    "mammoth" : "🦣",
    "mouse" : "🐭",
    "elephant" : "🐘",
    "turtle" : "🐢",
    "lizard" : "🦎",
    "dove" : "🕊️",
    "penguin" : "🐧",
    "whale" : "🐳",
    "eagle" : "🦅",
    "seal" : "🦅",
    "cockroach" : "🪳",
    "sunflower" : "🌻",
    "maple leaf" : "🍁",
    "luck" : "🍀",
    "jackpot" : "💰",
    "clown" : "🤡",
    "robot" : "🤖",
    "alien" : "👽",
    "nerd" : "🤓",
    "map" : "🗺️",
    "hut" : "🛖",
    "hotel" : "🏨",
    "bank" : "🏦",
    "stadium" : "🏟️",
    "beach" : "🏖️",
    "camping" : "🏕️",
    "brick" : "🧱",
    "train" : "🚆",
    "metro" : "🚇",
    "cycle" : "🚲",
    "auto" : "🛺",
    "traffic lights" : "🚦",
    "skateboard" : "🛹",
    "taxi" : "🚕",
    "bus" : "🚌",
    "car" : "🚗",
    "halloween" : "🎃",
    "poop": "💩",
    "clown" : "🤡",
    "ghost" : "👻",
    "dice" : "🎲",
    "puzzle" : "🧩",
    "video game" : "🎮",
    "ribbon" : "🎀",
    "celebration" : "🎉",
    "christmas" : "🎄",
    "bowling" : "🎳",
    "basketball" : "🏀",
    "baseball" : "⚾",
    "sunglasses" : "🕶️",
    "kimono" : "👘",
    "lab coat" : "🥼",
    "heels" : "👠",
    "diamond" : "💎",
    "ring" : "💍",
    "lipstick" : "💄",
    "music" : "🎵",
    "microphone" : "🎤",
    "flute" : "🪈",
    "low battery" : "🪫",
    "printer" : "🖨️",
    "camera" : "📸",
    "candle" : "🕯️",
    "abacus" : "🧮",
    "telephone" : "☎️",
    "computer mouse" : "🖱️",
    "cello" : "🎻",
    "headphone" : "🎧",
    "saxophone" : "🎷",
    "zero" : "0️⃣",
    "one":"1️⃣",
    "two" : "2️⃣",
    "three" : "3️⃣",
    "four" : "4️⃣",
    "five" : "5️⃣",
    "six" : "6️⃣",
    "seven" : "7️⃣",
    "eight" : "8️⃣",
    "nine" : "9️⃣",
    "peace" : "🏳️",
    "fuming angry" :  "😤",
    "angry" : "😡",
    "afraid" : "😨",
    "shocked" : "😧",
    "unamused" : "😒",
    "sneezing" : "🤧",
    "confused" :  "😵‍💫",
    "kissy face" : "😘",
    "smile" : "🙂",
    "yummy" : "😋",
    "melting" : "🫠",
    "blessed" : "😇",
    "crazy" : "🤪",
    "suspicious" : "🤨",
    "shook" : "🫨",
    "sigh" : "😮‍💨",
    "sleepy" : "😪",
    "drooling" : "🤤",
    "love" : "❤️",
    "cool" : "😎",
    "boring" : "🥱",
    "salute" : "🫡",
    "disappointed" : "🫤",
    "facepalm" : "🤦",
    "lovely" : "😍",
    "cold" : "🥶",
    "icecream" : "🍨",
    "sunny" : "☀️",
    "moon" : "🌙",
    "star" : "⭐",
    "shy" : "🤭",
    "devil" : "😈",
    "angel" : "👼",
    "shocked" : "😮",
    "crying" : "😭",
    "mind blown" : "🤯",
    "sad" : "☹️",
    "stunned" : "😶",
    "thinking" : "🤔"
}

// numOfEmojis = Object.keys(emojiMap).length

function emojifyMyText(text) {
    // resultant emojified string
    let result = ""

    //  store tokens of text (split on basis of space)
    let tokens = text.split(" ")
    console.log(tokens)

    // iterate over tokens to add to resultant string
    for (let i = 0; i < tokens.length; i++ ) {

        let word = tokens[i]
        // handling punctuation
        let punctuation = ""
        if(/[.,]$/.test(word)){ // if word contains punctuation, store it separately and clean up word
            punctuation = word.match(/[.,]$/)[0]
            word = word.replace(/[.,]$/,'')
        }

        // check if word is present in emojiMap
        let emotionFound  = false

        // iterate through object emojiMap
        Object.keys(emojiMap).forEach(emotion => {
            // check if word is present
            if(emotion == word.toLowerCase()){
                // add the emoji if word is present
                let emoji = emojiMap[emotion]
                result += emoji + punctuation + " "
                emotionFound = true
            }
        })

        // if emotion is not found in map
        if(!emotionFound) {
            // add the word
            result += word + punctuation + " "
        }
    }

    return result
}

exports.emojifyMyText = emojifyMyText


