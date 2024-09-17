import { Helmet } from 'react-helmet-async'

import logo from '../assets/pokeball.svg'

const MetaDecorator = ({
  title,
  description,
  img = logo,
}: {
  title: string
  description: string
  img?: string
}) => {
  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={
          window.location.protocol +
          '//' +
          window.location.hostname +
          window.location.pathname +
          window.location.search
        }
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={
          window.location.protocol + '//' + window.location.hostname + img
        }
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={
          window.location.protocol +
          '//' +
          window.location.hostname +
          window.location.pathname +
          window.location.search
        }
      />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={
          window.location.protocol + '//' + window.location.hostname + img
        }
      />

      <meta name="twitter:image:alt" content="img-alt" />
      <meta property="og:site_name" content="European Travel, Inc." />
      <meta property="fb:app_id" content="your_app_id" />
      <meta name="twitter:site" content="@website-username" />
    </Helmet>
  )
}

export { MetaDecorator }
