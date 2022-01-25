import Image from 'next/image'

export default function  Img({ src, layout="fill", objectFit="cover", alt="", quality=100, priority=false, className, ...props }) {
  return (
    <Image src={src} layout={layout} objectFit={objectFit} alt={alt} quality={quality} priority={priority} className={`flex-shrink-0 ${className}`} {...props} />
  )
}
