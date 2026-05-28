// Controle do tamanho atual da fonte base
let tamanhoAtual = 16;

// Função para aumentar e diminuir a fonte da página
function mudarTamanhoFonte(mudanca) {
    tamanhoAtual += mudanca;
    
    // Limita o tamanho para garantir boa usabilidade (mínimo 12px, máximo 24px)
    if (tamanhoAtual >= 12 && tamanhoAtual <= 24) {
        document.documentElement.style.setProperty('--tamanho-fonte', tamanhoAtual + 'px');
    } else {
        // Se passar do limite estabelecido, desfaz a alteração involuntária
        tamanhoAtual -= mudanca; 
    }
}

// Função para ativar/desativar o modo de Alto Contraste
function alternarContraste() {
    document.body.classList.toggle('alto-contraste');
}