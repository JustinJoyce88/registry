import type { PackageDetails } from "../../api/types/packageDetails";
import { getFeaturedPackages } from "../../api/queries/getFeaturedPackages";

export interface HomeLoaderData {
  featuredPackages: PackageDetails[];
}

export default async function homeLoader(): Promise<HomeLoaderData> {
  const featuredPackages = await getFeaturedPackages();
  return { featuredPackages };
}
