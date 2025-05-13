// File: App.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function News() {
    const [articles, setArticles] = useState([]);

    const API_KEY = 'YOUR_NEWS_API_KEY'; // Replace with your key from newsapi.org

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => setArticles(data.articles))
            .catch((err) => console.error('Failed to fetch news:', err));
    }, []);

    return (
        <div className="container newspaper-bg py-5 px-4">
            <header className="mb-5 border-bottom pb-3 text-center">
                <h1 className="display-3 font-serif text-uppercase fw-bold">📰 The Daily Times</h1>
                <p className="text-muted fst-italic">Your trusted source for today's top headlines</p>
            </header>

            <div className="row gx-5 gy-4">
                <div className="col-md-6">
                    <div className="p-4 border border-dark-subtle bg-white shadow-sm h-100">
                        <h5 className="text-uppercase text-decoration-underline fw-bold font-serif">World News</h5>
                        <h4 className="fw-bold font-serif mb-2">Sample Headline</h4>
                        <p className="text-muted small">Author Name | May 13, 2025</p>
                        <p className="text-justify" style={{ textAlign: 'justify' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                        </p>
                        <img
                            src="https://via.placeholder.com/400x200"
                            className="img-fluid border my-3"
                            alt="news"
                        />
                        <a href="#" className="btn btn-outline-dark btn-sm">Read Full Article</a>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="p-4 border border-dark-subtle bg-white shadow-sm h-100">
                        <h5 className="text-uppercase text-decoration-underline fw-bold font-serif">Technology</h5>
                        <h4 className="fw-bold font-serif mb-2">Tech Headline</h4>
                        <p className="text-muted small">Jane Doe | May 13, 2025</p>
                        <p className="text-justify" style={{ textAlign: 'justify' }}>
                            This is another sample news article to showcase the newspaper column layout. Readers can expect updates daily.
                        </p>
                        <img
                            src="https://via.placeholder.com/400x200"
                            className="img-fluid border my-3"
                            alt="news"
                        />
                        <a href="#" className="btn btn-outline-dark btn-sm">Read Full Article</a>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default News;
