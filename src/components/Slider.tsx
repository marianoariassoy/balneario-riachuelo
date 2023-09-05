import { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

type SliderItemProps = {
  src: string
}

const SliderItem = ({ src }: SliderItemProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsLoading(false)
    }
  }, [src])

  return (
    <div className='aspect-[4/5] lg:aspect-video'>
      {isLoading ? null : (
        <img
          src={src}
          className='fade-in h-full w-full object-cover object-center'
        />
      )}
    </div>
  )
}

type SliderComponentProps = {
  data: Array<{ id: number; image: string }>
}

const Slider = ({ data }: SliderComponentProps) => {
  const properties = {
    prevArrow: (
      <button className='bg-black/30 w-12 h-12 flex items-center justify-center text-white rounded-full ml-4 hover:bg-black'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 320 512'
          height='25'
        >
          <path d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z' />
        </svg>
      </button>
    ),
    nextArrow: (
      <button className='bg-black/30 w-12 h-12 flex items-center justify-center text-white rounded-full mr-4 hover:bg-black'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 320 512'
          height='25'
        >
          <path d='M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z' />
        </svg>
      </button>
    ),
    autoplay: true,
    transitionDuration: 400,
    autoplayInterval: 5000,
    indicators: true,
    arrows: true,
    infinite: true
  }

  type Image = {
    id: number
    image: string
  }

  return (
    <Slide {...properties}>
      {data &&
        data.map((image: Image) => (
          <SliderItem
            key={image.id}
            src={image.image}
          />
        ))}
    </Slide>
  )
}

export default Slider
