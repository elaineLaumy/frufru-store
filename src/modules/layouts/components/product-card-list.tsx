import { ProductCard } from './product-card';

export function ProductCardList() {
  return (
    <main className="container grid grid-cols-2 w-full min-h-screen p-4 gap-2">
      <ProductCard discount="30%" name="calça reta " inStock={true} />
      <ProductCard name="calça de shopping" inStock={false} />
      <ProductCard inStock={true} name="calça de shopping"/>
      <ProductCard inStock={false} name="calça de shopping"/>
      <ProductCard inStock={true}name="calça de shopping" />
      <ProductCard inStock={true} name="calça de shopping"/>
      <ProductCard inStock={false} name="calça de shopping"/>
    </main>
  );
}
