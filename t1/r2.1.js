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

        /*let sql = "DROP TABLE borrar"; 
        // latabla se llama borrar, que nos hemos creado previamente en sql
        let [result] = await connection.query(sql);
        console.log("tabla borrada");
        console.log(result);*/

        let deleteDate = "DELETE FROM marks WHERE date < DATE_SUB(CURDATE(), INTERVAL 10 YEAR)"; 
        let [deleteResult] = await connection.query(deleteDate);
        console.log("notas borrada");
        console.log(deleteResult);

        await connection.end();
    }


    catch (err){
        console.log(err);
        await connection.end();
    }

}
main();