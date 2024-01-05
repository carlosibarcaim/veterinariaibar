
import Paciente from "./Paciente"


const ListaPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  

  return (
    
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        { pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Lista Pacientes</h2>
            <p className="mb-10 mt-5 text-center text-xl">Administra tus {""}
              <span className="font-bold text-indigo-600">Pacientes y Citas</span>
            </p>
    
            { pacientes.map( (paciente) => {
              return <Paciente 
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            }) }

          </>  

        ) : (
          <>
            <h2 className="font-black text-3xl text-center">Lista Pacientes</h2>
            <p className="mb-10 mt-5 text-center text-xl">Agrega pacientes y aparecerán {""}
              <span className="font-bold text-indigo-600">Aqui</span>
            </p>
          </>
        ) }
          
      </div>
    
      
  )
}

export default ListaPacientes

