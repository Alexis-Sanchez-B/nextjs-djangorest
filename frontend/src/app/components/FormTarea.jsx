"use client"
import { useState } from 'react'

function FormTarea() {

    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Esperar la respuesta de fetch
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tareas/`, {
            method: 'POST',
            body: JSON.stringify({ titulo, descripcion }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // Verificar si la respuesta fue exitosa
        if (!res.ok) {
            // Si no es exitosa, lanzar un error
            console.error('Error en la solicitud:', res.statusText)
            return
        }

        // Obtener los datos en formato JSON
        const data = await res.json()

        // Ver los datos en la consola
        console.log(data)
    }

    return (
        <div className='bg-slate-200 p-7'>
            <form onSubmit={handleSubmit}>
                <h1 className='text-black font-bold'>Añadir Tarea</h1>

                <label htmlFor="titulo" className='text-sm text-black'>Titulo:</label>
                <input className='bg-slate-400 rounded-md p-2 mb-2 block w-full text-black' type="text" name='titulo' placeholder='ingresa titulo'
                    onChange={e => setTitulo(e.target.value)} />

                <label htmlFor="descripcion" className='text-sm text-black'>Descripcion:</label>
                <textarea className='bg-slate-400 rounded-md p-2 mb-2 block w-full text-black' name="descripcion" placeholder='ingresa descripcion'
                    onChange={e => setDescripcion(e.target.value)}></textarea>

                <button className='bg-indigo-500 text-white rounded-md p-2 block w-full'>Save</button>
            </form>
        </div>
    )
}

export default FormTarea
