

function error({children}) {
  return (
    <div className="bg-red-800 mb-3 rounded-md text-white font-bold text-center uppercase p-2">
        <p> { children } </p>
    </div>
  )
}

export default error
