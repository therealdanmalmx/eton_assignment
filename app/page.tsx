import Link from "next/link";

export default function Home() {
    return (
      <div className="flex flex-col h-screen bg-center bg-cover overflow-hidden bg-home-image bg-opacity-10 bg-blend-overlay bg-slate-900">
        <div className="pt-12 text-center">
          <div className="text-white text-3xl font-bold">Eton</div>
          <div className="text-white">Quality Shirts and Accessories</div>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <Link href="/products">
              <button className="bg-white px-14 py-4 opacity-90 transition-colors mx-auto my-auto capitalize">Products</button>
          </Link>
        </div>
      </div>
  );
}


