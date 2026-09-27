import {useState} from 'react';
import '../styles/GeneralInfo.css'

function GeneralInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    function handleEdit() {
        setSubmitted(false);
    }

    return (
        <section className='general-info'>
            <h2>General Info</h2>

            {submitted ? (
                <div className='general-info-display'>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{phone}</p>

                    <button onClick={handleEdit}>Edit</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name
                        <input type='text'
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    
                    <label>
                        Email
                        <input 
                            type='mail' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    
                    <label>
                        Phone
                        <input 
                            type='tel' 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </label>
                    
                    <button type='submit'>Submit</button>
                </form>
                    
              
            )}
 
        </section>
    )
}

export default GeneralInfo;