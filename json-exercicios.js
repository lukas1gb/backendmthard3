// 1. Criando o objeto pessoa
const pessoa = {
    nome: "João Silva",
    idade: 17,
    email: "joao@email.com",
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
        cidade: "São Paulo"
    },
    hobbies: ["Futebol", "Videogames", "Leitura"]
};

// 2. Convertendo para String JSON
const pessoaJSON = JSON.stringify(pessoa);
console.log("=== OBJETO PARA JSON ===");
console.log("Tipo:", typeof pessoaJSON);
console.log("Conteúdo:", pessoaJSON);

// 3. Convertendo com formatação (indentação de 2 espaços)
const pessoaFormatada = JSON.stringify(pessoa, null, 2);
console.log("\n=== JSON FORMATADO ===");
console.log(pessoaFormatada);

// 4. Parsing de JSON recebido
const jsonRecebido = '{"nome":"Maria","idade":16,"turma":"3A"}';
const objetoConvertido = JSON.parse(jsonRecebido);
console.log("\n=== JSON PARA OBJETO ===");
console.log("Tipo:", typeof objetoConvertido);
console.log(`Nome: ${objetoConvertido.nome}, Idade: ${objetoConvertido.idade}`);

// 5. Criando o array de filmes
const filmes = [
    { id: 1, titulo: "Matrix", ano: 1999, genero: "Ficção" },
    { id: 2, titulo: "Titanic", ano: 1997, genero: "Romance" },
    { id: 3, titulo: "Toy Story", ano: 1995, genero: "Animação" }
];

// 6. Simulação de catálogo
console.log("\n=== CATÁLOGO DE FILMES ===");
const filmesJSON = JSON.stringify(filmes, null, 2);
console.log("Filmes em JSON:", filmesJSON);

// Simulando o recebimento (Parsing)
const filmesRecebidos = JSON.parse(filmesJSON);
console.log("Filmes carregados novamente:");

filmesRecebidos.forEach(filme => {
    console.log(`${filme.id}. ${filme.titulo} (${filme.ano}) - ${filme.genero}`);
});
