import { TwitterCard } from "./TwitterCard/TwitterCard";
import "./App.css"

function App () {
    return (
        <section className="App">
            <TwitterCard nombreUsuario={'Elon Musk'} usuario={'ElonMusk'} />
            <TwitterCard nombreUsuario={'Gacha Memes'} usuario={'GenshinImpactOC'} />
            <TwitterCard nombreUsuario={'Keitaro'} usuario={'DqKeita'} />
            <TwitterCard nombreUsuario={'Miguel Ángel Durán'} usuario={'midudev'} />
            <TwitterCard nombreUsuario={'Cosmic Red (dark mode)'} usuario={'carmenansio'} />
            <TwitterCard nombreUsuario={'Putupau'} usuario={'PutuPauu'} />
            <TwitterCard nombreUsuario={'⚡SkyZero⚡'} usuario={'XSkyZeroX'} />
        </section>
    )
}

export {App};