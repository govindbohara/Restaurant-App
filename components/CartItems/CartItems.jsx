import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './cartitems.module.scss';

const CartItems = () => {
	const router = useRouter();
	const [cartItems, setCartItems] = useState(
		() => JSON.parse(localStorage.getItem('myMeals')) ?? []
	);

	let length = cartItems.length;
	console.log(length);

	const removeItem = () => {
		localStorage.removeItem('myMeals');
		setCartItems([]);
		toast.success('Successfully removed items');
	};
	const getTotalPrice = () => {
		let totalPrice = 0;
		cartItems.forEach(cart => {
			totalPrice += parseInt(cart.idMeal);
		});
		return totalPrice;
	};

	const payNow = () => {
		const getItem = JSON.parse(localStorage.getItem('history')) ?? [];
		console.log(getItem);
		localStorage.setItem('history', JSON.stringify([...getItem, ...cartItems]));

		localStorage.removeItem('myMeals');
		setCartItems([]);
		toast.success('Your order has been placed');
	};
	const cartItem = cartItems.map(cart => {
		return (
			<div className={styles.cart} key={cart.idMeal}>
				<Image
					style={{ borderRadius: '10px' }}
					src={cart.strMealThumb}
					alt={cart.strMeal}
					width={'180px'}
					height={'150px'}
				/>
				<div className={styles.foodinfo}>
					<h3>{cart.strMeal}</h3>
					<h4>Price: Rs.{cart.idMeal}</h4>
					<p className={styles.category}>{cart.strCategory}</p>
				</div>
			</div>
		);
	});

	return (
		<>
			<div className={styles.buttons}>
				{cartItems.length !== 0 && (
					<button className={styles.pay} onClick={payNow}>
						Checkout
					</button>
				)}
				<div className={styles.btns}>
					<button
						className={styles.add}
						onClick={() => {
							router.push('/');
						}}
					>
						Add New Item
					</button>
					{cartItems.length !== 0 && (
						<button className={styles.remove} onClick={removeItem}>
							Remove Cart Items
						</button>
					)}
				</div>
			</div>

			<div className={styles.cartcont}>
				{cartItems.length === 0 ? (
					<p className={styles.text}>No Cart Items To Display.</p>
				) : (
					<>
						<h1 style={{ marginLeft: '2rem' }}>
							Total Amount:
							<span style={{ color: '#6741d9' }}> Rs.{getTotalPrice()}</span>
						</h1>
						<h2 style={{ marginLeft: '2rem' }}>Items Selected</h2>

						{cartItem}
					</>
				)}
			</div>
		</>
	);
};
export default CartItems;
