import * as React from 'react';
import './style.css'
import perfil from '../../assets/perfil.jpeg'


export default function Perfil() {
    return (
        <div className='section-perfil'>
            <h1>¿Quien soy?</h1>
            <img
                src={perfil}
                alt='Foto perfil Juan Caceres'
                loading="lazy"
            />
            <p>
                Comencemos hablando de mi carrera. ¡Me encanta decir que soy ingeniero! soy uno de esos que se atrevío a estudiar una ingenería y para remate en Sistemas con enfasis en el desarrollo de software.
                Mi deporte favorito es el fútbol, aunque mi equipo local a veces me haga enfurecer ¡Vamos rojo y blanco!; es una pasión que no se abandona.
                En mis ratos libres, si no estoy viendo un partido, estoy aprendiendo sobre programación. Se podría decir que estos son mis dos vicios.
            </p>

            <p>
                Me considero un joven apasionado por la tecnología, Ingeniero de Sistemas y fascinado por el desarrollo de software. Cuento con experiencia en diversos lenguajes,
                frameworks y bibliotecas de programación. Mi objetivo es optimizar los procesos en las empresas, desarrollando software adaptativo, escalable e intuitivo para el usuario final.
                Como desarrollador, he adquirido conocimientos y experiencia tanto en frontend como en backend, destacándome por mis sólidos conocimientos en Python, Django, JavaScript, React.js,
                Material UI, Bootstrap, MySQL, Oracle, seguridad informática, APIs, Docker, y sistemas operativos Linux y Microsoft.
            </p>
           <p className='parrafo'>Juan Caceres Miranda.</p>

        </div>
    );
}