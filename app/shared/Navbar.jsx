import React from 'react'
import Link from 'next/link'
import styles from '@/styles/navbar.module.css'

const routes = [
	{ name: "Server", path: "/server" },
	{ name: "Client", path: "/client" },
	{ name: "Staticprop", path: "/staticprops" }
]

const Navbar = () => {
  return (
    <>
      {routes.map(r =>
        <Link className={ styles.navlinks } key={r.path} href={r.path}>{r.name}</Link>
      )}
		</>
  )
}

export default Navbar