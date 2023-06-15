package BinaryTree;
class TreeNodeee {
    int val;
    TreeNodeee left;
    TreeNodeee right;
    TreeNodeee (){}
    TreeNodeee(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class CheckforBST {
    public static void main(String[] args) {
        TreeNodeee root = new TreeNodeee(2);
        root.left = new TreeNodeee(1);
        root.right = new TreeNodeee(3);
       
        System.out.println(isBST(root));
    }
    public static boolean isValidBST(TreeNodeee root, Integer minValue, Integer maxValue) {
        if (root == null) {
            return true;
        }
        if ((minValue != null && root.val <= minValue) || (maxValue != null && root.val >= maxValue)) {
            return false;
        }
        return isValidBST(root.left, minValue, root.val) && isValidBST(root.right, root.val, maxValue); 
    }

    public static boolean isBST(TreeNodeee root) { 
        return isValidBST(root, null, null);
    }
}