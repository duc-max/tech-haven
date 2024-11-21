import clsx from "clsx";
import style from "./home.module.scss";
import Statistics from "./_components/statistics";
import { Col, Row } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoIosRefresh } from "react-icons/io";
import { CiExport } from "react-icons/ci";
import { useState } from "react";
import * as XLSX from "xlsx"; // Import xlsx library
import { Card, Space } from "antd";
import ListOrder from "./_components/listOrder";

const data = [
  { time: "10am", value: 40000 },
  { time: "11am", value: 30000 },
  { time: "12pm", value: 60000 },
  { time: "01pm", value: 80000 },
  { time: "02pm", value: 70000 },
  { time: "03pm", value: 50000 },
  { time: "04pm", value: 60000 },
  { time: "05pm", value: 80000 },
  { time: "06pm", value: 40000 },
  { time: "07pm", value: 90000 },
];
const data1 = [
  { name: "Sale", value: 40, color: "#4facfe" },
  { name: "Distribute", value: 30, color: "#ffcb57" },
  { name: "Return", value: 30, color: "#ff715b" },
];

const renderCenterLabel = () => (
  <text
    x="50%"
    y="50%"
    textAnchor="middle"
    dominantBaseline="middle"
    style={{ fontSize: "24px", fontWeight: "bold", fill: "#000" }}
  >
    80%
    <tspan
      x="50%"
      dy="25"
      style={{
        fontSize: "14px",
        fontWeight: "normal",
        fill: "#888",
      }}
    >
      Transactions
    </tspan>
  </text>
);

function HomeAdmin() {
  const [isClickMore, setIsClickMore] = useState(false);

  // Function to export data to Excel
  const exportToExcel = () => {
    // Create a worksheet from the data
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Create a workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Chart Data");

    // Export the workbook to an Excel file
    XLSX.writeFile(workbook, "chart_data.xlsx");
  };

  return (
    <div className={clsx(style.homeContainer)}>
      <Statistics />

      <Row>
        <Col md={7}>
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div className={style.chartWrap}>
              <h3 style={{ margin: 20 }}>Reports</h3>
              <button
                className={style.moreIcon}
                onClick={() => setIsClickMore(!isClickMore)}
              >
                <FiMoreHorizontal style={{ fontSize: "24px" }} />
                {isClickMore && (
                  <div className={clsx(style.moreWrap)}>
                    <ul>
                      <li>
                        <IoIosRefresh style={{ fontSize: "20px" }} />
                        <span>Refresh</span>
                      </li>
                      <li onClick={exportToExcel}>
                        <CiExport style={{ fontSize: "20px" }} />
                        <span>Export</span>
                      </li>
                    </ul>
                  </div>
                )}
              </button>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis tickFormatter={(value) => `${value / 1000}K`} />
                <Tooltip
                  formatter={(value) => `${value.toLocaleString()} views`}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="url(#colorUv)"
                  strokeWidth={3}
                  dot={false}
                />
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4facfe" />
                    <stop offset="100%" stopColor="#f093fb" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Col>
        <Col md={5}>
          <Card
            title="Analytics"
            bordered={false}
            extra={<span style={{ cursor: "pointer" }}>...</span>}
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={data1}
                  dataKey="value"
                  nameKey="name"
                  innerRadius="60%"
                  outerRadius="85%"
                  paddingAngle={5}
                  isAnimationActive={true}
                >
                  {data1.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                  {renderCenterLabel()}
                </Pie>
                <Legend
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                  formatter={(value) => (
                    <span style={{ fontSize: 12, color: "#888" }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
      <Row style={{ margin: "30px 0" }}>
        <Col md={7}>
          <ListOrder />
        </Col>
      </Row>
    </div>
  );
}

export default HomeAdmin;
