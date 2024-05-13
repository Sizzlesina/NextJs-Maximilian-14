import ModalBackdrop from "@/components/ModalBackdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

async function InterceptedimagePage({ params }) {
  const newsItemSlug = params.newsId;

  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      {/* Client side backdrop to navigate to the previous route  */}
      <ModalBackdrop />
      <dialog className='modal' open>
        <div className='fullscreen-image'>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}

export default InterceptedimagePage;
