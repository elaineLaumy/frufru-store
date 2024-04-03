import { CiMenuBurger } from 'react-icons/ci';
import { GiBowTieRibbon, GiShoppingBag } from 'react-icons/gi';
import { PiMagnifyingGlass } from 'react-icons/pi';

export function Header() {
  return (
    <main className="flex flex-col w-full h-40">
      <nav className="px-2 bg-secondary text-secondary-foreground w-full h-15 flex text-base font-semibold justify-end items-center">
        Help
      </nav>
      <section className="bg-primary text-primary-foreground p-4 w-full px-6 h-25 flex flex-col gap-4">
        <div className="w-full flex justify-between h-10">
          <CiMenuBurger size={30} />
          <GiBowTieRibbon size={30} />
          <GiShoppingBag size={30} />
        </div>
        <search className="h-15 w-full flex justify-center items-center gap-2">
          <form
            action=""
            className=" flex bg-foreground text-background border-b border-background"
          >
            <input
              type="text"
              placeholder="O que está buscando?"
              className="bg-foreground text-background "
            />
            <button type="submit">
              <PiMagnifyingGlass size={30} />
              <p className="sr-only">Pesquisar</p>
            </button>
          </form>
        </search>
      </section>
    </main>
  );
}
