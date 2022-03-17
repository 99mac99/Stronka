import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.module.css';

function Home() {
	return (
		<>
			<div className={`${styles.home}`}>
				<div className={`${styles.homeCard}`}>
					<p className={`${styles.homeName}`}>Home</p>
				</div>
			</div>
		</>
	);
}

export default Home;
