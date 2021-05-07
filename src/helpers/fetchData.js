import axios from 'axios';

export const fetchData =
    async (setLoading, setData, search, setNominations) => {
        setLoading(true);

        const searchByTermResults = await fetchDataBySearchTerm(search);
        let detailsByIdResults = await fetchDataById(searchByTermResults, false);

        let savedNominations = await getSavedNominations(setNominations);
        setNominatedInSearchResults(detailsByIdResults, savedNominations);

        setData(detailsByIdResults);
        setLoading(false);
    }

async function fetchDataBySearchTerm(search) {
    const response = await axios
        .get(`http://omdbapi.com/?s=${search}&type=movie&apikey=42585e73`);
    const items = response?.data?.Search || [];
    return items;
}

export const fetchDataById = async (items, nominated) => {

    let consolidateItemsDetails = [];

    await Promise.all(
        items.map(async element => {
            let response = await axios
                .get(`http://omdbapi.com/?i=${element.imdbID}&apikey=42585e73`)
            consolidateItemsDetails
                .push({ ...response?.data, nominated })
        })
    )
    return consolidateItemsDetails;
}

async function getSavedNominations(setNominations) {
    let savedNominations = readSavedNominations();
    const fetchSavedNominations = await fetchDataById(savedNominations, true);
    setNominations(fetchSavedNominations);
    return savedNominations;
}

const readSavedNominations = () => {

    if (!window.localStorage
        .getItem('nominationsList')) return [];

    return window.localStorage
        .getItem('nominationsList')
        .split(',')
        .map(item => ({ imdbID: item }));
}

function setNominatedInSearchResults(searchResults, savedNominations) {
    searchResults.forEach(
        item => {
            if (savedNominations
                .findIndex(element => element.imdbID === item.imdbID) !== -1)
                item.nominated = true;
        }
    );
}