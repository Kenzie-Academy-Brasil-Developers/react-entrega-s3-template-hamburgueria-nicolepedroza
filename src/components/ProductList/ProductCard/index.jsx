import styles from './style.module.scss'
export const ProductCard = ({ product }) => {
    return(
        <li className={styles.container}>
            <img src={product.img} alt={product.name} />
            <div>
                <h3 className='title1'>{product.name}</h3>
                <span className='title2'>{product.category}</span>
                <span className={styles.spanGreen}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button>Adicionar</button>
            </div>
        </li>
    )
}