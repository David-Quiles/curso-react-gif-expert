export const getGifs = async(category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=qbpKDgEyBctCYK5uJ6qkSTTcJiKaBoqv&q=${category}&limit=9`
    const resp = await fetch(url);
    const { data }  = await resp.json();

    const gifs = data.map ( images => ({
        id : images.id,
        title : images.title,
        url : images.images.downsized_medium.url
    }));
    return (gifs)
}