import { useState } from 'react'

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.'
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required.'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.'
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setSuccess(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSuccess(true)
    setFormData({ name: '', email: '', password: '' })
    setErrors({})
  }

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Create Account</h2>
      <p style={styles.subtitle}>Fill in the form below to register</p>

      {success && (
        <div style={styles.successBox}>
          ✅ Form submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div style={styles.field}>
          <label style={styles.label} htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.name ? '#e53e3e' : '#cbd5e0',
            }}
          />
          {errors.name && <span style={styles.error}>{errors.name}</span>}
        </div>

        <div style={styles.field}>
          <label style={styles.label} htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.email ? '#e53e3e' : '#cbd5e0',
            }}
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>

        <div style={styles.field}>
          <label style={styles.label} htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Minimum 8 characters"
            value={formData.password}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.password ? '#e53e3e' : '#cbd5e0',
            }}
          />
          {errors.password && <span style={styles.error}>{errors.password}</span>}
        </div>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '40px',
    width: '100%',
    maxWidth: '440px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
  },
  title: {
    margin: '0 0 4px',
    fontSize: '24px',
    fontWeight: '700',
    color: '#1a202c',
  },
  subtitle: {
    margin: '0 0 24px',
    fontSize: '14px',
    color: '#718096',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '18px',
  },
  label: {
    marginBottom: '6px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#2d3748',
  },
  input: {
    padding: '10px 14px',
    fontSize: '15px',
    borderRadius: '8px',
    border: '1.5px solid',
    outline: 'none',
    transition: 'border-color 0.2s',
    color: '#2d3748',
  },
  error: {
    marginTop: '5px',
    fontSize: '13px',
    color: '#e53e3e',
  },
  button: {
    width: '100%',
    padding: '12px',
    marginTop: '8px',
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  successBox: {
    backgroundColor: '#f0fff4',
    border: '1px solid #9ae6b4',
    color: '#276749',
    padding: '12px 16px',
    borderRadius: '8px',
    marginBottom: '20px',
    fontSize: '14px',
    fontWeight: '500',
  },
}

export default Form
