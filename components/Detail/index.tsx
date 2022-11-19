import Image from 'next/image'
import {
  DetailBox,
  DetailImage,
  DetailContent,
  DetailTitle,
  DetailText,
  DetailSection,
  DetailSectionLabel
} from './styled'

interface Section {
  label: string
  text: string
}

interface CardProps {
  imageUrl: string
  title: string
  subTitle: string
  sections: Section[]
}

const Detail: React.FC<CardProps> = ({
  imageUrl,
  title,
  subTitle,
  sections = []
}) => (
  <DetailBox>
    <DetailImage>
      <Image
        src={imageUrl}
        width={300}
        height={300}
        alt="detail-image"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8Vw8AAmEBb87E6jIAAAAASUVORK5CYII=" />
    </DetailImage>
    <DetailContent>
      <DetailTitle>{title}</DetailTitle>
      <DetailText>{subTitle}</DetailText>
      {sections.map((item, index) => (
        <DetailSection key={index}>
          <DetailSectionLabel>{item.label}</DetailSectionLabel>
          <DetailText>{item.text}</DetailText>
        </DetailSection>
      ))}
    </DetailContent>
  </DetailBox>
)

export default Detail
