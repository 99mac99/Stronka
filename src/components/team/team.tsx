
import styles from './team.module.css'
import MemberCard from './memberCard';

function Team () {
	return (
		<>
			<div className={`${styles.teamDiv}`}>
				<div className={`${styles.teamContainer}`}>
					<span>Nasz zespół</span>
					<MemberCard />
					<MemberCard />
					<MemberCard />
					<MemberCard />
					<MemberCard />
					<MemberCard />
				</div>
			</div>
		</>
	);
}

export default Team;
