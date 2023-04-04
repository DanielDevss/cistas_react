import {useState, useEffect} from "react";
import Error from "./Error";

const Formulario = ({ pacientes,setPacientes,paciente, setPaciente }) => {


  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintoma, setSintoma] = useState('');

  const [error, setError] = useState(false);

  useEffect( () => {
    if(Object.keys(paciente).length>0){
      console.log(paciente);
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintoma(paciente.sintoma);
    }else{
      console.log("No hay nada");
    }
  }, [paciente] );



  const handleSubmit = (e) => {
    e.preventDefault();

    //! Validación formulario
    if([nombre,propietario,email,fecha,sintoma].includes('')){

      setError(true);
      return
    }


    const generarID = () => {
      const random = Math.random().toString(36).substr(2);
      const fecha = Date.now().toString(36)
      return random + fecha
    }


    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintoma,
    }

    if(paciente.id){
      //EDICION DE PACIENTE
      objetoPaciente.id = paciente.id;    
      const pacienteActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
      setPacientes(pacienteActualizado);
      setPaciente({});
    }else{
      //NUEVO REGISTRO
      objetoPaciente.id = generarID();
      setPacientes([...pacientes, objetoPaciente]);
    }

    setError(false);
    
  
    //reniciar el formulario
    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintoma("")
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10 ml-5">
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-xl text-center pt-5 mb-10'>
        Añade tus pacientes y {""} 
        <span className='text-indigo-600'>Admnistralos</span>
      </p>

      <form onSubmit={handleSubmit} className='bg-white rounded-lg py-10 px-5 shadow-md'>
        
        {error && <Error><p>Todos los mensajes son obligatorios</p></Error>}

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="nombreMascota">Nombre mascota</label>
          <input 
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)} 
            type="text" 
            placeholder='Nombre de mascota' 
            id='nombreMascota' 
            className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md' />
        </div>
        
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="nombrePropietario">Nombre propietario</label>
          <input value={propietario} onChange={(e)=>setPropietario(e.target.value)} type="text" placeholder='Nombre del propietario' id='nombrePropietario' className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md' />
        </div>
        
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="email">Email de propietario</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email contacto propietario' id='email' className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md' />
        </div>
        
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="alta">Fecha de alta</label>
          <input value={fecha} onChange={(e)=>setFecha(e.target.value)} type="date" placeholder='fecha de alta' id='alta' className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md' />
        </div>
        
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="sintomas">Sintomas</label>
          <textarea value={sintoma} onChange={(e)=>setSintoma(e.target.value)} placeholder='Describe los sintomas' id='sintomas' className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md' />
        </div>
      
        <input 
          type="submit" 
          className='w-full p-3 bg-indigo-600 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' 
          value={ paciente.id ? 'Editar paciente' : 'Agregar paciente' } />

      </form>

    </div>
  )
}

export default Formulario
