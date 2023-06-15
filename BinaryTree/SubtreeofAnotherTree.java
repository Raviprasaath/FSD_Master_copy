package BinaryTree;
class Nodee12 {
    int val;
    Nodee12 left;
    Nodee12 right;
    Nodee12 (){}
    Nodee12(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class SubtreeofAnotherTree {
    public static void main(String[] args) {
        Nodee12 root1 = new Nodee12(1);
        root1.left = new Nodee12(2);
        root1.right = new Nodee12(3);
        root1.right.left = new Nodee12(4);
        
        Nodee12 root2 = new Nodee12(3);
        root2.left = new Nodee12(4);

        System.out.println(isSubtree(root1, root2));
    }
    
    public static boolean isSubtree(Nodee12 root, Nodee12 subRoot) {
        if(root != null && subRoot != null){
            return same(root, subRoot) || (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot));
        } 
        else if (root != null || subRoot != null) {
            return false;
        } else {        
            return true;
        } 
    }
    public static boolean same(Nodee12 root, Nodee12 subRoot) {
        if(root != null && subRoot != null) {
            return root.val == subRoot.val && same(root.left, subRoot.left) && same(root.right, subRoot.right);
        } else if (root != null || subRoot != null) {
            return false;
        } else {
            return true;
        }         
    }
}