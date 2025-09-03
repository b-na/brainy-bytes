import type { AboutType } from "./content/about";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function showAlert(): void {
    const message = "PROTOTYPE NOTIFICATION\n\nThank you for your interaction! Please note that this is a prototype web page. This is for demonstration purposes only. We appreciate your understanding and hope you enjoy exploring our concept.";
    alert(message);
  }


const About = ( { aboutContent }: { aboutContent: AboutType } ) => {
    return (
        <>
        <p id="about-text" dangerouslySetInnerHTML={{ __html: aboutContent.text }}>
        </p>
        <div id='contact-container'>
          <p>If you want your child to learn coding, want to become a volunteer or just liked our project, contact us or follow us on social media:</p>
          <div id='contact-icons'> 
          <a href='' target='blanck' onClick={showAlert}><FontAwesomeIcon id='mail-icon' icon={ faEnvelope } /></a>
          <a href='' target='blanck' onClick={showAlert}><FontAwesomeIcon id='insta-icon' icon={ faInstagram } /></a>
          <a href='' target='blanck' onClick={showAlert}><FontAwesomeIcon id='fb-icon' icon={ faFacebook } /></a>
        </div>
        </div>
        <div id="about-info">
            <p id="about-address"><strong>Address:</strong> {aboutContent.address}</p>
            <p id="about-phone"><strong>Phone:</strong> {aboutContent.phone}</p>
            <p id="about-email"><strong>Email:</strong> {aboutContent.email}</p> 
        </div>
        </>
    )
}

export default About;