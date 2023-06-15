package BinaryTree;

import java.util.Stack;

class TreeNode156 {
    int val;
    TreeNode156 left;
    TreeNode156 right;
    TreeNode156 (){}
    TreeNode156(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class FindthekthsmallestelementinBST {
    public static void main(String[] args) {
        TreeNode156 root = new TreeNode156(50);
        root.left = new TreeNode156(25);
        root.left.left = new TreeNode156(12);
        root.left.right = new TreeNode156(37);
        root.right = new TreeNode156(75);
        root.right.left = new TreeNode156(62);
        root.right.right = new TreeNode156(87);
        root.right.left.right = new TreeNode156(70);
        kthSmallestInBST(root, 3);
    }
    
    public static void kthSmallestInBST(TreeNode156 root, int k) {
        Stack <TreeNode156> stack = new Stack<>();
            TreeNode156 current = root;
            int count = 0, ans = 0;
            while (current != null || !stack.empty()) {
                while (current != null) {
                    stack.push(current);
                    current = current.left;
                }
                current = stack.pop();
                count++;
                if (count == k) {
                    ans = current.val;
                    break;
                }
                current = current.right;
            }
            System.out.print(ans);
    }
}