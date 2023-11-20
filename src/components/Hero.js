import heroImg from '../assets/images/illustration-1.svg';
import { useState } from 'react';
const Hero = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const isEmail = email => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isEmail(email)) setError(true);
    }
    return (
        <div className="hero">
            <div className="container">

                <div className="hero-text">
                    <h1>All your files in one secure location, accessible anywhere.</h1>
                    <p>Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers</p>
                    <div className="email-form">
                        <form onSubmit={handleSubmit} >
                            <input className={error ? 'error' : ''} type="text" name="email" id="email" placeholder='Enter your email...' onChange={(e) => { setEmail(e.target.value) }} value={email} />
                            <button type='submit' >Get Started</button>
                            <div className="error-msg">{error && <p>please check your Email</p>}</div>
                        </form>

                    </div>

                </div>
                <div className='hero-img'><img src={heroImg} alt="hero" /></div>
            </div>
        </div>
    )
}
export default Hero