import React from "react"
import "./playlist.scss"

const Playlist = (props) => {
  const { playlist, tunes, deleteTune, handleFav } = props

  const loading = () => {
    return <h2>Pulling favorites...</h2>
  }

  const loaded = () => {
    return (
      <div className="container">
        <hr></hr>
        <h2>{playlist}</h2>
        <div className="playlist">
          {tunes.map((tune, index) => (
            <div className="tune" key={index}>
              <i
                className={tune.favorite ? "fas fa-heart" : "far fa-heart"}
                onClick={() => handleFav(tune)}
              ></i>
              <div className="tune-details">
                <p>{tune.title}</p>
                <p>{tune.artist}</p>
                <p>
                  {Math.floor(tune.duration / 60)}:{tune.duration % 60}
                </p>
              </div>
              <p className="delete-button" onClick={() => deleteTune(tune)}>
                X
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return tunes ? loaded() : loading()
}

export default Playlist
