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
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h1 style={styles.title}>Institute Review Form</h1>
        
        <div style={styles.formCard}>
          <form onSubmit={handleSubmit} style={styles.form}>
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
    padding: '2rem 1rem',
    display: 'flex',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 80px)'
  },
  formWrapper: {
    maxWidth: '800px',
    width: '100%'
  },
  title: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '2rem',
    fontSize: '2.5rem'
  },
  formCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  sectionTitle: {
    color: '#2c3e50',
    borderBottom: '2px solid #3498db',
    paddingBottom: '0.5rem',
    margin: '0'
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
    fontWeight: 'bold',
    color: '#555',
    fontSize: '0.9rem'
  },
  input: {
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem'
  },
  select: {
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    background: 'white'
  },
  submitButton: {
    padding: '1rem 2rem',
    background: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '1rem'
  }
};

export default InstituteForm;