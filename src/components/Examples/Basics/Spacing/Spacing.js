import React from 'react'

const Spacing = ({ title }) => {
  return (
    <div>
      <div className="row no-gutters">
        <div className="col-sm-3 col-md-2 col-lg-4">
          <div className="card p-0">
            <img className="card-img-top" src="http://via.placeholder.com/350x150" alt="Card cap" />
            <div className="card-body p-5">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spacing
