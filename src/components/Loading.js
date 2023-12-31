import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.iconDiv}>
        <FontAwesomeIcon icon={faSpinner} className={styles.loadingIcon} />
      </div>
    </div>
  );
};

export default Loading;

