function enter(){
    var box1 = window.document.querySelector('input#loc')
    var button = window.document.getElementById('enter')
    var resp = window.document.getElementById('resp')
    var name = box1.value
    resp.innerHTML = `<p>Vivendo em <strong>${name}</strong></p>`
    if (name == 'Brasil'){
        resp.innerHTML += 'Você é <strong>Brasileiro!</strong>'
    }else{
        resp.innerHTML += 'Você é <strong>Estrangeiro!</strong>'
    }
}