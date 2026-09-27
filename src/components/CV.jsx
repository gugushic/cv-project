import GeneralInfo from './GeneralInfo'
import Education from './Education'
import Experience from './Experience'
import '../styles/CV.css'

function CV() {
  return (
    <main>
      

      <GeneralInfo />
      <Education />
      <Experience />
    </main>
  )
}

export default CV