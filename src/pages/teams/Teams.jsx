import "./teams.css"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Flag} from '@material-ui/icons';

function createData(logo, alias, team, champions) {
  return { logo, alias, team, champions };
}

const rows = [
  createData('https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png', 'CSK', 'Chennai Super Kings', '2010, 2011, 2018, 2021'),
  createData('https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png', 'DC', 'Delhi Capitals'),
  createData('https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png', 'GT', 'Gujarat Titans'),
  createData('https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png', 'KKR', 'Kolkata Knight Riders', '2012, 2014'),
  createData('https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png', 'LSG', 'Lucknow Super Giants'),
  createData('https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png', 'MI', 'Mumbai Indians', '2013, 2015, 2017, 2019, 2020'),
  createData('https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png', 'PBKS', 'Punjab Kings'),
  createData('https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png', 'RR', 'Rajasthan Royals', '2008'),
  createData('https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png', 'RCB', 'Royal Challangers Banglore'),
  createData('https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png', 'SRH', 'Sunrisers Hydrabad', '2016'),
];

export default function Teams() {
	const TableTeamsButton = () => {
		return (
		<>
		<button className="tableTeamsAction squadBtn">Squad</button>
		<button className="tableTeamsAction matchesBtn">Matches</button>
		</>)
	};
  return (
    <TableContainer className="tableTeamsContainer" component={Paper}>
      <Table className="tableTeams" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className="tableTeamsTH">Team</TableCell>
            <TableCell align="left" className="tableTeamsTH">Champions</TableCell>
            <TableCell align="left" className="tableTeamsTH"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.alias}>
              <TableCell align="left">
				  <div className="tableTeamsTDName">
				  <img className="tableTeamsLogo" src={row.logo} alt="" /> 
				  <span className="tableTeamsName">{row.team}</span> 
				  </div>
			   </TableCell>
              <TableCell align="left">
				 <div className="tableTeamsTDChampions">
				  {row.champions && (<span className="tableTeamsChampions"><Flag className="tableTeamsChampionsIcon" />{row.champions}</span>)}
				  </div>
			  </TableCell>
              <TableCell align="left"> 
			  <div className="tableTeamsTDActions">
			  <TableTeamsButton />
			  </div>
			  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
