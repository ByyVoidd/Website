let orangtua = document.getElementById(orang)
let count = 0

function increment() {
   count = count + 1
    orang.innerText = count 
}

function save() {
    console.log(count)
}

save()