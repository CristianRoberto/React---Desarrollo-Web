import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
// import md5 from 'md5';
//import Registro from './Registro';
// const baseUrl = "http://localhost:4000/login/";
const cookies = new Cookies();

class Login extends Component {
    state = {
        form: {
            identificacionusuario: '',
            password: ''
        }
    }




    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    // iniciarSesion = async () => {
    //     const { identificacionusuario, password } = this.state.form;
    //     // Verificar si los campos están vacíos
    //     if (!identificacionusuario || !password) {
    //         alert('Campos vacios, Porfavor completa todos los campos');
    //         return;
    //     }
    //     // Realizar la solicitud de inicio de sesión
    //     await axios.get(baseUrl, { params: { identificacionusuario: this.identificacionusuario, password: this.password } })

    //     .then(response => {
    //             return response.data;
    //         })
    //         .then(response => {
    //             if (response.length > 0) {
    //                 var respuesta = response[0];
    //                 cookies.set('id', respuesta.id, { path: "/" });
    //                 cookies.set('identificacionusuario', respuesta.identificacionusuario, { path: "/" });
    //                 cookies.set('password', respuesta.password, { path: "/" });
    //                 cookies.set('rol', respuesta.rol, { path: "/" });
    //                 alert(`Bienvenido ${respuesta.identificacionusuario} ${respuesta.rol}`);
    //                 window.location.href = "./menu";
    //             } else {
    //                 alert('El usuario o la contraseña no son correctos');
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    
    //     }




iniciarSesion = async () => {
    const { identificacionusuario, password } = this.state.form;

    // Verificar si los campos están vacíos
    if (!identificacionusuario || !password) {
        alert('Campos vacíos, por favor completa todos los campos');
        return;
    }

    try {
        const response = await axios.get(`http://localhost:4000/login`, {
            params: {
                identificacionusuario,
                password
            }
        });

        if (response.status === 200) {
            // Inicio de sesión exitoso
            const userData = response.data.data[0]; // Obtén los datos del usuario
            cookies.set('id', userData.id, { path: "/" });
            cookies.set('identificacionusuario', userData.identificacionusuario, { path: "/" });
            cookies.set('password', userData.password, { path: "/" });
            cookies.set('rol', userData.rol, { path: "/" });
            alert(`Bienvenido ${userData.identificacionusuario} ${userData.rol}`);
            window.location.href = "./menu";
        } else {
            // Credenciales inválidas
            alert('El usuario o la contraseña son incorrectos');
        }
    } catch (error) {
        console.log('Error:', error);
        alert('Ocurrió un error al intentar iniciar sesión');
    }
}





    componentDidMount() {
        if (cookies.get('identificacionusuario')) {
            window.location.href = "./menu";
        }
    }

    //creo un metodo que me diriga hacia la ruta que quiero ir
    handleRegistroClick = () => {
        this.props.history.push('/registro');
    };

    render() {
        const footerStyle = {
            backgroundColor: 'black',
            color: 'white',
            fontFamily: 'Franklin',
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
        };

        const botonRegistroStyle = {
            ...footerStyle,
        
          };
        
          const botonRegistroHoverStyle = {
            ...botonRegistroStyle,
            backgroundColor: 'rgb(0, 136, 255)',
            color:'black'
          };




        return (
            <div>
                <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: '50px' }}>
                    <h1>Prueba SoftUno</h1>
                </div>
                <div className="containerPrincipal">
                    <div className="containerSecundario">
                        <div className="form-group">
                            <label>Identificacion Usuario: </label>
                            <br />
                            <input type="text" className="form-control" name="identificacionusuario" onChange={this.handleChange} />
                            <br />
                            <label>Contraseña: </label>
                            <br />
                            <input type="password" className="form-control" name="password" onChange={this.handleChange} />
                            <br />
                            
                            
                            <button className="btn btn-primary" onClick={() => this.iniciarSesion()}>
                                Iniciar Sesión
                            </button>
                        </div>
                         
                        <div>
      {/* ... */}
        <button
          onClick={this.handleRegistroClick}
          style={this.state.hover ? botonRegistroHoverStyle : botonRegistroStyle}
          className='botonregistro'
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}
        >
          Crear Nuevo Usuario
        </button>
        <br />
        <br />
      </div>
    </div>


                </div>
            </div>
        );
    }



}

export default Login;
