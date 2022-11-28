import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 max-w-xl m-auto">
      <Link href="/">
        <h1 className="font-bold hover:text-gray-400">
          next<span className="font-light"> xkcd</span>
        </h1>
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

          {/* <li>
            <Link
              href="/"
              legacyBehavior
              className="transition hover:opacity-80"
            >
              <a className="text-sm font-bold">Search</a>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
