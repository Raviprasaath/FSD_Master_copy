package Testing;

import java.util.ArrayList;

public class roughwork {
    public static void main(String[] args) {
        int [][] array = {{6,34,9}, {12,55,4} ,{7,182,6}};
        int k = 3;
        ArrayList <Integer> list = new ArrayList<>();
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array[0].length; j++) {
                if (!list.contains(array[i][j])) {
                    list.add(array[i][j]);
                }
            }
        }
        list.sort((a,b)->(a-b));
        System.out.println(list.get(k-1));
    }
    
}

