import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import FavoriteButton from '../components/ui/favorite-btn'
import { LoadingIcon } from '../components/ui/icons'
import { fetchPokemonDetails, PokemonTypes } from '../store/slices/pokemonSlice'
import { AppDispatch, IRootState } from '../store/store'
import {
  BlueBadge,
  CyanBadge,
  GreenBadge,
  GreyBadge,
  IndigoBadge,
  PinkBadge,
  PurpleBadge,
  RedBadge,
  YellowBadge,
} from '../components/ui/badges'

function Detail() {
  const dispatch = useDispatch<AppDispatch>()
  const { name = '' } = useParams<string>()

  const { pokemonDetails: pokemon, loadingPokemonDetails } = useSelector(
    (state: IRootState) => state.pokemon
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchPokemonDetails(name))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return (
    <div className="pt-24 pb-10 w-full max-w-2xl mx-auto px-4 md:px-0">
      {loadingPokemonDetails && <LoadingIcon />}
      {!loadingPokemonDetails && pokemon && (
        <div className=" bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 grid gap-4 grid-cols-1 md:grid-cols-2 justify-items-center">
          <div className="relative w-full flex flex-col justify-center items-center">
            <img
              className="w-full h-auto"
              src={pokemon.sprites.front_default}
              alt={`${name} image`}
            />
            <div className="absolute top-2 right-2">
              <FavoriteButton pokemon={pokemon} />
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white top-2 left-2 absolute uppercase">
              {pokemon.name}
            </h5>
            <div className="absolute bottom-2 left-2">
              {pokemon.types.map(({ type }) => {
                const { name } = type
                return (
                  <Link to={`/type/${name}`} key={name}>
                    {name === PokemonTypes.grass ||
                    name === PokemonTypes.ground ||
                    name === PokemonTypes.bug ? (
                      <GreenBadge>{name}</GreenBadge>
                    ) : name === PokemonTypes.fighting ||
                      name === PokemonTypes.fire ? (
                      <RedBadge>{name}</RedBadge>
                    ) : name === PokemonTypes.flying ||
                      name === PokemonTypes.electric ||
                      name === PokemonTypes.dragon ? (
                      <YellowBadge>{name}</YellowBadge>
                    ) : name === PokemonTypes.poison ? (
                      <PurpleBadge>{name}</PurpleBadge>
                    ) : name === PokemonTypes.water ||
                      name === PokemonTypes.stellar ? (
                      <BlueBadge>{name}</BlueBadge>
                    ) : name === PokemonTypes.psychic ||
                      name === PokemonTypes.ghost ? (
                      <IndigoBadge>{name}</IndigoBadge>
                    ) : name === PokemonTypes.fairy ? (
                      <PinkBadge>{name}</PinkBadge>
                    ) : name === PokemonTypes.ice ? (
                      <CyanBadge>{name}</CyanBadge>
                    ) : (
                      <GreyBadge>{name}</GreyBadge>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="p-2 grid grid-cols-1 md:grid-cols-2">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Bio
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {pokemon.flavor_text_entries[4].flavor_text.replace(
                'POKéMON',
                'pokemon'
              )}
            </p>

            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Habitat
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {pokemon.habitat.name}
            </p>

            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Abilities
            </h5>
            <ul className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {pokemon.abilities.map((item) => (
                <li key={item.ability.name}>{item.ability.name} </li>
              ))}
            </ul>

            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Shape
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {pokemon.shape.name}
            </p>

            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Stats
            </h5>
            <ul className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {pokemon.stats.map((item) => (
                <li key={item.stat.name}>
                  {item.stat.name}: {item.base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Evolution chain
            </h5>
            <div className="flex gap-10 mb-4 flex-col md:flex-row ">
              {pokemon.evolutions.map((item) => {
                return (
                  <Link key={item.name} to={`/detail/${item.name}`}>
                    <img
                      className="w-28 h-28 rounded-full bg-slate-200 hover:scale-110 transition ease-in duration-300"
                      src={item.sprites.front_default}
                      alt={item.name}
                    />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Detail
