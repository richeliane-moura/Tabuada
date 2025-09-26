function tabuada() {
    let num = document.getElementById('txtn'); // campo de input (número digitado)
    let tab = document.getElementById('seltab'); // select (área onde a tabuada será exibida)

    if (num.value.length == 0) {
        alert('Por favor, digite um número!');
    } else {
        let n = Number(num.value); // converte o valor digitado para número
        let c = 1;
        tab.innerHTML = ''; // limpa a tabuada anterior

        while (c <= 10) {
            let item = document.createElement('option'); // cria uma nova linha na lista
            item.text = `${n} x ${c} = ${n * c}`; // conteúdo da linha
            item.value = `tab${c}`; // valor da opção (não visível, mas pode ser útil)
            tab.appendChild(item); // adiciona no select
            c++;
        }
    }
}
