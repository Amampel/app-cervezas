import React, { useEffect, useState } from "react";
import { MOCK_CARDS } from "../mocks/with-cards";
import Cardscss from "./Cards.css";
import beer from "../images/logo.png";
import plus from "../images/plus.png";
import { ModalComponent } from "./Modal";

export const Cards = () => {
  const [cards, setCards] = useState([]);
  const [editableCard, setEditableCard] = useState({});
  const [show, setShow] = useState(false);
  const [indexCard, setIndexCard] = useState();

  useEffect(() => {
    MOCK_CARDS.push({ name: "" });
    setCards(MOCK_CARDS);
  }, []);

  const deleteCard = (card) => {
    let deletedCard = cards?.filter((c) => c?.id !== card.id || c?.name == "");
    setCards([...deletedCard]);
  };

  const addCard = () => {
    let cardLenght = cards?.length - 1;
    let cardLenghtID = cards?.length + 1;
    cards.filter((card) => card.name !== "");
    cards.splice(cardLenght, 0, { name: "Bueno", img: true, id: cardLenghtID });
    setCards([...cards]);
  };

  const editCard = (card, i) => {
    setEditableCard(card);
    setIndexCard(i);
    setShow(true);
  };

  const renderCards = (cards) => {
    return cards.map((card, index) => {
      return card?.name !== "" ? (
        <div className={card?.name + " cards"} key={card?.id}>
          <p>{card?.name}</p>
          {card?.img == true ? <img src={beer} width={85} height={60} /> : ""}
          <div className="cards-footer">
            <button
              className="cards-buttons btn btn-light"
              onClick={() => editCard(card, index)}
            >
              Editar
            </button>
            <button
              className="cards-buttons btn btn-light"
              onClick={() => deleteCard(card, index)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ) : (
        <div className="add-card">
          {<img src={plus} width={80} height={80} onClick={addCard} />}
        </div>
      );
    });
  };
  return (
    <div className="card-comp">
      {renderCards(cards)}
      {!!show ? (
        <ModalComponent
          setEditableCard={setEditableCard}
          card={editableCard}
          show={show}
          setShow={setShow}
          setCards={setCards}
          cards={cards}
          indexCard={indexCard}
        />
      ) : (
        ""
      )}
    </div>
  );
};
