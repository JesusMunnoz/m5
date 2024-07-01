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

        let sql1 = "SELECT id_marks, mark FROM marks WHERE (id_marks > 0 AND id_marks < 21) OR (mark > 8 AND YEAR(date) = YEAR(CURDATE())-1)";
        let [result1] = await connection.query(sql1);
        console.log("id y la nota de los alumnos que tengan un id entre 1 y 20, o que tenga una nota mayor de 8 y la nota tenga fecha del año pasado");
        console.log(result1);
        
        let sql2 = "SELECT AVG(mark) FROM marks WHERE date BETWEEN '2024-01-01' AND '2024-12-31'";
        let [result2] =await connection.query(sql2)
        console.log("media de las notas que se han dado en el último año por asignatura");
        console.log(result2);

        let sql3 = "SELECT student_id , AVG(mark) FROM marks WHERE date BETWEEN '2024-01-01' AND '2024-12-31' GROUP BY student_id";
        let [result3] =await connection.query(sql3)
        console.log(" media aritmética de las notas que se han dado en el último año por alumno");
        console.log(result3);

        await connection.end();
    }


    catch (err){
        console.log(err);
        await connection.end();
    }

}
main();