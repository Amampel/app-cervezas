import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const ModalComponent = ({
  card,
  setShow,
  show,
  setCards,
  cards,
  setEditableCard,
  indexCard,
}) => {
  const handleClose = () => {
    const editedCard = cards.filter((c) => c.id !== card.id);
    editedCard.splice(indexCard, 0, card);
    setCards(editedCard);
    setShow(false);
  };

  const handleChange = (e) => {
    setEditableCard({ ...card, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Cerveza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Cambiar nombre</p>
          <input
            name="name"
            value={card.name || ""}
            onChange={handleChange}
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
