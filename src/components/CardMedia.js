import * as React from 'react'
import { Media } from './Card'
import { isValidImageURL, findFirstSecureUrl } from '../utils'

const ImageWrapper = ({ data, secureImageUrl, loadSecureUrl }) => {
  if (loadSecureUrl && !secureImageUrl) return null
  const imageUrl = data.image && ((loadSecureUrl && secureImageUrl) ? secureImageUrl : data.image[0])

  if (!imageUrl) {
    return null
  }

  return <img
    style={{ display: `none` }}
    src={imageUrl}
    alt={data.title}
  />
}

const CardMedia = ({ data, cardSize, loadSecureUrl }) => {
  const secureImageUrl = data.image && findFirstSecureUrl(data.image, isValidImageURL);

  return (
    <Media
      className="react_tinylink_card_media"
      cardSize={cardSize}
      src={data.image && (secureImageUrl ? secureImageUrl : data.image[0])}
      type={data.type}
    >
      <ImageWrapper data={data} secureImageUrl={secureImageUrl} loadSecureUrl={loadSecureUrl} />
    </Media>
  )
}

export default CardMedia