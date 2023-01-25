import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router'

function EditarUsuario(){

    const params = useParams()

    //Hooks    
    const[username, setUsername]=useState('')
    const[ip, setIp]=useState('')
    
    //Para volver atrás al index
    const navegar = useNavigate()
    

    useEffect(() => {
       axios.post('/api/usuario/obtenerdatausuario', {idusuario: params.idusuario}).then(res => {
           console.log(res.data[0]) 
           const datausuario = res.data[0]
           setUsername(datausuario.username)
           setIp(datausuario.ip)
               
       })
    }, [])

    //Función que actualiza
    function editarUsuario(){
        //Nuevo objeto para actualizar el usuario
        const actualizarusuario = {
            username: username,
            ip: ip,
            idusuario: params.idusuario
        }


        //Hacer la petición usando axios
        axios.post('/api/usuario/actualizausuario', actualizarusuario)
        .then(res => {
            console.log(res.data)
            alert(res.data)
            navegar('/')
        })
        .then(err => {console.log(err)})
    }

    return(
        <div className="container">
            <div className="row">
                     <h2 className="mt-4">Editar usuario</h2>               
            </div> 

             <div className="row">
                <div className="col-sm-6 offset-3">
                     <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" value={username} onChange={(e) => {setUsername(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="ip" className="form-label">Ip</label>
                        <input type="text" className="form-control" value={ip} onChange={(e) => {setIp(e.target.value)}}></input>
                     </div>

                     <p></p>

                     <button onClick={editarUsuario} className="btn btn-success">Edit User</button>
                </div>
            </div>          
        </div>
    )
}

export default EditarUsuario