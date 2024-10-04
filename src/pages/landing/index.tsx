import Footer from '../../components/Footer';
import About from './About';
import Hero from './Hero';
import Join from './Join';
import Socials from './Socials';
import Welcome from './Welcome';

function index() {
	return (
		<div>
			<Hero />
			<Welcome />
			<About />
			<Join />
			<div className="relative">
				<Socials />
				<div className="sticky top-0">
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default index;
