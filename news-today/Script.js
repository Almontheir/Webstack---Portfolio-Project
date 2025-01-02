// Sample news data
const newsData = {
  trending: [
    { title: "Breaking: Major Event Shakes the World", content: "Details about the major event that is trending globally." },
    { title: "Celebrity News: Latest Updates", content: "The latest updates on your favorite celebrities." }
  ],
  sports: [
    { title: "Football: Champions League Results", content: "The latest results from the Champions League matches." },
    { title: "Tennis: Grand Slam Updates", content: "Updates from the ongoing Grand Slam tournament." }
  ],
  politics: [
    { title: "Election 2023: Key Developments", content: "Key developments in the upcoming elections." },
    { title: "Global Summit: Leaders Meet", content: "World leaders gather for an important global summit." }
  ],
  economics: [
    { title: "Stock Market: Latest Trends", content: "The latest trends in the global stock market." },
    { title: "Inflation: Impact on Economy", content: "How inflation is affecting the global economy." }
  ],
  technology: [
    { title: "AI Breakthrough: New Innovations", content: "The latest breakthroughs in artificial intelligence." },
    { title: "Gadgets: New Releases", content: "The newest gadgets hitting the market." }
  ]
};

// Function to display news
function showNews(category) {
  const newsContainer = document.getElementById('news-container');
  const newsHeading = document.getElementById('news-heading');

  // Clear previous news
  newsContainer.innerHTML = '';

  // Set heading
  newsHeading.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} News`;

  // Display news
  newsData[category].forEach(news => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.innerHTML = `
      <h3>${news.title}</h3>
      <p>${news.content}</p>
    `;
    newsContainer.appendChild(newsItem);
  });
}

// Load trending news by default
window.onload = () => showNews('trending');
