import ProductType from "./ProductType";

interface PromotionalProductType extends ProductType {
  discount: number;
}

export default PromotionalProductType;
