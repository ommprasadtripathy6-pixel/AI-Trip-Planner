import "./Dashboard.css";

function Dashboard() {
    const destinations = [
        { name: "Goa", visits: 2840 },
        { name: "Manali", visits: 2310 },
        { name: "Jaipur", visits: 1950 },
        { name: "Kerala", visits: 1780 },
        { name: "Puri", visits: 1520 },
    ];

    return (
        <main className="dashboard">

            {/* Header */}
            <section className="dashboard-header">
                <div>
                    <p className="dashboard-tagline">
                        AI TRIP PLANNER
                    </p>

                    <h1>Travel Insights</h1>

                    <p>
                        Discover travel trends and the most popular
                        destinations among travelers.
                    </p>
                </div>

                <select className="year-select">
                    <option>2025</option>
                    <option>2024</option>
                    <option>2023</option>
                </select>
            </section>


            {/* Statistics */}
            <section className="stats-grid">

                <div className="stat-card">
                    <span>👥</span>
                    <h3>Total Travelers</h3>
                    <strong>12,450</strong>
                    <small>↑ 18% from previous year</small>
                </div>

                <div className="stat-card">
                    <span>🌍</span>
                    <h3>Popular Destination</h3>
                    <strong>Goa</strong>
                    <small>2,840 visits</small>
                </div>

                <div className="stat-card">
                    <span>✈️</span>
                    <h3>Total Trips</h3>
                    <strong>8,920</strong>
                    <small>↑ 12% from previous year</small>
                </div>

                <div className="stat-card">
                    <span>💰</span>
                    <h3>Average Budget</h3>
                    <strong>₹18,500</strong>
                    <small>Per trip</small>
                </div>

            </section>


            {/* Main Analytics */}
            <section className="analytics-grid">

                {/* Popular destinations */}
                <div className="analytics-card destination-card">

                    <div className="card-heading">
                        <div>
                            <h2>Most Visited Destinations</h2>
                            <p>Traveler visits in 2025</p>
                        </div>
                    </div>

                    <div className="destination-list">

                        {destinations.map((destination, index) => {

                            const maxVisits = destinations[0].visits;
                            const percentage =
                                (destination.visits / maxVisits) * 100;

                            return (
                                <div
                                    className="destination-item"
                                    key={destination.name}
                                >

                                    <div className="destination-info">

                                        <span className="rank">
                                            #{index + 1}
                                        </span>

                                        <span className="destination-name">
                                            {destination.name}
                                        </span>

                                        <span className="visit-count">
                                            {destination.visits.toLocaleString()}
                                        </span>

                                    </div>

                                    <div className="progress-background">
                                        <div
                                            className="progress-bar"
                                            style={{
                                                width: `${percentage}%`
                                            }}
                                        ></div>
                                    </div>

                                </div>
                            );
                        })}

                    </div>
                </div>


                {/* Travel months */}
                <div className="analytics-card">

                    <h2>Popular Travel Months</h2>

                    <p className="chart-subtitle">
                        Number of trips by month
                    </p>

                    <div className="month-chart">

                        <div className="month">
                            <div
                                className="month-bar"
                                style={{ height: "45%" }}
                            ></div>
                            <span>Jan</span>
                        </div>

                        <div className="month">
                            <div
                                className="month-bar"
                                style={{ height: "65%" }}
                            ></div>
                            <span>Apr</span>
                        </div>

                        <div className="month">
                            <div
                                className="month-bar"
                                style={{ height: "85%" }}
                            ></div>
                            <span>May</span>
                        </div>

                        <div className="month">
                            <div
                                className="month-bar"
                                style={{ height: "60%" }}
                            ></div>
                            <span>Jul</span>
                        </div>

                        <div className="month">
                            <div
                                className="month-bar"
                                style={{ height: "95%" }}
                            ></div>
                            <span>Dec</span>
                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Dashboard;