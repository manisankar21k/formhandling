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
          <h2 style={emptyState.title}>No Review Found</h2>
          <p style={emptyState.message}>Please submit a review first to view the data.</p>
          <a href="/" style={emptyState.button}>Submit Review</a>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.title}>Institute Review Details</h1>
        
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.instituteName}>{info.institute}</h2>
            <p style={styles.instituteLocation}>{info.location}</p>
          </div>

          <div style={styles.cardBody}>
            <div style={styles.grid}>
              <div style={styles.section}>
                <h3 style={styles.sectionTitle}>Contact Information</h3>
                <div style={styles.infoItem}>
                  <label style={styles.infoLabel}>Address</label>
                  <p style={styles.infoValue}>{info.address}</p>
                </div>
                <div style={styles.infoItem}>
                  <label style={styles.infoLabel}>Email</label>
                  <p style={styles.infoValue}>{info.email}</p>
                </div>
                <div style={styles.infoItem}>
                  <label style={styles.infoLabel}>Mobile</label>
                  <p style={styles.infoValue}>{info.mobile}</p>
                </div>
              </div>

              <div style={styles.section}>
                <h3 style={styles.sectionTitle}>Review Summary</h3>
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

            <div style={styles.actionSection}>
              <button onClick={() => window.print()} style={styles.printButton}>
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
  container: { padding: '2rem 1rem', display: 'flex', justifyContent: 'center' },
  wrapper: { maxWidth: '1000px', width: '100%' },
  title: { textAlign: 'center', color: '#2c3e50', marginBottom: '2rem' },
  card: { background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' },
  cardHeader: { background: '#3498db', padding: '1.5rem', color: 'white' },
  instituteName: { margin: '0 0 0.5rem 0' },
  instituteLocation: { margin: '0', opacity: 0.9 },
  cardBody: { padding: '2rem' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' },
  section: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  sectionTitle: { color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '0.5rem' },
  infoItem: { display: 'flex', flexDirection: 'column', gap: '0.25rem' },
  infoLabel: { fontWeight: 'bold', color: '#666' },
  infoValue: { margin: '0', color: '#333' },
  reviewItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0' },
  reviewLabel: { color: '#333' },
  reviewBadge: { padding: '0.25rem 0.75rem', borderRadius: '20px', color: 'white', fontWeight: 'bold' },
  badgeYes: { background: '#27ae60' },
  badgeNo: { background: '#e74c3c' },
  actionSection: { marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #eee' },
  printButton: { padding: '0.75rem 2rem', background: '#f39c12', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

const emptyState = {
  container: { padding: '2rem 1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' },
  card: { background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center', maxWidth: '400px' },
  title: { color: '#2c3e50', marginBottom: '1rem' },
  message: { color: '#666', marginBottom: '2rem' },
  button: { display: 'inline-block', padding: '0.75rem 1.5rem', background: '#3498db', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }
};

export default ShowInstituteData;