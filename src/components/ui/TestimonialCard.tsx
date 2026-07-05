interface TestimonialCardProps {
  quote: string
  client: string
}

const TestimonialCard = ({ quote, client }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-card__quote">&ldquo;{quote}&rdquo;</p>
      <p className="testimonial-card__client">{client}</p>
    </div>
  )
}

export default TestimonialCard
