import {Button} from 'react-bootstrap';
import styles from '../mission.module.css';

function JoinMetavers () {

    return (
			<>
				<div className={`${styles.joinDiv}`}>
					<p className={`${styles.joinText}`}>Dołącz do naszego Metaversu</p>
					<Button  size='lg' active>Discord</Button>
				</div>
			</>
		);
}

export default JoinMetavers;