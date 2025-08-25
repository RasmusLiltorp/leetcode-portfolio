export interface Solution {
  language: string
  code: string
}

export interface Problem {
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  description: string
  approach: string
  solutions: Solution[]
}

export type Problems = Record<string, Problem>

export const problems: Problems = {
  'two-sum': {
    title: 'Two Sum',
    difficulty: 'Easy',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    approach: 'Jeg bruger en HashMap/Dictionary til at gemme tal og deres indekser. For hvert tal beregner jeg komplementet (target - nuværende tal) og tjekker om det allerede findes i min HashMap. Hvis ja, har jeg fundet løsningen. Hvis nej, gemmer jeg det nuværende tal og dets indeks.',
    solutions: [
      {
        language: 'TypeScript',
        code: `function twoSum(nums: number[], target: number): number[] {

    let map = new Map<number, number>();

    for(let i = 0; i < nums.length; i++) {
        
        let comp = target - nums[i];

        if (map.has(comp)) {

            const prev = map.get(comp)
            if (prev != null)
            {
                return [prev, i]
            }

        }

        map.set(nums[i], i);

    }
    return [];
}`
      },

      {
        language: 'C#',
        code: `public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        var dict = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++)
        {
            int comp = target - nums[i];
            if (dict.ContainsKey(comp))
            {
                return new [] {dict[comp], i};
            }
            dict[nums[i]] = i;
            
        }
        return null;
    }
}`
      }
    ],
  },
  'valid-parentheses': {
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    description: 'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.',
    approach: 'Jeg bruger en stack og en dictionary til at løse dette. For hver karakter: hvis det er en åbnende parentes, push til stack. Hvis det er en lukkende parentes, tjek om den matcher toppen af stacken. Til sidst skal stacken være tom for at strengen er gyldig.',
    solutions: [
      {
        language: 'C#',
        code: `
public class Solution {
    public bool IsValid(string s)
    {
        var dict = new Dictionary<char, char>()
        {
            { ')', '(' },
            { '}', '{' },
            { ']', '[' }
        };
        
        var stack = new Stack<char>();
        
        foreach (var c in s)
        {
            if (dict.ContainsValue(c))
            {
                stack.Push(c);
            }
            else if (dict.TryGetValue(c, out var value))
            {
                if (stack.Count == 0)
                {
                    return false;
                }
                
                char ch = (char)stack.Pop();
                if(ch != value)
                {
                    return false;
                }
            }
            
        }
        return stack.Count == 0;
    }
}`
      },
    ]
  },
  'merge-two-sorted-lists': {
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    description: 'You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.',
    approach: 'Jeg bruger en dummy node til at starte den nye liste og en current pointer til at bygge listen op. Jeg sammenligner de to liste-hoveder og tilføjer den mindste node til den nye liste. Når en liste er tom, tilføjer jeg resten af den anden liste.',
    solutions: [
      {
        language: 'C#',
        code: `
public class Solution {
    public ListNode MergeTwoLists(ListNode list1, ListNode list2) 
    {
        ListNode dummy = new ListNode();
        ListNode current = dummy;
        
        while (list1 != null && list2 != null)
        {
            if (list1.val < list2.val)
            {
                current.next = list1;
                list1 = list1.next;
            }
            else
            {
                current.next = list2;
                list2 = list2.next;
            }
            
            current = current.next;
        }
        
        current.next = list1 ?? list2;

        return dummy.next;
    }
}`
      }
    ]
  },
  'fizz-buzz': {
    title: 'Fizz Buzz',
    difficulty: 'Easy',
    description: 'Given an integer n, return a string array answer (1-indexed) where: answer[i] == "FizzBuzz" if i is divisible by 3 and 5, answer[i] == "Fizz" if i is divisible by 3, answer[i] == "Buzz" if i is divisible by 5, answer[i] == i (as a string) if none of the above conditions are true.',
    approach: 'Jeg itererer gennem tallene fra 1 til n og bruger modulo operator (%) til at tjekke delelighed. Først tjekker jeg om tallet er deleligt med både 3 og 5, derefter kun 3, derefter kun 5, og til sidst tilføjer jeg tallet som string hvis ingen af betingelserne er opfyldt.',
    solutions: [
      {
        language: 'C#',
        code: `public class Solution {
    public IList<string> FizzBuzz(int n) {
        List<string> tempList = new List<string>();

        for (int i = 1; i < n+1; i++)
        {
            if (i % 3 == 0 && i % 5 == 0)
            {
                tempList.Add("FizzBuzz");
            }
            else if (i % 3 == 0)
            {
                tempList.Add("Fizz");
            }
            else if (i % 5 == 0)
            {
                tempList.Add("Buzz");
            }
            else
            {
                tempList.Add(i.ToString());
            }
        }
        return tempList;
    }
}`
      }
    ]
  },
  'letter-combinations-of-a-phone-number': {
    title: 'Letter Combinations of a Phone Number',
    difficulty: 'Medium',
    description: 'Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.',
    approach: 'Jeg bruger en iterativ tilgang med et dictionary til at mappe cifre til bogstaver (som på en telefon). For hvert ciffer bygger jeg alle mulige kombinationer ved at tage de eksisterende kombinationer og tilføje hvert bogstav fra det nuværende ciffer.',
    solutions: [
      {
        language: 'C#',
        code: `public class Solution {
    public IList<string> LetterCombinations(string digits)
    {

        List<string> tempList = new List<string>
        {
            ""
        };

        if (digits.Length == 0)
        {
            return [];
        }
        
        var lookupDict = new Dictionary<char, List<char>>
        {
            { '2', new List<char>{'a','b','c'} },
            { '3', new List<char>{'d','e','f'} },
            { '4', new List<char>{'g','h','i'} },
            { '5', new List<char>{'j','k','l'} },
            { '6', new List<char>{'m','n','o'} },
            { '7', new List<char>{'p','q','r','s'} },
            { '8', new List<char>{'t','u','v'} },
            { '9', new List<char>{'w','x','y','z'} },
        };


        foreach (var digit in digits)
        {
            List<string> newList = new List<string>();

            foreach (var existing in tempList)
            {
                foreach(var letter in lookupDict[digit])
                {
                    newList.Add(existing + letter);
                }
            }
            tempList = newList;
        }
        
        return tempList;
    }
}`
      }
    ]
  },
  'shuffle-an-array': {
    title: 'Shuffle an Array',
    difficulty: 'Medium',
    description: 'Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.',
    approach: 'Jeg opretter en klasse med en constructor der gemmer det oprindelige array. Reset metoden returnerer det oprindelige array, og Shuffle metoden bruger LINQ OrderBy med en random generator til at blande elementerne tilfældigt.',
    solutions: [
      {
        language: 'C#',
        code: `public class Solution {
    public int[] initialState { get; set; }
    
    Random random = new Random();

    public Solution(int[] nums)
    {
        initialState = nums;
    }

    public int[] Reset()
    {

        return initialState;
    }

    public int[] Shuffle()
    {

        int[] shuffled = initialState;
        shuffled = shuffled.OrderBy(x => random.Next()).ToArray();
        return shuffled;
    }
}`
      }
    ]
  },
  'valid-anagram': {
    title: 'Valid Anagram',
    difficulty: 'Easy',
    description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.',
    approach: 'Jeg tjekker først om strengene har samme længde. Derefter konverterer jeg begge strenge til char arrays og sorterer dem. Hvis de sorterede arrays er identiske, er strengene anagrammer af hinanden.',
    solutions: [
      {
        language: 'C#',
        code: `public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) return false;
        
        char[] charArrayS = s.ToCharArray();
        char[] charArrayT = t.ToCharArray();
        
        Array.Sort(charArrayS);
        Array.Sort(charArrayT);
        
        if (charArrayS.SequenceEqual(charArrayT)) return true;
        return false;
    }
}`
      }
    ]
  },
  'palindrome-number': {
    title: 'Palindrome Number',
    difficulty: 'Easy',
    description: 'Given an integer x, return true if x is a palindrome, and false otherwise.',
    approach: 'Jeg konverterer tallet til en string, reverser den og sammenligner med originalen. Hvis de er ens, er tallet et palindrom.',
    solutions: [
      {
        language: 'C#',
        code: `public class Solution {
    public bool IsPalindrome(int x) {
        string temp = x.ToString();
        char[] arr = temp.ToCharArray();
        var rev = new string(arr.Reverse().ToArray());
        return temp == rev;
    }
}`
      }
    ]
  },
  'group-anagrams': {
    title: 'Group Anagrams',
    difficulty: 'Medium',
    description: 'Given an array of strings strs, group the anagrams together. You can return the answer in any order.',
    approach: 'Jeg bruger en Dictionary hvor nøglen er den sorterede version af hver string (alle anagrammer har samme sorterede form). For hver string sorterer jeg karaktererne og bruger det som key til at gruppere anagrammerne sammen.',
    solutions: [
      {
        language: 'C#',
        code: `public class Solution {
    public IList<IList<string>> GroupAnagrams(string[] strs)
    {
        var dict = new Dictionary<string, List<string>>();
        IList<IList<string>> result = new List<IList<string>>();

        foreach (string str in strs)
        {
            char[] arr = str.ToCharArray();
            Array.Sort(arr);
            string key = new string(arr);

            
            if (dict.ContainsKey(key))
            {
                dict[key].Add(str);
            }
            else
            {
                dict.Add(key, new List<string> {str});
            }
        }

        foreach (var kvp in dict.Values)
        {
            result.Add(kvp);
        }
        
        
        return result;
    }
}`
      }
    ]
  },
}
