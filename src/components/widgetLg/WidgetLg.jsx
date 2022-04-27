import "./widgetLg.css"

export default function WidgetLg() {
  return (
	<div className="widgetLg">
    <h3 className="widgetLgTitle">Standings</h3>
    <table className="widgetLgTable">
      <tr className="widgetLgTr">
        <th className="widgetLgTh">TEAM</th>
        <th className="widgetLgTh">PLD</th>
        <th className="widgetLgTh">NRR</th>
        <th className="widgetLgTh">PTS</th>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgTd widgetLgTeam">
          <img src="https://scores.iplt20.com/ipl/teamlogos/RR.png" alt="" className="widgetLgTeamLogo" />
          <span className="widgetLgTeamName">Rajastan Royals</span>
        </td>
        <td className="widgetLgTd widgetLgPlayed">7</td>
        <td className="widgetLgTd widgetLgNrr">0.432</td>
        <td className="widgetLgTd widgetLgPts">10</td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgTd widgetLgTeam">
          <img src="https://scores.iplt20.com/ipl/teamlogos/GT.png" alt="" className="widgetLgTeamLogo" />
          <span className="widgetLgTeamName">Gujarat Titans</span>
        </td>
        <td className="widgetLgTd widgetLgPlayed">6</td>
        <td className="widgetLgTd widgetLgNrr">0.395</td>
        <td className="widgetLgTd widgetLgPts">10</td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgTd widgetLgTeam">
          <img src="https://scores.iplt20.com/ipl/teamlogos/RCB.png" alt="" className="widgetLgTeamLogo" />
          <span className="widgetLgTeamName">Royal Challangers Bangalore</span>
        </td>
        <td className="widgetLgTd widgetLgPlayed">7</td>
        <td className="widgetLgTd widgetLgNrr">0.251</td>
        <td className="widgetLgTd widgetLgPts">10</td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgTd widgetLgTeam">
          <img src="https://scores.iplt20.com/ipl/teamlogos/LSG.png" alt="" className="widgetLgTeamLogo" />
          <span className="widgetLgTeamName">Lucknow Super Giants</span>
        </td>
        <td className="widgetLgTd widgetLgPlayed">7</td>
        <td className="widgetLgTd widgetLgNrr">0.124</td>
        <td className="widgetLgTd widgetLgPts">8</td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgTd widgetLgTeam">
          <img src="https://scores.iplt20.com/ipl/teamlogos/SRH.png" alt="" className="widgetLgTeamLogo" />
          <span className="widgetLgTeamName">Sun Risers Hydrabad</span>
        </td>
        <td className="widgetLgTd widgetLgPlayed">6</td>
        <td className="widgetLgTd widgetLgNrr">-0.077</td>
        <td className="widgetLgTd widgetLgPts">8</td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgTd widgetLgTeam">
          <img src="https://scores.iplt20.com/ipl/teamlogos/DC.png" alt="" className="widgetLgTeamLogo" />
          <span className="widgetLgTeamName">Delhi Capitals</span>
        </td>
        <td className="widgetLgTd widgetLgPlayed">7</td>
        <td className="widgetLgTd widgetLgNrr">0.715</td>
        <td className="widgetLgTd widgetLgPts">6</td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgTd widgetLgTeam">
          <img src="https://scores.iplt20.com/ipl/teamlogos/KKR.png" alt="" className="widgetLgTeamLogo" />
          <span className="widgetLgTeamName">Kolkata Knight Riders</span>
        </td>
        <td className="widgetLgTd widgetLgPlayed">7</td>
        <td className="widgetLgTd widgetLgNrr">0.160</td>
        <td className="widgetLgTd widgetLgPts">6</td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgTd widgetLgTeam">
          <img src="https://scores.iplt20.com/ipl/teamlogos/PBKS.png" alt="" className="widgetLgTeamLogo" />
          <span className="widgetLgTeamName">Punjab Super Kings</span>
        </td>
        <td className="widgetLgTd widgetLgPlayed">7</td>
        <td className="widgetLgTd widgetLgNrr">-0.562</td>
        <td className="widgetLgTd widgetLgPts">6</td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgTd widgetLgTeam">
          <img src="https://scores.iplt20.com/ipl/teamlogos/CSK.png" alt="" className="widgetLgTeamLogo" />
          <span className="widgetLgTeamName">Chennai Super Kings</span>
        </td>
        <td className="widgetLgTd widgetLgPlayed">7</td>
        <td className="widgetLgTd widgetLgNrr">-0.534</td>
        <td className="widgetLgTd widgetLgPts">4</td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgTd widgetLgTeam">
          <img src="https://scores.iplt20.com/ipl/teamlogos/MI.png" alt="" className="widgetLgTeamLogo" />
          <span className="widgetLgTeamName">Mumbai Indians</span>
        </td>
        <td className="widgetLgTd widgetLgPlayed">7</td>
        <td className="widgetLgTd widgetLgNrr">-0.892</td>
        <td className="widgetLgTd widgetLgPts">0</td>
      </tr>
    </table>
  </div>
  )
}
