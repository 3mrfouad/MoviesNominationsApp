import ListItem from './listItem';

const ItemsList = (
    {
        setIsOpen,
        setData,
        items,
        styles,
        config,
        setNominations,
        nominations,
        loading
    }) => {
    let itemsToRender = config.profile === 'remove' ? nominations : items;

    return loading ? <span className={styles.spinner} /> : (
        <>
            <h5 className={styles.header}>{config.headerText}</h5>
            {
                (!itemsToRender.length && config.showErrorOnNoResult) ?
                    <p className={styles.noResult}>
                        Please enter valid movie title to show results
                        </p> :
                    <ul  >
                        {itemsToRender.map((item) =>
                            <ListItem
                                key={item.imdbID}
                                styles={styles}
                                item={item}
                                config={config}
                                nominations={nominations}
                                setIsOpen={setIsOpen}
                                items={items}
                                setData={setData}
                                setNominations={setNominations}
                            />
                        )}
                    </ul>
            }
        </>
    );
}

export default ItemsList;

/*
component signature:

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

*/