import React from 'react';

function carosuel() {
  return (
    <><div id="carousel" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./images/petfriendly.jpg" alt="paisaje" width="1920" height="430" border="0" />
        </div>
        <div className="carousel-item">
          <img src="./images/soy estudiante.jpg" alt="promo estudiante" width="1920" height="430" border="0" />
        </div>
        <div className="carousel-item">
          <img src="./images/club.jpg" alt="promo club" width="1920" height="430" border="0" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button><button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div></>
  )
}

export default carosuel