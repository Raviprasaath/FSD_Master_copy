package BinaryTree;


class BinaryTree25 {
    int val;
    BinaryTree25 left;
    BinaryTree25 right;

    BinaryTree25(int data) {
        val = data;
        left = null;
        right = null;
    }

}

public class MinimuminBST {
    public static void main(String[] args) {
        BinaryTree25 root = new BinaryTree25(5);
        root.left = new BinaryTree25(4);
        root.right = new BinaryTree25(6);
        root.left.left = new BinaryTree25(3);
        root.right.right = new BinaryTree25(7);
        root.left.left.left = new BinaryTree25(1);
        System.out.println(minValue(root));
    }
    public static int minValue(BinaryTree25 node) {
        BinaryTree25 temp = node;
        while (temp.left != null) {
            temp = temp.left;
        }
        return (temp.val);
    }
}