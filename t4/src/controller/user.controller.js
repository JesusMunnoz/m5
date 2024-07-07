const { pool } = require('../database');

const getAllAlumnos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM students');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAlumoById = async (req, res) => {
    const id = req.params.id;
    try{
        const [rows] = await pool.query('SELECT * FRM students WHERE id_students = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({message: 'No encontramos ese alumno'});
        }
        res.json(rows[0]);
    }catch (error){
        res.status(500).json({error: error.message});
    }
};

const addAlumno = async (req, res) => {
    const {first_name, last_name, grupo_id, annoIngreso} = req.body;

    try {
        const [result] = await pool.query('INSERT INTO students (first_name, last_name, grupo_id, annoIngreso) VALUES (?, ?, ?, ?)', [first_name, last_name, grupo_id, annoIngreso]);
        res.status(201).json({id: result.insertId, first_name, last_name, grupo_id, annoIngreso});
    }catch (error){
        res.status(500).json({error:error.message});
    }
};

const updateAlumno = async (req, res) => {
    const { id_students, first_name, last_name, grupo_id, annoIngreso } = req.body;
    try {
        const [result] = await pool.query('UPDATE students SET first_name = ?, last_name = ?, grupo_id = ?, WHERE id_students = ?', [first_name, last_name, grupo_id, annoIngreso, id_students]);
        if (result.affectedRows === 0) {
            return res.status(404).json({message: 'No encontramos ese alumno'});
        }
        res.json({message: 'Se ha actualizado el alumno'});
    }catch (error){
        res.status(500).json({error: error.message});
    }
};

const deleteAlumno = async (req, res) => {
    const id = req.body.id_students;
    try{
        const [result] = await pool.query('DELETE FROM students WHERE id_students = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({message: 'No encontramos ese alumno'});
        }
        res.json({message: 'Se ha eliminado el alumno'})
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.export = { getAllAlumnos, getAlumoById, addAlumno, updateAlumno, deleteAlumno};