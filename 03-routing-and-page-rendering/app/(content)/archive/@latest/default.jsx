import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";

async function LatestNewsPage() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h2>Lates News</h2>
      <NewsList news={latestNews} />
    </>
  );
}

export default LatestNewsPage;
