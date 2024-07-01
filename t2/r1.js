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


        let sql1 = "SELECT AVG(mark) FROM marks WHERE subjecjt_id = 1";
        let [result1] = await connection.query(sql1);
        console.log("Nota media asígnatura 1");
        console.log(result1);
        
        let sql2 = "SELECT COUNT(*) FROM students";
        let [result2] =await connection.query(sql2)
        console.log("Total de alumnos");
        console.log(result2);

        let sql3 = "SELECT * FROM grupos";
        let [result3] =await connection.query(sql3)
        console.log("listado de tabla grupos");
        console.log(result3);

        let sql41 = "SELECT * FROM marks WHERE mark > 5 AND YEAR(date) = YEAR(CURDATE()) -1";
        let [result41] =await connection.query(sql41)
        console.log("Mostramos Antes de eliminar");
        console.log(result41);

        let sql42 = "DELETE FROM retostema1.marks WHERE mark > 5 AND YEAR(date) = YEAR(CURDATE()) -1";
        let [result42] =await connection.query(sql42)
        console.log("ELIMINAMOS");
        console.log(result42);

        let sql51 = "SELECT * FROM students WHERE annoIngreso = 2024";
        let [result51] =await connection.query(sql51)
        console.log("una manera de mostrar los alumnos");
        console.log(result51);

        let sql52 = "SELECT * FROM students WHERE annoIngreso = YEAR(CURDATE())";
        let [result52] =await connection.query(sql52)
        console.log("Otra manera de mostrar los alumnos");
        console.log(result52);

        let sql6 = "SELECT subject_id, COUNT(DISTINCT teacher_id) FROM subject_teacher GROUP BY subject_id;";
        let [result6] =await connection.query(sql6)
        console.log("Profesores por asignatura");
        console.log(result6);

        await connection.end();
    }


    catch (err){
        console.log(err);
        await connection.end();
    }

}
main();




// SELECT AVG(mark) FROM retostema1.marks WHERE subjecjt_id = 1;

// SELECT COUNT(*) FROM retostema1.students;

// SELECT * FROM retostema1.grupos;

/*
SELECT * FROM retostema1.marks
WHERE mark > 5 
AND YEAR(date) = YEAR(CURDATE()) -1;
*/

/*
DELETE FROM retostema1.marks
WHERE mark > 5 
AND YEAR(date) = YEAR(CURDATE()) -1;
*/

/*
SELECT * FROM retostema1.students 
WHERE annoIngreso = 2024;

SELECT * FROM retostema1.students 
WHERE annoIngreso = YEAR(CURDATE());
*/

/*
SELECT subject_id, COUNT(DISTINCT teacher_id)
FROM subject_teacher
GROUP BY subject_id;
*/