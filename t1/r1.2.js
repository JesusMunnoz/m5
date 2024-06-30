const mysql = require("mysql2/promise");

async function main()
{
    try{
        let connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "C00ding!",
            database: "retostema1"
        });
        console.log("conexion correcta");

        //Crear tabla en SQL

       /* let sql = "CREATE TABLE direction (id INT AUTO_INCREMENT PRIMARY KEY, " + 
        "calle VARCHAR(200), " + 
        "numero INT, " +
        "ciudad VARCHAR(60))";

        let [result] = await connection.query(sql);
        console.log("Tabla creada");
        console.log(result);*/

        //----------------------------------------------------------//

  

        //BORRAR TABLA

        let sqlBorrar = "DROP TABLE direccion"; 
        let [resultDelete] = await connection.query(sqlBorrar);
        console.log("tabla borrada");
        console.log(resultDelete);

        await connection.end();
    }


    catch (err){
        console.log(err);
        await connection.end();
    }

}
main();