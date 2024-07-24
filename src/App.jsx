import './App.css'
import React, {useState, useEffect} from "react"
import axios from "axios"


const Albums = () => {

  // axios call - call json file
  const [ albums, setAlbums ] = useState([])

  // useEffect - success & error in request
  useEffect(() => {
    axios.get("./Albums.json")
      .then(response => {
        console.log(response.data);
        setAlbums(response.data);
      })
      .catch(error => {
        console.log(error)
      })

  }, []) // leave array empty to run once!!!

  // display album cards for each album
  const AlbumCard = ({albums}) => {
    const mappedAlbums = albums.map((album, index) => {
      return (
        <div key={index} className='album-card'>
          <img src={album.cover_art} alt={album.name} className='album-cover'></img>
          <div className='album-details'>
            <h1 className='title'>{album.name}</h1>
            <h2 className='artist'>{album.artist}</h2>
            <h2 className='year'>{album.year}</h2>
          </div>
        </div>
      )
    })

    return (
      <>
        {mappedAlbums}
      </>
    )
  }

  // master return
  return (
    <>
      <h1 id='main-title'>
        My Favourite Albums
      </h1>

      <div className="album-grid">
        <AlbumCard albums={albums}></AlbumCard>
      </div>
    </>
  )
}

export default Albums
