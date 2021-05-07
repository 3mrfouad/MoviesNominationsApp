import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isDisabled, styleDisabledBtn } from '../helpers/configureAddRemoveBtn';
import { handleClickAction } from '../helpers/handleBtnClickAction'
const AddRemoveButton = (
    {
        config,
        styles,
        item,
        nominations,
        setIsOpen,
        items,
        setData,
        setNominations }
) => {

    return (
        <button type="button"
            className={config.styles.btnClassName}
            disabled={isDisabled(config, item)}
            style={styleDisabledBtn(config, item)}
            onClick={
                handleClickAction.bind(
                    this,
                    item,
                    nominations,
                    setIsOpen,
                    config,
                    items,
                    setData,
                    setNominations
                )}
        >
            <span className={styles.btnText}>{config.btnText}</span>{" "}
            <FontAwesomeIcon icon={config.styles.btnIcon} />
        </button>
    )
}

export default AddRemoveButton;

/*
component signature:

<NominationButton
item={item}
config = {config}
styles = {styles}
nominations = {nominations}
setIsOpen ={setIsOpen}
items={items}
setData={setData}
setNominations={setNominations}
handleClickAction = {handleAddNomination}
/>
*/