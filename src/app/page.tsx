import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
      <>
          <div className="hero min-h-screen relative">
              <div className="hero-content text-center">
                  <div className="max-w-md">
                      <Image src="/images/happy-dog.jpg" alt="Leetcode Logo" width={500} height={300}/>
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
                                <Link href="/problems/two-sum">
                                  Two Sum
                                </Link>
                              </li>
                              <li>
                                <Link href="/problems/valid-parentheses">
                                  Valid Parentheses
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
