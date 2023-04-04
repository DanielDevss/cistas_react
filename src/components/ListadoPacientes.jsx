import Paciente from './paciente'

const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {

  return (

    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
          <p className='text-xl text-center mb-10 mt-5' >
            Administra tus {" "}
            <span className='text-indigo-600 font-bold'>pacientes y citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
            <h2 className="font-black text-center text-3xl">No hay pacientes</h2>
            <p className='text-xl text-center mb-10 mt-5' >
              Agrega nuevos pacientes {" "}
              <span className='text-indigo-600 font-bold'>y visualizalos aquí</span>
            </p>
        </>
      )}

    </div>
  )
}

export default ListadoPacientes
