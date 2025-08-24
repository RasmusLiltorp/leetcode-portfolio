interface ComplexityAnalysisProps {
  timeComplexity: string
  spaceComplexity: string
}

export default function ComplexityAnalysis({ timeComplexity, spaceComplexity }: ComplexityAnalysisProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h3 className="card-title">Tidskompleksitet</h3>
          <p className="text-xl font-mono">{timeComplexity}</p>
        </div>
      </div>
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h3 className="card-title">Pladskompleksitet</h3>
          <p className="text-xl font-mono">{spaceComplexity}</p>
        </div>
      </div>
    </div>
  )
}
