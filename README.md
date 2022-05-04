<h2> API DOCUMENT GENERATOR (Panagora) </h2>


<h3> O que é? </h3>
A API desenvolvida é um mini projeto para seleção de vaga para desenvolvedor junior na empresa pandora soluções.<br>
O principal objetivo do serviço desenvolvido, é consumir a API disponibilizada pela empresa para assim gerar documentos e templates, usando como base, dados de
votantes que utilizam o sistema panagora.<br><br>
A API foi desenvolvida com as seguintes tecnologias:

* Node.js
* MySql
* Sequelize (ORM)
* Express.js
* Docker

<hr>

<h3> Como funciona? </h3>

A API possui algumas rotas com funções determinadas pra elas. Logo abaixo será explicada de forma simples, quais são essas rotas e o que elas fazem.

<h3> Gerar um template </h3>

Para gerar um novo template com os dados do votante, basta fazer uma requisição para a rota: http://localhost:5000/documents/generate/{idDoVotante} passando o id do votante 
como parametro<br>
Ao entrar na rota, o sistema retornara com o status 200 e com um atributo no json chamado isInserted, com ele recebendo true caso inserido com sucesso, e false 
caso tenha dado algum problema.

<hr>

<h3> Paginar todos os templates </h3>

Para paginar todos os templates, deve-se requisitar a rota: http://localhost:5000/documents/findAllTemplates. <br> 
Ao fazer isso, será retornado um objeto em json com todos
os templates cadastrados até agora!

<hr>

<h3> Achar um template especifico </h3>

Ao fazer uma requisição para a rota http://localhost:5000/documents/findTemplate/{idDocumento} passando o id do documento como parametro, irá ter um retorno com o status 200 com o template cadastrado. 
Caso o id seja invalido, será retornado uma mensagem: "Não há templates cadastrados!"
<hr>
<h3> Criar um PDF </h3>

A rota http://localhost:5000/documents/createNewDocument/{idVotante} cria um pdf com os dados e o documento do votante em questão. A resposta terá um link para visualização e download desse documento>
<hr>
<h2>Variaveis de ambiente</h2>

Vale ressaltar que as variaveis de ambiente são totalmente modificaveis no sistema, utilizando o arquivo .env <br>
Sendo assim, é possivel trocar senha do banco de dados, a url base da api, o banco de dados, etc.

![image](https://user-images.githubusercontent.com/60900449/166613999-6a5f955b-3c10-4ea1-93d8-341c80d200ff.png)
<br>

Para utilizar o banco de dados no docker, basta trocar a variavel MYSQL_URL para o nome do container que está o banco de dados (rodando na porta 3308). Por padrão
o container se chama "database-node"


<footer>
  <hr>
  <i> Desenvolvido por: José Adauto Albarraz Barbosa </i><br>
  <i>2022</i>
