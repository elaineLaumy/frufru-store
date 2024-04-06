import Image from 'next/image';
import { RiShoppingBagLine } from 'react-icons/ri';

type ProductCardProps = {
  name?: string;
  productPrice?: string;
  discount?: string;
  inStock?: boolean;
};
export function ProductCard({
  name,
  productPrice,
  discount,
  inStock,
}: ProductCardProps) {
  name = 'olá';
  inStock = true;
  return (
    <div className="flex flex-col bg-muted/40 border rounded-lg h-80 p-1 w-80 justify-center">
      <Image
        src={'/default.png'}
        alt="Doguinho"
        width={320}
        height={240}
        className="rounded-md border border-primary-foreground"
      />
      <div className="flex justify-between p-2 items-center">
        <h3 className="">{name}</h3>
        {!inStock ? (
          <RiShoppingBagLine size={25} />
        ) : (
          <button>Avise-me!</button>
        )}
      </div>
    </div>
  );
}
