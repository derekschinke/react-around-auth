import { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddCardPopup(props) {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddCard({ title, link });
  }

  useEffect(() => {
    setTitle('');
    setLink('');
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="add"
      title="New place"
      buttonValue="Create"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label>
        <input
          type="text"
          name="title"
          id="card-title"
          className="popup__input popup__input_type_title"
          placeholder="Title"
          required
          minLength="2"
          maxLength="30"
          value={title}
          onChange={handleTitleChange}
        />
        <span className="popup__error" id="card-title-error"></span>
      </label>

      <label>
        <input
          type="url"
          name="url"
          id="card-url"
          className="popup__input popup__input_type_image-url"
          placeholder="Image link"
          required
          value={link}
          onChange={handleLinkChange}
        />
        <span className="popup__error" id="card-url-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddCardPopup;
