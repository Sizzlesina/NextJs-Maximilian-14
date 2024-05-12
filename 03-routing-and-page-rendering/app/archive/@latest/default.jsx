import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";

function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Lates News</h2>
      <NewsList news={latestNews} />
    </>
  );
}

export default LatestNewsPage;
