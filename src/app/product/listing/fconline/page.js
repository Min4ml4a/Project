import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function FconlineAllProducts() {
  const getAllProducts = await productByCategory("fconline");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}