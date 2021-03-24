function InfoTooltip(props) {
  return (
    <div className="popup popup_opened">
      <div className="popup__container">
        <button
          type="button"
          aria-label="Close"
          className="button button_type_close"
          onClick={props.onClose}
        ></button>
        <div className="popup__infotooltip-image_status_success"></div>
        <h3 className="popup__title popup__title_type_infotooltip">
          Success! You have now been registered.
        </h3>
      </div>
    </div>
  );
}

export default InfoTooltip;
