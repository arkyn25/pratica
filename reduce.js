const pessoas = [
  {
    nome: 'arlen',
    idade: 28
  },
  {
    nome: 'max',
    idade: 28
  },
  {
    nome: 'Sam',
    idade: 15
  },
]

const pessoasAgrupadas = pessoas.reduce(function(acc, curr) {
  const maiorOuMenor = curr.idade >= 18 ? 'maiores' : 'menores';
  acc[maiorOuMenor].push(curr);
  return acc;
}, { maiores: [], menores: []})

console.log('Pessoas', pessoasAgrupadas)

