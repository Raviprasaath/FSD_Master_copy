package BinaryTree;

public class InsertioninBST {
    public static void main(String[] args) {
        TreeNode root = new TreeNode(2);
        root.left = new TreeNode(1);
        root.right = new TreeNode(3);
        // root.left.left = new TreeNode(4);
        System.out.println(insertInBST(root,4 ));
        // TreeNode.head = TreeNode.kAltReverse(TreeNode.head, 3);
        
    }
    public static TreeNode insertInBST(TreeNode root,int key) {
        if (root == null) {
            root = new TreeNode(key);
            return root;
        } else {
            if (root.val < key) {
                root.right = insertInBST(root.right, key);
            } else if (root.val > key) {
                root.left = insertInBST(root.left, key);
            }
        }
        return root;
    }
}


// incomplete
// don't know how to print output