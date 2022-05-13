import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';



const Home: NextPage = () => {
	const [counter, setCounter] = useState<number>(0);

	useEffect(() => {
		console.log('Counter: ' + counter);
	}, [counter])

	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Htag tag='h2'>{counter}</Htag>
			<Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
			<Button appearance='ghost' arrow='down' onClick={() => setCounter(0)}>Кнопка</Button>
			<P size='l'>Большой</P>
			<P >Средний</P>
			<P size='s'>Маленький</P>
			<Tag color='primary' href='https//vk.com'>Primary</Tag>
			<Tag>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag color='green'>Green</Tag>
			<Tag size='m' color='gray'>Gray</Tag>
			<Tag color='ghost'>Ghost</Tag>
			<Rating rating={rating} isEditable setRating={setRating}/>
		</>
	);
}

export default withLayout(Home);
