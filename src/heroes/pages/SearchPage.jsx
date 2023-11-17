import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from '../helpers';



export const SearchPage = () => {

  const navigate = useNavigate(); //Get the navegation
  const location = useLocation(); //Get the information of where we are located

  const {q = ''} = queryString.parse( location.search);

  const heroes = getHeroesByName(q);
  
  const { searchText, onInputChange } = useForm({
    searchText: ''

  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    //if(searchText.trim().length <= 1) return;

    navigate(`?q=${ searchText}`);
  }

  
  return (
    <>
      <h1>Search</h1>
      <hr />


      <div className="row">
        <div className="col-5 mt-3">
          <h4>Searching</h4>
          <form 
            className="form"
            onSubmit={onSearchSubmit}
          >
            <input 
              type="text" 
              placeholder="Search a Hero" 
              className="form-control" 
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-3" type="submit">Search</button>
          </form>
        
        </div>
        <div className="col-7 mt-3">
          <h4 >Results for: {searchText}</h4>
          <hr />

          {
            (q === '')
            ? <div className="alert alert-primary">Try searching a hero</div> 
            : (heroes.length === 0)
              && <div className="alert alert-danger"> No heroes with <b>{q}</b></div>
          }

          {
            heroes?.map( hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    
    
    </>
  )
}

