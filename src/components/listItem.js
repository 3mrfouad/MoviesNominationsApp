import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import ratingStars from "../helpers/convertRatingToStars";
import AddRemoveButton from "./addRemoveButton";

const ListItem = ({
  styles,
  item,
  config,
  handleClickAction,
  nominations,
  setIsOpen,
  items,
  setData,
  setNominations,
  handleAddNomination,
}) => {
  return (
    <li className={styles.li}>
      <div>
        <a href="/#">
          <img
            className={styles.img}
            src={
              item?.Poster !== "N/A"
                ? item?.Poster
                : "https://via.placeholder.com/300?text=IMAGE+UNAVAILABLE"
            }
            alt="movie poster"
          />
        </a>
      </div>
      <div className={styles.col}>
        <div>
          <FontAwesomeIcon className={styles.icons} icon={faFilm} />{" "}
          <a className={styles.anchor} href="/#">
            {item?.Title}
          </a>
        </div>
        <div>{ratingStars(item?.imdbRating)}</div>
        <div className={styles.genre}>{item?.Genre?.split(",")[0]}</div>
        <div className={styles.plot}>
          <span>{item?.Plot}</span>
          <div className={styles.btnDiv}>
            {` (release year: ${item?.Year})`}
            <AddRemoveButton
              item={item}
              config={config}
              styles={styles}
              nominations={nominations}
              setIsOpen={setIsOpen}
              items={items}
              setData={setData}
              setNominations={setNominations}
              handleClickAction={handleAddNomination}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListItem;

/*
component signature:

<ListItem
styles={styles}
item={item}
config={config}
handleClickAction={handleClickAction}

/>*/
