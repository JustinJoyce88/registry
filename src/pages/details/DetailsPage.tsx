import type { DetailsLoaderData } from "./detailsLoader";
import { useLoaderData } from "react-router-dom";

export default function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderData;
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold my-6">{details.name}</h1>
      <div>
        <h3 className="text-lg font-bold">Description</h3>
        <div className="p-3 bg-gray-200">{details.description}</div>
      </div>

      <div>
        <h3 className="text-lg font-bold">License</h3>
        <div className="p-3 bg-gray-200">{details.license}</div>
      </div>
      {details.author?.name && (
        <div>
          <h3 className="text-lg font-bold">Author</h3>
          <div className="p-3 bg-gray-200">{details.author.name}</div>
        </div>
      )}
    </div>
  );
}
