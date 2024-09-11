import { getPackage } from "../../api/queries/getPackage";
import type { Params } from "react-router-dom";
import { PackageDetails } from "../../api/types/packageDetails";

interface LoaderArgs {
  params: Params;
}

export interface DetailsLoaderData {
  details: PackageDetails;
}

export default async function detailsLoader({
  params,
}: LoaderArgs): Promise<DetailsLoaderData> {
  const { name } = params;
  if (!name) {
    throw new Error("Need package name");
  }
  const details = await getPackage(name);
  return { details };
}
