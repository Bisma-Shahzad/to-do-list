function del(element) {
    element.parentNode.remove()
    console.log(element)
}

function editP(element) {
    var p = element.parentNode
    var text = document.getElementById('input-text')
    text.value = p.innerText
    element.parentNode.remove()
}



function generateElement() {
    var p = document.createElement('P')
    var text = document.getElementById('input-text').value
    var textnod = document.createTextNode(text)
    p.appendChild(textnod)
    var parent = document.getElementById('parent')
    parent.appendChild(p)

    var btn = document.createElement('button')
    var btnText = "Delete"
    btnText = document.createTextNode(btnText)
    btn.appendChild(btnText)
    p.appendChild(btn)
    btn.setAttribute('onclick', 'del(this)')
    btn.className += 'deletePara'

    var butn = document.createElement('button')
    var butnText = "Edit"
    butnText = document.createTextNode(butnText)
    butn.appendChild(butnText)
    p.appendChild(butn)
    butn.setAttribute('onclick', 'editP(this)')
    butn.className += 'editPara'


}