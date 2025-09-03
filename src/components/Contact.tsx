import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function showAlert(): void {
    const message = "PROTOTYPE NOTIFICATION\n\nThank you for your interaction! Please note that this is a prototype web page. This is for demonstration purposes only. We appreciate your understanding and hope you enjoy exploring our concept.";
    alert(message);
  }

const Contact = () => {
    return (
        <div id='contact-container'>
          <p>If you want your child to learn coding, want to become a volunteer or just liked our project, contact us or follow us on social media:</p>
          <a href='' target='blanck' onClick={showAlert}><FontAwesomeIcon id='mail-icon' icon={ faEnvelope } /></a>
          <a href='' target='blanck' onClick={showAlert}><FontAwesomeIcon id='insta-icon' icon={ faInstagram } /></a>
          <a href='' target='blanck' onClick={showAlert}><FontAwesomeIcon id='fb-icon' icon={ faFacebook } /></a>
        </div>
    )
}

export default Contact;