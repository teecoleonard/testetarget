# Target Sistemas - Teste Técnico

Este projeto contém as soluções para os desafios técnicos propostos pela Target Sistemas, implementadas em React com TypeScript.

## Fotos de como o projeto e no computador

![image](https://github.com/user-attachments/assets/4e77a044-31bc-4cda-9d70-3c82db551072)


## Desafios Implementados

1. **Cálculo de Soma**: Cálculo do valor final da variável SOMA
2. **Verificador de Fibonacci**: Verifica se um número pertence à sequência de Fibonacci
3. **Análise de Faturamento**: Cálculo de estatísticas de faturamento a partir de um arquivo JSON
4. **Percentual por Estado**: Cálculo do percentual de representação de cada estado no faturamento total
5. **Inversor de String**: Inverte os caracteres de uma string sem usar funções prontas

## Como Executar o Projeto

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 14.x ou superior)
- npm (normalmente vem com o Node.js) ou [Yarn](https://yarnpkg.com/)

### Passos para Execução

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/testetarget.git
cd testetarget
```

2. **Instale as dependências**

Usando npm:
```bash
npm install
```

Ou usando Yarn:
```bash
yarn install
```

3. **Execute a aplicação**

Usando npm:
```bash
npm start
```

Ou usando Yarn:
```bash
yarn start
```

4. **Acesse a aplicação**

Abra seu navegador e acesse:
```
http://localhost:3000
```

## Estrutura do Projeto

```
testetarget/
├── public/
├── src/
│   ├── components/         # Componentes de cada desafio
│   │   ├── common/         # Componentes compartilhados
│   │   ├── SomaCalc.tsx    # Solução para o desafio 1
│   │   ├── Fibonacci.tsx   # Solução para o desafio 2
│   │   └── ...
│   ├── styles/             # Estilos compartilhados
│   ├── App.tsx             # Componente principal
│   ├── dados.json          # Dados para análise de faturamento
│   └── ...
└── package.json
```

## Detalhes da Implementação

- Cada desafio foi implementado como um componente React independente
- O código-fonte de cada solução pode ser visualizado clicando no botão "Ver Código Fonte" na interface
- As soluções são exibidas em uma única página para facilitar a avaliação
- O projeto utiliza TypeScript para fornecer tipagem estática e melhor qualidade de código

## Tecnologias Utilizadas

- React 18
- TypeScript
- CSS-in-JS para estilização

## Otimizações Implementadas

- Componentização para reutilização de código
- Estilos compartilhados para manter consistência visual
- Tratamento de erros para melhor experiência do usuário

## Executando os Testes

Para executar os testes automatizados:

```bash
npm test
```

---

Desenvolvido como parte do processo seletivo para a Target Sistemas.
