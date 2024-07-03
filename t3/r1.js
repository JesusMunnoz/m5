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

        /*let addColumnSql = "ALERT TABLE direccion ADD COLUMN cp INT";
        let [addColumnResult] = await connection.query(addColumnSql);
        console.log("columna cp annadida");
        console.log(addColumnResult);

        let dropColumnSql = "ALERT TABLE direccion DROP COLUMN school";
        let [dropColumnResult] = await connection.query(dropColumnSql);
        console.log("columna school borrada");
        console.log(dropColumnResult);*/


        let sql1 = "SELECT first_name, last_name, title FROM students JOIN marks ON (students.id_students = marks.student_id) JOIN subjects ON (marks.subjecjt_id = subjects.id_subjects)";
        let [result1] = await connection.query(sql1);
        console.log(" nombres y apellidos de los alumnos y  asignaturas");
        console.log(result1);
        
        await connection.end();
    }


    catch (err){
        console.log(err);
        await connection.end();
    }

}
main();


//Por si quieres la nota

/*
SELECT first_name, last_name, mark, title  
FROM students
JOIN marks ON (students.id_students = marks.student_id)
JOIN subjects ON (marks.subjecjt_id = subjects.id_subjects);
 */