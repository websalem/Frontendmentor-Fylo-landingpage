import { useState } from 'react';
const Section2 = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const isEmail = email => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isEmail(email)) setError(true);
    }
    return (
        <div className="section-2">
            <div className="container">
                <div className="section-text">
                    <h2>Get early access today</h2>
                    <p>it only takes a minute to sign up and our free starter tier is extremly generous. if you have any questions, our support team would be happy to help you.</p>
                </div>
                <div className="section-form">
                    <form onSubmit={handleSubmit}>
                        <input className={error ? 'error' : ''} type="text" name="email" id="email" placeholder='Enter your email...' onChange={(e) => { setEmail(e.target.value) }} value={email} />
                        <div className="error-msg">{error && <p>please check your Email</p>}</div>
                        <button type='submit' >Get Started for Free</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default Section2