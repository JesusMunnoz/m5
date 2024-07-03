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

        let sql3 = "SELECT COUNT(marks.student_id), title, first_name, last_name " + 
                    "FROM marks " +
                    "INNER JOIN subjects ON (marks.subject_id = subjects.id_subjects) " +
                    "INNER JOIN subject_teacher ON (subjects.id_subjects = subject_teacher.subject_id) " +
                    "INNER JOIN teachers ON (subject_teacher.teacher_id = teachers.id_teachers) " +
                    "GROUP BY title, first_name, last_name";
        let [result3] = await connection.query(sql3);
        console.log(" alumnos por asignatura, nombre y apellido de profesor");
        console.log(result3);

        await connection.end();
    }


    catch (err){
        console.log(err);
        await connection.end();
    }

}
main();



//Cantidad de estudiantes por asignatura_id
/*
SELECT subject_id, COUNT(student_id)
FROM retostema1.marks
GROUP BY subject_id;
 */
//Cantidad de estudiantes por asignatura_id
/*
SELECT title, COUNT(student_id)
FROM retostema1.marks
JOIN subjects ON marks.subject_id = subjects.id_subjects
GROUP BY title;
*/

//profesor y su asignatura
/*
SELECT first_name, last_name, title 
FROM teachers 
JOIN subject_teacher ON (teachers.id_teachers = subject_teacher.teacher_id) 
JOIN subjects ON (subject_teacher.subject_id = subjects.id_subjects)
 */

/*
SELECT COUNT(marks.student_id), title, first_name, last_name 
FROM retostema1.marks
INNER JOIN subjects ON marks.subject_id = subjects.id_subjects
INNER JOIN subject_teacher ON subjects.id_subjects = subject_teacher.subject_id
INNER JOIN teachers ON subject_teacher.teacher_id = teachers.id_teachers
GROUP BY title, first_name, last_name;
*/