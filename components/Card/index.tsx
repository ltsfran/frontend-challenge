import Image from 'next/image'
import Link from 'next/link'
import {
  CardBox,
  CardImage,
  CardDescription,
  CardTitle,
  CardSubTitle
} from './styled'

interface CardProps {
  to: string
  imageUrl: string
  title: string
  subTitle: string
  index?: number
}

const Card: React.FC<CardProps> = ({
  to,
  imageUrl,
  title,
  subTitle,
  index = 0
}) => (
  <Link href={to}>
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
  </Link>
)

export default Card
