import type { SearchLoaderData } from "./searchLoader";
import { useLoaderData } from "react-router-dom";
import PackageListItem from "../../components/PackageListItem";

export default function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderData;

  if (!searchResults) {
    return <div>Loading...</div>;
  }

  const renderPackages = () => {
    return searchResults.map((pack) => (
      <PackageListItem key={pack.name} pack={pack} />
    ));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Search Results</h1>
      <div className="space-y-4 mt-4">{renderPackages()}</div>
    </div>
  );
}
