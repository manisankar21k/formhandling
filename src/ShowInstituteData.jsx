import { useEffect, useState } from "react";

const ShowInstituteData = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("institute-review");
    if (stored) {
      setInfo(JSON.parse(stored));
    }
  }, []);

  if (!info) {
    return (
      <div style={emptyState.container}>
        <div style={emptyState.card}>
          <div style={emptyState.icon}>📝</div>
          <h2 style={emptyState.title}>No Review Found</h2>
          <p style={emptyState.message}>Please submit a review first to view the data.</p>
          <a href="/" style={emptyState.button}>
            Submit Review
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.header}>
          <h1 style={styles.title}>Institute Review Details</h1>
          <p style={styles.subtitle}>Here's the review you submitted</p>
        </div>

        <div style={styles.card}>
          {/* Institute Header */}
          <div style={styles.cardHeader}>
            <h2 style={styles.instituteName}>{info.institute}</h2>
            <p style={styles.instituteLocation}>{info.location}</p>
          </div>

          <div style={styles.cardBody}>
            <div style={styles.grid}>
              {/* Contact Information */}
              <div style={styles.section}>
                <h3 style={styles.sectionTitle}>Contact Information</h3>
                
                <div style={styles.infoSection}>
                  <div style={styles.infoItem}>
                    <label style={styles.infoLabel}>Address</label>
                    <p style={styles.infoValue}>{info.address}</p>
                  </div>
                  
                  <div style={styles.infoGrid}>
                    <div style={styles.infoItem}>
                      <label style={styles.infoLabel}>Email</label>
                      <p style={styles.infoValue}>{info.email}</p>
                    </div>
                    
                    <div style={styles.infoItem}>
                      <label style={styles.infoLabel}>Mobile</label>
                      <p style={styles.infoValue}>{info.mobile}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review Details */}
              <div style={styles.section}>
                <h3 style={styles.sectionTitle}>Review Summary</h3>
                
                <div style={styles.reviewSection}>
                  {[
                    { label: "Syllabus Upgrade", value: info.syllabusUpgrade },
                    { label: "Recent Tech Taught", value: info.recentTech },
                    { label: "Practical Teaching", value: info.practical },
                    { label: "Infrastructure", value: info.infra },
                    { label: "Overall Review", value: info.overall }
                  ].map((item, index) => (
                    <div key={index} style={styles.reviewItem}>
                      <span style={styles.reviewLabel}>{item.label}</span>
                      <span style={{
                        ...styles.reviewBadge,
                        ...(item.value === "Yes" ? styles.badgeYes : styles.badgeNo)
                      }}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div style={styles.actionSection}>
              <button 
                onClick={() => window.print()}
                style={styles.printButton}
              >
                Print Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: 'calc(100vh - 80px)',
    padding: '2rem 1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  wrapper: {
    maxWidth: '1000px',
    width: '100%'
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: 'white'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '0 0 1rem 0',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  },
  subtitle: {
    fontSize: '1.2rem',
    margin: '0',
    opacity: 0.9
  },
  card: {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    overflow: 'hidden'
  },
  cardHeader: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '2rem',
    color: 'white'
  },
  instituteName: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    margin: '0 0 0.5rem 0'
  },
  instituteLocation: {
    fontSize: '1.1rem',
    margin: '0',
    opacity: 0.9
  },
  cardBody: {
    padding: '2rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  sectionTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#333',
    margin: '0 0 0.5rem 0',
    borderBottom: '2px solid #667eea',
    paddingBottom: '0.5rem'
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem'
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  infoLabel: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#666',
    margin: '0'
  },
  infoValue: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#333',
    margin: '0'
  },
  reviewSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  reviewItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 0',
    borderBottom: '1px solid #eee'
  },
  reviewLabel: {
    fontSize: '1rem',
    color: '#333',
    fontWeight: '500'
  },
  reviewBadge: {
    padding: '0.4rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '600'
  },
  badgeYes: {
    background: '#10b981',
    color: 'white'
  },
  badgeNo: {
    background: '#ef4444',
    color: 'white'
  },
  actionSection: {
    marginTop: '2rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #eee'
  },
  printButton: {
    width: '100%',
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s ease'
  }
};

const emptyState = {
  container: {
    minHeight: 'calc(100vh - 80px)',
    padding: '2rem 1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  card: {
    background: 'white',
    borderRadius: '12px',
    padding: '3rem 2rem',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  },
  icon: {
    fontSize: '4rem',
    marginBottom: '1rem',
    display: 'block'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    margin: '0 0 1rem 0'
  },
  message: {
    fontSize: '1.1rem',
    color: '#666',
    margin: '0 0 2rem 0'
  },
  button: {
    display: 'inline-block',
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    transition: 'transform 0.2s ease'
  }
};

export default ShowInstituteData;