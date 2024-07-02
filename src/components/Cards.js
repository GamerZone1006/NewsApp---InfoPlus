import React from 'react';

const Cards = ({ mode, news }) => {
  return (
    <div className="container">
      <div className="row">
        {news.map((article, index) => (
          <div key={index} className="col-md-4">
            <div className={`card ${mode}-mode mb-4`}>
              {article.urlToImage && (
                <img src={article.urlToImage} className="card-img-top" alt={article.title} />
              )}
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;