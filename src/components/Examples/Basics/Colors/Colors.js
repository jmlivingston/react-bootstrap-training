import React from 'react'

const Colors = () => {
  return (
    <div className="container-fluid">
      <h1>Color</h1>
      <p className="text-primary">.text-primary</p>
      <p className="text-secondary">.text-secondary</p>
      <p className="text-success">.text-success</p>
      <p className="text-danger">.text-danger</p>
      <p className="text-warning">.text-warning</p>
      <p className="text-info">.text-info</p>
      <p className="text-light bg-dark">.text-light</p>
      <p className="text-dark">.text-dark</p>
      <p className="text-muted">.text-muted</p>
      <p className="text-white bg-dark">.text-white</p>
      <h1>Background Color</h1>
      <div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
      <div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
      <div className="p-3 mb-2 bg-success text-white">.bg-success</div>
      <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
      <div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
      <div className="p-3 mb-2 bg-info text-white">.bg-info</div>
      <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
      <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
      <div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
    </div>
  )
}

export default Colors