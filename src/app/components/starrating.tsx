'use client'

import { Star, StarHalf } from 'lucide-react'
import { useState } from 'react'

interface StarRatingProps {
  count: number
}

export const StarRating = ({ count }: StarRatingProps) => {
  const [isRating, setIsRating] = useState(count)

  function handleRatingBook() {
    switch (isRating) {
      case 1:
        setIsRating(1)
        break
      case 2:
        setIsRating(2)
        break
      case 3:
        setIsRating(3)
        break
      case 4:
        setIsRating(4)
        break
      case 5:
        setIsRating(5)
        break
      case 6:
        setIsRating(6)
        break
      case 7:
        setIsRating(7)
        break
      case 8:
        setIsRating(8)
        break
      case 9:
        setIsRating(9)
        break
      case 10:
        setIsRating(10)
        break
      default:
        setIsRating(0)
    }
  }

  return (
    <section className="inline-flex items-center">
      {isRating === 0 && (
        <>
          <Star className="size-4 text-purple-100" />
          <Star className="size-4 text-purple-100" />
          <Star className="size-4 text-purple-100" />
          <Star className="size-4 text-purple-100" />
          <Star className="size-4 text-purple-100" />
        </>
      )}
      {isRating === 1 && (
        <>
          <div className="relative">
            <StarHalf className="absolute size-4 text-purple-100 fill-current" />
            <Star className="size-4 text-purple-100" />
          </div>
          <Star className="size-4 text-purple-100" />
          <Star className="size-4 text-purple-100" />
          <Star className="size-4 text-purple-100" />
          <Star className="size-4 text-purple-100" />
        </>
      )}
      {isRating === 2 && (
        <>
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100" />
          <Star className="size-4 text-purple-100" />
          <Star className="size-4 text-purple-100" />
          <Star className="size-4 text-purple-100" />
        </>
      )}
      {isRating === 3 && (
        <>
          <Star className="size-4 text-purple-100 fill-current" />
          <div className="relative">
            <StarHalf className="absolute size-4 text-purple-100 fill-current" />
            <Star className="size-4 text-purple-100" />
          </div>
          <Star className="size-4 text-purple-100" />
          <Star className="size-4 text-purple-100" />
          <Star className="size-4 text-purple-100" />
        </>
      )}
      {isRating === 4 && (
        <>
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100" />
          <Star className="size-4 text-purple-100" />
          <Star className="size-4 text-purple-100" />
        </>
      )}
      {isRating === 5 && (
        <>
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <div className="relative">
            <StarHalf className="absolute size-4 text-purple-100 fill-current" />
            <Star className="size-4 text-purple-100" />
          </div>
          <Star className="size-4 text-purple-100" />
          <Star className="size-4 text-purple-100" />
        </>
      )}
      {isRating === 6 && (
        <>
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100" />
          <Star className="size-4 text-purple-100" />
        </>
      )}
      {isRating === 7 && (
        <>
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <div className="relative">
            <StarHalf className="absolute size-4 text-purple-100 fill-current" />
            <Star className="size-4 text-purple-100" />
          </div>
          <Star className="size-4 text-purple-100" />
        </>
      )}
      {isRating === 8 && (
        <>
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100" />
        </>
      )}
      {isRating === 9 && (
        <>
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <div className="relative">
            <StarHalf className="absolute size-4 text-purple-100 fill-current" />
            <Star className="size-4 text-purple-100" />
          </div>
        </>
      )}
      {isRating === 10 && (
        <>
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
        </>
      )}
    </section>
  )
}
