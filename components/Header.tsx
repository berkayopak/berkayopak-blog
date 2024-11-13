import Link from 'next/link'
import { useState } from 'react'
import { Icon } from './Icon'

const menuItemClasses = 'text-xl font-medium my-4 w-full flex items-center gap-3 text-sm tracking-wide '
const iconClasses = 'size-8 opacity-70'

export default function Header() {
  const [open, setOpen] = useState(false)
  let routes: { to: string, icon: string, text: string }[] = [
    { "to": "/about", "icon": "about", "text": "About" },
    { "to": "/blog", "icon": "blog", "text": "Blog" },
    { "to": "/tools", "icon": "tools", "text": "Tools" },
    { "to": "/resources", "icon": "resources", "text": "Resources" },
    { "to": "/tags", "icon": "tag", "text": "Tags" },
    { "to": "/contact", "icon": "contact", "text": "Contact" },
];

  return (
    <header className="bg-slate-200 dark:bg-slate-800 fixed w-full z-50">
      <nav className="flex filter drop-shadow-md bg-slate-200 dark:bg-slate-800 px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen} routes={routes}/>
            <div className="w-3/12 flex items-center hidden lg:block">
                <a className="text-2xl font-semibold" href="/">berkayopak.tr</a>
            </div>
            <div className="w-9/12 flex items-center lg:hidden">
                <a className="text-2xl font-semibold" href="/">berkayopak.tr</a>
            </div>
            <div className="w-9/12 flex items-center hidden lg:block">
              <HeaderContent open={open} setOpen={setOpen} routes={routes}/>
            </div>
            <div className="w-3/12 flex items-center lg:hidden justify-end">
              <HeaderContent open={open} setOpen={setOpen} routes={routes}/>
            </div>
        </nav>
    </header>
  )
}

function HeaderContent({open, setOpen, routes} : {open: boolean, setOpen: Function, routes: {to:string;icon:string;text:string;}[]}){
  return (
    <div>
      <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center lg:hidden" onClick={() => {setOpen(!open)}}>
        {/* hamburger button */}
        <span className={`h-1 w-full bg-black dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
        <span className={`h-1 w-full bg-black dark:bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
        <span className={`h-1 w-full bg-black dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
    </div>

    <div className="hidden lg:flex justify-end">
      {routes.map((route: {to:string; icon:string; text:string;}, index:any) => {
        return (
          <NavLink to={route.to}>
            {route.text.toUpperCase()}
          </NavLink>
          
        )
      })}
    </div>
  </div>
  )
}

function MobileNav({open, setOpen, routes} : {open: boolean, setOpen: Function, routes: {to:string;icon:string;text:string;}[]}) {
  return (
      <div className={`absolute top-0 left-0 h-screen w-screen bg-slate-200 dark:bg-slate-800 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
          <div className="flex items-center justify-center filter drop-shadow-md bg-slate-200 dark:bg-slate-800 h-20"> {/*logo container*/}
              <a className="text-xl font-semibold" href="/">Menu</a>
          </div>
          <div className="flex flex-col ml-4 w-full">
          {routes.map((route: {to:string; icon:string; text:string;}, index:any) => {
            return (
              <MobileNavLink open={open} setOpen={setOpen} to={route.to} icon={route.icon}>
                {route.text}
              </MobileNavLink>
            )
          })}
          </div>
      </div>
  )
}

function NavLink({to, children}: {to: string, children: any}) {
  return <Link href={to} className={`mx-4`}>
      {children}
  </Link>
}

function MobileNavLink({open, setOpen, to, icon, children}: {open: boolean, setOpen: Function, to: string, icon: string, children: any}) {
  return <Link className={menuItemClasses} href={to} onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
      <Icon name={icon} className={iconClasses} />
      {children}
  </Link>
}