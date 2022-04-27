import "./widgetSm.css"

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <h3 className="widgetSmTitle">2022 Leaders</h3>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://scores.iplt20.com/ipl/playerimages/182.png" alt="" className="widgetSmPlayerImg" />
          <div className="widgetSmPlayerDetails">
            <span className="widgetSmPlayerName">Jos Buttler</span>
            <span className="widgetSmTeamName">Rajastan Royals</span>
            <span className="widgetSmPlayerAchievements">Most Runs</span>
          </div>
          <div className="widgetSmPlayerAchievmentData">491<span className="widgetSmUnits">Runs</span></div>
        </li>
        <li className="widgetSmListItem">
          <img src="https://scores.iplt20.com/ipl/playerimages/10.png" alt="" className="widgetSmPlayerImg" />
          <div className="widgetSmPlayerDetails">
            <span className="widgetSmPlayerName">Yuzvendra Chahal</span>
            <span className="widgetSmTeamName">Rajastan Royals</span>
            <span className="widgetSmPlayerAchievements">Most Wickets</span>
          </div>
          <div className="widgetSmPlayerAchievmentData">18<span className="widgetSmUnits">Wickets</span></div>
        </li>
        <li className="widgetSmListItem">
          <img src="https://scores.iplt20.com/ipl/playerimages/182.png" alt="" className="widgetSmPlayerImg" />
          <div className="widgetSmPlayerDetails">
            <span className="widgetSmPlayerName">Jos Buttler</span>
            <span className="widgetSmTeamName">Rajastan Royals</span>
            <span className="widgetSmPlayerAchievements">Highest Score</span>
          </div>
          <div className="widgetSmPlayerAchievmentData">116<span className="widgetSmUnits">Runs</span></div>
        </li>
        <li className="widgetSmListItem">
          <img src="https://scores.iplt20.com/ipl/playerimages/10.png" alt="" className="widgetSmPlayerImg" />
          <div className="widgetSmPlayerDetails">
            <span className="widgetSmPlayerName">Yuzvendra Chahal</span>
            <span className="widgetSmTeamName">Rajastan Royals</span>
            <span className="widgetSmPlayerAchievements">Best Bowling Figures</span>
          </div>
          <div className="widgetSmPlayerAchievmentData">5/40<span className="widgetSmUnits">W/R</span></div>
        </li>
        <li className="widgetSmListItem">
          <img src="https://scores.iplt20.com/ipl/playerimages/182.png" alt="" className="widgetSmPlayerImg" />
          <div className="widgetSmPlayerDetails">
            <span className="widgetSmPlayerName">Jos Buttler</span>
            <span className="widgetSmTeamName">Rajastan Royals</span>
            <span className="widgetSmPlayerAchievements">Most Valuable Player</span>
          </div>
          <div className="widgetSmPlayerAchievmentData">222.0<span className="widgetSmUnits">Pts</span></div>
        </li>
        <li className="widgetSmListItem">
          <img src="https://scores.iplt20.com/ipl/playerimages/190.png" alt="" className="widgetSmPlayerImg" />
          <div className="widgetSmPlayerDetails">
            <span className="widgetSmPlayerName">Rajastan Royals (RR)</span>
            <span className="widgetSmTeamName">Rajastan Royals</span>
            <span className="widgetSmPlayerAchievements">Fairplay Topper</span>
          </div>
          <div className="widgetSmPlayerAchievmentData">61<span className="widgetSmUnits">Pts</span></div>
        </li>
      </ul>
    </div>
  )
}
