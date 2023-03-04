import java.util.Scanner;

public class bubblesorting {
    public static void main(String [] args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int array[]=new int [n];
        for (int i = 0; i < n; i++) {
            array[i]=sc.nextInt();
        }
        bubblesort(array, n);
        for (int i = 0; i < n; i++) {
            System.out.print(array[i]+" ");
        } 

    }
    public static void bubblesort(int array[], int n){
        if(n==0 || n==1){
            return;
        }
        for(int j=0; j<n-1; j++){
            if(array[j]>array[j+1]){
                int temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
        bubblesort(array, n-1);
    }
}
