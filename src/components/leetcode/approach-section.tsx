interface ApproachSectionProps {
  approach: string
}

export default function ApproachSection({ approach }: ApproachSectionProps) {
  return (
    <div className="card bg-base-200 shadow-xl mb-8">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-4">Min tilgang</h2>
        <p className="text-lg leading-relaxed">{approach}</p>
      </div>
    </div>
  )
}
