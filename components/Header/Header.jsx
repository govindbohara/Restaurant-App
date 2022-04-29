import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './header.module.scss';
const Header = props => {
	const router = useRouter();
	return (
		<nav className={styles.navbar}>
			<h3
				className={styles.head}
				onClick={() => {
					router.push('/');
				}}
			>
				Restaurant <span className={styles.app}>App</span>
			</h3>
			<div className={styles.navitems}>
				<Link href={'/'}>
					<a className={router.pathname == '/' ? styles.active : ''}>Home</a>
				</Link>

				<Link href={'/cart'}>
					<a className={router.pathname == '/cart' ? styles.active : ''}>Cart</a>
				</Link>
				<Link href={'/history'}>
					<a className={router.pathname == '/history' ? styles.active : ''}>
						History
					</a>
				</Link>
			</div>
		</nav>
	);
};
export default Header;
