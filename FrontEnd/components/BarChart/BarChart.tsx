import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { BarChartProps } from "./IBarChart";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ followers, following, repos }: BarChartProps): JSX.Element => {
  const data: ChartData = {
    labels: ["2023"],
    datasets: [
      {
        label: "Followers",
        data: [followers],
        backgroundColor: "#1ad1df",
        borderWidth: 1,
        barThickness: 20,
      },
      {
        label: "Following",
        data: [following],
        backgroundColor: "#dd4213",
        borderWidth: 1,
        barThickness: 20,
      },
      {
        label: "Public Repos",
        data: [repos],
        backgroundColor: "#1adf1a",
        borderWidth: 1,
        barThickness: 20,
      },
    ],
  };

  const data2: ChartData = {
    labels: ["2023"],
    datasets: [
      {
        label: "Followers",
        data: [followers],
        backgroundColor: "#1ad1df",
        borderWidth: 1,
        barThickness: 20,
      },
    ],
  };

  const options: ChartOptions = {
    maintainAspectRatio: false, // Deshabilitar la relación de aspecto constante
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };
  return <Bar data={following !==0 && repos !==0 ? data as any : data2 as any} options={options as any} />;
};

export default BarChart;
