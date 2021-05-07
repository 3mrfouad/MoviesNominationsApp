export const handleClickAction = (
    item,
    nominations,
    setIsOpen,
    config,
    items,
    setData,
    setNominations
) => {
    let nominationsLimit = 5;

    if (nominations.length === nominationsLimit && config.profile !== 'remove') setIsOpen(true);
    else {
        setIsOpen(false);
        let itemsCopy = [...items];
        let nominationsCopy = [...nominations];

        let itemIndex = itemsCopy.findIndex(element => element.imdbID === item.imdbID);
        let nominationIndex = nominationsCopy.findIndex(element => element.imdbID === item.imdbID);

        if (itemsCopy[itemIndex])
            itemsCopy[itemIndex].nominated = (config.profile === 'remove') ? false : true;

        config.profile === 'remove' ?
            nominationsCopy.splice(nominationIndex, 1) :
            nominationsCopy.push(itemsCopy[itemIndex]);

        setData(itemsCopy);
        setNominations(nominationsCopy);

        if (nominationsCopy.length !== 0) {
            window.localStorage.setItem('nominationsList',
                nominationsCopy.map(item => item.imdbID)
            );
        } else {
            window.localStorage.removeItem('nominationsList')
        }

    }
}