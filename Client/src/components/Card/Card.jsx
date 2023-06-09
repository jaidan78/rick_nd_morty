import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card(props) {
  const {
    name,
    id,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.wrapperCard}>
      <div className={styles.head}>
        {isFav ? (
          <button className={styles.heart} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={styles.heart} onClick={handleFavorite}>
            🤍
          </button>
        )}
        <button
          className={styles.btn}
          onClick={() => {
            onClose(id);
          }}
        >
          X
        </button>
      </div>
      <div className={styles.divCaja}>
        <div className={styles.caja}>
          <img className={styles.image} src={image} alt="character" />
        </div>
      </div>
      <div className={styles.wrapperText}>
        <Link strict to={`/detail/${id}`}>
          <h1 className={styles.name}>{name}</h1>
        </Link>
        <div>
          <h2 className={styles.fields}>{status}</h2>
          <h2 className={styles.fields}>{species}</h2>
          <h2 className={styles.fields}>{gender}</h2>
          <h2 className={styles.fields}>{origin}</h2>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
