import { Result } from "postcss"
import Swal from "sweetalert2"

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  // distructuring para evitar poner en todas las lineas paciente.
  const {mascota, propietario, email, alta, sintomas, id} = paciente

  const handleEliminar = () => {

    // Alerta para confirmar la eliminacion de registros
    Swal.fire({
      title: `¿Deseas eliminar el registro de ${mascota}?`,
      icon: 'warning',
      showConfirmButton: 'true',
      confirmButtonText: 'Eliminar',
      showCancelButton: 'true',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if(result.isConfirmed){
        eliminarPaciente(id)
        Swal.fire({
          title: `El registro de ${mascota} ha sido eliminado`,
          icon: 'success',
        })
      } else {
        Swal.fire({
          title: 'Cancelado',
          icon: 'error',
        })
      }
    })

    // console.log(respuesta.then(onclick="swal2-confirm swal2-styled"))
    // const respuesta = confirm(`¿Deseas eliminar el registro de ${mascota}?`)


  }
  
  return (
    <div className="bg-white m-3 py-10 px-5 shadow-md rounded-md font-bold">
        <p className="mb-3 text-gray-700 uppercase">Nombre: {""} 
          <span className="font-normal normal-case">{mascota}</span>
        </p>
        <p className="mb-3 text-gray-700 uppercase">Propietario: {""} 
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="mb-3 text-gray-700 uppercase">Email: {""} 
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="mb-3 text-gray-700 uppercase">Alta: {""} 
          <span className="font-normal normal-case">{alta}</span>
        </p>
        <p className="mb-3 text-gray-700 uppercase">Sintomas: {""} 
          <span className="font-normal normal-case">{sintomas}</span>
          </p>

        <div className="flex justify-end">
          <button type="button" 
          className="bg-yellow-500 hover:bg-yellow-600 p-2 m-1 rounded-md text-white"
          onClick={ () => setPaciente(paciente)}>
          
            Editar
          </button>

          <button type="button" className="bg-red-500 hover:bg-red-600 p-2 m-1 rounded-md text-white"
          onClick={handleEliminar}>

            Eliminar
          </button>
        </div>
    </div>
  )
}

export default Paciente
