import React,{useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import './Search.css';
function Search() {
    const [isActive, setActive] = useState('');
    const handleSearchBlur = (event) => {
        if (event.currentTarget === event.target) {
            setActive('');
        } else {
            setActive('');
        }
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setActive('');
        }
    }
    const handleSearchFocus =(event)=> {
        if (event.currentTarget === event.target) {
            setActive('active');
        } else {
            setActive('active');
        }
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setActive('active');
        }
    }
  return (
    <div className='search-container'>
          <div
              id='search'
              tabIndex={0}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              className={`search ${isActive}`}>
                <FiSearch id='icon'/>
                <input  placeholder='Search Twitter'/>
        </div>
    </div>
  )
}

export default Search;