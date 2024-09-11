import { searchPackages } from "../../api/queries/searchPackages";
import type { PackageSummary } from "../../api/types/packageSummary";

export interface SearchLoaderData {
  searchResults: PackageSummary[];
}

export async function searchLoader({
  request,
}: {
  request: Request;
}): Promise<SearchLoaderData> {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  if (!term) {
    throw new Error("Need search term");
  }

  const results = await searchPackages(term);
  return {
    searchResults: results,
  };
}
