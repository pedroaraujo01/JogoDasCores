import { colors } from "./colors.js"; //importa vetor de cores

document.getElementById("iniciar").addEventListener('click', iniciarJogo); //insere o evento no botão de iniciar o jogo


function iniciarJogo() {
    var cores = colors();
    var vetorCores = [];
    var bool; // utilizado no loop
    var corUsuario; //cor escolhida pelo usuário
    var vidas = 5;

    while (vetorCores.length < 10) {
        vetorCores[vetorCores.length] = cores[Math.floor(Math.random() * (cores.length - 1)) + 1];
        vetorCores = [...new Set(vetorCores)];
    }
    //preenche o vetor de cores randomicamente e impede a duplicidade de valores.

    vetorCores.sort(); // ordena as cores alfabeticamente 

    var corEscolhida = Math.floor(Math.random() * (vetorCores.length - 1)) + 1; //escolhe aleatóriamente uma posição do vetor cores
    var vetorCores2 = vetorCores.map(vetorCores => vetorCores.toUpperCase()); //cria um novo vetor cores para MAISCULO.

    while (!bool) {
        corUsuario = prompt("Eu estou pensando em uma dessas cores: \n" + vetorCores.join(', ') + "\nEm qual delas eu estou pensando?\n" + `Você tem ${vidas} vidas restantes`);
        corUsuario = corUsuario.toUpperCase(); //cor do usuário para MAIUSCULO
        if (vidas == 0) {
            bool = true;
            document.getElementById("msg").innerHTML = "Tente novamente."
            alert("Vidas esgotadas\nFim de jogo.");
        } else {
            if (vetorCores2.indexOf(corUsuario) < 0) {
                alert("Cor inexistente");
            } else {
                if (corUsuario == vetorCores2[corEscolhida]) {
                    alert("Você acertou!");
                    bool = true;
                    document.body.style.background = corUsuario;
                    document.getElementById("msg").innerHTML = `A cor é: ${vetorCores[corEscolhida]}`;
                } else {
                    let res = corUsuario.localeCompare(vetorCores2[corEscolhida])
                    let dica = "Dica: a cor escolhida é alfabeticamente ";
                    if (res == -1) {
                        dica += "maior do que a que você escolheu"
                    } else {
                        dica += "menor do que a que você escolheu"
                    }
                    vidas--;
                    alert(`Desculpe! Sua resposta não está correta!\n${dica}\nPor favor tente novamente.`);
                }

            }

        }

    }
}