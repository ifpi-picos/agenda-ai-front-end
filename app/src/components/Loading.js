import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <FaSpinner className={styles.loadingIcon} />
    </div>
  );
};

export default Loading;

