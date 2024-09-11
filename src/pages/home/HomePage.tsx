import { Link, useLoaderData } from "react-router-dom";
import { HomeLoaderData } from "./homeLoader";

export function HomePage() {
  const { featuredPackages } = useLoaderData() as HomeLoaderData;

  const renderFeaturedPackages = () => {
    return featuredPackages.map((pkg) => (
      <div className="flex flex-col justify-between gap-3 border rounded shadow p-4 m-1">
        <div className="flex flex-col gap-1 border-bottom border-gray-400">
          <div className="font-bold text-center">{pkg.name}</div>
          <div className="text-sm text-gray-500">{pkg.description}</div>
          <div className="text-sm text-gray-500">
            {pkg.maintainers.length} maintainers
          </div>
        </div>
        <Link
          to={`/packages/${pkg.name}`}
          className="border rounded border-gray-900 text-center"
        >
          View
        </Link>
      </div>
    ));
  };

  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold">NPM Registry</h1>
        <h1>Featured Packages</h1>
        <p className="mx-auto max-w-[600px] text-gray-500">
          The package manager for Javascript. Search and view packages.
        </p>
      </div>
      <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch">
        {renderFeaturedPackages()}
      </div>
    </div>
  );
}
