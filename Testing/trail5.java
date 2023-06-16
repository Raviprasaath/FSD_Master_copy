package Testing;

import java.util.Arrays;

public class trail5 {
    public static void main(String[] args) {
        String str = "Hellowdsv";

        StringBuilder sb = new StringBuilder();
        sb.append(str);

        sb.delete(1,2);
        
        System.out.println(sb.toString());
    }
    
}
