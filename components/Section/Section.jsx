import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import styles from './section.module.scss';

const Section = props => {
	const [storeMeals, setStoreMeals] = useState(() =>
		typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('myMeals')) ?? [] : []
	);
	const handleCart = data => {
		if (typeof window !== 'undefined') {
			if (!storeMeals.find(meal => meal.idMeal === data.idMeal)) {
				setStoreMeals([...storeMeals, data]);
				return window.localStorage.setItem(
					'myMeals',
					JSON.stringify([...storeMeals, data])
				);
			} else {
				const filteredMeals = storeMeals.filter(meal => meal.idMeal !== data.idMeal);
				setStoreMeals(filteredMeals);
				localStorage.setItem('myMeals', JSON.stringify(filteredMeals));
			}
		}
	};
	const isAlreadyOnCart = mealID => {
		return typeof window !== 'undefined'
			? storeMeals.find(meal => meal.idMeal === mealID)
			: false;
	};
	const mealDesc = props.allMeals.map(data => {
		return (
			<div key={data.idMeal} className={styles.panel}>
				<h2 className={styles.heading}>{data.strMeal}</h2>
				<div className={styles.imgcont}>
					<Image
						src={data.strMealThumb}
						alt={data.mealName}
						width={'600px'}
						height={'400px'}
						style={{ borderRadius: '6px' }}
					/>
				</div>

				<h3 className={styles.price}>Price: Rs.{data.idMeal}</h3>
				<button className={styles.btn} onClick={() => handleCart(data)}>
					{isAlreadyOnCart(data.idMeal) ? 'Remove from cart' : 'Add to cart'}
				</button>
			</div>
		);
	});
	return <div className={styles.desccontainer}>{mealDesc}</div>;
};
export default Section;
