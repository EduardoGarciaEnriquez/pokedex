import {
  BlueBadge,
  GreenBadge,
  GreyBadge,
  IndigoBadge,
  PinkBadge,
  PurpleBadge,
  RedBadge,
  YellowBadge,
} from '../badges'
import FavoriteButton from '../favorite-btn'

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
    <div className="min-w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
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
            switch (type.name) {
              case 'normal':
                return <GreyBadge key={type.name}>{type.name}</GreyBadge>

              case 'fighting':
                return <RedBadge key={type.name}>{type.name}</RedBadge>

              case 'flying':
                return <YellowBadge key={type.name}>{type.name}</YellowBadge>

              case 'poison':
                return <PurpleBadge key={type.name}>{type.name}</PurpleBadge>

              case 'ground':
                return <GreenBadge key={type.name}>{type.name}</GreenBadge>

              case 'rock':
                return <GreyBadge key={type.name}>{type.name}</GreyBadge>

              case 'bug':
                return <GreenBadge key={type.name}>{type.name}</GreenBadge>

              case 'ghost':
                return <IndigoBadge key={type.name}>{type.name}</IndigoBadge>

              case 'steel':
                return <GreyBadge key={type.name}>{type.name}</GreyBadge>

              case 'fire':
                return <RedBadge key={type.name}>{type.name}</RedBadge>

              case 'water':
                return <BlueBadge key={type.name}>{type.name}</BlueBadge>

              case 'grass':
                return <GreenBadge key={type.name}>{type.name}</GreenBadge>

              case 'electric':
                return <YellowBadge key={type.name}>{type.name}</YellowBadge>

              case 'psychic':
                return <IndigoBadge key={type.name}>{type.name}</IndigoBadge>

              case 'ice':
                return <BlueBadge key={type.name}>{type.name}</BlueBadge>

              case 'dragon':
                return <YellowBadge key={type.name}>{type.name}</YellowBadge>

              case 'dark':
                return <GreyBadge key={type.name}>{type.name}</GreyBadge>

              case 'fairy':
                return <PinkBadge key={type.name}>{type.name}</PinkBadge>

              case 'stellar':
                return <BlueBadge key={type.name}>{type.name}</BlueBadge>

              case 'unknown':
                return <GreyBadge key={type.name}>{type.name}</GreyBadge>
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Card
