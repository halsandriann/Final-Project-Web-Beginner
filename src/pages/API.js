import React, { useEffect, useState } from 'react';

export default function API() {
  const [articles, setArticels] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(function () { //useEffect untuk fetch data dari API
    document.title = 'News';
    async function getArticles() {
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
      const response = await request.json();

      setArticels(response);
      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">News</h1>
      <p className="section-description">
        Spaceflight News ini dibuat sebagai solusi untuk ketika saya ingin mengembangkan web untuk Spaceflight News dengan banyak situs berita dengan API yang berbeda. Untuk memudahkan pembaca, project web ini akan menggabungkan metadata
        dari situs berita tersebut dan mempublikasikannya melalui API yang dapat diakses oleh umum.{' '}
      </p>

      {loading && <i>Loading Articles........</i>}

      {!loading && (
        <div className="articles">
          {articles.map(function (article) {
            return (
              <article key={article.id} className="article">
                <h2 className="article-title">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </h2>
                <img src={article.imageUrl} alt={article.title} className="article-image" />
                <p className="article-summary">{article.summary}</p>
                <p className="article-site">Source: {article.newsSite}</p>
                <time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
