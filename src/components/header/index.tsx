import Logo from '../ui/logo'
import Search from '../ui/search'
import ThemeSwitch from '../ui/theme-switch'

function Header() {
  return (
    <header className="shadow-md fixed top-0 dark:bg-slate-800 bg-slate-200 left-0 right-0 z-10 transition-all duration-1000 ease-in-out">
      <div className="flex justify-between align-middle gap-6 px-4 py-4 max-w-2xl mx-auto">
        <Logo />
        <Search />
        <ThemeSwitch />
      </div>
    </header>
  )
}

export default Header
