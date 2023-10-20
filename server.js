import express from "express";
import cors from "cors";
import { Produtos } from "./Produtos.js";

const app = express();

//Essa função é responsável por analisar o corpo das solicitações HTTP 
//que têm um tipo de conteúdo (Content-Type) definido como application/json. 
//Ela pega os dados JSON enviados na solicitação e os converte em um objeto JS.
app.use(express.json());

//  Habilita o protocolo CORS para a troca front-back
//  npm i cors
app.use(cors());

//Forma comum de codificar dados enviados em solicitações HTTP.
//Usado quando os dados são enviados de um formulário HTML para uma API. 
//Nesse formato, os dados são codificados como pares chave-valor, semelhantes aos parâmetros em uma URL.
app.use(express.urlencoded({
    extended : true,
}),
);

app.get("/",(req, res)=>{
    let lista = ["bruno","reanto","wagner","ze","alan"]
    return res.status(200).json(lista);
});

app.post("/novo",(req, res)=>{
    const { id, descricao, preco } = req.body;
    const produto = new Produtos(id,descricao,preco);
    return res.status(200).json(produto)
})

app.listen(3000,()=>{
    console.log("api no ar!");
});