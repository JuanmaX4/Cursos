import dbdata from '../db.json';
import './style.css';

function Botones() {
  return (
    <>
      <div className="row d-flex text-center p-5">
        <div className="col-3 mr-1">
        <div class="circulo bg-warning"><h1>{dbdata.profile.stamina_points}</h1></div>
        <h2>Resistencia</h2>
        </div>
        <div className="col-3">
        <div class="circulo bg-danger"><h1>{dbdata.profile.strength_points}</h1></div>
        <h2>Fuerza</h2>
        </div>
        <div className="col-3">
        <div class="circulo bg-success"><h1>{dbdata.profile.flexiblity_points}</h1></div>
        <h2>Flexibilidad</h2>
        </div>
        <div className="col-3">
        <div class="circulo bg-info"><h1>{dbdata.profile.mind_points}</h1></div>
          <h2>Mente</h2>
        </div>
      </div>
    </>
  );
}

export default Botones;