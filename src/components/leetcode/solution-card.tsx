'use client'

import { useState } from 'react'

interface Solution {
  language: string
  code: string
}

interface SolutionCardProps {
  solutions: Solution[]
}

export default function SolutionCard({ solutions }: SolutionCardProps) {
  const [selectedLanguage, setSelectedLanguage] = useState(solutions[0]?.language || 'TypeScript')
  
  const currentSolution = solutions.find(sol => sol.language === selectedLanguage) || solutions[0]

  return (
    <div className="card bg-base-200 shadow-xl mb-8">
      <div className="card-body">
        <div className="flex justify-between items-center mb-4">
          <h2 className="card-title text-2xl">Løsning</h2>
          {/* Language Selector */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-outline">
              {selectedLanguage}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              {solutions.map((solution) => (
                <li key={solution.language}>
                  <button 
                    onClick={() => setSelectedLanguage(solution.language)}
                    className={selectedLanguage === solution.language ? 'active' : ''}
                  >
                    {solution.language}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mockup-code">
          <pre><code>{currentSolution?.code}</code></pre>
        </div>
      </div>
    </div>
  )
}
