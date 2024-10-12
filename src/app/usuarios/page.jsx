import axios from "axios";
async function getNoticias(){
    const url="https://jsonplaceholder.typicode.com/users";
    const usuarios = await axios.get(url);
    //console.log(universidades.data);
    return usuarios.data;
    
}
//noticias();   
export default async function Usuarios(){
    const usuarios=await getNoticias();
    return(
        <>
            <h1>usuarios</h1>
            <table className="table">
                <thead>
                        <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Usuarios</th>
                        <th>Correo</th>
                        </tr>
                </thead>
                <tbody>
                {
                usuarios.map((usuario, i) => (
                <tr key={i}>
                <td>{usuario.id}</td>
                <td><a href={`/usuarios/${encodeURIComponent(usuario.name)}`}>{usuario.name}</a></td> 
                <td>{usuario.username}</td>
                <td>{usuario.email}</td>
                </tr>
                ))
                }
                </tbody>
            </table>
        </>
    )
}