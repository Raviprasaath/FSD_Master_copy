package Testing;

import java.util.ArrayList;

public class roughwork3 {

    public static void main(String[] args) {
        String s = "a good   example";
        System.out.println(reverseWords(s));
    }
    public static String reverseWords(String s) {
        String [] str = s.split(" ");
        StringBuilder sb = new StringBuilder();

        
        ArrayList <Character> list = new ArrayList<>();
        
        for (int i=0; i<s.length(); i++) {
            char ch = s.charAt(i);
            int count = 0;
            if (ch != ' ') {
                list.add(ch);
                count++;
            } else  {                
                list.add('7');
            }
        }
        for (int i=0; i<list.size(); i++) {
            int counter = 0;
            if (list.get(i) == 7) {
                counter++;
            } else if (counter == 1) {

            } else {
                sb.append(list.get(i));
            }
        }
        



        // for (int i=str.length-1; i>=0; i--) {
        //     if ( !str[i].equals("   ") ) {
        //         sb.append(str[i]);
        //         sb.append(" ");
        //     } else {
        //         count++;
        //     }
        // }
        // sb.deleteCharAt(sb.length()-1);
        // return sb.toString();
        // return ""+count;
        return ""+list;
    }
    
}