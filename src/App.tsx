import './App.css';
import team from './components/content/team';
import TeamMember from './components/TeamMember';
import Profile from './components/Profile';
import courses from './components/content/courses';
import Course from './components/Course';
import About from './components/About';
import aboutContent from './components/content/about';

function App() {
  function clickLable(event: React.MouseEvent<HTMLLIElement>) {
    const lables: HTMLElement[] = Array.from(document.getElementsByClassName("lable")) as HTMLElement[];
    const containers: HTMLCollectionOf<Element> = document.getElementsByClassName("info-container");
    const toDisplay: string | null = event.currentTarget.getAttribute("info-container");
    
    for (let lable of lables) {
      lable.classList.remove("active-lable")
    }
    event.currentTarget.classList.add("active-lable")
    
    for (let container of containers) {
      container.classList.remove("isDisplayed");
    }
    
    if (toDisplay) {
      const element = document.getElementById(toDisplay);
      if (element) {
        element.classList.add("isDisplayed");
      }
    }
  }

  function toggleFullScreen() {
    const details = document.querySelector(".isDisplayed");
    details?.classList.toggle("isFullScreen");
  }

  return (
    <div className="App">
      <header id="header">
        <img id="logo" src="/logo.svg" alt="Brainy Bytes Logo" />
      </header>
      <section id="profile">
        <Profile />
      </section>
      <section id="details">
        <div id="full-screen-toggle" onClick={toggleFullScreen}></div>
        <nav id="lables-container">
          <ul>
            <li id="about-lable" className='lable active-lable' info-container="about" onClick={clickLable}>About</li>
            <li id="courses-lable" className='lable' info-container="courses" onClick={clickLable}>Courses</li>
            <li id="team-lable" className='lable' info-container="team" onClick={clickLable}>Team</li>
          </ul>
        </nav>
        <article id="about" className="info-container isDisplayed">
          <About aboutContent={aboutContent} />
        </article>
        <article id="courses" className="info-container">
          {courses.map((course) => (
            <Course key={course.name} course={course} />
          ))}
        </article>
        <article id="team" className="info-container">
          {team.map((member) => (
            <TeamMember key={member.name} teamMember={member} />
          ))}
        </article>
      </section>
      <footer id="footer">
        <p>Copyright © 2025 Sabìna Romanova. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
