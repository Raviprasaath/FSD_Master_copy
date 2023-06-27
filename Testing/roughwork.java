package Testing;
import java.util.*;

public class roughwork {
    public static void main(String[] args) {
        int arr [] = {1,1,2,3,4,2,5,5,5,5,2,3,4,5,6,7,7,7,7,7,7};

        HashMap <Integer, Integer> hmap = new HashMap<>();
        for (int i = 0; i < arr.length; i++) {
            hmap.put(arr[i], hmap.getOrDefault(arr[i], 0)+1);
        }
        System.out.println(hmap);
        
        int max = 0;
        for (int i : hmap.values()) {
            if (i > max) {
                max = Math.max(i, max);
            }    
        } 
        System.out.println(max);

        for (int i : hmap.keySet()) {
            if (i > max) {
                max = Math.max(i, max);
            }    
        } 
        System.out.println(max);

        for (int i : hmap.keySet()) {
            if (i % 2 == 0) {
                System.out.print(i+" ");                    
            }
        }
    }        
}

