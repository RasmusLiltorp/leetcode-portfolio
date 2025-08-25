import Image from 'next/image'
import Link from 'next/link'
import { problems } from '@/data/problems'

export default function Home() {
  const getDifficultyBadgeClass = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'badge-success'
      case 'medium': return 'badge-warning'
      case 'hard': return 'badge-error'
      default: return 'badge-neutral'
    }
  }

  return (
      <>
          <div className="hero min-h-screen relative">
              <div className="hero-content text-center">
                  <div className="max-w-md">
                      <div className="rainbow-bounce">
                        <Image src="/images/happy-dog.jpg" alt="Leetcode Logo" width={500} height={300}/>
                      </div>
                      <h1 className="text-5xl font-bold scale-up-center">Leetcode løsninger</h1>
                      <p className="py-6">
                        Dette er et portfolio af mine løsninger til leetcode opgaver.
                      </p>
                  </div>
              </div>
              
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
                  <ul className="menu bg-base-200 rounded-box w-56 shadow-lg outline-2 outline-offset-2 outline-solid">
                      <li>
                          <h2 className="menu-title">Løste opgaver</h2>
                          <ul>
                              <li>
                                <Link href="/problems/two-sum" className="flex justify-between items-center">
                                  <span>Two Sum</span>
                                  <span className={`badge ${getDifficultyBadgeClass(problems['two-sum'].difficulty)} badge-sm`}>
                                    {problems['two-sum'].difficulty}
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/problems/valid-parentheses" className="flex justify-between items-center">
                                  <span>Valid Parentheses</span>
                                  <span className={`badge ${getDifficultyBadgeClass(problems['valid-parentheses'].difficulty)} badge-sm`}>
                                    {problems['valid-parentheses'].difficulty}
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/problems/merge-two-sorted-lists" className="flex justify-between items-center">
                                  <span>Merge Two Sorted Lists</span>
                                  <span className={`badge ${getDifficultyBadgeClass(problems['merge-two-sorted-lists'].difficulty)} badge-sm`}>
                                    {problems['merge-two-sorted-lists'].difficulty}
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/problems/fizz-buzz" className="flex justify-between items-center">
                                  <span>Fizz Buzz</span>
                                  <span className={`badge ${getDifficultyBadgeClass(problems['fizz-buzz'].difficulty)} badge-sm`}>
                                    {problems['fizz-buzz'].difficulty}
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/problems/letter-combinations-of-a-phone-number" className="flex justify-between items-center">
                                  <span>Letter Combinations</span>
                                  <span className={`badge ${getDifficultyBadgeClass(problems['letter-combinations-of-a-phone-number'].difficulty)} badge-sm`}>
                                    {problems['letter-combinations-of-a-phone-number'].difficulty}
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/problems/shuffle-an-array" className="flex justify-between items-center">
                                  <span>Shuffle an Array</span>
                                  <span className={`badge ${getDifficultyBadgeClass(problems['shuffle-an-array'].difficulty)} badge-sm`}>
                                    {problems['shuffle-an-array'].difficulty}
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/problems/valid-anagram" className="flex justify-between items-center">
                                  <span>Valid Anagram</span>
                                  <span className={`badge ${getDifficultyBadgeClass(problems['valid-anagram'].difficulty)} badge-sm`}>
                                    {problems['valid-anagram'].difficulty}
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/problems/palindrome-number" className="flex justify-between items-center">
                                  <span>Palindrome Number</span>
                                  <span className={`badge ${getDifficultyBadgeClass(problems['palindrome-number'].difficulty)} badge-sm`}>
                                    {problems['palindrome-number'].difficulty}
                                  </span>
                                </Link>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </>



  );
}
