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

        

        let sql = "INSERT INTO subject_teacher (subject_id, teacher_id, grupo_id)" +
        "VALUES (1, 1, 5), (2, 2, 6), (3, 3, 7), (4, 4, 8), (5, 5, 9), (6, 6, 10),(7, 7, 10), (8, 8, 7), (9, 9, 8), (10, 10, 6)";

        let [result] = await connection.query(sql);
        console.log("Datos guardados");
        console.log(result);

        await connection.end();
    }


    catch (err){
        console.log(err);
        await connection.end();
    }

}
main();