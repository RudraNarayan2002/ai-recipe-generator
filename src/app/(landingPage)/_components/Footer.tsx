// import { GeistMono } from "geist/font/mono";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full py-4 text-center">
      <Link
        href="https://github.com/aarabii"
        target="_blank"
        rel="noopener noreferrer"
        className={"font-mono text-sm"}
      >
        Made with ❤️ Rudra<sup>&copy;</sup>.
      </Link>
    </footer>
  );
};
