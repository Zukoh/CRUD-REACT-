import React from 'react'
import {useForm} from 'react-hook-form'




const AddUserForm = (props) => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data , e) => {
        props.addUser(data)
        e.target.reset()
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input type="text" name="name" ref={
            register({
                required:{value:true, message:"Campo obligatorio.."}
            })
        }
            />

        <label>Usuario</label>
        <input type="text" name="username" ref={
            register({
                required:{value:true, message:"Campo obligatorio.."}
            })
        }
            />
        <button>Agregar Nuevo</button>
      </form>
    )
     
}
 
export default AddUserForm;