export const GifItem = ({ title, url}) => {
  
    return (
        <div className="card">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}


{/* <li key={img.id}>
{img.title}
</li> */}