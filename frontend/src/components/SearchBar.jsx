import { useNavigate } from 'react-router-dom';

const SearchHeader = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <div className="search-header__search nav-header__desktop">
      <div className="search-header__search">
        <label 
          id="search-header-form-input-label"
          className="search-header__form-input-label"
        >
          Search
        </label>

        <button 
          type="button"
          onClick={handleSearchClick}
          className="search-header__search-button"
          aria-label="Search"
        >
          <div className="search-header__search-input-wrapper">
            <svg height="24" viewBox="0 0 64 64" width="24" xmlns="http://www.w3.org/2000/svg" className="search-header__search-icon">
              <path d="m26.72 50.414c5.205 0 10.005-1.683 13.932-4.488l14.773 14.773c.686.686 1.59 1.028 2.556 1.028 2.026 0 3.46-1.558 3.46-3.553 0-.935-.312-1.807-.998-2.493l-14.68-14.71c3.086-4.052 4.925-9.07 4.925-14.524 0-13.184-10.784-23.968-23.967-23.968-13.153 0-23.968 10.753-23.968 23.968 0 13.183 10.784 23.967 23.968 23.967zm0-5.174c-10.285 0-18.793-8.508-18.793-18.793 0-10.286 8.508-18.794 18.794-18.794 10.285 0 18.793 8.508 18.793 18.794 0 10.285-8.508 18.793-18.793 18.793z"></path>
            </svg>
          </div>
          <input 
            name="query"
            placeholder="Search"
            autoComplete="off"
            className="search-header__search-input"
            id="search-header-form-input-box"
            type="search"
          />
        </button>

        {/* Results of searching */}
        <ul 
          className="search-hints is-hidden"
          role="listbox"
          id="search-hints"
        >
        </ul>
      </div>
    </div>
  );
};

export default SearchHeader;