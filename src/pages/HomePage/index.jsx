import { useEffect, useState } from "react"
import { CartModal } from "../../components/CartModal"
import { Header } from "../../components/Header"
import { ProductList } from "../../components/ProductList"
import { productsAPI } from "../../axios"
import { ToastContainer } from "react-toastify"
import styles from "./style.module.scss"

export const HomePage = () => {
   const localCart = localStorage.getItem("@cartList")
   const [productList, setProductList] = useState([])
   const [cartList, setCartList] = useState(localCart ? JSON.parse(localCart).data : [] )
   const [value, setValue] = useState("")
   const [isOpen, setIsOpen] = useState(false)

   // useEffect montagem - carrega os produtos da API e joga em productList
   useEffect(() => {
      const timeOut = setTimeout(() => {
         const getProducts = async () => {
            try {
               const { data } = await productsAPI.get("/products")
               const productFilter = data.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()))
               setProductList(productFilter)
            } catch (error) {
               console.log(error)
            }
         }
         
         getProducts()
      }, 500)
      return () => clearTimeout(timeOut)
   }, [value])

   useEffect(() => {
         if(cartList) 
            localStorage.setItem("@cartList", JSON.stringify({data: cartList}))  
     }, [cartList])

   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header value={value} cartList={cartList} setValue={setValue} setIsOpen={setIsOpen}/>
         <main className={styles.main}>
            <ProductList productList={productList} cartList={cartList} setCartList={setCartList} setIsOpen={setIsOpen} />
            {isOpen ? (
            <CartModal cartList={cartList} setCartList={setCartList} setIsOpen={setIsOpen}/>
            ) : null}
         </main>
         <ToastContainer/>
      </>
   );
};
