function calcularTabuada() {
    let tabuada = document.querySelector('#tabuada tbody');
    tabuada.innerHTML = '';
    let valor = parseInt(document.querySelector('#valor').value);

    for(let i = 0; i <= 10; i++) {
        let result = valor * i;

        let template = `
        <tr>
            <td>${valor}</td>
            <td>x</td>
            <td>${i}</td>
            <td>=</td>
            <td>${result}</td>
        <tr>
        `;
        let tr = document.createElement('tr');
        tr.innerHTML = template;

        tabuada.append(tr);
    }
}


