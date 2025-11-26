import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import InstituteForm from "./InstituteForm";
import ShowInstituteData from "./ShowInstituteData";

const App = () => {
  return (
    <BrowserRouter>
      <div style={styles.app}>
        <nav style={styles.nav}>
          <div style={styles.navContainer}>
            <Link to="/" style={styles.navLink}>Submit Review</Link>
            <Link to="/view" style={styles.navLink}>View Review</Link>
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
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif'
  },
  nav: {
    backgroundColor: '#2c3e50',
    padding: '1rem 0'
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    gap: '2rem'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s'
  }
};

export default App;