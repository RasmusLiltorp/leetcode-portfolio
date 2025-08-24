import ProblemHeader from './problem-header'
import ApproachSection from './approach-section'
import SolutionCard from './solution-card'
import BackButton from './back-button'

interface Solution {
  language: string
  code: string
}

interface Problem {
  title: string
  difficulty: string
  description: string
  approach: string
  solutions: Solution[]
}

interface LeetcodePageProps {
  problem: Problem
}

export default function LeetcodePage({ problem }: LeetcodePageProps) {
  return (
    <>
      <BackButton />
      <div className="min-h-screen bg-base-100 p-8">
        <div className="max-w-4xl mx-auto">
          <ProblemHeader 
            title={problem.title}
            difficulty={problem.difficulty}
            description={problem.description}
          />
          
          <ApproachSection approach={problem.approach} />
          
          <SolutionCard solutions={problem.solutions} />
        </div>
      </div>
    </>
  )
}