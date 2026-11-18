

import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Explore.css";

function Explore() {
  const [search, setSearch] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Get selected category from URL
  const category = searchParams.get("category") || "";

  // Fetch destinations from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/destinations")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch destinations");
        }
        return response.json();
      })
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Search and category filtering
  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      `${destination.name} ${destination.location}`
        .toLowerCase()
        .includes(search.trim().toLowerCase());

    const matchesCategory =
      !category || destination.category === category;

    return matchesSearch && matchesCategory;
  });

  // Navigate to Planner page
  const handleExplore = (destination) => {
    navigate(
      `/planner?destination=${encodeURIComponent(destination.name)}`
    );
  };

  return (
    <>
      <Navbar />

      <main className="explore-page">

        {/* SECTION 1: Explore Hero */}
        <section className="explore-hero">
          <div className="explore-content">

            <span className="explore-badge">
              EXPLORE DESTINATION
            </span>

            <h1>
              Discover Your
              <br />
              Next Destination
            </h1>

            <p>
              Explore beautiful destinations, discover new experiences,
              and find the perfect place for your next journey.
            </p>

            {/* Search Form */}
            <form
              className="explore-search"
              onSubmit={(event) => {
                event.preventDefault();

                document
                  .getElementById("popular-destinations")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <input
                type="text"
                placeholder="Search destinations..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                aria-label="Search destinations"
              />

              <button type="submit">
                Search
              </button>
            </form>

          </div>
        </section>

        {/* SECTION 2: Popular Destinations */}
        <section
          className="destinations-section"
          id="popular-destinations"
        >
          <div className="destinations-heading">

            <span>POPULAR DESTINATIONS</span>

            <h2>Explore Amazing Places</h2>

            <p>
              Discover beautiful destinations and find your next
              unforgettable journey.
            </p>

          </div>

          {/* Destination Cards */}
          <div className="destination-grid">

            {loading && (
              <p>Loading destinations...</p>
            )}

            {error && (
              <p className="no-destinations">
                {error}. Please try again.
              </p>
            )}

            {!loading && !error && (
              filteredDestinations.length > 0 ? (

                filteredDestinations.map((destination) => (

                  <article
                    className="destination-card"
                    key={destination.name}
                  >

                    <div
                      className="destination-image"
                      style={{
                        backgroundImage: `url("${destination.image}")`,
                      }}
                    >

                      <div className="destination-overlay">

                        <span>
                          {destination.location}
                        </span>

                        <h3>
                          {destination.name}
                        </h3>

                        <p>
                          {destination.description}
                        </p>

                        <button
                          type="button"
                          onClick={() => handleExplore(destination)}
                        >
                          Plan This Trip
                        </button>

                      </div>

                    </div>

                  </article>

                ))

              ) : (

                <p className="no-destinations">
                  No destinations found. Try another search.
                </p>

              )
            )}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Explore;

