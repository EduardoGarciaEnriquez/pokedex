import { useEffect } from 'react'
import Header from './components/header'
import Card, { IProps } from './components/ui/card'
import { useGetPokemons } from './hooks/useGetPokemons'
import { useSelector } from 'react-redux'
import { IRootState } from './store/store'

function App() {
  const { data, loading, error, getPokemons } = useGetPokemons()
  const { isThemeDark } = useSelector((state: IRootState) => state.theme)

  useEffect(() => {
    getPokemons()
    if (isThemeDark) {
      document.body.setAttribute('class', 'dark')
    } else {
      document.body.removeAttribute('class')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isThemeDark])

  return (
    <div className="min-h-[100vh] dark:bg-slate-800 bg-slate-200">
      <Header />
      <div className="py-24 w-full max-w-2xl mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 justify-items-center px-4 md:px-0">
        {!loading &&
          !error &&
          data &&
          data.map(({ name }: IProps) => {
            return (
              <div key={name}>
                <Card name={name} />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default App
