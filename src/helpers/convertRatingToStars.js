import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regStar } from "@fortawesome/free-regular-svg-icons";

export default function starsRating(itemRating) {
    const ratingDenominator = 5;
    const ratingNumerator = Math.floor(itemRating / 2);
    let startsConstructor = [];

    for (let i = 0; i < ratingDenominator; i++) {
        startsConstructor
            .push(<FontAwesomeIcon
                className={'stars'}
                icon={i < ratingNumerator ? solidStar : regStar}
            />)
    }
    return startsConstructor;
}