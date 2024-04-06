'use client';

import { useRef } from 'react';
import { FaStar } from 'react-icons/fa6';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { RiMenuFill, RiShoppingBagLine, RiUserHeartLine } from 'react-icons/ri';

export function Header() {
  return (
    <>
      <nav className="p-1 px-2 bg-secondary text-secondary-foreground w-full h-[15%] flex text-sm font-semibold justify-end items-center">
        Help
      </nav>
      <nav className="bg-primary text-primary-foreground p-2 md:p-0 w-full h-[85%] flex flex-col gap-4 sticky top-0">
        <div className="hidden container md:flex justify-between items-center px-5">
          <div className="md:flex justify-center items-center h-full hidden">
            <FaStar size={30} className="text-secondary" />
            <p className="flex flex-col font-extrabold ">
              <span>Laumy</span> <span>Fashion</span>
            </p>
          </div>
          <BasicSearch />
          <div className="flex items-center gap-2">
            <button>
              <RiUserHeartLine size={30} />
            </button>

            <CartDialog />
          </div>
        </div>
        <MobileHeader />
      </nav>
    </>
  );
}

function MobileHeader() {
  return (
    <div className="md:hidden">
      <div className="w-full flex justify-between h-[35%] items-center px-6 ">
        <button>
          <RiMenuFill size={30} />
        </button>
        <div className="flex justify-center items-center h-full ">
          <FaStar size={30} className="text-secondary" />
          <p className="flex flex-col font-extrabold ">
            <span>Laumy</span> <span>Fashion</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button>
            <RiUserHeartLine size={30} />
          </button>

          <CartDialog />
        </div>
      </div>
      <BasicSearch />
    </div>
  );
}

function CartDialog() {
  const dialog = useRef<HTMLDialogElement>(null);

  const open = () => {
    dialog.current?.showModal();
  };
  const close = () => {
    dialog.current?.close();
  };
  return (
    <>
      <dialog
        ref={dialog}
        className="p-5 bg-primary text-primary-foreground rounded-md backdrop:bg-black/50 backdrop:backdrop-blur-none"
      >
        <div className="flex flex-col">
          tá na moda fazer modal com html puro? pq isso é um modal com html puro
          <button
            onClick={close}
            className="w-fit rounded-sm px-2 hover:bg-muted hover:text-muted-foreground bg-secondary text-secondary-foreground"
          >
            Closar
          </button>
        </div>
      </dialog>

      <button onClick={open}>
        <RiShoppingBagLine size={30} />
      </button>
    </>
  );
}

function BasicSearch() {
  return (
    <search className="h-20 w-full flex justify-center items-center gap-2">
      <form
        action=""
        className="flex bg-foreground text-background border-b border-background hover:border-secondary hover:text-secondary"
      >
        <input
          type="text"
          placeholder="O que está buscando?"
          className="bg-foreground text-background outline-none"
        />
        <button type="submit" className="pointer-events-none">
          <PiMagnifyingGlassBold size={30} />
          <p className="sr-only">Pesquisar</p>
        </button>
      </form>
    </search>
  );
}
