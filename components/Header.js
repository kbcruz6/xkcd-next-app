import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 max-w-xl m-auto">
      <Link href="/">
        <p className=" relative group font-bold hover:text-gray-400">
          <span className="text-sm font-bold hover:text-gray-400">
            next<span className="font-light"> xkcd</span>
          </span>
          <span className="absolute -bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all group-hover:w-full"></span>
        </p>
      </Link>
      <nav>
        <ul className="flex flex-row gap-2">
          <li>
            <Link
              href="/"
              legacyBehavior
              className="transition hover:opacity-80"
            >
              <a>
                <p className=" relative group">
                  <span className="text-sm font-bold hover:text-gray-400">
                    Home
                  </span>
                  <span className="absolute -bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all group-hover:w-full"></span>
                </p>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
