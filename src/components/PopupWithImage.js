function PopupWithImage(props) {
  return (
    <div
      className={`popup popup_type_image ${props.isOpen ? 'popup_opened' : ''}`}
      onClick={props.onClose}
    >
      <div className="popup__container popup__container_type_image">
        <button
          type="button"
          aria-label="Close"
          className="button button_type_close button_type_close_type_image"
          onClick={props.onClose}
        ></button>
        <figure className="popup__figure">
          <img
            className="popup__image"
            src={props.card.link}
            alt={props.card.title}
          />
          <figcaption className="popup__caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default PopupWithImage;
