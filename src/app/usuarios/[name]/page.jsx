import axios from "axios";



async function getUsuarioPorNombre(name) {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const usuarios = await axios.get(url);
    const usuario = usuarios.data.find(user => user.name === name);
    return usuario;
}

export default async function Usuario({ params }) {
    const nombreUsuario = decodeURIComponent(params.name);  
    const usuario = await getUsuarioPorNombre(nombreUsuario);  

    if (!usuario) {
        return <p>Usuario no encontrado</p>; 
    }

    return (
        <>
            <h1>Detalles del Usuario</h1>
            <p><strong>Nombre:</strong> {usuario.name}</p>
            <p><strong>Username:</strong> {usuario.username}</p>
            <p><strong>Email:</strong> {usuario.email}</p>

            <h2>Dirección</h2>
            <p><strong>Calle:</strong> {usuario.address.street}</p>
            <p><strong>Suite:</strong> {usuario.address.suite}</p>
            <p><strong>Ciudad:</strong> {usuario.address.city}</p>
            <p><strong>Código Postal:</strong> {usuario.address.zipcode}</p>

            <h3>Geolocalización</h3>
            <p><strong>Latitud:</strong> {usuario.address.geo.lat}</p>
            <p><strong>Longitud:</strong> {usuario.address.geo.lng}</p>

            <p><strong>Teléfono:</strong> {usuario.phone}</p>
            <p><strong>Website:</strong> {usuario.website}</p>

            <h2>Compañía</h2>
            <p><strong>Nombre:</strong> {usuario.company.name}</p>
            <p><strong>Frase:</strong> {usuario.company.catchPhrase}</p>
            <p><strong>BS:</strong> {usuario.company.bs}</p>
        </>
    );
}
