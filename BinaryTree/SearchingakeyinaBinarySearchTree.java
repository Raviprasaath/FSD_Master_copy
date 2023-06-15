package BinaryTree;
class TreeNode123 {
    int val;
    TreeNode123 left;
    TreeNode123 right;
    TreeNode123 (){}
    TreeNode123(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class SearchingakeyinaBinarySearchTree {
    public static void main(String[] args) {
        TreeNode123 root = new TreeNode123(4);
        root.left = new TreeNode123(2);
        root.right = new TreeNode123(7);
        root.left.left = new TreeNode123(1);
        root.left.right = new TreeNode123(3);
        System.out.println(searchInBST(root, 2));
    }

    public static int searchInBST(TreeNode123 root,int key) {
        if (root == null) {
            return -1;
        }
        if (root.val == key) {
            return 1;
        }
        if (root.val < key) {
            return searchInBST (root.right, key);
        } else {
            return searchInBST (root.left, key);
        }

    }
}