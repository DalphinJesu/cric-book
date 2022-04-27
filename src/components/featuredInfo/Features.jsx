import "./feature.css"

export default function Features() {
  return (
	<div className="feature">
		<h3 className="featureTitle">Top Teams</h3>
		<div className="featureContainer">
			<div className="featureItem">
			<span className="teamName">GT</span>
				<div className="detailsContainer">
					<span className="wonCount">WON: 5</span><br/>
					<span className="lostCount">LOST: 1</span><br/>
					<span className="ptsCount">PTS: 10</span>
				</div>
				<span className="lastUpdate">Last updated on 22/04/2022</span>
			</div>
			<div className="featureItem">
				<span className="teamName">RCB</span>
				<div className="detailsContainer">
					<span className="wonCount">WON: 5</span><br/>
					<span className="lostCount">LOST: 2</span><br/>
					<span className="ptsCount">PTS: 10</span>
				</div>
				<span className="lastUpdate">Last updated on 22/04/2022</span>
			</div>
			<div className="featureItem">
				<span className="teamName">RR</span>
				<div className="detailsContainer">
					<span className="wonCount">WON: 4</span><br/>
					<span className="lostCount">LOST: 2</span><br/>
					<span className="ptsCount">PTS: 8</span>
				</div>
				<span className="lastUpdate">Last updated on 22/04/2022</span>
			</div>
			<div className="featureItem">
				<span className="teamName">LSG</span>
				<div className="detailsContainer">
					<span className="wonCount">WON: 4</span><br/>
					<span className="lostCount">LOST: 3</span><br/>
					<span className="ptsCount">PTS: 8</span>
				</div>
				<span className="lastUpdate">Last updated on 22/04/2022</span>
			</div>
		</div>
	</div>
  )
}
