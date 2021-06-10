import React from "react"

const Form = ({ createTune }) => {
  const [formData, setFormData] = React.useState({
    title: "",
    artist: "",
    duration: 0,
  })

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault() // Prevent Form from Refreshing
    createTune(formData) // Submit to Parents desired function
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  return (
    <div className="wrapper">
      <hr></hr>
      <h1>ADD A NEW SONG</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <div className="label-and-input">
            <label htmlFor="title">TITLE</label>
            <input
              type="text"
              id="title"
              placeholder="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="label-and-input">
            <label htmlFor="artist">ARTIST</label>
            <input
              type="text"
              id="artist"
              placeholder="artist"
              value={formData.artist}
              onChange={handleChange}
            />
          </div>
          <div className="label-and-input">
            <label htmlFor="duration">DURATION</label>
            <input
              type="number"
              id="duration"
              placeholder="duration"
              value={formData.duration}
              onChange={handleChange}
            />
          </div>
        </section>
        <button type="submit">
          <b>ADD NEW SONG</b>
        </button>
      </form>
    </div>
  )
}
export default Form
