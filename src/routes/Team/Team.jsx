import React from "react";
import Mikhail from './pictures/Mikhail.jpg';
import Kate from './pictures/Kate.jpg';
import Dima from './pictures/Dima.jpg';
import DimaB from './pictures/DimaB.jpg';
import Ira from './pictures/Ira.jpg';
import Evgenii from './pictures/Evgenii.jpg';
import Masha from './pictures/Masha.jpg';
import Anna from './pictures/Anna.png';
import Andrey from './pictures/Andrey.jpg';
import Vova from './pictures/Vova.jpg';
import Vlad from './pictures/Vlad.jpg';
import github from './pictures/github.svg';
import styles from './Team.module.css'
//import css from "./NotFound.module.css";

function Team() {
  return <div className={styles.container}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <img src={Mikhail} alt="Mikhail" className={styles.picture} />
        <p className={styles.name}>Scrum Master</p>
        <p className={styles.name}>Mikhail Kolomoitsev</p>
        <a href="https://github.com/MikhailKolomoitsev" className={styles.link}>
          <img src={github} alt="github link" className={styles.github}/>
        </a>
      </li>
      <li className={styles.item}>
        <img src={Evgenii} alt="Evgenii" className={styles.picture} />
        <p className={styles.name}>Team Lead</p>
        <p className={styles.name}>Evgenii Khoroshko</p>
        <a href="https://github.com/EKhoroshko" className={styles.link}>
          <img src={github} alt="github link" className={styles.github} />
        </a>
      </li>
      <li className={styles.item}>
        <img src={Masha} alt="Masha" className={styles.picture} />
        <p className={styles.name}>FullStack</p>
        <p className={styles.name}>Masha Bondar</p>
        <a href="https://github.com/Mariia27" className={styles.link}>
          <img src={github} alt="github link" className={styles.github} />
        </a>
      </li>
      <li className={styles.item}>
        <img src={Vlad} alt="Vlad" className={styles.picture} />
        <p className={styles.name}>Co-Lead & FullStack</p>
        <p className={styles.name}>Vladyslav Kryhin</p>
        <a href="https://github.com/wlad-kryhin" className={styles.link}>
          <img src={github} alt="github link" className={styles.github} />
        </a>
      </li>
      <li className={styles.item}>
        <img src={Andrey} alt="Andrey" className={styles.picture} />
        <p className={styles.name}>Full Stack</p>
        <p className={styles.name}>Andrey Kasyan</p>
        <a href="https://github.com/MikhailKolomoitsev" className={styles.link}>
          <img src={github} alt="github link" className={styles.github} />
        </a>
      </li>
      <li className={styles.item}>
        <img src={Vova} alt="Vova" className={styles.picture} />
        <p className={styles.name}>Full Stack</p>
        <p className={styles.name}>Volodymyr Oliinyk</p>
        <a href="https://github.com/volodymyr-oliinyk8" className={styles.link}>
          <img src={github} alt="github link" className={styles.github} />
        </a>
      </li>
      <li className={styles.item}>
        <img src={Kate} alt="Kate" className={styles.picture} />
        <p className={styles.name}>Full Stack</p>
        <p className={styles.name}> Kateryna Gurienkov</p>
        <a href="https://github.com/Kateryna03" className={styles.link}>
          <img src={github} alt="github link" className={styles.github} />
        </a>
      </li>
      <li className={styles.item}>
        <img src={Dima} alt="Dima" className={styles.picture} />
        <p className={styles.name}>Full Stack</p>
        <p className={styles.name}>Dzmitry Harhun</p>
        <a href="https://github.com/dimagorga" className={styles.link}>
          <img src={github} alt="github link" className={styles.github} />
        </a>
      </li>
      <li className={styles.item}>
        <img src={Ira} alt="Ira" className={styles.picture} />
        <p className={styles.name}>Full Stack</p>
        <p className={styles.name}>Ira Logvina</p>
        <a href="https://github.com/IraLogvina" className={styles.link}>
          <img src={github} alt="github link" className={styles.github} />
        </a>
      </li>
      <li className={styles.item}>
        <img src={Anna} alt="Anna" className={styles.picture} />
        <p className={styles.name}>Full Stack</p>
        <p className={styles.name}>Anna Chebrova</p>
        <a href="https://github.com/AnnaChebrova" className={styles.link}>
          <img src={github} alt="github link" className={styles.github} />
        </a>
      </li>
      <li className={styles.item}>
        <img src={DimaB} alt="DimaB" className={styles.picture} />
        <p className={styles.name}>Full Stack</p>
        <p className={styles.name}>Dmytro Bykanov</p>
        <a href="https://github.com/DimByl" className={styles.link}>
          <img src={github} alt="github link" className={styles.github} />
        </a>
      </li>
    </ul>
  </div>;
}

export default Team;
