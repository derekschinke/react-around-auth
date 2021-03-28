function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          type="button"
          aria-label="Close"
          className="button button_type_close"
          onClick={props.onClose}
        ></button>
        <div
          className={`popup__infotooltip-image_status_${
            props.isSuccess ? 'success' : 'oops'
          }`}
        ></div>
        <h3 className="popup__title popup__title_type_infotooltip">
          {props.isSuccess
            ? 'Success! You have now been registered.'
            : 'Oops, something went wrong! Please try again.'}
        </h3>
      </div>
    </div>
  );
}

export default InfoTooltip;
