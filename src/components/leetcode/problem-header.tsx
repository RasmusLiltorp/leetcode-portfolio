interface ProblemHeaderProps {
  title: string
  difficulty: string
  description: string
}

export default function ProblemHeader({ title, difficulty, description }: ProblemHeaderProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'badge-success'
      case 'medium': return 'badge-warning'
      case 'hard': return 'badge-error'
      default: return 'badge-neutral'
    }
  }

  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <span className={`badge ${getDifficultyColor(difficulty)} badge-lg`}>
          {difficulty}
        </span>
      </div>
      <p className="text-lg text-base-content/70">{description}</p>
    </div>
  )
}
