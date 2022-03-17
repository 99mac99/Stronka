
import styles from '../mission.module.css';






function Quality() {
	return (
		<>
			<div className={`${styles.qualityDiv}`}>
				<p>
					<span>WARTOŚCI:</span>
				</p>
				<p>
					<span>Edukacja</span> - uczymy tylko faktów, aby każdy mógł wyrobić
					własną opinię. Stawiamy granicę pomiędzy jednymi, a drugimi.
				</p>
				<p>
					<span>Transparencja </span>- nasze rozwiązania techniczne udostępniamy
					w formule open-source, dokumentujemy i dzielimy się ze światem naszymi
					postępami, a większość konwersacji prowadzimy publicznie.
				</p>
				<p>
					<span>Odpowiedzialność </span> - pracujemy w samoorganizujący się
					sposób, gdzie każdy jest w pełni odpowiedzialny za swoje inicjatywy, a
					każdy pomysł może być zrealizowany wtedy i tylko wtedy, jeśli bierze
					się za niego pełną odpowiedzialność.
				</p>
				<p>
					<span>Integracja</span> - każdy zainteresowany może wesprzeć UNIMIND i
					czerpać z tego korzyści.
				</p>
			</div>
		</>
	);
}

export default Quality;
