import { Box, Checkbox, CheckboxGroup, Stack, Input, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Filter({ onApplyFilters }: { onApplyFilters: (filters: any) => void }) {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<number | string>("");

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPriceRange(value);
  };

  const applyFilters = () => {
    onApplyFilters({
      selectedCategories,
      priceRange: priceRange !== "" ? Number(priceRange) : undefined
    });
  };

  return (
    <Box p={5} borderWidth="1px" borderRadius="lg" boxShadow="md">
      <Text fontSize="lg" mb={4}>Filtro por Categoria</Text>
      <CheckboxGroup value={selectedCategories} onChange={handleCategoryChange}>
        <Stack spacing={3}>
          <Checkbox value="facas">Faca</Checkbox>
          <Checkbox value="pistolas">Pistola</Checkbox>
          <Checkbox value="rifles">Rifle</Checkbox>
        </Stack>
      </CheckboxGroup>

      <Text fontSize="lg" mt={6} mb={4}>Filter by Price</Text>
      <Input
        type="number"
        placeholder="Enter price"
        value={priceRange}
        onChange={handlePriceChange}
      />

      <Text mt={2}>Valor Maximo: {priceRange}</Text>

      <Button mt={6} colorScheme="teal" onClick={applyFilters}>
        Apicar Filtros
      </Button>
    </Box>
  );
}
