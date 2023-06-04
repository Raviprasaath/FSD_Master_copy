package Testing;


import java.util.ArrayList;

public class roughwork4 {
  public static void main (String[] args) {
    String s = "5525";
    int a = 9;
    int b = 2;
    System.out.println(findLexSmallestString(s, a, b));
  }
  public static String findLexSmallestString(String s, int a, int b) {
    int min = Integer.MAX_VALUE;
    StringBuilder sb = new StringBuilder();
    for (int i=0; i<s.length(); i++) {
      sb.append(s.charAt(i));
    }
    String str = "";
    while (str != s) {
      str = swapping(sb.toString(), b);

      for (int i=0; i<s.length(); i++) {
        if (i%2 == 0) {
          sb.append(str.charAt(i));
        } else {
          char ch =str.charAt(i);
          String chStr = ""+ch;
          int num1 = Integer.parseInt(chStr);

          int add = num1+a;
          String addVal = ""+add;
          int len = addVal.length();
          sb.append(addVal.charAt(len-1));
          System.out.println(sb.toString());
        }
      }

    }
    return str;
  }
  public static String swapping(String s, int b) {
    ArrayList<Character> list = new ArrayList<>();
    int n = s.length();
    for (int i=0; i<n; i++) {
      list.add(s.charAt(i));
    }

    for (int i=0; i<b; i++) {
      list.add(0, s.charAt(n-1-i));
      list.remove(n);
    }
    StringBuilder sb = new StringBuilder();
    for (int i=0; i<list.size(); i++) {
      sb.append(list.get(i));
    }
    return sb.toString();
  }
}

