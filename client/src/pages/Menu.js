import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Footer from "../components/Footer.js";
import autor from '../assets/autor.png';
const cookies = new Cookies();
class Menu extends Component {
    cerrarSesion = () => {
        cookies.remove('id', { path: "/" });
        cookies.remove('identificacionusuario', { path: "/" });
        cookies.remove('password', { path: "/" });
        cookies.remove('rol', { path: "/" });
        window.location.href = './';
    }
    componentDidMount() {
        if (!cookies.get('identificacionusuario')) {
            window.location.href = "./";
        }
    }
    render() {
        console.log('id: ' + cookies.get('id'));
        console.log('identificacionusuario: ' + cookies.get('identificacionusuario'));
        console.log('password: ' + cookies.get('password'));
        console.log('rol: ' + cookies.get('rol'));

        return (
            <div>
                Menu Principal
                <br />
                <button onClick={() => this.cerrarSesion()}>Cerrar Sesión</button>
                <div className="row2">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={autor} alt="Google" style={{ width: '50%' }} />
                    </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <br></br>
                        <label>BIENVENIDO</label>
                    </div>
                <Footer /> {/* Return the Footer component here */}
            </div>
        );
    }
}

export default Menu;
