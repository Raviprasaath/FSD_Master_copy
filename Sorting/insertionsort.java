import java.util.Scanner;

public class insertionsort {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int array[]=new int [n];
        for (int i = 0; i < n; i++) {
            array[i]=sc.nextInt();
        }
        insertionsorting(array, n);
        for (int i = 0; i < n; i++) {
            System.out.print(array[i]+" ");
        } 
    }
    public static void insertionsorting(int array[], int n){
        if(n==0||n==1){
            return;
        }
        for(int i=0; i<n; i++){
            for(int j=i; j>=1; j--){
                if(array[j]<array[j-1]){
                    int temp=array[j];
                    array[j]=array[j-1];
                    array[j-1]=temp;
                } 
            }
        }
        insertionsorting(array, n-1);
    }
}
