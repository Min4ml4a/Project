import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function GenshinimpactAllProducts() {
  const getAllProducts = await productByCategory("genshinimpact");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}