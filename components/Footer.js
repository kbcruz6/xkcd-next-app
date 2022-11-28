import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-center font-bold mb-4 mt-4 hover:text-gray-400">
      <Link
        href="https://xkcd.com"
        target="_blank"
        rel="noopener noreferrer"
        className="italic"
      >
        All comics by xkcd
      </Link>
    </footer>
  );
}

{
  /* <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
  <span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
  <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
    hover effect 2
  </span>
</button>; */
}
