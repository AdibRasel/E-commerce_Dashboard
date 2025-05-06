import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '20px',
      backgroundColor: '#f0f2f5',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: 'center' as const,
    },
    title: {
      fontSize: '100px',
      color: '#ff4d4f',
      margin: 0,
    },
    subTitle: {
      fontSize: '32px',
      color: '#333',
      margin: '10px 0',
    },
    description: {
      fontSize: '18px',
      color: '#666',
      maxWidth: '600px',
      lineHeight: 1.6,
      margin: '20px 0',
    },
    suggestion: {
      fontSize: '16px',
      color: '#444',
      marginTop: '10px',
    },
    link: {
      marginTop: '30px',
      padding: '12px 24px',
      backgroundColor: '#1890ff',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      textDecoration: 'none',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <h2 style={styles.subTitle}>Page Not Found</h2>
      <p style={styles.description}>
        The page you are looking for doesn't exist. It might have been removed, renamed, or it may never have existed in the first place.
        Please check the URL for any typing errors.
      </p>
      <p style={styles.suggestion}>
        You can return to the homepage or use the navigation menu to find what you need.
      </p>
      <Link to="/" style={styles.link}>Go back to Home Page</Link>
    </div>
  )
}

export default NotFound
