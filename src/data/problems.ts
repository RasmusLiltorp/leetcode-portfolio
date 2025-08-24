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
  }
}
