import React from 'react';

import styles from './User.module.css';
import unloggedAvatar from './assets/unlogged.png';

export default ({ username, avatarURL = unloggedAvatar }) => (
  <div className={username ? styles.container : styles.unlogged}>
    <img className={styles.avatar} src={avatarURL} alt="avatar" />
    {username && <p className={styles.name}>Привет, {username}</p>}
  </div>
);
