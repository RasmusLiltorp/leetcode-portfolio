export interface Solution {
  language: string
  code: string
}

export interface Problem {
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  description: string
  solutions: Solution[]
  timeComplexity: string
  spaceComplexity: string
}

export type Problems = Record<string, Problem>

export const problems: Problems = {
}
