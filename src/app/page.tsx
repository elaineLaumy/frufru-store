import { MasonryCardGrid } from '@/modules/layouts/components/masonry-card-grid';
import { ProductCard } from '@/modules/layouts/components/product-card';

export default function Home() {
  return (
    <main className="container w-full min-h-screen p-4">
      <MasonryCardGrid>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </MasonryCardGrid>
    </main>
  );
}
