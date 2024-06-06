import { PromotionalProductType } from "../types";
import Product from "./Product";

class PromotionalProduct extends Product {
  discount: number;

  constructor(data: PromotionalProductType) {
    super({ name: data.name, value: data.value });
    this.discount = data.discount;
  }

  getValuWithDiscount() {
    return this.value - this.discount;
  }
}

export default PromotionalProduct;
