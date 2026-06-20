import java.util.Arrays;
import java.util.Comparator;
public class EcommerceSearch {

    // 1. Linear Search Algorithm
    // Checks every element one by one from start to finish.
    public static Product linearSearch(Product[] products, int targetId) {
        System.out.println("Executing Linear Search...");
        for (Product p : products) {
            if (p.getProductId() == targetId) {
                return p;
            }
        }
        return null; // Product not found
    }

    // 2. Binary Search Algorithm
    // Uses divide and conquer. STRICT REQUIREMENT: The array MUST be sorted.
    public static Product binarySearch(Product[] products, int targetId) {
        System.out.println("Executing Binary Search...");
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int midId = products[mid].getProductId();

            if (midId == targetId) {
                return products[mid]; // Target found
            } else if (midId < targetId) {
                left = mid + 1; // Search the right half
            } else {
                right = mid - 1; // Search the left half
            }
        }
        return null; // Product not found
    }

    public static void main(String[] args) {
        // Setup: Create an unsorted array of products
        Product[] inventory = {
            new Product(105, "Wireless Mouse", "Electronics"),
            new Product(101, "Mechanical Keyboard", "Electronics"),
            new Product(109, "Desk Mat", "Accessories"),
            new Product(102, "HD Monitor", "Electronics"),
            new Product(107, "USB-C Hub", "Accessories")
        };

        System.out.println("--- E-Commerce Search Platform ---");

        // Test Linear Search (Works perfectly on unsorted data)
        int searchId1 = 102;
        Product foundLinear = linearSearch(inventory, searchId1);
        System.out.println("Result: " + (foundLinear != null ? foundLinear : "Not found"));

        System.out.println("\n----------------------------------");

        // Test Binary Search
        int searchId2 = 107;
        
        // CRITICAL STEP: Binary search will fail if the array is not sorted first!
        System.out.println("Sorting inventory by Product ID for Binary Search...");
        Arrays.sort(inventory, Comparator.comparingInt(Product::getProductId));

        Product foundBinary = binarySearch(inventory, searchId2);
        System.out.println("Result: " + (foundBinary != null ? foundBinary : "Not found"));
    }
}