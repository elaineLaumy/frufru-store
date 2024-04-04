import { FaStar } from 'react-icons/fa6';

export function Footer() {
  return (
    <div className="relative">
      <div className="relative"></div>
      <footer className="relative w-full h-full items-center bg-secondary justify-center flex flex-col text-sm text-secondary-foreground">
        <div className="w-full flex flex-col lg:grid lg:grid-cols-3 py-5 px-5">
          <Newsletter />

          <div className="pt-2">aqui sera algo</div>
          <div>aqui tbm</div>
        </div>
      </footer>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="col-span-2 w-full flex flex-col gap-4 p-0 pb-4 border-b ">
      <span className="w-full flex-col gap-2">
        {' '}
        <h2 className="font-bold text-lg text-secondary-foreground w-full flex p-0 items-center gap-2">
          Newsletter <FaStar size={20} className="text-primary" />
        </h2>
        <p className="text-secondary-foreground p-0">
          Inscreva-se no nosso canal de novidades!
        </p>
      </span>
      <div className="w-full flex ">
        <form action="" className="w-full flex gap-1">
          <input
            type="text"
            className="w-full p-2 rounded-sm outline-none bg-secondary-foreground placeholder-secondary"
            placeholder="email@mail.com"
          />
          <button className="bg-muted text-muted-foreground font-semibold px-4 p-2 rounded-sm outline-none">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
