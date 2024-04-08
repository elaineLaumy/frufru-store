import Image from 'next/image';
import { TbShoppingBagPlus } from 'react-icons/tb';

type ProductCardProps = {
  name: string;
  productPrice?: string;
  discount?: string;
  inStock: boolean;
  variants?: string;
};
export function ProductCard({
  name,
  productPrice,
  discount,
  inStock,
  variants,
}: ProductCardProps) {
  return (
    <div className="flex flex-col w-full bg-backgroundCard rounded-md border min-h-fit max-h-80 p-2">
      <div className="flex w-full">
        {discount ? <BadgeProduct>{discount}</BadgeProduct> : null}
        {!inStock && (
          <BadgeProduct className="bg-muted text-muted-foreground">
            Esgotado!
          </BadgeProduct>
        )}
      </div>
      <Image
        src={'/calca.jpeg'}
        alt="Doguinho"
        width={240}
        height={240}
        className=""
      />
      <div className="flex flex-col justify-between p-2 gap-2">
        <h3 className="font-medium text-base capitalize overflow-ellipsis">
          {name}
        </h3>

        <div className="w-full flex flex-col items-center gap-2">
          <div className="w-full flex justify-betwee items-center">
            <div className="w-full flex gap-1">
              <p className=" bg-red-600 w-4 h-4 rounded-full"></p>
              <p className=" bg-black w-4 h-4 rounded-full"></p>
              <p className=" bg-blue-500  w-4 h-4 rounded-full"></p>
            </div>
            {inStock && <TbShoppingBagPlus size={30} />}
          </div>

          {!inStock && (
            <button className="bg-muted text-muted-foreground font-semibold px-2 p-2 rounded-sm outline-none w-full">
              Avise-me!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function BadgeProduct({
  children,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className="absolute w-fit text-secondary font-bold bg-secondary-foreground py-0.5 px-1.5 rounded">
      {children}
    </div>
  );
}
