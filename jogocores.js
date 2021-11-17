import { colors } from "./colors.js"; 
document.getElementById("iniciar").addEventListener('click', iniciaJogo); 


function iniciaJogo() {
    var vidas = 5;
    var vetorCores = [];
    var cores = colors();
    var corEscolhida; 
    var booleano; 
    

    while (vetorCores.length < 10) {
        vetorCores[vetorCores.length] = cores[Math.floor(Math.random() * (cores.length - 1)) + 1];
        vetorCores = [...new Set(vetorCores)];
    }
    vetorCores.sort();
    
    var corSelecionada = Math.floor(Math.random() * (vetorCores.length - 1)) + 1;
    var vetorCores2 = vetorCores.map(vetorCores => vetorCores.toUpperCase());

    while (!booleano) {
        corEscolhida = prompt("Pensei em alguma dessas cores abaixo: \n" + vetorCores.join(',\n ') + "\nEm qual delas eu pensei?\n" + `Você tem ${vidas} tentativas restantes`);
        corEscolhida = corEscolhida.toUpperCase();
        if (vidas == 0) {
            booleano = true;
            document.getElementById("msg").innerHTML = "Tente novamente."
            alert("Acabou suas tentativas\nFim de jogo.");
        } else {
            if (vetorCores2.indexOf(corEscolhida) < 0) {
                alert("Cor inexistente");
            } else {
                if (corEscolhida == vetorCores2[corSelecionadaa]) {
                    alert("Você acertou!");
                    booleano = true;
                    document.body.style.background = corEscolhida;
                    document.getElementById("msg").innerHTML = `A cor é: ${vetorCores[corSelecionada]}`;
                } else {
                    let res = corEscolhida.localeCompare(vetorCores2[corSelecionada])
                    let dica = "Dica: a cor escolhida é alfabeticamente ";
                    if (res == -1) {
                        dica += "depois do que a que você escolheu"
                    } else {
                        dica += "antes do que a que você escolheu"
                    }
                    vidas--;
                    alert(`Sua resposta está errada!\n${dica}\nTente novamente.`);
                }

            }

        }

    }
}