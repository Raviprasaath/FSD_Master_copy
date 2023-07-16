package Leetcode.Strings;
import java.util.Arrays;

public class LongestCommonPrefix_14 {
    public static void main(String[] args) {
        String [] str = {"flower","flow","flight"};
        System.out.println(longestCommonPrefix(str));
    }
    public static String longestCommonPrefix(String[] strs) {
        Arrays.sort(strs);
        String s = strs[0];
        String e = strs[strs.length-1];
        for (int i=0; i<s.length(); i++) {
            if(s.charAt(i) != e.charAt(i)) {
                return s.substring(0, i);
            }
        }
        return s;
    }
}
