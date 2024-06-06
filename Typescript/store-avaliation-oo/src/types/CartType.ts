import { Product } from "../model";

interface CartType {
    user: string;
    products: Product[]
}

export default CartType;