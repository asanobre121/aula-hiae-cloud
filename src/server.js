var express = require("express")
require("dotenv").config()
const app = express()
const port = process.env.PORT
const version = process.env.VERSION
const env = process.env.ENV
const cors = require('cors')
const fs = require("fs");
const listaCompras = require("../listaCompras.json");


app.use(cors())
app.use(express.urlencoded({ limit: '200mb', extended: true }))
app.use(express.json({ limit: '200mb' }))
// Routes
app.get("/", (req, res) => {
    res.status(200).send("Server Online!!")
})
app.get("/healthCheck", (req, res) => {
    console.log("chegou aqui")
    res.status(200).json( { status: "Server Online", version: version, bgcolor: env == "Production" ? "#87CEEB	" : "#F08080", env: env })
})
// //Exercicio 1
app.get("/exercicio1", (req, res) => {
    const listaAlunos = [
        {
            nome: "Neymar JR",
            nota: 6,
            status: "Aprovado"
        },
        {
            nome: "Sandro",
            nota: 7,
            status: "Aprovado"
        },
        {
            nome: "Andreia",
            nota: 9,
            status: "Aprovado"
        },
        {
            nome: "Paula",
            nota: 10,
            status: "Aprovado"
        },
        {
            nome: "Bianca",
            nota: 5,
            status: "Reprovado"
        },
        {
            nome: "Ronaldo",
            nota: 4,
            status: "Reprovado"
        }
    ]

    return res.status(200).json(listaAlunos)
})
//Exercicio 2
app.get("/exercicio2", (req, res) => {
    const listaEmpresas = [
        {
            empresa: "Silicon Pirates",
            elegiveis: 483901,
            valorVida: 12.00,
            faturado: 5801222
        },
        {
            empresa: "VACH Corp",
            elegiveis: 205,
            valorVida: 120.00,
            faturado: 24600
        },
        {
            empresa: "Avalanches LTDA",
            elegiveis: 17001,
            valorVida: 12.00,
            faturado: 204
        },
        {
            empresa: "Dark Company",
            elegiveis: 102321977,
            valorVida: 1.5,
            faturado: 204084
        },
        {
            empresa: "Tangerino",
            elegiveis: 9000,
            valorVida: 25.00,
            faturado: 225000
        },
        {
            empresa: "CipSoft",
            elegiveis: 14,
            valorVida: 18.00,
            faturado: 254
        }
    ]
    return res.status(200).json(listaEmpresas)
})
//Exercicio 3
app.get("/exercicio3", (req, res) => {
    const listaAlunos = [
        {
            nome: "Neymar JR",
            curso: "Engenharia Civil",
            aulasTotais: 75,
            faltas: 35
        },
        {
            nome: "Sandro",
            curso: "Engenharia da Computacao",
            aulasTotais: 90,
            faltas: 47
        },
        {
            nome: "Andreia",
            curso: "Gastronomia",
            aulasTotais: 80,
            faltas: 37
        },
        {
            nome: "Paula",
            curso: "Medicina",
            aulasTotais: 110,
            faltas: 12
        },
        {
            nome: "Bianca",
            curso: "Administracao",
            aulasTotais: 85,
            faltas: 12
        },
        {
            nome: "Ronaldo",
            curso: "Engenharia Civil",
            aulasTotais: 75,
            faltas: 62
        },
        {
            nome: "Enzo",
            curso: "Educacao Fisica",
            aulasTotais: 70,
            faltas: 20
        }
    ]
    return res.status(200).send(listaAlunos)
})
//Exercicio 4
app.get("/exercicio4", (req, res) => {
    const listaClientes = [
        {
            nome: "Neymar JR",
            recursos: 1000000000,
            dividas: 200000
        },
        {
            nome: "Sandro",
            recursos: 1000,
            dividas: 3700
        },
        {
            nome: "Andreia",
            recursos: 150,
            dividas: 50
        },
        {
            nome: "Paula",
            recursos: 82000,
            dividas: 90000
        },
        {
            nome: "Bianca",
            recursos: 140000,
            dividas: 2400
        },
        {
            nome: "Ronaldo",
            recursos: 250000,
            dividas: 30000
        }
    ]
    
    return res.status(200).send(listaClientes)
})
//Exercicio 5
app.post("/exercicio5", (req, res) => {
    var compra = req.body
    fs.readFile("listaCompras.json", function(err, data) {
      
        // Check for errors
        if (err) throw err;
       
        // Converting to JSON
        const compras = JSON.parse(data);
        compras.push(compra)
        console.log(compras)
        
        fs.writeFile("./listaCompras.json", JSON.stringify(compras), err => {
     
            // Checking for errors
            if (err) throw err; 
           
            console.log("Done writing"); // Success
        });
    });
    
    // return res.status(200).send("Server Online")
})
//Exercicio 6
app.get("/desafio", (req, res) => {
    fs.readFile("listaCompras.json", function(err, data) {
      
        // Check for errors
        if (err) throw err;
       
        // Converting to JSON
        const compras = JSON.parse(data);
        return res.status(200).json(compras)
    });
    
})
// //Exercicio 7
// app.get("/", (req, res) => {
//     return res.status(200).send("Server Online")
// })
// //Exercicio 8
// app.get("/", (req, res) => {
//     return res.status(200).send("Server Online")
// })
// //Exercicio 9
// app.get("/", (req, res) => {
//     return res.status(200).send("Server Online")
// })
// //Exercicio 10
// app.get("/", (req, res) => {
//     return res.status(200).send("Server Online")
// })
// //Exercicio 11
// app.get("/", (req, res) => {
//     return res.status(200).send("Server Online")
// })
// //Exercicio 12
// app.get("/", (req, res) => {
//     return res.status(200).send("Server Online")
// })
// //Exercicio 13
// app.get("/", (req, res) => {
//     return res.status(200).send("Server Online")
// })
// //Exercicio 14
// app.get("/", (req, res) => {
//     return res.status(200).send("Server Online")
// })
// //Exercicio 15
// app.get("/", (req, res) => {
//     return res.status(200).send("Server Online")
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})