class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getInitialCardsAndUserInfo() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  async getUserInfo() {
    const res = await fetch(this.baseUrl + '/users/me', {
      headers: this.headers,
    });
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  async getInitialCards() {
    const res = await fetch(this.baseUrl + '/cards', {
      headers: this.headers,
    });
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  async updateCardLikes(cardId, isLiked) {
    const method = isLiked ? 'DELETE' : 'PUT';
    const res = await fetch(this.baseUrl + '/cards/likes/' + cardId, {
      headers: this.headers,
      method: method,
    });
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  async deleteCard(cardId) {
    const res = await fetch(this.baseUrl + '/cards/' + cardId, {
      headers: this.headers,
      method: 'DELETE',
    });
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  async postCard({ title, link }) {
    const res = await fetch(this.baseUrl + '/cards', {
      headers: this.headers,
      method: 'POST',
      body: JSON.stringify({ name: title, link: link }),
    });
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  async patchAvatarImage(url) {
    const res = await fetch(this.baseUrl + '/users/me/avatar', {
      headers: this.headers,
      method: 'PATCH',
      body: JSON.stringify({ avatar: url }),
    });
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  async patchUserInfo(info) {
    const res = await fetch(this.baseUrl + '/users/me', {
      headers: this.headers,
      method: 'PATCH',
      body: JSON.stringify({ name: info.name, about: info.about }),
    });
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }
}

const api = new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/group-5',
  headers: {
    authorization: '8cd049ee-8ebb-4e3d-8437-51e87560cee5',
    'Content-Type': 'application/json',
  },
});

export default api;
