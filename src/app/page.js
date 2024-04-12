import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-yellow h-screen">
      <div>
        <Image
        src={'/img/ondasBlanco.png'}
        width={0}
        height={0}
        alt=""
        sizes="100vw"
        style={{ width: '100%', height: '5%' }}>

        </Image>

        <div className='text-center'>
          <p>Logo</p>
          <div></div>
          <button type="button" className="text-white bg-brown focus:ring-2 focus:outline-none font-medium rounded-2xl text-md px-8 py-2.5 text-center inline-flex items-center me-2 mb-2">
            INICIAR
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#fff" className="h-4 ml-2">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
            </svg>
          </button>
        </div>

        <div className="absolute inset-x-0 bottom-0">
          <Image
          src={'/img/ondasAbajo.png'}
          width={0}
          height={0}
          alt=""
          sizes="100vw"
          style={{ width: '100%'}}>

          </Image>
        </div>
        
      </div>
      
    </main>
  );
}
