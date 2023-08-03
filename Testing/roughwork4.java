package Testing;

public class roughwork4 {
    public static void main(String[] args) {
        int [] arr = {0,1,0,1};
        int [] ans = new int[arr.length];
        for (int i=0; i<arr.length; i++) {
            int multi = 1;
            for (int j=0; j<arr.length; j++) {
                if (i != j) {
                    multi *= arr[j];
                }
            }
            ans[i] = multi;

        }

        for (int i=0; i<arr.length; i++) {
            System.out.print(ans[i] + " "); 
        }
    }


}