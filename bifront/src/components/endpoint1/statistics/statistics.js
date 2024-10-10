import React from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    DoughnutController // Asegúrate de registrar este controlador
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./statistics.css";
import { Card } from "react-bootstrap";

// Registrar todos los elementos y controladores necesarios
ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController);

function Statistics() {
    const data = {
        labels: ["Completed", "Pending", "Initiated"],
        datasets: [
            {
                label: "Classification Status",
                data: [242, 94, 61],
                backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: "white",
                },
            },
        },
        layout: {
            padding: "1em",
        },
    };

    return (
        <Card className="stats-card">
            <Card.Body>
                <Card.Title>
                    <h2 className="stats-title">Estadísticas</h2>
                </Card.Title>
                <Card.Text className="stats-container">
                    <div style={{ height: "100%" }} className="container-dona">
                        <Doughnut className="dona" data={data} options={options} />
                    </div>
                    <label className="stats-text">
                        Accuracy: <span className="accuracy-highlight">45%</span>
                    </label>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Statistics;
