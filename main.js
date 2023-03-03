let operations = []
let result = 0

const inputEl = document.querySelector("#input-field")
const resultEl = document.querySelector("#result-field")
document.addEventListener("click", handleClick)

function handleClick(e){
    console.log(e.target.dataset.key)
    const key = e.target.dataset.key
    if (key === "="){
        result = eval(operations.join(""))
        displayResult()
    } else if(key === "clear"){
        operations = []
        inputEl.value = ""
        resultEl.textContent = ""
        
    }else {
        operations.push(key)
        displayOperations()
    }

}

function displayOperations(){
    inputEl.value = operations.join("")
}


function displayResult(){
    resultEl.textContent = result
}

