import React from 'react'

function FormTarea() {
  return (
    <div className='bg-slate-200 p-7'>
        <form action=''>
            <h1 className='text-black font-bold '>Añadir Tarea</h1>

            <label htmlFor="titulo" className='text-sm text-black'>Titulo:</label>

            <input className='bg-slate-400 rounded-md p-2 mb-2 block w-full text-black' type="text" name='titulo' placeholder='ingresa tituto' />

            <label htmlFor="Descripcion" className='text-sm text-black'>Descripcion:</label>

            <textarea className='bg-slate-400 rounded-md p-2 mb-2 block w-full text-black' name="descripcion" placeholder='ingresa descripcion'  ></textarea>

            <button className='bg-indigo-500 text-white rounded-md p-2 block w-full' >Save</button>
        </form>
    </div>
  )
}

export default FormTarea