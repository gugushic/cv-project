import {useState} from 'react'
import '../styles/Education.css'

function Education() {
    const [shcool, setShcool] = useState('');
    const [study, setStudy] = useState('');
    const [date, setDate] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
      e.preventDefault()
      setSubmitted(true)
    }

    function handleEdit() {
        setSubmitted(false);
    }

  return (
    <section className='education'>
      <h2>Educational Experience</h2>

      {submitted ? (
        <div className='education-display'>
            <p>Shcool: {shcool}</p>
            <p>Study: {study}</p>
            <p>Date: {date}</p>

            <button onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
              School name
              <input
                type='text'
                value={shcool}
                onChange={(e) => setShcool(e.target.value)}
                required
              />
            </label>

            <label>
              Title of study
              <input
                type='text'
                value={study}
                onChange={(e) => setStudy(e.target.value)}
                required
              />
            </label>

            <label>
              Date of study
              <input
                type='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>
            <button type='submit'>Submit</button>
        </form>
            
      )}

      
    </section>
  )
}

export default Education