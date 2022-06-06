import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const MOCK_CHART_DATA = [{
  "country": "Lithuania",
  "litres": 501.9
}, {
  "country": "Czech Republic",
  "litres": 301.9
}, {
  "country": "Ireland",
  "litres": 201.1
}, {
  "country": "Germany",
  "litres": 165.8
}, {
  "country": "Australia",
  "litres": 139.9
}, {
  "country": "Austria",
  "litres": 128.3
}, {
  "country": "UK",
  "litres": 99
}, {
  "country": "Belgium",
  "litres": 60
}, {
  "country": "The Netherlands",
  "litres": 50
}];

export default function BasicChart() {
  // Create chart instance
let chart = am4core.create("chartdiv", am4charts.PieChart);

// Create pie series
let series = chart.series.push(new am4charts.PieSeries());
series.dataFields.value = "litres";
series.dataFields.category = "country";

// Add data
chart.data = MOCK_CHART_DATA;

// And, for a good measure, let's add a legend
chart.legend = new am4charts.Legend();

  return (<div>
    <div>BASIC CHART</div>
  </div>)
}