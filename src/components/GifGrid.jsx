//Importar primero cosas de react

//Componentes/Hooks
import { GifItem } from "./GifItem";

//Aplicaciones/funciones externas
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

    const { images, isLoading} = useFetchGifs(category);
    
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
            <div className="card-grid">
            {
                images.map(img =>(
                    <GifItem 
                    key = {img.id}
                    {...img} //De esta forma se pasan todas las propiedades del elemento "img". Luego desestructuramos en el componente (GifItem)
                    />
                ))
            }
            </div>
        </>
    )
}

