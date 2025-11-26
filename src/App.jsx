import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import InstituteForm from "./InstituteForm";
import ShowInstituteData from "./ShowInstituteData";

const App = () => {
  return (
    <BrowserRouter>
      <div style={styles.app}>
        {/* Navigation */}
        <nav style={styles.nav}>
          <div style={styles.navContainer}>
            <div style={styles.logo}>
              <span style={styles.logoIcon}>🏫</span>
              <span style={styles.logoText}>EduReview</span>
            </div>
            <div style={styles.navLinks}>
              <Link to="/" style={styles.navLink}>
                <span style={styles.navIcon}>📝</span>
                Submit Review
              </Link>
              <Link to="/view" style={styles.navLink}>
                <span style={styles.navIcon}>👁️</span>
                View Review
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<InstituteForm />} />
          <Route path="/view" element={<ShowInstituteData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const styles = {
  app: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fontFamily: 'Arial, sans-serif'
  },
  nav: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '1rem 0'
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  logoIcon: {
    fontSize: '2rem'
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white'
  },
  navLinks: {
    display: 'flex',
    gap: '1rem'
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease'
  },
  navIcon: {
    fontSize: '1.2rem'
  }
};

export default App;