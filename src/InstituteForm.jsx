import { useState } from "react";

const InstituteForm = () => {
  const [data, setData] = useState({
    institute: "",
    address: "",
    email: "",
    mobile: "",
    location: "",
    syllabusUpgrade: "",
    recentTech: "",
    practical: "",
    infra: "",
    overall: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^[0-9]{10}$/;

    if (!emailPattern.test(data.email)) {
      alert("Please enter a valid email address");
      return false;
    }
    if (!mobilePattern.test(data.mobile)) {
      alert("Mobile number must be exactly 10 digits");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    localStorage.setItem("institute-review", JSON.stringify(data));
    alert("Review Submitted Successfully!");

    setData({
      institute: "", address: "", email: "", mobile: "", location: "",
      syllabusUpgrade: "", recentTech: "", practical: "", infra: "", overall: ""
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <div style={styles.header}>
          <h1 style={styles.title}>Institute Review Form</h1>
          <p style={styles.subtitle}>Share your valuable feedback about the institute</p>
        </div>

        <div style={styles.formCard}>
          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Institute Details Section */}
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Institute Information</h3>
              
              <div style={styles.grid}>
                <div style={styles.field}>
                  <label style={styles.label}>Institute Name *</label>
                  <input
                    type="text"
                    name="institute"
                    value={data.institute}
                    placeholder="Enter institute name"
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={data.location}
                    placeholder="Enter location"
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </div>
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Address *</label>
                <input
                  type="text"
                  name="address"
                  value={data.address}
                  placeholder="Enter complete address"
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.grid}>
                <div style={styles.field}>
                  <label style={styles.label}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    placeholder="your@email.com"
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={data.mobile}
                    placeholder="10-digit mobile number"
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </div>
              </div>
            </div>

            {/* Review Section */}
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Institute Review</h3>
              
              <div style={styles.grid}>
                {[
                  { name: "syllabusUpgrade", label: "Syllabus Upgrade?" },
                  { name: "recentTech", label: "Recent Tech Taught?" },
                  { name: "practical", label: "Practical Teaching?" },
                  { name: "infra", label: "Infrastructure Good?" },
                  { name: "overall", label: "Overall Review?" }
                ].map((field) => (
                  <div key={field.name} style={styles.field}>
                    <label style={styles.label}>{field.label}</label>
                    <select
                      name={field.name}
                      value={data[field.name]}
                      onChange={handleChange}
                      required
                      style={styles.select}
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" style={styles.submitButton}>
              Submit Review
            </button>
          </form>
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
    alignItems: 'center'
  },
  formWrapper: {
    maxWidth: '800px',
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
  formCard: {
    background: 'white',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem'
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#555'
  },
  input: {
    padding: '0.75rem',
    border: '2px solid #ddd',
    borderRadius: '6px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease'
  },
  select: {
    padding: '0.75rem',
    border: '2px solid #ddd',
    borderRadius: '6px',
    fontSize: '1rem',
    background: 'white'
  },
  submitButton: {
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    marginTop: '1rem'
  }
};

// Add basic interactivity
document.addEventListener('DOMContentLoaded', function() {
  // Input focus effects
  const inputs = document.querySelectorAll('input, select');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.style.borderColor = '#667eea';
      this.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
    });
    input.addEventListener('blur', function() {
      this.style.borderColor = '#ddd';
      this.style.boxShadow = 'none';
    });
  });

  // Button hover effect
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Nav link hover effect
  const navLinks = document.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.background = 'rgba(255, 255, 255, 0.2)';
    });
    link.addEventListener('mouseleave', function() {
      this.style.background = 'rgba(255, 255, 255, 0.1)';
    });
  });
});

export default InstituteForm;