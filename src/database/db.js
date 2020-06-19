//importar a dependencia no slqite

const slqite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operaçoes no banco de dados
const db = new slqite3.Database("./src/database/database.db")

module.exports = db
//utlizar o objeto de banco de dados, para nossas opraçoes
db.serialize(()=>{
    // todos com comandos sql


    //Cria uma tabela 
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places(
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    //inserir dados na tabela
    // const query = `
    //         INSERT INTO places (
    //             image,
    //             name,
    //             address,
    //             address2,
    //             state,
    //             city,
    //             items
    //         ) VALUES (?,?,?,?,?,?,?);
    //     `
    // const values = [
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //     "Paperside",
    //     "Guilherme Gemballa, Jardim América",
    //     "Número 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas"
    //     ]  
        
    //     function afterInsertData(err){
    //         if(err){
    //             return console.log(err)
    //         }
    
    //         console.log("Cadastrado com sucesso")
    //         console.log(this)
    
    //     }

    // db.run(query, values, afterInsertData)      
    
    //consultar os dados da tabela
    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão seus registros: ")
    //     console.log(rows)
    // })

 //deletar um dado da tabela
    //  db.run(`DELETE FROM places WHERE id = ?`, [7], function(err){
    //     if(err){
    //         console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso!")
        
    // })

    

})