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
public class PostordertraversalFunctional {
    public static void main(String[] args) {
        TreeNodeee root = new TreeNodeee(50);
        root.left = new TreeNodeee(25);
        root.right = new TreeNodeee(75);
        root.left.left = new TreeNodeee(12);
        root.left.right = new TreeNodeee(37);
        root.left.right.left = new TreeNodeee(30);
        root.right.left = new TreeNodeee(62);
        root.right.right = new TreeNodeee(87);
        root.right.left.right = new TreeNodeee(70);
        postorderTraversal(root);
    }
    public static void postorderTraversal(TreeNodeee node) {
        if(node != null) {
            postorderTraversal(node.left);
            postorderTraversal(node.right);
            System.out.print(node.val+" ");
        }
    }    
}