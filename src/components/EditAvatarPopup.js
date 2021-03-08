import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarInput = useRef('');

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarInput,
    });
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Change profile picture"
      buttonValue="Save"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label>
        <input
          type="url"
          name="url"
          id="profile-avatar"
          className="popup__input"
          placeholder="Image link"
          required
          ref={avatarInput}
        />
        <span className="popup__error" id="profile-avatar-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
