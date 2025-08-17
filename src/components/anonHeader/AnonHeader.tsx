import Link from "next/link";

export default function AnonHeader() {
  return (
    <header className="flex items-center justify-between p-2 md:p-4 gap-3 h-20 w-full top-0 relative">
      <h1 className="text-2xl font-bold">SitcomSpeech</h1>
      <nav className="text-md font-semibold">
        <ul className="flex items-center space-x-4 text-xs md:text-md lg:text-lg">
          <li>
            <Link href="#home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
