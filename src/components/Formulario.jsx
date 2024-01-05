import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {

  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [ error, setError] = useState(false);

  useEffect( () => {
    if(Object.keys(paciente).length > 0){
      setMascota(paciente.mascota)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    } 
  },[paciente])

  

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del formulario

    if([ mascota, propietario, email, alta, sintomas ].includes('')){
      setError(true);
    } else {
      setError(false)
    }

    // Objeto de paciente
    const objetoPaciente = {
      mascota,
      propietario,
      email,
      alta,
      sintomas
    }

    if(paciente.id){
      // Editando el registro
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map( (pacienteState) => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      // Actualiza el registro
      setPacientes(pacientesActualizados)
      // Reinicia el state
      setPaciente({})

    } else {
      // Creando registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])

    }    


    // Reiniciar el form
    setMascota('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');

    
    
  }



  return (
    <>
      <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="mt-5 text-center text-xl mb-10">Añade Pacientes {""}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form
          onSubmit={ handleSubmit }  
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">
            
            {error && <Error> Todos los campos son obligatorios </Error> }

          <div className="mb-5">
            <label className="block text-gray-700 font-bold uppercase"
            htmlFor="mascota">Nombre Mascota</label>
            <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text" id="mascota" placeholder="Nombre de la Mascota"
            value={ mascota }
            onChange={ (e) => setMascota(e.target.value) }/>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-bold uppercase"
            htmlFor="propietario">Nombre del Propietario</label>
            <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text" id="propietario" placeholder="Nombre del Propietario"
            value={ propietario }
            onChange={ (e) => setPropietario(e.target.value) }/>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-bold uppercase"
            htmlFor="email">Email</label>
            <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="email" id="email" placeholder="Email Contacto Propietario"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }/>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-bold uppercase"
            htmlFor="alta">Alta</label>
            <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="date" id="alta"
            value={ alta } 
            onChange={ (e) => setAlta(e.target.value) }/>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-bold uppercase"
            htmlFor="mascota">Sintomas</label>
            <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
             name="sintomas" id="sintomas" placeholder="Describe los sintomas" 
             value={ sintomas }
             onChange={ (e) => setSintomas(e.target.value) }/>
          </div>

          <input type="submit"
          value={ paciente.id ? 'Editar paciente' : 'Agregar paciente' }
          className="bg-indigo-600 w-full p-3 text-white font-bold uppercase
          hover:bg-indigo-700 cursor-pointer transition-all"/>
        </form>
      </div>
      
    </>
  )
}

export default Formulario
