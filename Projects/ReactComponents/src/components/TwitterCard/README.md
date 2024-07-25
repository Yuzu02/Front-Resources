# Componente TwitterCard

El componente `TwitterCard` representa una tarjeta de usuario sugerido similar a las que se ven en Twitter. Este componente muestra el nombre de usuario, el handle o identificador unico del usuario (@usuario) de twitter, la imagen de perfil, y un botón para seguir o dejar de seguir al usuario.

## Propiedades (Props)

- `nombreUsuario` (string): El nombre del usuario que se mostrará en la tarjeta.
- `usuario` (string): El handle del usuario (sin el `@`) que se mostrará en la tarjeta y se utilizará para obtener la imagen de perfil.

## Estado (State)

- `esSeguidor` (boolean): Indica si el usuario actual sigue al usuario de la tarjeta. Por defecto, es `false`.

## Funciones

- `handelClick`: Esta función cambia el estado de `esSeguidor` cuando se hace clic en el botón de seguir/dejar de seguir. Si el usuario ya está siguiendo, lo deja de seguir y viceversa.

## Estilos

Los estilos para este componente están definidos en el archivo `TwitterCard.css`.

## Uso

Para implemetar el componete en otra seccion de la pagina, primero debes importarlo.

```Javascript
import { TwitterCard } from "./TwitterCard/TwitterCard";
```

Una vez importado simplemente llama al componte usando su nombre.

>**Nota:** No te olvides de indicarles los valores de las propiedades.

```Javascript
<TwitterCard nombreUsuario={'Elon Musk'} usuario={'ElonMusk'} />
