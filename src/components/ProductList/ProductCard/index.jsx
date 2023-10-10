import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import styles from './style.module.scss'
export const ProductCard = ({ product, cartList, setCartList, setIsOpen }) => {
    const addItem = () => {
        const findItem = cartList.find((cart) => cart.id === product.id)
        if(!findItem){
            toast.success('Item adicionado ao carrinho com sucesso')
            setCartList([...cartList, product ])
        } else{
            toast.error('Este item ja foi adicionado ao carrinho')
        }
    }
    return(
        <li className={styles.container}>
            <div className={styles.divImg}>
                <img src={product.img} alt={product.name} />
            </div>

            <div className={styles.divContent}> 
                <h3 className='title1'>{product.name}</h3>
                <span className='title2'>{product.category}</span>
                <span className={styles.spanGreen}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={() => {
                    addItem([...cartList, product ])
                }}>Adicionar</button>
            </div>
        </li>
    )
}
