let amigos = []; 


function adicionar() {
    let nomeDoAmigo = document.getElementById('nome-amigo').value;

    if (nomeDoAmigo == '') {
        alert('Insira um nome!');
        return;
    }

    if (amigos.includes(nomeDoAmigo)) {
        alert('Você não pode colocar dois nomes identicos! Insira o sobrenome para diferenciar eles.');
        return;
    }

    let amigosIncluidos = document.getElementById('lista-amigos');
    
    amigos.push(nomeDoAmigo);

    if (amigosIncluidos.textContent == '') {
        amigosIncluidos.textContent = nomeDoAmigo;
    } else {
        amigosIncluidos.textContent = amigosIncluidos.textContent + ', ' + nomeDoAmigo;
    }

    document.getElementById('nome-amigo').value = '';
}

function sortear() { 

    if (amigos.length < 4) {
        alert('Numere minimo de perticipantes é 4!');
        return;
    } 

    embaralha(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');
    amigosIncluidos = document.getElementById('lista-amigos');

    for (let i = 0; i < amigos.length  ; i++) { 
        if (i == amigos.length - 1 ) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] +  '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] +  '<br>';
        }
    }

    amigosIncluidos = document.getElementById('lista-amigos').textContent = '';
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaSorteio = document.getElementById('lista-sorteio').innerHTML = '';
}