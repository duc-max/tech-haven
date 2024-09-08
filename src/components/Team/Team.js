import { Container } from "react-bootstrap";
import clsx from "clsx";

import style from "./Team.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
function Team() {
  return (
    <Container>
      <SectionTitle disable={true} title={"Meet Our Team"} />

      <div className={style.teamWrap}>
        <div className={style.teamBlock}>
          <div className={style.teamImg}>
            <img src="./assets/images/team1.jpg" alt="team1" />
          </div>
          <div className={style.teamData}>
            <div className={style.bodySmall}>Founder & Owner</div>
            <div className={style.memberName}>Jacob Jones</div>
          </div>
        </div>
        <div className={style.teamBlock}>
          <div className={style.teamImg}>
            <img src="./assets/images/team2.jpg" alt="team1" />
          </div>
          <div className={style.teamData}>
            <div className={style.bodySmall}>Executive Director</div>
            <div className={style.memberName}>Floyd Miles</div>
          </div>
        </div>
        <div className={style.teamBlock}>
          <div className={style.teamImg}>
            <img src="./assets/images/team3.jpg" alt="team1" />
          </div>
          <div className={style.teamData}>
            <div className={style.bodySmall}>Human Resources</div>
            <div className={style.memberName}>Darlene Robertson</div>
          </div>
        </div>
        <div className={style.teamBlock}>
          <div className={style.teamImg}>
            <img src="./assets/images/team4.jpg" alt="team1" />
          </div>
          <div className={style.teamData}>
            <div className={style.bodySmall}>Quality Assurance</div>
            <div className={style.memberName}>Jerome Bell</div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Team;
