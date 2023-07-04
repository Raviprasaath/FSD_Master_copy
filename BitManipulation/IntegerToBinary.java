package BitManipulation;

public class IntegerToBinary {
    public static void main(String[] args) {
        int n = 3;
        String str = Integer.toBinaryString(n);
        System.out.println(str); 


        // convert to decimal
        String binary = "01011011";
        int decimal = Integer.parseInt(binary, 2);
        System.out.println(decimal);

    }
}
