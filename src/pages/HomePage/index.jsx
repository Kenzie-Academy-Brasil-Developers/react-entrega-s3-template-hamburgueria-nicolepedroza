import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { productsAPI } from "../../axios";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [value, setValue] = useState("");
   console.log(value)

   // useEffect montagem - carrega os produtos da API e joga em productList
   useEffect(() => {
      const timeOut = setTimeout(() => {
      const getProducts = async () => {
         try {
            const { data } = await productsAPI.get("/products", { params: {value} })
            setProductList(data)
            
         } catch (error) {
            console.log(error)
         }
      }
      getProducts()
   }, 500)
      return () => clearTimeout(timeOut)
   }, [value])
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header value={value} setValue={setValue}/>
         <main>
            <ProductList productList={productList} />
            <CartModal cartList={cartList} />
         </main>
      </>
   );
};
