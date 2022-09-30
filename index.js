const themeBtn = document.getElementsByClassName("theme-btn")[0]
const container = document.getElementsByClassName("container")[0]
const titleSpan = document.getElementsByClassName("title-span")[0]
const subtitle = document.getElementsByClassName("subtitle")[0]
const hr = document.getElementsByClassName("hr")[0]
const passLengthDisplay = document.getElementsByClassName("password-container")[0]
const passLengthRadio = document.getElementsByClassName("passlength-radio")
const passBtn = document.getElementsByClassName("generate-pass-btn")[0]
const passDisplay = document.getElementsByClassName("display")[0]
const passDisplay1 = document.getElementsByClassName("display")[1]
const clipboardMsg = document.getElementsByClassName("copied-message")[0]
const removeChars = document.getElementsByClassName("remove-chars")
const removeSymbolsID = document.getElementById("remove-symbols")
const removeNumbersID = document.getElementById("remove-nums")
let lightUI = false
let darkUI = true

// Light & dark UI
function lightTheme() {
  lightUI = true
  themeBtn.style.background = "#273549"
  themeBtn.style.color = "#fff"
  themeBtn.textContent = "Dark"
  container.style.color = "#2B283A"
  container.style.background = "#ECFDF5"
  titleSpan.style.color = "#10B981"
  subtitle.style.color = "#6B7280"
  hr.style.borderColor = "#D5D4D8"

  for (let i = 0; i < passLengthRadio.length; i++) {
     passLengthRadio[i].style.border = "2px solid #2B283A"
  }

  for (let i = 0; i < removeChars.length; i++) {
      removeChars[i].style.border = "2px solid #2B283A"
  }

  passLengthDisplay.style.color = "#6B7280"
  passBtn.style.background = "#10B981"
  clipboardMsg.style.color = "#6B7280"
  passDisplay.style.color = "#5DEF92";
  passDisplay1.style.color = "#5DEF92";
}

function darkTheme() {
  darkUI = true
  themeBtn.style.background = "#fff"
  themeBtn.style.color = "#273549"
  themeBtn.textContent = "Dark"
  container.style.color = "#fff"
  container.style.background = "#1F2937"
  titleSpan.style.color = "#4ADF86"
  subtitle.style.color = "#D5D4D8"
  hr.style.borderColor = "#2F3E53"

  for (let i = 0; i < passLengthRadio.length; i++) {
     passLengthRadio[i].style.border = "2px solid #fff"
  }
  for (let i = 0; i < removeChars.length; i++) {
      removeChars[i].style.border = "2px solid #fff"
  }

  passLengthDisplay.style.color = "#D5D4D8"
  passBtn.style.background = "#10B981"
  clipboardMsg.style.color = "#D5D4D8"
  passDisplay.style.color = "#55F991";
  passDisplay1.style.color = "#55F991";
  themeBtn.textContent = "Light"
}

// Toggle UI
function changeTheme() {
    if (darkUI) {
        darkUI = !darkUI
        lightTheme()
    } else if (lightUI) {
       lightUI = !lightUI
       darkTheme()
    }
}



// Toggle special characters
let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let charsFinal = [...characters]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]



function removeSpecialChars() {
    charsFinal = [...characters]

    if (removeSymbolsID.checked) {
        charsFinal.splice(charsFinal.indexOf("~"), symbols.length)
    }
    if (removeNumbersID.checked) {
        charsFinal.splice(charsFinal.indexOf("0"), numbers.length)
    }
    // console.log("Final:" + charsFinal, charsFinal.length)
}

// password generator
// generate a number character from the characters array
function generateRandomChar() {
    let randomChar = Math.floor(Math.random() * charsFinal.length)
    return charsFinal[randomChar]
}

//generate password
function generatePass() {
    let password = ""

    for (let i = 0; i < passLength; i++) {
        password += generateRandomChar()
    }
        return password
}

// set password length
const passCharS = document.getElementById("passChar15")
const passCharM = document.getElementById("passChar20")
const passCharL = document.getElementById("passChar25")

let passLength = 0

function setPassLength() {
    // 15, 20, 25
    if (passCharS.checked) {
        passLength = 15
        console.log("password length 15")
    }
    else if (passCharM.checked) {
        passLength = 20
        console.log("password length 20")
    } else if (passCharL.checked) {
        passLength = 25
        console.log("password length 25")
    }
}

// display password
function displayPass() {
    let newPass = generatePass()
    let newPass1 = generatePass()
    passDisplay.value = newPass
    passDisplay1.value = newPass1
}

// copy password to clipboard
function copyToClipboard(password) {
    if ( passDisplay.value) {
        password.select()
        document.execCommand("Copy")
            if (password.className === "display display-1") {
                clipboardMsg.textContent = "Copied password 1 to clipboard!"
            } else {
                clipboardMsg.textContent = "Copied password 2 to clipboard!"
            }
        clipboardMsg.style.display = "inline-block"
    }
}
