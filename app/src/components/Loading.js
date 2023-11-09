import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <FontAwesomeIcon icon={faSpinner} className={styles.loadingIcon} />
    </div>
  );
};

export default Loading;

