import { notFound } from 'next/navigation'
import LeetcodePage from '@/components/leetcode/leetcode-page'
import { problems } from '@/data/problems'

interface PageProps {
  params: {
    slug: string
  }
}

export default function ProblemPage({ params }: PageProps) {
  const problem = problems[params.slug as keyof typeof problems]
  
  if (!problem) {
    notFound()
  }

  return <LeetcodePage problem={problem} />
}

export function generateStaticParams() {
  return Object.keys(problems).map((slug) => ({
    slug,
  }))
}
