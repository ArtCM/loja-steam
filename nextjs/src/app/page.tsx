'use client'

import Card from "./components/Card";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import Karambit from '../../public/assets/images/karambit.png';


export default function Home() {
  const [filters, setFilters] = useState({ selectedCategories: [], priceRange: 50 });

  const handleApplyFilters = (appliedFilters: any) => {
    setFilters(appliedFilters);
  };

  return (
    <>
      < Header/>
      
      <main>

        <section className="products">
          <div className="products__list">
            <Card
              imageSrc={Karambit.src}
              title="Karambit"
              description={
                <>
                  Valor: 200R$ <br /> Float: 1 
                </>
              }
              buttonText="Adicionar ao Carrinho"
            />
          </div>
          <aside className="products__filter">
            <Box>
              <Filter onApplyFilters={handleApplyFilters} />

              <Box mt={10}>
                <Text fontSize="xl">Filtros Aplicados:</Text>
                <Text>Categorias: <br/> {filters.selectedCategories.join(", ") || "Nenhuma"}</Text>
                <Text>Valor Maximo: {filters.priceRange}</Text>
              </Box>
            </Box>
          </aside>
        </section>

      </main>

      < Footer/>
    </>
  );
}
