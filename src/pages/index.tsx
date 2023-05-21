import Head from "next/head";
import Header from "src/components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Insightful</title>
        <meta
          name="description"
          content="Gere mensagens aleatórias para postar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="aurora-outer sm:max-w-7xl relative min-h-[80vh] flex flex-col gap-2 justify-center items-center m-auto">
        <h1 className="text-3xl font-extrabold drop-shadow-xl text-center text-[#ebe7e7] sm:text-6xl">
          Gerador de mensagens reflexivas
        </h1>
        <h2 className="sm:text-2xl text-xl font-medium text-[#ebe7e7] text-center mt-4">
          Transmita pensamentos aleatórios repletos de sabedoria e reflexão.
        </h2>

        <button className="bg-transparent transition-all duration-300 uppercase border-2 border-white rounded-lg btn-inner text-3xl p-5 mt-4">
          Gerar mensagem
        </button>
      </main>
    </div>
  );
}
