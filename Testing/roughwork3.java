package Testing;
import java.util.HashMap;

public class roughwork3 {

    public static void main (String[] args) {
        int [] array = {10, 2, -2, -20, 10};
        int ans = countSubAarrays(array, -10);
        System.out.println(ans);
    }
    
    public static int countSubAarrays (int [] array, int target){
        HashMap <Integer, Integer> map =  new HashMap<>();
        
        map.put(0, 1);
        
        int [] prefixSum = new int [array.length];
        prefixSum[0] = array[0];
        int ans = 0;

        for(int i=1; i<array.length; i++) {
            prefixSum[i] = array[i] + prefixSum[i-1];
        }
        for(int i=0; i<prefixSum.length; i++) {
            int k = prefixSum[i] - target;
            if (map.containsKey(k)) {
                ans += map.get(k);
            }
            map.put(prefixSum[i], map.getOrDefault(prefixSum[i], 0)+1);
        }
        return ans;
    }
}