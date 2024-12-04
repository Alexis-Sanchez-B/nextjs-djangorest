import FormTarea from "./components/FormTarea"
import ListaTareas from "./components/ListaTareas"

function HomePagina(){
  return(
    <div className="container mx-auto">
      <h1>APP Tareas</h1>
    <div className="flex gap-x-10">
     <FormTarea />
     <ListaTareas />
    </div>
    </div>
  )
}
export default HomePagina
