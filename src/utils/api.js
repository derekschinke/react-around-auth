class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
  }

  getUserInfo(token) {
    return fetch(`${this.baseUrl}/users`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Error: ${res.status}`);
    });
  }

  getInitialCards(token) {
    return fetch(`${this.baseUrl}/cards`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Error: ${res.status}`);
    });
  }

  updateCardLikes(cardId, isLiked, token) {
    const method = isLiked ? 'DELETE' : 'PUT';
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Error: ${res.status}`);
    });
  }

  deleteCard(cardId, token) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Error: ${res.status}`);
    });
  }

  postCard({ title, link }, token) {
    fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: title, link }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Error: ${res.status}`);
    });
  }

  patchAvatarImage(url, token) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ avatar: url }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Error: ${res.status}`);
    });
  }

  patchUserInfo(info, token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: info.name, about: info.about }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Error: ${res.status}`);
    });
  }
}

const api = new Api({ baseUrl: 'http://localhost:3001' });

export default api;
