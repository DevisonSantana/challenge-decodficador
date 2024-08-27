let avisoFormatacao = document.querySelector('.aviso');
let input = document.querySelector('.caixa__usuario__texto');
let botaoCriptografar = document.querySelector('.botao__encriptar');
let botaoDescriptografar = document.querySelector('.botao__desencriptar');
let botaoCopiar = document.querySelector('#botao__copiar');
input.addEventListener('input', function () {
    const texto = input.value.trim();
    let caracteresProibidos = false;

    for (let i = 0; i < texto.length; i++) {
        if (!/[a-z ]/.test(texto[i])) {
            caracteresProibidos = true;
            break;
        }
    }

    if (caracteresProibidos) {
        avisoFormatacao.classList.add('aviso__mexendo');
        avisoFormatacao.style.display = 'flex';
        botaoDescriptografar.disabled = true;
        botaoCriptografar.disabled = true;
    } else {
        avisoFormatacao.classList.remove('aviso__mexendo');
        botaoDescriptografar.disabled = false;
        botaoCriptografar.disabled = false;

    }
}
);

function botaoEncriptar() {
    if (input.value.trim() !== "") {
        let encryptedText = input.value
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        document.getElementById("outputText").innerText = encryptedText;
        document.querySelector(".resultado__aviso").style.display = "none";
        document.querySelector(".secao__resultado").style['justify-content'] = "space-between";
        document.querySelector('.resultado__criptografia__texto').style.display = 'block';
        document.querySelector('.botao__encriptar').style.display = 'block';

        botaoCopiar.className = 'ativo'
        console.log(botaoCopiar);
    } else {
        document.getElementById("mensagem").style.display = "block";
        document.querySelector('.resultado__criptografia__texto').style.display = 'none';
        
    }
}

function botaoDesencriptar() {
    const input = document.getElementById("inputText").value; 
    let decryptedText = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("outputText").innerText = decryptedText;
}

function copiarTexto() {
    const output = document.getElementById("outputText").value;
    navigator.clipboard.writeText(output).then(() => {
        showNotification("Texto copiado para a área de transferência!");
    });
}

function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.className = "show";

    setTimeout(function() {
        notification.className = notification.className.replace("show", "");
    }, 2000);
}

