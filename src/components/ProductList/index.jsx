import styles from './style.module.scss'
import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, cartList, setCartList, setIsOpen }) => {
   return (
      <ul className={styles.container}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} setCartList={setCartList} setIsOpen={setIsOpen} cartList={cartList}/>
         ))}
      </ul>
   );
};
