import "./pointsTable.css"
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'position', headerName: '#', width: 30, sortable: !1, className:"positionTd" },
  {
    field: 'team',
    headerName: 'Team',
    width: 150,
    sortable: !1,
    renderCell: (params) => {
      return(<>
      <div className="pointsTableTeamContainer">
        <img src={params.row.logoURL} alt="" className="pointsTableTeamLogo" />
        <span className="pointsTableTeamName">{params.row.team}</span>
      </div>
      </>);
    },
  },
  { field: 'played', headerName: 'Pld', width: 100, sortable: !1},
  { field: 'won', headerName: 'Won', width: 100, sortable: !1},
  { field: 'lost', headerName: 'Lost', width: 100, sortable: !1},
  { field: 'tied', headerName: 'Tied', width: 100, sortable: !1},
  { field: 'noresult', headerName: 'NR', width: 100, sortable: !1 },
  { field: 'netRunRate', headerName: 'Net RR', width: 120, sortable: !1 },
  { field: 'points', headerName: 'Pts', width: 100, sortable: !1, className:'temp' },
  { field: 'form', headerName: 'Form', width: 180, sortable: false,
    renderCell: (params) => {
      return(<>
        <div className="formingContainer">
          {
          params.row.form.map((item, index)=>{
            if(item === 'w') return <span key={index} className="formGrid form_win">W</span>
            else if(item === 'l') return <span key={index} className="formGrid form_lost">L</span>
            else return <span key={index} className="formGrid form_empty">&nbsp;</span>
          })
          }
        </div>
      </>);
    }
  },
];

const rows = [
  { id: 1, position: 1, uniqueID:'GT', logoURL:'https://scores.iplt20.com/ipl/teamlogos/GT.png', team: 'GT', played: 7, won: 6, lost: 1, tied: 0, noresult: 0, netRunRate: 0.396, points: 12, form: ['w','w','w','l','w'] },
  { id: 2, position: 2, uniqueID:'SRH', logoURL:'https://scores.iplt20.com/ipl/teamlogos/SRH.png', team: 'SRH', played: 7, won: 5, lost: 2, tied: 0, noresult: 0, netRunRate: 0.691, points: 10, form: ['w','w','w','w','w'] },
  { id: 4, position: 4, uniqueID:'RR', logoURL:'https://scores.iplt20.com/ipl/teamlogos/RR.png', team: 'RR', played: 7, won: 5, lost: 2, tied: 0, noresult: 0, netRunRate: 0.432, points: 10, form: ['w','w','l','w','l'] },
  { id: 5, position: 5, uniqueID:'RCB', logoURL:'https://scores.iplt20.com/ipl/teamlogos/RCB.png', team: 'RCB', played: 8, won: 5, lost: 3, tied: 0, noresult: 0, netRunRate: -0.472, points: 10, form: ['l','w','w','l','w'] },
  { id: 3, position: 3, uniqueID:'LSG', logoURL:'https://scores.iplt20.com/ipl/teamlogos/LSG.png', team: 'LSG', played: 7, won: 4, lost: 3, tied: 0, noresult: 0, netRunRate: 0.124, points: 8, form: ['l','w','l','w','w'] },
  { id: 6, position: 6, uniqueID:'DC', logoURL:'https://scores.iplt20.com/ipl/teamlogos/DC.png', team: 'DC', played: 7, won: 3, lost: 4, tied: 0, noresult: 0, netRunRate: 0.715, points: 6, form: ['l','w','l','w','l'] },
  { id: 7, position: 7, uniqueID:'KKR', logoURL:'https://scores.iplt20.com/ipl/teamlogos/KKR.png', team: 'KKR', played: 8, won: 3, lost: 5, tied: 0, noresult: 0, netRunRate: 0.080, points: 6, form: ['l','l','l','l','w'] },
  { id: 8, position: 8, uniqueID:'PBKS', logoURL:'https://scores.iplt20.com/ipl/teamlogos/PBKS.png', team: 'PBKS', played: 7, won: 3, lost: 4, tied: 0, noresult: 0, netRunRate: -0.562, points: 6, form: ['l','l','w','l','w'] },
  { id: 9, position: 9, uniqueID:'CSK', logoURL:'https://scores.iplt20.com/ipl/teamlogos/CSK.png', team: 'CSK', played: 7, won: 2, lost: 5, tied: 0, noresult: 0, netRunRate: -0.534, points: 4, form: ['w','l','w','l','l'] },
  { id: 10, position: 10, uniqueID:'MI', logoURL:'https://scores.iplt20.com/ipl/teamlogos/MI.png', team: 'MI', played: 7, won: 0, lost: 7, tied: 0, noresult: 0, netRunRate: -0.892, points: 0, form: ['l','l','l','l','l'] },
];

export default function PointsTable() {
  return (
    <div className="pointsTableContainer">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        disableColumnMenu
        hideFooter
        autoHeight
      />
    </div>
  );
}

