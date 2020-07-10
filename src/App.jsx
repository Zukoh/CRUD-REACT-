import React, {useState} from  'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'

  


function App() {
  
  const usersData = [
    { id: uuidv4(), name: 'Alexis', username: 'Zuko' },
    { id: uuidv4(), name: 'Hugo', username: 'Hugojos' },
    { id: uuidv4(), name: 'Steve', username: 'Jobs' },
    
  ]

  //Estado

  const [users, setUsers] = useState(usersData)
  
  // agregando usuario

  const addUser = user => {
    user.id=uuidv4()
    setUsers([
      ...users,
      user
    ])
  }
  // Eliminar usuario

  const deleteUser = id => {
    const filtrado= users.filter(user => user.id !== id)
    setUsers(filtrado)
  }

  //Estado para saber que form renderizar

  const [edit, setEdit] = useState(false)

  // editar usuario

  const [currentUser, setCurrentUser] = useState({
    id:null, name:'', username:''
  })

  const EditRow = user => {
    setEdit (true)
    setCurrentUser ({
      id:user.id, name:user.name, username:user.username
    })
  }

  const updateUser = (id , updateUser) => {
    setEdit(false)
    setUsers(users.map(user => (user.id === id? updateUser : user)))
  }

  return (
    
    <div className="container">
      <h1 className="titulo">CRUD App React Hooks</h1>
      <div className="flex-row">
      <div className="flex-large">  
          {
            edit?(
            <div>
                <h2 className="desc-titulo">Editar usuario</h2>
                <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
            </div>
            ) : (
                <div>
                <h2 className="desc-titulo">Agregar Usuario</h2>
                <AddUserForm addUser={addUser}/>
                </div>
                )
            }
          </div>
          <div className="flex-large">
            <h2 className="desc-titulo">Ver usuarios</h2>
            <UserTable users={users} deleteUser={deleteUser} EditRow={EditRow}/>
          </div>
        </div>
        </div>
      
  );
}

export default App;
