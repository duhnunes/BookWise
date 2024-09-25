import { Star } from 'lucide-react'

export const StarRating = () => {
  return (
    <section className="inline-flex items-center">
      <Star className="size-4 text-purple-100 fill-current" />
      <Star className="size-4 text-purple-100 fill-current" />
      <Star className="size-4 text-purple-100 fill-current" />
      <Star className="size-4 text-purple-100 fill-current" />
      <Star className="size-4 text-purple-100" />
    </section>
  )
}
