import React, {useState} from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'

function AgregarUsuario(){

    //Hooks
    const[username, setUsername]=useState('')
    const[ip, setIp]=useState('')
    
    

    function agregarUsuario(){
        var usuario = {
            username: username,
            ip: ip,
            idusuario: uniquid()
        }
        console.log(usuario)

        axios.post('/api/usuario/agregarusuario', usuario)
        .then(res => {
            //alert(res.data)
            Swal.fire('Felicidades', 'El usuario se creó con éxito')
        })
        .then(err => {console.log(err)})
    }



    return(
        <div className="container">
            <div className="row">
                     <h2 className="mt-4">Create a new user</h2>               
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

                     <button onClick={agregarUsuario} className="btn btn-success">Save User</button>
                </div>
            </div>          
        </div>
    )
}

export default AgregarUsuario