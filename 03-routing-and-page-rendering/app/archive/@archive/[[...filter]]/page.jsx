import NewsList from "@/components/NewsList";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";

function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const news = getNewsForYear(filter);
  const links = getAvailableNewsYears();

  return (
    <header id='archive-header'>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default FilteredNewsPage;
