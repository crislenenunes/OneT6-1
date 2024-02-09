function Encripted(){  
    let inputText = document.getElementById("input-text").value
    let notFoundContent = document.getElementById('not-found-content')
    let paragraphMessage = document.getElementById('paragraph-message')
    let messageContent = document.getElementById('message-content')

    let newArr = []
    let message = ''

    inputText.split('').map((letter) => {
        if(letter === 'a') {
            newArr.push("ai")
            return
        }
        if(letter === 'e') {
            newArr.push("enter")
            return
        }
        if(letter === 'i') {
            newArr.push("imes")
            return
        }
        if(letter === 'o') {
            newArr.push("ober")
            return
        }
        if(letter === 'u') {
            newArr.push("ufat")
            return
        }
        return newArr.push(letter)
    })

    newArr.map((item) => message += item)

    notFoundContent.classList.add('hidden')
    messageContent.classList.remove('hidden')
    messageContent.classList.add('flex')
    paragraphMessage.innerHTML = message

}

function Decripted(){
    // Elementos do html
    let inputText = document.getElementById("input-text").value
    let paragraphMessage = document.getElementById('paragraph-message')

    const criptoKeys = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    }
   
    for(const [key, value] of Object.entries(criptoKeys)){
        inputText = inputText.split(key).join(value)
    }

    paragraphMessage.innerText = inputText
 
    return inputText
}


function CopyMessageButtom(){
    let paragraphMessage = document.getElementById('paragraph-message').textContent

    navigator.clipboard.writeText(paragraphMessage);
    alert("Texto copiado para a área de transferência!", paragraphMessage);
}

function Message(type){
 
    const encriptedMessage = Encripted()

    if(type === "decripted"){
        return Decripted(encriptedMessage)
    }
   
    if(type === "encripted"){
        return encriptedMessage
    }

    return null
}