import { useState } from 'react'
import '../styles/Experience.css'

function Experience() {
  const [company, setCompany] = useState('')
  const [position, setPosition] = useState('')
  const [responsibilities, setResponsibilities] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateUntil, setDateUntil] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleEdit() {
    setSubmitted(false)
  }

  return (
    <section className='experience'>
      <h2>Practical Experience</h2>

      {submitted ? (
        <div className='experience-display'>
          <p>{company}</p>
          <p>{position}</p>
          <p>{responsibilities}</p>
          <p>{dateFrom}</p>
          <p>{dateUntil}</p>

          <button onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Company name
            <input
              type='text'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </label>

          <label>
            Position title
            <input
              type='text'
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </label>

          <label>
            Main responsibilities
            <textarea
              value={responsibilities}
              onChange={(e) => setResponsibilities(e.target.value)}
              required
            />
          </label>

          <label>
            Date from
            <input
              type='date'
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              required
            />
          </label>

          <label>
            Date until
            <input
              type='date'
              value={dateUntil}
              onChange={(e) => setDateUntil(e.target.value)}
              required
            />
          </label>

          <button type='submit'>Submit</button>
        
        </form>
          
      )}
    </section>
  )
}

export default Experience