import Image from 'next/image'

export default function Img({src, layout= "fill", objectFit= "cover", alt= "", quality= 100}) {
  return (
   <Image src={src} layout={layout} objectFit={objectFit} alt={alt} quality={quality} className="flex-shrink-0" />
  )
}
