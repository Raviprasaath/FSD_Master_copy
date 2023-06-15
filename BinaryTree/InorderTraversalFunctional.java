package BinaryTree;
class TreeNode15 {
    int val;
    TreeNode15 left;
    TreeNode15 right;
    TreeNode15 (){}
    TreeNode15(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class InorderTraversalFunctional {
    public static void main(String[] args) {
        TreeNode15 root = new TreeNode15(50);
        root.left = new TreeNode15(25);
        root.left.left = new TreeNode15(12);
        root.left.right = new TreeNode15(37);
        root.right = new TreeNode15(75);
        root.right.left = new TreeNode15(62);
        root.right.right = new TreeNode15(87);
        root.right.left.right = new TreeNode15(70);
        inorderTraversal(root);
    }
    public static void inorderTraversal(TreeNode15 node) {
        if (node == null) {
            return;
        }
        
        inorderTraversal(node.left);
        System.out.print(node.val+" ");
        inorderTraversal(node.right);
    }
}