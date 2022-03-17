import NameMission from "./parts/nameMission";
import JoinMetavers from "./parts/joinmetavers";
import Quality from "./parts/quality";
import Description from "./parts/description";
import styles from './mission.module.css';



function Mission() {

    return (
        <>
        <div className={`${styles.mainDiv}`}>
        <NameMission />
        <Description />
        <JoinMetavers />
        <Quality />
        </div>
        </>
    )
}

export default Mission;