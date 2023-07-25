package Testing;
import java.util.HashMap;
import java.util.Scanner;
import java.util.Stack;

public class roughwork3 {

    public static void main (String[] args) {
        
        Stack <Integer> st = new Stack<>();
        
        int [] array = {1,3,2,4};
        int n = array.length;
        int [] ans = new int[n];
        for(int i=n-1; i>=0; i--) {
            int temp = array[i];
            while (!st.empty() && st.peek() <= temp) {
                st.pop();
            }
            if (st.empty()) {
                ans[i] = -1;
            } else {
                ans[i] = st.peek();
            }
            st.push(temp);
        }
        for(int i : ans) {
            System.out.print(i+" ");
        }
    }
}