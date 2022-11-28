import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-center font-bold mb-4 mt-2 hover:text-gray-400">
      <Link href="https://xkcd.com" target="_blank" rel="noopener noreferrer">
        {" "}
        All comics by xkcd
      </Link>
    </footer>
  );
}
