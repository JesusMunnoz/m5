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

        let addColumnSql = "ALERT TABLE direccion ADD COLUMN cp INT";
        let [addColumnResult] = await connection.query(addColumnSql);
        console.log("columna cp annadida");
        console.log(addColumnResult);

        let UpDateSql = 
            `UPDATE direccion SET cp = 28680 WHERE id_direccion =1; 
            UPDATE direccion SET cp = 28680 WHERE id_direccion =2;
            UPDATE direccion SET cp = 28680 WHERE id_direccion =3;
            UPDATE direccion SET cp = 28000 WHERE id_direccion =4;
            UPDATE direccion SET cp = 28600 WHERE id_direccion =5;
            UPDATE direccion SET cp = 28680 WHERE id_direccion =6;
            UPDATE direccion SET cp = 28000 WHERE id_direccion =7;
            UPDATE direccion SET cp = 28680 WHERE id_direccion =8;
            UPDATE direccion SET cp = 29012 WHERE id_direccion =9;
            UPDATE direccion SET cp = 29012 WHERE id_direccion =10;`
        
        let [UpdateResult] = await connection.query(UpDateSql);
        console.log("Datos guardados");
        console.log(UpdateResult);

        let dropColumnSql = "ALERT TABLE direccion DROP COLUMN school";
        let [dropColumnResult] = await connection.query(dropColumnSql);
        console.log("columna school borrada");
        console.log(dropColumnResult);

        await connection.end();
    }


    catch (err){
        console.log(err);
        await connection.end();
    }

}
main();