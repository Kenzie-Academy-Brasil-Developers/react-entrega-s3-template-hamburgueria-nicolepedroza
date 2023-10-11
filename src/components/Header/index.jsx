import Logo from "../../assets/Logo.svg"
import { MdSearch, MdShoppingCart } from "react-icons/md"
import styles from "./style.module.scss"


export const Header = ({ value, cartList, setValue, setIsOpen }) => {

   return (
      <header className={styles.container}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div className={styles.div}>
         <form>
            <input
               type="text"
               value={value}
               onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">
               <MdSearch size={21} />
            </button>
         </form>
         </div>
         <button className={styles.buttonShopping} onClick={() => setIsOpen(true)}>
            <MdShoppingCart size={21} color="grey"/>
            <span>{cartList ? cartList.length : 0}</span>
         </button>
      </header>
   );
};

