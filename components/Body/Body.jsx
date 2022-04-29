import axios from 'axios';
import { useState, useEffect } from 'react';
import Section from '../Section/Section';
import styles from './body.module.scss';

const Body = props => {
	const [mealData, setMealData] = useState([]);
	const [searchData, setSearchData] = useState('');

	useEffect(() => {
		const fetchMealsByName = async () => {
			const response = await axios(
				`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}`
			);
			setMealData(response.data.meals ?? []);
		};
		fetchMealsByName();
	}, [searchData]);

	const searchChangeHandler = event => {
		setSearchData(event.target.value);
	};

	return (
		<>
			<div className={styles.search}>
				<h3 className={styles.head}>Search By Name</h3>
				<input
					type="text"
					placeholder="Search for dishes.."
					onChange={searchChangeHandler}
					className={styles.input}
				/>
			</div>

			<Section allMeals={mealData} />
		</>
	);
};
export default Body;
