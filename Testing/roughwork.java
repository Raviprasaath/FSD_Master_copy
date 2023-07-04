package Testing;
import java.util.*;

public class roughwork {
    public static void main(String[] args) {
        String s = "leetscode";
        String [] dictionary = {"leet","code","leetcode"};
        System.out.println(minExtraChar(s, dictionary));
    }   
    public static int minExtraChar(String s, String[] dictionary) {
        int k = 0, n = 0;
        StringBuilder sb  = new StringBuilder(s);
        while (k != dictionary.length-1) {
            if (s.contains(dictionary[k])) {
                n = sb.indexOf(dictionary[k]);
                sb.delete(n, dictionary[k].length());
            }
            k++;
        }
        System.out.print(sb.toString());
        return n;
        // return sb.length();
    }     
}

