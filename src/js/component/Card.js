import React from 'react'
import Proptypes from 'prop-types'

let cardStyle = {
  width: "18rem",
}

const Card = (props) => {
  return (
    <>
      <div className='col-12 col-md-3'>
        <div className="card">
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">The Sweet Charm of Innocence {props.mensaje} - {props.numero} </h5>
            <p className="card-text">Jelly beans halvah halvah gingerbread oat cake. Danish soufflé gingerbread muffin sugar plum.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </>
  )
}

Card.Proptypes = {
  numero: Proptypes.number,
  mensaje: Proptypes.string,
  image: Proptypes.string
}
export default Card