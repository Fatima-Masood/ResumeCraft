import React from 'react';

const CustomizedCoverLetter = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Module Not Available</h1>
      <p style={styles.message}>
        The Customized Cover Letter module is currently unavailable. Please check back later or contact support for more information.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1rem',
    maxWidth: '600px',
  },
};

export default CustomizedCoverLetter;