import React from 'react';
import './App.css';
import suhas from './Assets/suhas.jpeg';

function App() {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = './Assets/SuhasTellatakula_Resume.pdf'; // Replace with the actual path to your PDF file
    downloadLink.download = 'SuhasTellatakula_Resume'; // Specify the file name for download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
 <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <link
       href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
       rel="stylesheet"
     />
     <link rel="stylesheet" href="App.css" />
     <title>Suhas Portfolio Website</title>
   </head>
   <body>
     <nav>
       <div class="nav__content">
         <div class="logo"><a href="#">HELLO!!</a></div>
         <label for="check" class="checkbox">
           <i class="ri-menu-line"></i>
         </label>
         <input type="checkbox" name="check" id="check" />
         <ul>
           <li><a href="https://www.linkedin.com/in/suhas-siddaraj/">LinkedIn</a></li>
           <li><a href="https://github.com/ts-suhas">GitHub</a></li>
           <li><a href="https://github.com/ts-suhas">My Work</a></li>
           <li><a href="#">Contact</a></li>
         </ul>
       </div>
     </nav>
     <section class="section">
       <div class="section__container">
         <div class="content">
           <h1 class="title">
             I'm <span>Suhas<br /></span>
           </h1>
           <p class="description">Self-motivated and experienced Software Engineer focused on designing and developing robust scalable enterprise applications. Skilled at full stack development of web applications, distributed systems, requirement and complexity analysis, object-oriented programming, data structures, algorithms, problem solving, communication, interpersonal skills.</p>
           <div class="action__btns">
             <button class="portfolio" onClick={handleDownload}>Download Resume</button>
           </div>
         </div>
         <div class="image">
           <img src={suhas} alt="profile" />
         </div>
       </div>
     </section>
     <section class="section">
       <div class="ext">
               <h2 class="title">    Education</h2>
               <p class ="bullets">Masters in Computer and Information Science from University of North Texas, Denton, Texas, USA with 4.0 GPA</p>
               <p class ="bullets"> Bachelors in Electronics and Communication Engineering from Visvesvaraya Technological University, Bangalore, India with 4.0 GPA</p>
               <br/>
       </div>
        <div class="ext">
               <h2 class="title">    Experience</h2>
               <h4>Jan 2023 - May 2024</h4>
               <h4>Graduate Teaching Assistant @University of North Texas, Denton, Texas, USA </h4>
               <p class ="bullets">Collaborated with Professor on Software Engineering class of 120 students for 3 semesters, while supervising 3 graders. Mentored 15+ teams each semester with SDLC methodologies and activities from requirement to testing phase.</p>

               <h4>Sep 2019 - Aug 2022</h4>
               <h4>Software Engineer @Bosch Global Software Technologies, Bangalore, India </h4>
               <p class ="bullets">Developed backend of enterprise application Smart diagnostic network communication, a cross-functional harmonized automation framework for OEM’s design, configuration, auto code generation, validation following Agile scrum model. Crafted webpages, Swagger RESTful APIs for SmartDNC Microservices such as Code generators, Excel-XML converters, Enum Auto mapper with diverse input formats for network and diagnostic stacks in spring framework. Spearheaded a team of 4 associates globally to deliver client customizations adeptly by providing specific automated workflows and boosted efficiency and performance by almost 40% in time and resources for client OEMs.</p>
               <h4>Jun 2018 - Aug 2018</h4>
               <h4>Data Science Intern @TechieAid, Bangalore, India </h4>
               <p class ="bullets">Applied and analysed different Data Science concepts on 3 datasets in Anaconda, Jupyter, Spyder using python. Built a KNN model on Titanic dataset to predict the survival of a passenger and evaluated it with different metrics.</p>
               <br/>

       </div>
       <div class="ext">
           <h2 class="title">    Certifications</h2>
                <p class ="bullets">Bosch Data certified master’s program NIPUN.</p>
                <p class ="bullets">AWS Tech Essentials on SimpliLearn.</p>
                <p class ="bullets">R | Machine Learning on NPTEL - IIT online platform.</p>
                <p class ="bullets">AI & ML workshop by KnightsRoboCorp.</p>
                               <br/>

       </div>
       <div class="ext">
             <h2 class="title">    Achievements</h2>
                  <p class ="bullets">Was awarded $4,000 Graduate Assistantship every semester 2022-2024.</p>
                  <p class ="bullets">Won best process innovation and top innovation in last 25 years awards for SmartDNC in Bosch Fit Fest 2022.</p>
                  <p class ="bullets">Won best hybrid project awards in University Project Expo for 2 consecutive years – 2018 and 2019.</p>
               <br/>

       </div>
       <h2 class="title">Contact</h2>
       <ul >
            <li><p class ="bullets"><span>+1 (940)-843-3946</span></p></li>
             <li></li>
             <li></li>
             <li></li>
            <li><a class ="bullets" href="mailto:suhastellatakula@gmail.com"><span>suhastellatakula@gmail.com</span></a></li>


       </ul>
       <p>Suhas 2024 </p>
     </section>
   </body>
 </html>



  );
}

export default App;
