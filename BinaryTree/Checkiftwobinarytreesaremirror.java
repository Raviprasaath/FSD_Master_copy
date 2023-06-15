package BinaryTree;
class TreeNode12 {
    int val;
    TreeNode12 left;
    TreeNode12 right;
    TreeNode12 (){}
    TreeNode12(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class Checkiftwobinarytreesaremirror {
    public static void main(String[] args) {
        TreeNode12 root = new TreeNode12(50);
        root.left = new TreeNode12(25);
        root.left.left = new TreeNode12(12);
        root.left.right = new TreeNode12(37);
        root.right = new TreeNode12(87);
        root.right.left = new TreeNode12(62);
        root.right.right = new TreeNode12(90);
        root.right.right.right = new TreeNode12(93);
        System.out.println(isMirror(root, root));
    }
    
    public static boolean isMirror(TreeNode12 root1, TreeNode12 root2) {
        if (root1 == null && root2 == null) {
            return true;
        }
        if (root1 == null || root2 == null) {
            return false;
        }
        return 
        root1.val == root2.val && 
        isMirror(root1.left, root2.right) && 
        isMirror (root1.right, root2.left);
    }

}