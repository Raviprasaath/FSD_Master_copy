package BinaryTree;
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode (){}
    TreeNode(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

public class HeightOfBinaryTree {
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(10);
        root.right = new TreeNode(39);
        root.left.left = new TreeNode(5);
        System.out.println(getHeight(root));
    }
    public static int getHeight(TreeNode node) {
        if (node == null) {
            return 0;
        }

        int ans = Math.max(getHeight(node.left), getHeight(node.right));
        return ans+1;
    }
}
