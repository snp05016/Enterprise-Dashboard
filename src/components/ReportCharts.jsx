import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
// import './ReportCharts.css';

function ReportCharts() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [areaData, setAreaData] = useState({
        series: [
            {
                name: 'Sales',
                data: [31, 40, 28, 51, 42, 109, 100],
            },
            {
                name: 'Revenue',
                data: [11, 32, 45, 32, 34, 52, 47],
            },
            {
                name: 'Customers',
                data: [17, 29, 37, 29, 31, 54, 48],
            }
        ],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false,
                }
            },
            markers: {
                size: 4,
            },
            colors: ['#FF6384', '#36A2EB', '#4BC0C0'],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.3,
                    opacityTo: 0.4,
                    stops: [0, 90, 100],
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2018-01-18T00:00:00Z',
                    '2018-01-19T00:00:00Z',
                    '2018-01-20T00:00:00Z',
                    '2018-01-21T00:00:00Z',
                    '2018-01-22T00:00:00Z',
                    '2018-01-23T00:00:00Z',
                    '2018-01-24T00:00:00Z',
                ],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
        },
    });

    const [barData, setBarData] = useState({
        series: [
            {
                name: 'Sales',
                data: [31, 40, 28, 51, 42, 109, 100],
            },
            {
                name: 'Revenue',
                data: [11, 32, 45, 32, 34, 52, 47],
            },
            {
                name: 'Customers',
                data: [17, 29, 37, 29, 31, 54, 48],
            }
        ],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false,
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: [
                    '2018-01-18T00:00:00Z',
                    '2018-01-19T00:00:00Z',
                    '2018-01-20T00:00:00Z',
                    '2018-01-21T00:00:00Z',
                    '2018-01-22T00:00:00Z',
                    '2018-01-23T00:00:00Z',
                    '2018-01-24T00:00:00Z',
                ],
                type: 'datetime'
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        },
    });

    const [pieData, setPieData] = useState({
        series: [44, 55, 13, 43, 22],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Team Sadiq', 'Team Danish', 'Team Umar', 'Team John', 'Team Ria'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    });

    const [donutData, setDonutData] = useState({
        series: [25, 35, 20, 15, 5],
        options: {
            chart: {
                width: 380,
                type: 'donut',
            },
            labels: ['Marketing', 'Sales', 'Development', 'Support', 'HR'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setAreaData(prevState => ({
                ...prevState,
                options: {
                    ...prevState.options,
                    chart: {
                        ...prevState.options.chart,
                        width: window.innerWidth < 768 ? 300 : 600,
                        height: window.innerHeight < 768 ? 300 : 350,
                    }
                }
            }));
            setBarData(prevState => ({
                ...prevState,
                options: {
                    ...prevState.options,
                    chart: {
                        ...prevState.options.chart,
                        width: window.innerWidth < 768 ? 300 : 600,
                        height: window.innerHeight < 768 ? 300 : 350,
                    }
                }
            }));
            setPieData(prevState => ({
                ...prevState,
                options: {
                    ...prevState.options,
                    chart: {
                        ...prevState.options.chart,
                        width: window.innerWidth < 768 ? 200 : 380,
                    }
                }
            }));
            setDonutData(prevState => ({
                ...prevState,
                options: {
                    ...prevState.options,
                    chart: {
                        ...prevState.options.chart,
                        width: window.innerWidth < 768 ? 200 : 380,
                    }
                }
            }));
        };

        window.addEventListener('resize', handleResize);

        // Initial call to handle resize
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
                    <h2>Area Chart</h2>
                    <Chart
                        options={areaData.options}
                        series={areaData.series}
                        type={areaData.options.chart.type}
                        height={areaData.options.chart.height}
                    />
                </div>
                <div className="col-md-6 mb-4">
                    <h2>Bar Chart</h2>
                    <Chart
                        options={barData.options}
                        series={barData.series}
                        type={barData.options.chart.type}
                        height={barData.options.chart.height}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <h2>Pie Chart</h2>
                    <Chart
                        options={pieData.options}
                        series={pieData.series}
                        type={pieData.options.chart.type}
                        width={pieData.options.chart.width}
                    />
                </div>
                <div className="col-md-6 mb-4">
                    <h2>Donut Chart</h2>
                    <Chart
                        options={donutData.options}
                        series={donutData.series}
                        type={donutData.options.chart.type}
                        width={donutData.options.chart.width}
                    />
                </div>
            </div>
        </div>
    );
}

export default ReportCharts;
