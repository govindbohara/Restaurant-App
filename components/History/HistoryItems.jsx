import Image from 'next/image';
import { useState } from 'react';
import styles from './history.module.scss';
const HistoryItems = () => {
	const [historyItems, setHistoryItems] = useState(
		() => JSON.parse(localStorage.getItem('history')) ?? []
	);
	const historyItem = historyItems.map(history => {
		return (
			<div className={styles.history} key={history.idMeal}>
				<Image
					style={{ borderRadius: '10px' }}
					src={history.strMealThumb}
					alt={history.strMeal}
					width={'180px'}
					height={'150px'}
				/>
				<div className={styles.foodinfo}>
					<h3>{history.strMeal}</h3>
					<h4>Price: Rs.{history.idMeal}</h4>
					<p className={styles.category}>{history.strCategory}</p>
				</div>
			</div>
		);
	});
	return (
		<div className={styles.historycont}>
			{historyItems.length === 0 ? (
				<p className={styles.text}>No History To Display.</p>
			) : (
				<>
					<h1 style={{ marginLeft: '2rem' }}>History</h1>

					{historyItem}
				</>
			)}

			<div className={styles.info}></div>
		</div>
	);
};
export default HistoryItems;
