import { Link } from 'react-router-dom'
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
} from '../badges'
import FavoriteButton from '../favorite-btn'
import { IPropsPokemon, PokemonTypes } from '../../../store/slices/pokemonSlice'
import { useElementOnScreen } from '../../../utils/hooks/useElementOnScreen'

function Card({ pokemon }: { pokemon: IPropsPokemon }) {
  const { name, sprites, types } = pokemon
  const { show, ref } = useElementOnScreen()

  return (
    <div
      ref={ref}
      className="min-w-full min-h-96 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-1000 ease-in-out"
    >
      {show && (
        <>
          <div className="relative">
            <Link to={`/detail/${name}`}>
              <img
                className="w-full h-auto"
                src={sprites.front_default}
                alt={`${name} image`}
              />
            </Link>
            <div className="absolute top-2 right-2">
              <FavoriteButton pokemon={pokemon} />
            </div>
          </div>

          <div className="p-5">
            <Link to={`/detail/${name}`}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
                {name}
              </h5>
            </Link>
            <>
              {types.map(({ type }) => {
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
            </>
          </div>
        </>
      )}
    </div>
  )
}

export default Card
