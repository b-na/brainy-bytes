export type AboutType = {
    text: string;
    address: string;
    phone: string;
    email: string;
}

const aboutContent: AboutType = {
    text: `
        <strong>Brainy Bytes</strong> 🚀 is a Kids Code Camp, a non-profit organization based in Bochum, Germany 🇩🇪 that provides free coding 
        education to children aged <strong>8-12</strong> 👧🧒. 
        <br/>
        <br/>
        We are a team of volunteers 🤝 who are passionate about teaching children how to code 💻. Our mission is to empower children with the 
        skills to create their own digital world 🌍.
        <br/>
        <br/>
        Alongside teaching, we strive to instill in children a passion for learning 📚, creativity 🎨, and problem-solving 🧩, helping them 
        build a strong foundation for future success 🌱. Additionally, we aim to create a supportive community where children can learn and grow together 🤗.
    `,
    address: "Example Street 123, Bochum, Germany",
    phone: "+49 123 456 7890",
    email: "contact@example.com"
}

export default aboutContent;