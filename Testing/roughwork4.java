package Testing;
import java.util.*;

public class roughwork4 {
    public static void main(String[] args) {
        int [] array = {5,2,4,6,2,3,3};
        int n = array.length;
        int k = 6;

        HashMap <Integer, Integer> hmap = new HashMap<>();
        hmap.put(0, 1);
        int sum = 0, ans = 0;
        
        for (int i=0; i<n; i++) {
            sum += array[i];  
            int target = sum - k; 
            if (hmap.containsKey(target)) { 
                ans += hmap.get(target);  
                System.out.println(ans);
            }
            hmap.put(sum, hmap.getOrDefault(sum, 0) + 1 ); 
        }
        
        
        System.out.print(hmap);
    }
    
}