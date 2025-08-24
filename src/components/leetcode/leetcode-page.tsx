import ProblemHeader from './problem-header'
import SolutionCard from './solution-card'
import ComplexityAnalysis from './complexity-analysis'
import BackButton from './back-button'

interface Solution {
  language: string
  code: string
}

interface Problem {
  title: string
  difficulty: string
  description: string
  solutions: Solution[]
  timeComplexity: string
  spaceComplexity: string
}

interface LeetcodePageProps {
  problem: Problem
}

export default function LeetcodePage({ problem }: LeetcodePageProps) {
  return (
    <div className="min-h-screen bg-base-100 p-8">
      <div className="max-w-4xl mx-auto">
        <ProblemHeader 
          title={problem.title}
          difficulty={problem.difficulty}
          description={problem.description}
        />
        
        <SolutionCard solutions={problem.solutions} />
        
        <ComplexityAnalysis 
          timeComplexity={problem.timeComplexity}
          spaceComplexity={problem.spaceComplexity}
        />
        
        <BackButton />
      </div>
    </div>
  )
}