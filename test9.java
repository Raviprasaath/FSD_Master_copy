import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.CollationElementIterator;
import java.util.Scanner;
import javax.sound.sampled.SourceDataLine;
import javax.sql.RowSet;
import javax.swing.border.CompoundBorder;
import java.util.Arrays;

public class test9 {
    public static void main(String [] args)throws IOException {
        int array[]={1,2,4,6,7,8,9,10};
        int n = 8;
        int target = 7;

        // for (int i = 0; i < array.length; i++) {
        //     System.out.print(array[i]+" ");    
        // }
        // bubblesort(array, n);
        // insertionSort(array, n);
        // System.out.println();
        // for (int i = 0; i < array.length; i++) {
        //     System.out.print(array[i]+" ");    
        // }
        int ans = binarySearch(array, target);
        System.out.println(ans);

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
    public static void insertionSort(int array[], int n){
        if(n==0 || n==1){
            return;
        }
        for(int i=0; i<n; i++){
            for(int j=i; j>=1; j--){
                if(array[j]<(array[j-1])){
                    int temp=array[j];
                    array[j]=array[j-1];
                    array[j-1]=temp;
                }else{
                    break;
                }
            }
        }
    }
    public static int binarySearch(int array[], int target){
        int left=0;
        int right=array.length-1;
        while(left<=right){
            int mid=left+(right-left)/2;
            if(array[mid]==target){
                return mid;
            }else if(array[mid]<target){
                left=mid+1;
            }else{
                right=mid-1;
            }
        }
        return 0;
    }
}