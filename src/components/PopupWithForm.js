function PopupWithForm(props) {
  let content = (
    <form
      method="POST"
      name={`popup_type_${props.name}`}
      className={`popup__form popup__form_type_${props.name}`}
      noValidate={!!props.shouldNotValidate}
      onSubmit={props.onSubmit}
    >
      {props.children}
      <input
        type="submit"
        value={`${props.buttonValue}`}
        className={`button button_type_submit ${props.submitButtonClass}`}
      />
    </form>
  );

  if (props.isPopup) {
    content = (
      <div
        className={`popup popup_type_${props.name} ${
          props.isOpen ? 'popup_opened' : ''
        }`}
      >
        <div className="popup__container">
          <button
            type="button"
            aria-label="Close"
            className="button button_type_close"
            onClick={props.onClose}
          ></button>

          <h3 className="popup__title">{props.title}</h3>

          {content}
        </div>
      </div>
    );
  }

  return content;
}

export default PopupWithForm;
