'use client'
import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"
import { motion } from "framer-motion"
const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  }
]
export const Header = () => {
  return (
    <motion.header
      className="absolute top-0 w-full z-10 h-24 flex justify-center"
      initial={{top: -100}}
      animate={{top: 0}}
      transition={{duration: 0.5}}

    >
      <div className="container flex items-center justify-between gap-5" >
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="icaro-logo"
            width={68}
            height={69}
          />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10">
          {
            NAV_ITEMS.map((item) => (
              <NavItem {...item} key={item.label}/>
            ))    
          }
        </nav>
      </div>
    </motion.header>
  )
}