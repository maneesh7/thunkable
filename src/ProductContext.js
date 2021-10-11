import { createContext } from "react";

const ProductContext = createContext({
  productsData: [],
  setProductsData: () => {},
  newSelectedProduct: 0,
  selectedProductId: 0,
  setSelectedProductId: () => {}
});

export default ProductContext;
