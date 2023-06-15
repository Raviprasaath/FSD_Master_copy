package BinaryTree;
class TreeNodee {
    int val;
    TreeNodee left;
    TreeNodee right;
    TreeNodee (){}
    TreeNodee(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class MaxpathfromRoottoLeaf {
    public static void main(String[] args) {
        TreeNodee root = new TreeNodee(2);
        root.left = new TreeNodee(4);
        root.right = new TreeNodee(11);
        root.left.left = new TreeNodee(3);

        System.out.println(rootToLeaf(root));
    }
    public static long rootToLeaf(TreeNodee root){
        if (root == null) {
            return 0;
        }
        return maxPath(root, 0);
    }
    public static long maxPath(TreeNodee node, long currentSum) {
        if(node == null) {
            return 0;
        }
        
        currentSum = currentSum + node.val;

        if(node.left == null && node.right == null) {
            return currentSum;
        }
        long leftSum = maxPath(node.left, currentSum);
        long rightSum = maxPath(node.right, currentSum);
        return Math.max(leftSum, rightSum);
    }
}