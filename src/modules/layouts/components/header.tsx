'use client';

import { useRef } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa6';
import { GiShoppingCart } from 'react-icons/gi';
import { PiMagnifyingGlass } from 'react-icons/pi';

export function Header() {
  return (
    <>
      <nav className="p-1 px-2 bg-secondary text-secondary-foreground w-full h-[15%] flex text-sm font-semibold justify-end items-center">
        Help
      </nav>
      <section className="bg-primary text-primary-foreground p-4 w-full h-[85%] flex flex-col gap-4 sticky top-0">
        <div className="w-full flex justify-between h-[35%] items-center px-6">
          <button>
            <CiMenuBurger size={30} />
          </button>
          <div className="flex justify-center items-center h-full">
            <FaStar size={30} className="text-secondary" />
            <p className="flex flex-col font-extrabold ">
              <span>Laumy</span> <span>Fashion</span>
            </p>
          </div>
          <CartDialog />
        </div>
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
              <PiMagnifyingGlass size={30} />
              <p className="sr-only">Pesquisar</p>
            </button>
          </form>
        </search>
      </section>
    </>
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
        <GiShoppingCart size={30} />
      </button>
    </>
  );
}
