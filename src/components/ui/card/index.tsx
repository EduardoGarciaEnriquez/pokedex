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

enum Types {
  normal = 'normal',
  fighting = 'fighting',
  flying = 'flying',
  poison = 'poison',
  ground = 'ground',
  rock = 'rock',
  bug = 'bug',
  ghost = 'ghost',
  steel = 'steel',
  fire = 'fire',
  water = 'water',
  grass = 'grass',
  electric = 'electric',
  psychic = 'psychic',
  ice = 'ice',
  dragon = 'dragon',
  dark = 'dark',
  fairy = 'fairy',
  stellar = 'stellar',
  unknown = 'unknown',
}

export interface IProps {
  id?: string | number
  name: string
  sprites: {
    back_default: string | null
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_default: string
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
  }

  types: [{ type: { name: string; url: string } }]
  base_experience: number
  height: number
  weight: number
  order: number
  favorite?: boolean
}

function Card({ pokemon }: { pokemon: IProps }) {
  const { name, sprites, types } = pokemon

  return (
    <div className="min-w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-1000 ease-in-out">
      <div className="relative">
        <img
          className="w-full h-auto"
          src={sprites.front_default}
          alt={`${name} image`}
        />
        <div className="absolute top-2 right-2">
          <FavoriteButton pokemon={pokemon} />
        </div>
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div>
          {types.map(({ type }) => {
            const { name } = type
            return (
              <Link to={`/type/${name}`} key={name}>
                {name === Types.grass ||
                name === Types.ground ||
                name === Types.bug ? (
                  <GreenBadge>{name}</GreenBadge>
                ) : name === Types.fighting || name === Types.fire ? (
                  <RedBadge>{name}</RedBadge>
                ) : name === Types.flying ||
                  name === Types.electric ||
                  name === Types.dragon ? (
                  <YellowBadge>{name}</YellowBadge>
                ) : name === Types.poison ? (
                  <PurpleBadge>{name}</PurpleBadge>
                ) : name === Types.water || name === Types.stellar ? (
                  <BlueBadge>{name}</BlueBadge>
                ) : name === Types.psychic || name === Types.ghost ? (
                  <IndigoBadge>{name}</IndigoBadge>
                ) : name === Types.fairy ? (
                  <PinkBadge>{name}</PinkBadge>
                ) : name === Types.ice ? (
                  <CyanBadge>{name}</CyanBadge>
                ) : (
                  <GreyBadge>{name}</GreyBadge>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Card
