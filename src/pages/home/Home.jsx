import ChartInfo from "../../components/chart/ChartInfo"
import Features from "../../components/featuredInfo/Features"
import "./home.css"
import {chartData} from "../../dummyData"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"

export default function Home() {
  return (
	<div className="home">
		<Features />
		<ChartInfo data={chartData} title="All Teams Points" dataKey="points" />
		<div className="homeWidgetsContainer">
			<h3 className="homeWidgetsTitle">Overview</h3>
			<div className="homeWidgets">
				<WidgetSm/>
				<WidgetLg/>
			</div>
		</div>
	</div>
  )
}
