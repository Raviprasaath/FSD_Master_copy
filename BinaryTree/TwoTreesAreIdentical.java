package BinaryTree;
class Node12 {
    int val;
    Node12 left;
    Node12 right;
    Node12 (){}
    Node12(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class TwoTreesAreIdentical {
    public static void main(String[] args) {
        Node12 root1 = new Node12(1);
        root1.left = new Node12(2);
        root1.right = new Node12(3);
        
        Node12 root2 = new Node12(1);
        root2.left = new Node12(2);
        root2.right = new Node12(3);
        System.out.println(isIdentical(root1, root2));
    }
    
    public static boolean isIdentical(Node12 root1, Node12 root2) {
        if(root1 == null && root2 == null) {
            return true;
        } 
        if(root1 == null || root2 == null) {
            return false;
        } 
        return 
        root1.val == root2.val && 
        isIdentical(root1.left, root2.left) && 
        isIdentical(root1.right, root2.right);        
    }
}