import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function HonkaiAllProducts() {
  const getAllProducts = await productByCategory("honkai");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}