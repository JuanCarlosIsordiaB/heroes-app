import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroById';
import { useMemo } from 'react';

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById(id), [id] ); //caundo id cambia, se dispara de neuvo

  const { superhero, publisher, alter_ego, first_appearance, characters} = hero;

  const onReturn = (publisher) => {
    navigate(-1)
  }

  if(!hero){
    return <Navigate to="/marvel" />
  }  
  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img 
          src={`/assets/heroes/${id}.jpg`}
          alt={superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>
      <div className="col-8">
        <h1>{superhero}</h1>
        <ul className='list-group list-group-flush'>
          <li><b>Alter ego:</b>{alter_ego}</li>
          <li><b>Publisher:</b>{publisher}</li>
          <li><b>First Appearance:</b>{first_appearance}</li>
        </ul>

        <h4 className='mt-3'>Characters:</h4>
        <p>{characters}</p>

        <button 
          className='btn btn-outline-primary'
          onClick={onReturn}
        >
          Back
        </button>



      </div>

      
    </div>
  )
}
