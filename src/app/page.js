import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-yellow h-screen flex flex-col justify-center items-center">
      <Image
        src={'/img/ondasBlanco.png'}
        width={0}
        height={0}
        alt=""
        sizes="100vw"
        className="absolute top-0 left-0 w-full h-96">

      </Image>

      <Image
        src={'/img/logo.png'}
        width={0}
        height={0}
        alt=""
        sizes="100vw"
        className="h-64 w-64">
      </Image>

      <p className="text-white m-2">"Tu comida favorita, lista para llevar!"</p>

      <button type="button" className="text-white bg-brown focus:ring-2 focus:outline-none font-medium rounded-2xl text-md px-8 py-2.5 text-center inline-flex items-center m-3">
        INICIAR
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#fff" className="h-4 ml-2">
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
        </svg>
      </button>

      <Image
          src={'/img/ondasAbajo.png'}
          width={0}
          height={0}
          alt=""
          sizes="100vw"
          className="absolute bottom-0 left-0 w-full h-96">
      </Image>
    </main>
  );
}
