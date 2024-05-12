import { DUMMY_NEWS } from "@/dummy-news";

function InterceptedimagePage({ params }) {
  const newsItemSlug = params.newsId;

  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <div className='fullscreen-image'>
      <h1>Intercepted!</h1>
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}

export default InterceptedimagePage;
