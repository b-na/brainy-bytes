import type { AboutType } from "./content/about";


const About = ( { aboutContent }: { aboutContent: AboutType } ) => {
    return (
        <>
        <p id="about-text" dangerouslySetInnerHTML={{ __html: aboutContent.text }}>
        </p>
        <div id="about-info">
            <p id="about-address"><strong>Address:</strong> {aboutContent.address}</p>
            <p id="about-phone"><strong>Phone:</strong> {aboutContent.phone}</p>
            <p id="about-email"><strong>Email:</strong> {aboutContent.email}</p> 
        </div>
        
        </>
    )
}

export default About;