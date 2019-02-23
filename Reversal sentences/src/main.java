import java.util.Map;

public class main {

    /*
    * You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.

Example:

input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
          'm', 'a', 'k', 'e', 's', '  ',
          'p', 'e', 'r', 'f', 'e', 'c', 't' ]
    * */

    static char[] arr = new char[]{'p', 'e', 'r', 'f', 'e', 'c', 't', ' ',
            'm', 'a', 'k', 'e', 's', ' ',
            'p', 'r', 'a', 'c', 't', 'i', 'c', 'e'};//example array

    static char[] ordened = new char[arr.length];//ordened array
    static int ordenedCounter = 0;//counter of ordened array

    static char[] reverseWords(char[] arr)
    {
        reverseArray(arr);//Firths, we reverse the given array

        return ordened;
    }

    static void reverseEachWord(char[] arr , int start, int end)
    {
        for (int i = end; i >= start; i--)
        {
            ordened[ordenedCounter] = arr[i];
            ordenedCounter++;
        }
    }

    static char[] reverseArray(char[] arr)
    {
        char[] reversed = new char[arr.length];

        int temp = 0;

        for (int i = arr.length - 1; i >= 0; i--)
        {
            reversed[Math.abs(i - (arr.length - 1))] = arr[i];


            //Them, we reverse each word of the reversed array
            if (reversed[Math.abs(i - (arr.length - 1))] == ' ')
            {
                reverseEachWord(reversed, temp, Math.abs(i - (arr.length - 1))-1);
                temp = Math.abs(i - (arr.length - 1))+1;
            }else if (Math.abs(i - (arr.length - 1)) == reversed.length - 1)
            {
                reverseEachWord(reversed, temp, Math.abs(i - (arr.length - 1)));
            }
        }

        return reversed;
    }



    public static void main(String[] args)
    {

        System.out.println(reverseWords(arr));

    }
}

/*MADE IN 1H:45MM... BETTER SOLUTION: O(N2)*/