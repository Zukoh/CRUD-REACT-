import React from 'react'

const UserTable = (props) => {
    return (  
        <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Usuario</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
        {
            props.users.length > 0 ? 
            props.users.map(user => (
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
             
            <button className="btn btn-outline-dark" onClick = {() => {props.EditRow(user)}}>Edit</button>
            <button className="btn btn-outline-dark" onClick={() => {props.deleteUser(user.id)}}>Delete</button>
            </td>
      </tr>
            )) : (
                <tr>
                <td colSpan={3}>No hay usuarios</td>
              </tr>
            )
        }
      
    </tbody>
  </table>
    )
}
 
export default UserTable;