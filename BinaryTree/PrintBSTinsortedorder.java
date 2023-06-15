package BinaryTree;
class TreeNode14 {
    int val;
    TreeNode14 left;
    TreeNode14 right;
    TreeNode14 (){}
    TreeNode14(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class PrintBSTinsortedorder {
    public static void main(String[] args) {
        TreeNode14 root = new TreeNode14(50);
        root.left = new TreeNode14(25);
        root.right = new TreeNode14(87);
        root.left.left = new TreeNode14(12);
        root.left.right = new TreeNode14(37);
        root.right.left = new TreeNode14(62);
        root.right.right = new TreeNode14(90);
        root.right.right.right = new TreeNode14(93);
        printBSTInSortedOrder(root);
    }
    public static void printBSTInSortedOrder(TreeNode14 node) {
        if (node == null) {
            return;
        }
        printBSTInSortedOrder (node.left);
        System.out.print(node.val+" ");
        printBSTInSortedOrder(node.right);
    }
}