const mysql = require("mysql2/promise");

async function main()
{
    try{
        let connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "C00ding!",
            database: "museo"
        });
        console.log("conexion correcta");

        //Crear tabla en SQL
        
        /*let sql = "CREATE TABLE piece (id_piece INT AUTO_INCREMENT PRIMARY KEY, " + 
        "name VARCHAR(200), " + 
        "finish_year YEAR(4), " + 
        "description VARCHAR(200), " +
        "author_id INT(6), "+
        "colection_id INT(6), "+
        "owner_id INT(6), " +
        "state_id INT(6), " +
        "location_id INT(6))";

        let [result] = await connection.query(sql);
        console.log("Tabla creada");
        console.log(result);*/

        //----------------------------------------------------------//

        let sqlr1 = "SELECT name_piece, first_name, last_name, email, direction, ubication " +
                    "FROM museo.pieces " +
                    "JOIN owner ON owner_id = id_owner " +
                    "JOIN location ON location_id = id_location " +
                    "WHERE colection_id = 3";
        let [resultr1] = await connection.query(sqlr1);
        console.log(" Nombre pieza + Owner + ubicacion en museo");
        console.log(resultr1);

        let sqlr2 = "SELECT type_location, COUNT(type_location) AS cantidad " +
                    "FROM museo.location " + 
                    "WHERE type_location= 'vitrina' OR type_location = 'Expositor' OR type_location = 'Armario' OR type_location = 'Estantería' " +
                    "GROUP BY type_location " +
                    "ORDER BY cantidad DESC";
        let [resultr2] = await connection.query(sqlr2);
        console.log(" Reto 2 Museo");
        console.log(resultr2);



        
        await connection.end();
    }


    catch (err){
        console.log(err);
        await connection.end();
    }

}
main();


//R1 - Museo
//Pieza + info propietario
/*
SELECT name_piece, first_name, last_name, email, direction 
FROM museo.pieces
JOIN owner ON owner_id = id_owner
WHERE colection_id = 3;
*/
// Obras itinerantes
/*
SELECT name_piece, colection_id, location_id, state_id, owner_id 
FROM museo.pieces
WHERE colection_id = 3;
*/

// Obras que han sido prestadas
/*
SELECT id_state, type_state, fecha_devolucion, piece_id
FROM museo.state
WHERE type_state = 'Préstamo';
 */

// obras expuestas
/*
SELECT id_location, ubication, piece_id
FROM museo.location 
WHERE type_location = 'Expositor' OR type_location = 'Vitrina';
 */

//Obra + propietario + ubicacion en museo
/*
SELECT name_piece, first_name, last_name, email, direction, ubication 
FROM museo.pieces
JOIN owner ON owner_id = id_owner
JOIN location ON location_id = id_location
WHERE colection_id = 3;
*/



//R2 - Museo
/*
SELECT type_location, COUNT(type_location) AS r2
FROM museo.location
WHERE type_location= 'vitrina' OR type_location = 'Expositor' OR type_location = 'Armario' OR type_location = 'Estantería'
GROUP BY type_location
ORDER BY r2 DESC;
*/