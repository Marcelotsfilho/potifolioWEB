import React from 'react';
import './App.css';
import Header from './components/base/Header';
import Home from './components/base/Home';
import Button from './components/base/Button';
import github from './assets/github.png';
import instagram from './assets/instagram.png';
import linkedin from './assets/linkedin.png';
import Img from './components/base/Img';
import reactIcon from './assets/React.png';
import typeScriptIcon from './assets/TS.png';
import javaScriptIcon from './assets/JS.png';
import siteAtletica from './assets/siteAtletica.png';

function App() {
  const resume = 'Resume';
  const portifolio = 'Portifólio';
  const saibaMais = 'Saiba Mais';

  return (
    <section className='Body'>
      {/* <Header /> */}
      <div className='inicio'>
        <Home />
        <div className='textHome'>
          <p className='name'>
            MARCELO
            <br />
            TEIXEIRA
            <p className='area'>
              Software Developer
            </p>
          </p>
          {/* <div className='button'>
            <Button text={resume} url="URL_DO_SEU_RESUME" variant="primary" />
            <Button text={portifolio} url="URL_DO_SEU_PORTIFOLIO" variant="primary" />
          </div> */}
          <div className='social'>
            <a href="https://www.linkedin.com/in/marcelo-teixeira-574926311/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="Icon Linkedin" />
            </a>
            <a href="https://github.com/Marcelotsfilho" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="Icon Github" />
            </a>
            <a href="https://www.instagram.com/marcelotfilho/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Icon Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className='abaut'>
        <div className='Image'>
          <Img />
        </div>
        <div className='textAbaut'>
          <p className='title'>ABAUT</p>
          <p className='paragraph'>Olá! Meu nome é Marcelo Teixeira e sou estudante de Engenharia da Computação. Tive a oportunidade de ser bolsista no projeto Campus Aberto Atlética Panterão, onde desenvolvi uma aplicação web para a Atlética Panterão. Atualmente, sou bolsista na segunda fase do projeto, onde estamos trabalhando na implementação da aplicação web para o projeto Campus Aberto.
            Neste portfólio, você encontrará alguns dos projetos que desenvolvi, utilizando tecnologias como React JS, React Native, TypeScript, JavaScript, entre outras.</p>
          <div className='iconTecnologia'>
            <img src={reactIcon} alt="Icon React" />
            <img src={typeScriptIcon} alt="Icon TypeScript" />
            <img src={javaScriptIcon} alt="Icon JavaScript" />
          </div>
        </div>
      </div>
      <div className='projects'>
        <p className='titleProjects'>PROJECTS</p>
        <div className='abautProjects'>
          <div className='imgProject'>
            <img src={siteAtletica} alt="preview site atletica" />
          </div>
          <div className='textProject'>
            <p className='nameProject'>Atletica Panterão</p>
            <p className='descriptionProject'>Site informativo multilingual da AAAEE CEFET Leopoldina, desenvolvido através do projeto Campus Aberto - Atlética Panterão.</p>
            <div className='projectButton'>
              <Button text={saibaMais} url="https://atletica-panterao-leopoldina.netlify.app/" variant="secondary" />
              <a href="https://github.com/Marcelotsfilho/site_AAAEE.git" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="Icon Github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;