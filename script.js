function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]! Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        //atribuir uma foto dinamicamente
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //Se o masculino estiver marcado, genero recebe 'Homem', senão, recebe 'Mulher'.
        if (fsex[0].checked) {
            genero = 'Homem'
            img.setAttribute('src', 'foto-homem.png')
        } else {
            genero = 'Mulher'
            img.setAttribute('src', 'foto-mulher.png')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<strong>Idade calculada:</strong> Legal! Você é ${genero} e tem <strong>${idade} anos!<\strong>`
        res.appendChild(img)
    }
}