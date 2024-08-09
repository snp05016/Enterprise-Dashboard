import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

function HrCharts   () {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Generate random data
    const generateRandomData = (categories, min = 10, max = 100) => {
        return categories.map(() => Math.floor(Math.random() * (max - min + 1)) + min);
    };

    // Generate random data for heat map
    const generateHeatMapData = (days) => {
        return Array.from({ length: days }, (_, i) => ({
            x: (i + 1).toString(),
            y: Math.floor(Math.random() * 100) + 1 // Random value between 1 and 100
        }));
    };

    const [salaryDistributionData, setSalaryDistributionData] = useState({
        series: [{
            name: 'Salary Distribution',
            data: generateRandomData(['Manager', 'Developer', 'Designer', 'Analyst'])
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                toolbar: { show: false }
            },
            plotOptions: {
                bar: { horizontal: true }
            },
            dataLabels: { enabled: false },
            xaxis: {
                categories: ['Manager', 'Developer', 'Designer', 'Analyst']
            }
        }
    });

    const [stackedBarData, setStackedBarData] = useState({
        series: [
            {
                name: 'Base Salary',
                data: generateRandomData(['Employee 1', 'Employee 2', 'Employee 3'])
            },
            {
                name: 'Bonuses',
                data: generateRandomData(['Employee 1', 'Employee 2', 'Employee 3'])
            },
            {
                name: 'Benefits',
                data: generateRandomData(['Employee 1', 'Employee 2', 'Employee 3'])
            }
        ],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                stacked: true,
                toolbar: { show: false }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                }
            },
            xaxis: {
                categories: ['Employee 1', 'Employee 2', 'Employee 3']
            },
            legend: { position: 'top' }
        }
    });

    const [heatMapData, setHeatMapData] = useState({
        series: [{
            name: 'Absenteeism',
            data: generateHeatMapData(30) // Assuming a 30-day month
        }],
        options: {
            chart: {
                height: 350,
                type: 'heatmap',
                toolbar: { show: false }
            },
            plotOptions: {
                heatmap: {
                    colorScale: {
                        ranges: [{
                            from: 0,
                            to: 25,
                            name: 'Low',
                            color: '#00A100'
                        }, {
                            from: 26,
                            to: 50,
                            name: 'Medium',
                            color: '#128FD9'
                        }, {
                            from: 51,
                            to: 100,
                            name: 'High',
                            color: '#FFB700'
                        }]
                    }
                }
            },
            xaxis: {
                type: 'category',
                categories: Array.from({ length: 30 }, (_, i) => (i + 1).toString())
            },
            yaxis: {
                show: false // Hide y-axis
            },
            dataLabels: {
                enabled: false
            },
            grid: {
                padding: {
                    left: 0,
                    right: 0
                },
                borderColor: '#e0e0e0',
                strokeDashArray: 1,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        }
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (windowWidth < 600) {
        return <p>Window is too small to display charts.</p>;
    }

    return (
        <div className="container2">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <h2>Salary Distribution Across Roles</h2>
                    <Chart
                        options={salaryDistributionData.options}
                        series={salaryDistributionData.series}
                        type={salaryDistributionData.options.chart.type}
                        height={salaryDistributionData.options.chart.height}
                    />
                </div>
                <div className="col-md-6 mb-4">
                    <h2>Stacked Bar Chart</h2>
                    <Chart
                        options={stackedBarData.options}
                        series={stackedBarData.series}
                        type={stackedBarData.options.chart.type}
                        height={stackedBarData.options.chart.height}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <h2>Heat Map: Absenteeism Rates</h2>
                    <Chart
                        options={heatMapData.options}
                        series={heatMapData.series}
                        type={heatMapData.options.chart.type}
                        height={heatMapData.options.chart.height}
                    />
                </div>
            </div>
        </div>
    );
}

export default HrCharts;
