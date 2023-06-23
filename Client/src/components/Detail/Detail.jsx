import React, { useState, useEffect } from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>{character.name}</h1>
        <h1 className={styles.leyenda}>{character.status}</h1>
        <h1 className={styles.leyenda}>{character.species}</h1>
        <h1 className={styles.leyenda}>{character.gender}</h1>
        {/* {character.origin && <h1>{character.origin.name}</h1>} */}
        <h1 className={styles.leyenda}>{character.origin?.name}</h1>
      </div>
      <img className={styles.photo} src={character.image} alt="" />
    </div>
  );
};

export default Detail;
