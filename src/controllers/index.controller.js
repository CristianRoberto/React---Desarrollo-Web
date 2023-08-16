const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
//creo clientePool y me conecto a la base de datos postgrets
const pool = new Pool({
  user: 'crgp',
  host: '127.0.0.1',
  database: 'React_Pr1',
  password: 'gilcespanta1994',
  port: 5432,
  ssl: process.env.DATABASE_SSL === `true`
});

async function getUsers(req, res) {
  try {
    const response = await pool.query('SELECT * FROM inicioseccion');
    res.status(200).json(response.rows);
    console.log(response.rows);
  } catch (error) {
    // Ocurrió un error al consultar la base de datos
    res.status(500).json({ message: 'Error al consultar la base de datos' });
  }

}



//ruta para crear un nuevo usuario y guardarlo en la base de datos.
const postUsers = async (req, res) => {
  const { identificacionusuario, password, rol } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10); // Genera el hash de la contraseña con un factor de coste de 10
  const response = await pool.query('INSERT INTO inicioseccion (identificacionusuario, password, rol) VALUES ($1, $2, $3)', [identificacionusuario, hashedPassword, rol]);
  console.log("se creó el nuevo Usuario");
  res.json({
    message: 'Se creó el usuario',
    body: {
      user: { identificacionusuario, password: hashedPassword, rol } // Utiliza el hashedPassword en lugar de la contraseña sin cifrar
    }
  });
};



const login = async (req, res) => {
  const identificacionusuario = req.query.identificacionusuario;
  const password = req.query.password;
  try {
    const response = await pool.query('SELECT * FROM inicioseccion WHERE identificacionusuario = $1', [identificacionusuario]);
    if (response.rows.length === 0) {
      // No se encontró el usuario en la base de datos
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
    const storedHash = response.rows[0].password; // Obtén el hash almacenado de la base de datos
    const isPasswordValid = await bcrypt.compare(password, storedHash);
    if (isPasswordValid) {
      // Contraseña válida, el usuario puede iniciar sesión
      return res.status(200).json({ message: 'Inicio de sesión exitoso', data: response.rows });
    } else {
      // Contraseña incorrecta
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
  } catch (error) {
    // Ocurrió un error al consultar la base de datos
    return res.status(500).json({ message: 'Error al consultar la base de datos' });
  }
};

module.exports = {
  login,
  getUsers,
  postUsers,

};