import React, { useEffect, useState } from 'react';
import './styles.css';
import Star from './components/star/Star';

const styles = {
	green: {
		backgroundImage:
			'linear-gradient(45deg, hsla(108, 86.67%, 46.79%, 1.00), hsla(94, 100.00%, 11.67%, 1.00))',
		color: 'hsla(0, 0.00%, 100.00%, 1.00)',
	},
	red: {
		backgroundImage:
			'linear-gradient(45deg, hsla(0, 86.67%, 46.79%, 1.00), hsla(94, 100.00%, 11.67%, 1.00))',
		color: 'hsla(0, 0.00%, 100.00%, 1.00)',
	},
};

const Letter = () => {
	const [letter, setLetter] = useState('g');
	const [keyPress, setKeyPress] = useState('');
	const [color, setColor] = useState('');
	const [stars, setStars] = useState(0);

	const alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];

	const getLetter = () => {
		const randNum = Math.floor(Math.random() * 26);
		setLetter(alphabet[randNum]);
	};

	useEffect(() => {
		window.addEventListener('keydown', (event) => {
			setKeyPress(event.key);
		});
	}, []);

	useEffect(() => {
		if (keyPress === letter) {
			setTimeout(() => {
				getLetter();
				setColor('');
			}, 1500);
			setColor(styles.green.backgroundImage);
			setStars(stars + 1);
		} else {
			setTimeout(() => {
				setColor('');
			}, 300);
			setColor(styles.red.backgroundImage);
		}
	}, [keyPress]);

	return (
		<>
			<div className={`letter-wrap`} style={{ backgroundImage: color }}>
				<h1 className="big-letter">{letter.toUpperCase()}</h1>
			</div>
			<div className="star-wrapper">
				{stars
					? [...Array(stars)].map((star) => {
							return <Star key={star} />;
					  })
					: null}
			</div>
		</>
	);
};

export default function App() {
	return (
		<div className="App">
			<Letter />
		</div>
	);
}
