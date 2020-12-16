import { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({ name, about: description });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="edit"
      title="Edit profile"
      buttonValue="Save"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label>
        <input
          type="text"
          name="name"
          id="profile-name"
          className="popup__input popup__input_type_name"
          placeholder="Name"
          required
          minLength="2"
          maxLength="40"
          defaultValue={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="profile-name-error"></span>
      </label>
      <label>
        <input
          type="text"
          name="job"
          id="profile-job"
          className="popup__input popup__input_type_job"
          placeholder="About me"
          required
          minLength="2"
          maxLength="200"
          defaultValue={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__error" id="profile-job-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
