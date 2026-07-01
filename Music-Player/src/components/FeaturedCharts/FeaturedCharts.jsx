import "./FeaturedCharts.css";
import charts  from "../../data/charts";
function FeaturedCharts() {
  return (
    <section className="featured"> 
      <h2>Featured Charts</h2>
      <div className="chartContainer">
        {charts.map((chart)=>(
            <div className="chartCard" key={chart.id}>
              <h3>{chart.title}</h3>
              <h4>{chart.subtitle}</h4>
              <span>{chart.icon}</span>
              </div>
          ) )}
      </div>
    </section>
  );
}

export default FeaturedCharts;