import secImg from '../assets/images/illustration-2.svg';
import personImg from '../assets/images/avatar-testimonial.jpg';
import arrow from '../assets/images/icon-arrow.svg';
import quote from '../assets/images/icon-quotes.svg';
const Section1 = () => {
    return (
        <div className="section-1">
            <div className="container">
                <div className="section-text">
                    <h2>Stay productive, wherever you are</h2>
                    <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    <p><a href="#">See how Fylo works <img src={arrow} alt="arrow" /> </a></p>
                    <div className="testamonial">
                        <img src={quote} alt="quote icon" />
                        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled coldbor aton machine.</p>
                        <div className="person">
                            <img src={personImg} alt="Kyle Burton" />

                            <div className="details">
                                <h4>Kyle Burton</h4>
                                <p>Founder & CEO, Huddie</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-img">
                    <img src={secImg} alt="sec img" />

                </div>
            </div>
        </div>
    )
}
export default Section1;