package Testing;

import java.util.Scanner;

public class roughwork3 {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int [][] array = new int[n][n];
        long sum1 = 0;
        long sum2 = 0;
        boolean flag = true;
        
        for (int i=0; i<n; i++) {
            for (int j=0; j<n; j++) {
                int num = sc.nextInt();
                if (flag) {
                    sum1 += num;                    
                } else {
                    sum2  += num;
                }
                flag = !flag;
            }
            if (n %2 ==0 ) {
                flag = !flag;
            }
        }      
        System.out.println(sum1);
        System.out.println(sum2);
    }

}