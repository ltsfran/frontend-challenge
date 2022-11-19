import Image from 'next/image'
import {
  CardBox,
  CardImage,
  CardDescription,
  CardTitle,
  CardSubTitle
} from './styled'

interface CardProps {
  imageUrl: string
  title: string
  subTitle: string
  index?: number
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  subTitle,
  index = 0
}) => (
  <CardBox>
    <CardImage>
      <Image
        src={imageUrl}
        width={160}
        height={160}
        alt={`card-image-${index}`}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8Vw8AAmEBb87E6jIAAAAASUVORK5CYII=" />
    </CardImage>
    <CardDescription>
      <CardTitle>{title}</CardTitle>
      <CardSubTitle>{subTitle}</CardSubTitle>
    </CardDescription>
  </CardBox>
)

export default Card
