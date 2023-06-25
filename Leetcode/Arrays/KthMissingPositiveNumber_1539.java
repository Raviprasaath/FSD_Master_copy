package Leetcode.Arrays;

import java.util.ArrayList;

public class KthMissingPositiveNumber_1539 {
    public static void main(String[] args) {
        int [] array = {2,3,4,7,11};
        int k = 5;
        System.out.println(findKthPositive(array, k));
    }
    public static int findKthPositive(int[] arr, int k) {
        if (arr[arr.length-1] >= k && arr[arr.length-1] == arr.length) {
            return arr.length+k;
        }
        ArrayList <Integer> list1 = new ArrayList <>();
        ArrayList <Integer> list2 = new ArrayList <>();

        for (int i=0; i<arr.length; i++) {
            list1.add(arr[i]);
        }
        int i= 1;
        while (list2.size() < k) {
            if(!list1.contains(i)) {
                list2.add(i);
            }
            i++;
        }
        return list2.get(list2.size()-1);
    }
}
