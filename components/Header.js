import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 max-w-xl m-auto">
      <Link href="/">
        <h1 className="font-bold">
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
              <a className="text-sm font-bold">Home</a>
            </Link>
          </li>

          <li>
            <Link
              href="/"
              legacyBehavior
              className="transition hover:opacity-80"
            >
              <a className="text-sm font-bold">Search</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
