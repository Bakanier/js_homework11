document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyR') { 
        if (document.body.style.backgroundColor !== 'red') {
            document.body.style.backgroundColor = 'red';
        }
    }
    if (event.code === 'KeyG') {
        if (document.body.style.backgroundColor !== 'green'){
            document.body.style.backgroundColor = 'green'
        }
    }
    if (event.code === 'KeyB') {
        if (document.body.style.backgroundColor !== 'blue'){
            document.body.style.backgroundColor = 'blue'
        }
    }
    if (event.shiftKey && event.code === 'KeyG' ) {
        if (document.body.style.backgroundColor !== 'gray'){
            document.body.style.backgroundColor = 'gray'
        }
    }
    if (event.shiftKey && event.code === 'KeyB' ) {
        if (document.body.style.backgroundColor !== 'black'){
            document.body.style.backgroundColor = 'black'
        }
    }
});

let i = 0

function click () {
    console.log(i)
    i += 2
}

document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        click()
    }
})

document.getElementById('hide').addEventListener('click',() => {
    let man = document.getElementById('man')
    man.style.opacity = '0'
})

document.querySelector('.input-text').addEventListener('input', function () {
    let inpValue = this.value
    document.querySelector('.output-text').textContent = inpValue
})

let div = document.getElementById('container')

div.addEventListener('click', function(event){
    let rect = div.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    console.log(`Позиция нажатия в квадрате: x=${x} y=${y}`)
})


let inp = document.getElementById('color')

inp.addEventListener('input', function(){
    document.body.style.backgroundColor = inp.value
})


