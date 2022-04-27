import "./chartInfo.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function ChartInfo({data, title, dataKey}) {
  return (
	<div className="chartInfo">
		<h3 className="chartTitle">Points Analytics</h3>
		<div className="chartInfoContainer">
			<h4 className="chartInfoTitle">{title}</h4>		
			<ResponsiveContainer width="100%" aspect={4/1}>
				<LineChart data={data} 
					margin={{top: 5,right: 30,left: 20,bottom: 5}}>
					<XAxis dataKey="team" stroke="#5550bd" tick={{stroke: 'darkblue', strokeWidth: 1}} ></XAxis>
					
					<Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
					<Tooltip/>
					<CartesianGrid strokeDasharray="3 3" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	</div>
  )
}
