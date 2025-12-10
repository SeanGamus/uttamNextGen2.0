import { useState } from "react";
import Plot from "react-plotly.js";

export const Detection = () => {
  const [id, setId] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

    const fetchData = async (selectedId) => {
        setLoading(true);
        try {
        const response = await fetch("http://127.0.0.1:8000/breathData", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: String(selectedId) }),
        });

        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result.Data);
        } catch (err) {
        console.error(err);
        } finally {
        setLoading(false);
        }
    };

  const handleChange = (e) => {
    const selectedId = parseInt(e.target.value);
    setId(selectedId);
    fetchData(selectedId);
  };

  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">Breath Detection</h1>
          <p className="paragraph">
            Automated breath detection using deep learning.<br />
            Classifies lung sound data into three labels: 
            Inhalation, Exhalation, and Background.
          </p>

          {/* ID Selector */}
          <label className="block mt-4 mb-2">Select Signal ID (1–5):</label>
          <select
            value={id}
            onChange={handleChange}
            className="p-2 border rounded"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>

          {/* Loading */}
          {loading && <p className="mt-2">Loading data...</p>}

          {/* Plotly Chart */}
          {data.length > 0 && (
            <Plot
              data={[
                {
                  x: Array.from({ length: data.length }, (_, i) => i),
                  y: data,
                  type: "scatter",
                  mode: "lines",
                  line: { color: "blue" },
                },
              ]}
              layout={{
                title: `Signal Data for ID ${id}`,
                autosize: true,
                xaxis: { title: "Index" },
                yaxis: { title: "Value" },
              }}
              useResizeHandler={true}
              style={{ width: "100%", height: "500px" }}
              config={{ responsive: true, scrollZoom: true }} // enable zoom in/out
            />
          )}
        </div>
      </div>
    </main>
  );
};
