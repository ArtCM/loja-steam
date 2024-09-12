import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";


export default function Home() {
  return (
    <>
      < Header/>
      
      <main className="container">
        <section className="search">

        </section>

        <section className="products">
          <div className="products__list">
            < Card/>
          </div>
          <aside className="products__filter">

          </aside>
        </section>
      </main>

      < Footer/>
    </>
  );
}
