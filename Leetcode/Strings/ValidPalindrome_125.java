package Leetcode.Strings;

public class ValidPalindrome_125 {
    public static void main(String[] args) {
        String str = "A man, a plan, a canal: Panama";
        System.out.println(isPalindrome(str));
        // System.out.println(isPalindrome1(str));

    }
    public static boolean isPalindrome(String s) {
        int i = 0;
        int j = s.length() - 1;
        while (i < j) {
            
            char start = s.charAt(i);
            char end = s.charAt(j);
            
            if (!Character.isLetterOrDigit(start)) {
                i++;
                continue;
            }
            
            if (!Character.isLetterOrDigit(end)) {
                j--;
                continue;
            }
            
            if (Character.toLowerCase(start) != Character.toLowerCase(end)) {
                return false;
            }
            
            i++;
            j--;    
        }
    
    return true;
    }
    
    public static boolean isPalindrome1(String s) {
        StringBuilder sb = new StringBuilder();
        StringBuilder sb1 = new StringBuilder();
        StringBuilder sb2 = new StringBuilder();
        int n = s.length();
        String str = s.toLowerCase();
    
        for(int i=0; i<n; i++) {
            if ((str.charAt(i) >= 'a' && str.charAt(i)<='z') || (str.charAt(i)-'0' >= 0 && str.charAt(i)-'0' <= 9)) {
                
                sb.append(str.charAt(i));
            }
        }
        for(int i=0; i<sb.length(); i++) {
            sb1.append(sb.charAt(i));
        }
        for(int i=sb.length()-1; i>=0; i--) {
            sb2.append(sb.charAt(i));
        }
        int count=0;
        for (int i=0; i<sb.length(); i++) {
            if (sb1.charAt(i) != sb2.charAt(i)){
                count++;
            }
        }
        return (count==0?true:false);
    }
}


    
