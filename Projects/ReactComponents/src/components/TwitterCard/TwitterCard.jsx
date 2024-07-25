import './TwitterCard.css';
import { useState } from 'react';

const TwitterCard = ({nombreUsuario, usuario}) => {

    const [esSeguidor, setEsSeguidor] = useState(false);

    let textoBotonSeguir = esSeguidor ? 'Siguiendo' : 'Seguir';
    let classEsSguidor = esSeguidor ? 'Siguiendo' : '';

    function handelClick() {
        setEsSeguidor(!esSeguidor);
    }

    return (
        <article className='twi-card'>
            <header className='twi-cardHeader'>
                <a href="">
                    <img className='twi-cardHeaderImag' src={`https://unavatar.io/x/${usuario}`} alt={`Imagen de perfil de ${usuario}`} />
                </a>
                <section className='twi-cardSectioUser'>
                    <strong className='twi-cardSectioNameUser'>
                        <a href="">{nombreUsuario}</a>
                    </strong>
                    <span className='twi-cardSectioUser'>
                        <a href="">@{usuario}</a>
                    </span>
                </section>
            </header>
            <aside className='twi-CardAside'>
                <button onClick={handelClick} className={`twi-CardAsideBtn ${classEsSguidor}`} >{textoBotonSeguir}</button>
            </aside>
        </article>
        
    )
}

export {TwitterCard};