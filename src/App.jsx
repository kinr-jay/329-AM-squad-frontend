import React, { useState } from "react"
import "./App.scss"
import Nav from "./component/Nav"
import Playlist from "./component/Playlist"
import Form from "./component/Form"

function App() {
  const url = "https://f0zqyllzb3.execute-api.us-east-2.amazonaws.com/dev"

  const [tunes, setTunes] = useState(null)
  const [favTunes, setFavTunes] = useState(null)

  const getTunes = async () => {
    fetch(url + "/tunes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.body)
        setTunes(data.body)
      })
  }

  const getFavTunes = async () => {
    fetch(url + "/tunes/favorites")
      .then((response) => response.json())
      .then((data) => {
        setFavTunes(data.body)
      })
  }

  React.useEffect(() => {
    getTunes()
    getFavTunes()
  }, [])

  const createTune = (newTune) => {
    fetch(url + "/tunes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTune),
    }).then(() => getTunes())
  }

  const deleteTune = (tune) => {
    fetch(url + "/tunes/" + tune.tuneId, {
      method: "DELETE",
    }).then(() => {
      getTunes()
    })
  }

  const handleFav = (tune) => {
    fetch(url + "/tunes/favorites/" + tune.tuneId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tune),
    }).then(() => {
      getTunes()
      getFavTunes()
    })
  }

  return (
    <div className="App">
      <Nav />
      <Playlist
        playlist={"Playlist 1"}
        tunes={tunes}
        deleteTune={deleteTune}
        handleFav={handleFav}
      />
      <Playlist
        playlist={"My Favorite Tunes"}
        tunes={favTunes}
        deleteTune={deleteTune}
        handleFav={handleFav}
      />
      <Form createTune={createTune} />
    </div>
  )
}

export default App
