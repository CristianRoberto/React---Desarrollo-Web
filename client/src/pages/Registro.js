import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
// import md5 from 'md5';
//import Registro from './Registro';
const baseUrl = "http://localhost:4000/usuarios";
const cookies = new Cookies();

class Registro extends Component {
    state = {
        form: {
            identificacionusuario: '',
            password: ''
        }
    }


    handleSearchClick = () => {
        window.location.href = 'http://localhost:3000/';
      };
      

    // handleChange = async e => {
    //     await this.setState({
    //         form: {
    //             ...this.state.form,
    //             [e.target.name]: e.target.value
    //         }
    //     });
    // }



    handleChange = event => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            form: {
                ...prevState.form,
                [name]: value
            }
        }));
    };

    handleRolChange = event => {
        const { value } = event.target;
        this.setState(prevState => ({
            form: {
                ...prevState.form,
                rol: value // Guarda la opción seleccionada en el estado 'rol'
            }
        }));
    };





    guardarRegistro = async () => {
        const { identificacionusuario, password, rol } = this.state.form;

        // Verificar si los campos están vacíos
        if (!identificacionusuario || !password || !rol) {
            alert('Completa todos los campos.');
            return;
        }
        // ... Código para guardar el registro
           // Encriptar la contraseña con bcrypt
            // Encriptar la contraseña con bcrypt
        // const hashedPassword = await md5(password);

           // Crear un objeto con los datos a enviar
           const dataToSend = {
               identificacionusuario: identificacionusuario,
            //    password: md5(password),
               password: password,
               rol: rol
            };
           console.log(dataToSend)
           // Realizar la solicitud POST
           try {
               const response = await axios.post(baseUrl, dataToSend);
               console.log('Respuesta de la API:', response.data);
               alert('Registro guardado exitosamente');
               window.location.href = "./";
           } catch (error) {
               console.error('Error al guardar el registro:', error);
               alert('Ocurrió un error al guardar el registro');
           }
       };


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

        const headerStyle = {
            fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
            textAlign: "center"
        };



        return (
            <div>

                <div className="containerPrincipal">
                <button className="search-button" onClick={this.handleSearchClick}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

                    <div className="containerSecundario">
                        <h1       style={headerStyle}                >Registro Usuario</h1>
                        <div className="form-group">
                            <label>Identificacion Usuario: </label>
                            <br />
                            <input type="text" className="form-control" name="identificacionusuario" onChange={this.handleChange} />
                            <br />
                            <label>Contraseña: </label>
                            <br />
                            <input type="password" className="form-control" name="password" onChange={this.handleChange} />
                            <br />
                            <label>Rol usuario</label>
                            <br />
                            
                            <div className="form-row align-items-center">
                                <div className="col-auto my-1">
                                    <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Calificar</label>
                                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" name="rol" onChange={this.handleRolChange}>

                                        <option defaultValue>Selecionar...</option>
                                        <option value="Recepcion">Recepcion</option>
                                        <option value="Supervisor">Supervisor</option>
                                    </select>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                        <label className="custom-control-label" htmlFor="customControlAutosizing">Remember my preference</label>
                                    </div>
                                </div>

                            </div>
                            <br /><br />
                            <h1 style={headerStyle}>MUCHAS GRACIAS</h1>


                            <button className="btn btn-primary" onClick={() => this.guardarRegistro()}>
                                Guardar Nuevo Usuario
                            </button>

                        </div>

                        <div>

                            <br />
                        </div>
                    </div>


                </div>
            </div>
        );
    }



}

export default Registro;
