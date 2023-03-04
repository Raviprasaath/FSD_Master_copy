package Strings;

public class palindrome {
    public static void main(String[] args) {
        String str = "madtam";
        boolean ans = palindrome(str);
        System.out.print(ans);

    }
    public static boolean palindrome(String str) {
            int low = 0;
            int end = str.length()-1;
            while (low<end) {
                if (str.charAt(low)==str.charAt(end)) {
                    low++;
                    end--;
                } else {
                    return false;
                }    
            }
            return true;
        }   
}
