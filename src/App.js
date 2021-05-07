import { useState, useEffect } from 'react'
import './App.css';
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import Search from './components/searchBox'
import ItemsList from './components/itemsList';
import Banner from './components/banner';
import { fetchData } from './helpers/fetchData'

const styles = {
  li: 'row mb-4 pb-2 border-bottom',
  header: 'mb-4 border-bottom pb-2',
  col: 'fs-md text-wrap col',
  img: 'movie-poster',
  icons: 'icons',
  genre: 'fs-md mb-2 text-muted font-weight-bold',
  plot: 'fs-xs d-flex flex-column text-muted font-italic',
  anchor: 'anchor',
  btnDiv: 'd-flex justify-content-between',
  btnText: 'fs-xs font-weight-bold',
  noResult: 'noResult',
  spinner: 'spinner-border text-success'
}

const NominationsTableConfig = {
  profile: 'remove',
  headerText: 'Nominations',
  btnText: 'Remove',
  styles: {
    btnIcon: faTrashAlt,
    btnClassName: "btn-remove-styles red-color btn-custom",
  },
  showErrorOnNoResult: false
}

const SearchResultsTableConfig = {
  profile: 'add',
  headerText: 'Search Results',
  btnText: 'Nominate',
  styles: {
    btnIcon: faThumbsUp,
    btnClassName: "btn-remove-styles green-color btn-custom"
  },
  showErrorOnNoResult: true
}

function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [nominations, setNominations] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchData(setLoading, setData, search, setNominations);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <header>
        <nav className="navbar navbar-light bg-color-green">
          <span className="navbar-brand text-white mb-0 h1">Movies Nominations</span>
        </nav>
      </header>

      <main className="container fluid">

        <div className="row mt-5">
          <Search
            setSearch={setSearch}
            styles={styles} />
        </div>

        <div className="row mt-5">
          <div className="col">
            <ItemsList
              setData={setData}
              items={data}
              styles={styles}
              config={SearchResultsTableConfig}
              setNominations={setNominations}
              nominations={nominations}
              setIsOpen={setIsOpen}
              loading={loading}
            />
          </div>

          <div className="col hide-on-mobile">
            <ItemsList
              setData={setData}
              items={data}
              styles={styles}
              config={NominationsTableConfig}
              setNominations={setNominations}
              nominations={nominations}
              setIsOpen={setIsOpen}
              loading={loading}
            />
          </div>
        </div>

        <Banner
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </main>
    </>
  );
}

export default App;
