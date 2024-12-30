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
                Mi deporte favorito es el fútbol, aunque mi equipo local a veces me haga enfurecer ¡Vamos rojo y blanco!.
                En mis ratos libres, si no estoy disfrutando de un buen partido de fútbol, estoy aprendiendo sobre programación.
            </p>

            <p>
                Me considero un joven apasionado por la tecnología, Ingeniero de Sistemas y fascinado por el desarrollo de software. Cuento con experiencia en diversos lenguajes,
                frameworks y bibliotecas de programación tanto en frontend como en backend, destacándome por mis sólidos conocimientos en JavaScript, React.js, Material UI, Bootstrap, Python, Django,
                MySQL, Oracle, seguridad informática, APIs, Docker, y sistemas operativos Linux y Microsoft.
            </p>
           <p className='parrafo'>Juan Cáceres Miranda.</p>

        </div>
    );
}