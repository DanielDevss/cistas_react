import {useEffect} from "react";
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

  const {nombre,propietario, email, fecha, sintoma, id} = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('¿Deseas eliminar este paciente?');
    if(respuesta){
      eliminarPaciente(id);
    }
  }

  return (
    <div className='bg-white shadow-md m-3 px-5 py-10 rounded-md mt-5'>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre: {" "}
        <span className='font-normal normal-case'>{paciente.nombre}</span>
      </p>


      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre Propietario: {" "}
        <span className='font-normal normal-case'>{paciente.propietario}</span>
      </p>


      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Email: {" "}
        <span className='font-normal normal-case'>{paciente.email}</span>
      </p>


      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha de alta: {" "}
        <span className='font-normal normal-case'>{paciente.fecha}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Sintomas: {" "}
        <span className='font-normal normal-case'>{paciente.sintoma}</span>
      </p>

      <div className="flex justify-between">
        <button 
          className="px-4 py-3 text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase transition-all rounded-md" 
          onClick={()=>setPaciente(paciente)}
          type="button">Editar</button>
        <button 
          className="px-4 py-3 text-sm bg-red-800 hover:bg-red-600 text-white font-bold uppercase transition-all rounded-md" 
          onClick={handleEliminar}
          type="button">Eliminar</button>
      </div>

    </div>
  )
}

export default Paciente
