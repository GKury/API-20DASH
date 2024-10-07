# API para Gestão de Estoque

## Explicação do código

Levei a descrição do problema o mais no pé da letra o possível, por isso o back-end tem poucas "funcionalidades", porém, quis estruturar o código de maneira bem feita para que seja fácil de adicionar funcionalidades, além de auxiliar na organização. Da maneira atual, é possível ver os produtos no estoque (todos de uma vez, ou fazer uma busca individual) e alterá-los.

O banco de dados foi idealizado da seguinte forma: Uma tabela Product que contém todos os dados essenciais de cada produto (nome, tipo, quantidade), e uma tabela EstoqueMinimo, que contém o id de um produto e o limite mínimo do estoque. Colocando essa regra específica do limite mínimo do estoque em outra tabela permite flexibilidade, pois apenas os produtos com limite mínimo de estoque estarão nesta tabela, fora que tal lógica torna simples a adição de novas regras (Para cada nova regra será necessário apenas criar uma tabela, que contará uma coluna para o id do produto a qual a regra se aplica, e então adicionar coluna(s) relacionada(s) a regra em si).

Tendo separado a regra do limite mínimo em outra tabela, nas requisições GET é necessário além de retornar o conteúdo de Product, também retorno a quantidade mínima que está em EstoqueMinimo (caso ela exista). Tendo esses dois valores, com uma simples comparação é possível marcar o produto como "estoque baixo" no front-end.

## Possiveis alterações

Como dito, a proposta foi levada o mais ao pé da letra o possível, porém da forma que o código está estruturado, as seguintes alterações seriam bem vindas: Adicionar o Model/tabela no banco de dados "usuarios", para que apenas pessoas cadastradas realizem mudanças na tabela. Adicionar uma rota para realização de login, que além de fazer o login, geraria um JSON Web Token para o usuário, e com isso adicionar um MiddleWare em todas as outras rotas, que se certificaria que o usuário está logado de forma válida antes de realizar uma ação. Adicionar a rota e o controller "usuarios", para que um CRUD relacionado aos usuarios pudesse ser feito. Adicionar pelo menos rotas (e seus respectivos controllers) POST e DELETE em productRoutes, para que seja possível adicionar novos produtos, ou apagar produtos que não voltarão ao estoque.