import React, { useState, useEffect } from 'react';
import './News.css'; // Assuming you have a CSS file for styling

function News() {
    const [news, setNews] = useState([]);
    const [country, setCountry] = useState('us'); // Default to 'us'
    const [error, setError] = useState(null);

    const fetchNews = () => {
        const apiKey = '029126d88f8c43babacccf680578f9d3'; // Replace with your actual API key
        const endpoint = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;

        fetch(endpoint)
            .then(res => res.json())
            .then(data => setNews(data.articles)) // NewsAPI returns articles under 'articles' key
            .catch(e => setError(e.message));
    };

    useEffect(() => {
        fetchNews();
    }, [country]); // Re-fetch news whenever the country changes

    return (
        <div className="news">
            <h2 className='latest'>Latest News</h2>

            <select className='country 'value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="us">United States</option>
                <option value="gb">United Kingdom</option>
                <option value="ae">United Arab Emirates</option>
                <option value="au">Australia</option>
                <option value="in">India</option>
                {/* Add more countries as needed */}
            </select>

            {error && <p>Error fetching news: {error}</p>}
            {news && news.length > 0 ? (
                <div className="news-list">
                    {news.map((item, index) => (
                        <div key={index} className="news-item">
                            {/* Assuming 'urlToImage' is used for image and 'title' and 'description' for text */}
                            {/* <img src={item.urlToImage} alt={item.title} className="news-image" /> */}
                            <div className="news-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <span className="news-category">
                                    {item.source.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No news available at the moment.</p>
            )}
        </div>
    );
}

export default News;
