import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
const SearchBox = ({ setSearch }) => {

    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        setSearch(searchText?.trim());
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="input-group input-group-sm">
            <input type="text"
                onChange={(e) => setSearchText(e.target.value)}
                onKeyPress={handleKeyPress}
                className="form-control" placeholder="Search your favorite movies" />
            <div className="input-group-prepend">
                <button onClick={handleSearch} className="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    );
}

export default SearchBox;

/*
component signature:
<Search
 setSearch={setSearch}
 styles={styles} />
*/