import { MdClose } from "react-icons/md"
import { CartItemCard } from "./CartItemCard"
import styles from "./style.module.scss"
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const CartModal = ({ cartList, setCartList, setIsOpen }) => {
   console.log(cartList)
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div className={styles.divModal} role="dialog">
         <div className={styles.divModalTop}>
            <div className={styles.divHeader}>
               <h2 className="title1">Carrinho de compras</h2>
               <button onClick={() => setIsOpen(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} color="white" />
               </button>
            </div>

         <div>
            <ul className={styles.divUl}>
               {cartList.map((product) => (
                  <CartItemCard key={product.id} product={product} cartList={cartList} setCartList={setCartList}/>
                  ))}
            </ul>
         </div>
         <div className={styles.divBottom}>
            <div className={styles.divPrice}>
               <span>Total</span>
               <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
            <button onClick={() => {
               setIsOpen(false)
               toast.success('Itens removidos com sucesso')
               setCartList([])}
               }>Remover todos</button>
         </div>
         </div>
      </div>
   );
};
