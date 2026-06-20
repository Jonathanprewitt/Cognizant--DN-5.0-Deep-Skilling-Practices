public class Product {
    private final int productId;
    private final String productName;
    private final String category;

    // Constructor
    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    // Getters
    public int getProductId() {
        return productId;
    }

    public String getProductName() {
        return productName;
    }

    public String getCategory() {
        return category;
    }

    // Overriding toString for clean output printing
    @Override
    public String toString() {
        return "ID: " + productId + " | Name: " + productName + " | Category: " + category;
    }
}