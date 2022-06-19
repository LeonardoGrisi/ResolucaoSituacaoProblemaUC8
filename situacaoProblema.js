// -Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.

// -Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.

// -Listar participantes e palestrantes por evento.
 
// -Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.

// Entrada

let nomePart1 = ["Pedro", " Marcos", " Ana", " Marina", " Tomaz", " Douglas", " Geovana"];
let listaPart1 = nomePart1;
let nomePales1 = "Maria";
let nomeEvento1 = "Musica";
let idade = 18;
let data = 04/10/2022;
let dataEvento = 05/10/2022;
let QtdPart = nomePart1.length;

// Desenvolvimento

// -Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
if(idade < 18) {
    console.log("Idade inválida");
} else {
console.log("");

// -Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
if(dataEvento < data) {
    console.log("Data inválida");
} else {
    
console.log("");

// -Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
if(QtdPart > 100) {
    console.log("Limite Excedido");
} else {
    console.log("Cadastro concluído");
    console.log("");
    console.log("Quantidade de participantes: " + QtdPart);
}

// -Listar participantes e palestrantes por evento.
console.log("");
console.log("Evento:");
console.log(nomeEvento1);
console.log("Palestrante:");
console.log(nomePales1);
console.log("Os participantes são: " + listaPart1);
console.log("");

}
}