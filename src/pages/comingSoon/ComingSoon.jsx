import "./comingSoon.css";
import {Link} from 'react-router-dom';

export default function ComingSoon() {
  return (
	<div class="NYI_page">
		<h1 className="NYI_title">Not Yet Implemented! Coming soon !!!</h1>
		<Link to="/"><button className="goToHome">Home</button></Link>
	</div>
  )
}
