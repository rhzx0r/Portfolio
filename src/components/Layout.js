import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    //TODO: Mirar el footer luego
    <> 
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}