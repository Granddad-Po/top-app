import type { NextPage } from 'next';
import { Button, Htag, P, Tag } from '../components';


const Home: NextPage = () => {
	return (
		<>
			<Htag tag='h2'>Hello World</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
			<P size='l'>Большой</P>
			<P >Средний</P>
			<P size='s'>Маленький</P>
			<Tag color='primary' href='https//vk.com'>Primary</Tag>
			<Tag>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag color='green'>Green</Tag>
			<Tag size='m' color='gray'>Gray</Tag>
			<Tag color='ghost'>Ghost</Tag>
		</>
	);
}

export default Home;
