import { MdDelete } from "react-icons/md"
import styles from "./style.module.scss"

export const CartItemCard = ({ product, cartList, setCartList }) => {
   const removeItem = () => {
      const listFiltered = cartList.filter((cart) => {
         if (cart.id !== product.id) {
            return cart
         }
      })
      setCartList(listFiltered)
   }

   return (
      <li className={styles.divLi}>
         <div>
            <img src={product.img} alt={product.name} />
            <div className={styles.divContent}>
               <h3 className="title1">{product.name}</h3>
               <span>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>

            </div>
         </div>
         <button onClick={removeItem} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
