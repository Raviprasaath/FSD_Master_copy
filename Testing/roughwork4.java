package Testing;

import java.util.Stack;

public class roughwork4 {
  public static void main (String[] args) {
    String s = "leEeetcode";
    System.out.println(makeGood(s));
  }
  public static String makeGood(String s) {
      Stack<Character> st = new Stack<>();
      st.push(s.charAt(0));
      int i = 1;
      while (i < s.length()) {
          char ch = s.charAt(i);
          if (ch >= 'a' && ch <= 'z') {

          }
          if (Character.isUpperCase(st.peek())) {
              char temp = Character.toUpperCase(ch);
              if (st.peek() == temp) {
                  st.pop();
                  i++;
              }

          } else if (Character.isLowerCase(st.peek())) {
              char temp = Character.toLowerCase(ch);
              if (st.peek() == temp) {
                  st.pop();
                  i++;
              }
          } else {
              st.push(ch);
          }
          i++;
      }
      System.out.println(st);
      StringBuilder sb = new StringBuilder();
      while (!st.isEmpty()) {
          sb.append(st.pop());
      }
      return sb.toString();
  }
}

