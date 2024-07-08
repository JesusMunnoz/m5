const { pool } = require('../database');

const getMedia = async (req, res) => {
    const id = req.query.id || req.params.id;
    try {
        const [rows] = await pool.query('SELECT AVG(mark) as media FROM marks WHERE student_id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'No alumno o no notas' });
        }
        res.json({ media: rows[0].media });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getApuntadasById = async (req, res) => {
    const id = req.query.id || req.params.id;
    try {
        const [rows] = await pool.query(`
            SELECT subjects.title FROM subjects
            JOIN marks ON marks.subject_id = subjects.id_subjects
            WHERE marks.student_id = ?`, [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'alumno no tiene asignaturas' });
        }
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllApuntadas = async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT students.first_name, students.last_name, subjects.title FROM students
            JOIN marks ON marks.student_id = students.id_students
            JOIN subjects ON marks.subject_id = subjects.id_subjects`);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getImpartidasById = async (req, res) => {
    const id = req.query.id || req.params.id;
    try {
        const [rows] = await pool.query(`
            SELECT subjects.title FROM subjects
            JOIN subject_teacher ON subject_teacher.subject_id = subjects.id_subjects
            WHERE subject_teacher.teacher_id = ?`, [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'profe no tiene asignaturas' });
        }
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllImpartidas = async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT teachers.first_name, teachers.last_name, subjects.title FROM teachers
            JOIN subject_teacher ON subject_teacher.teacher_id = teachers.id_teachers
            JOIN subjects ON subject_teacher.subject_id = subjects.id_subjects`);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getMedia, getApuntadasById, getAllApuntadas, getImpartidasById, getAllImpartidas };
