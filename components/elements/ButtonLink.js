import Link from "next/link"

export default function ButtonLink({ href, mt = 4, pl = 6, pr = 6, children}) {
  return (
    <Link href={href} passHref>
      <a className={`mt-${mt} py-2 pl-${pl} pr-${pr} w-full flex space-x-2 items-center font-semibold bg-white dark:bg-gray-900 rounded-full bg-opacity-30 dark:bg-opacity-30`}>
        {children}
      </a>
    </Link>
  )
}
