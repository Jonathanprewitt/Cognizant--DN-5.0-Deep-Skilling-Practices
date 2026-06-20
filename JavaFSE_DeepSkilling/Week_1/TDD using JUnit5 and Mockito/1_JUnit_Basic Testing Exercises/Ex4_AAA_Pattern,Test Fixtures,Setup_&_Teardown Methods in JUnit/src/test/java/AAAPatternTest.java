import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import org.junit.Before;
import org.junit.Test;

public class AAAPatternTest {
    
    // The object we will be testing
    private List<String> shoppingCart;

    // ==========================================
    // TEST FIXTURES (Setup & Teardown)
    // ==========================================

    @Before
    public void setUp() {
        // Runs BEFORE every single @Test method
        System.out.println("Running @Before: Initializing a fresh shopping cart.");
        shoppingCart = new ArrayList<>();
    }

    @After
    public void tearDown() {
        // Runs AFTER every single @Test method
        System.out.println("Running @After: Cleaning up the shopping cart.\n");
        shoppingCart.clear();
        shoppingCart = null;
    }


    // ==========================================
    // TEST CASES (Using AAA Pattern)
    // ==========================================

    @Test
    public void testAddItemToCart() {
        System.out.println("Executing testAddItemToCart...");
        
        // --- ARRANGE ---
        // Prepare the specific data needed for this test
        String item = "Laptop";
        
        // --- ACT ---
        // Perform the exact action you are testing
        shoppingCart.add(item);
        
        // --- ASSERT ---
        // Verify the outcome is what you expect
        assertEquals("Cart should have 1 item", 1, shoppingCart.size());
        assertTrue("Cart should contain the Laptop", shoppingCart.contains("Laptop"));
    }

    @Test
    public void testRemoveItemFromCart() {
        System.out.println("Executing testRemoveItemFromCart...");
        
        // --- ARRANGE ---
        // Prepare the cart by adding an item first
        shoppingCart.add("Headphones");
        
        // --- ACT ---
        // Perform the removal action
        shoppingCart.remove("Headphones");
        
        // --- ASSERT ---
        // Verify the cart is now empty
        assertEquals("Cart should be empty after removal", 0, shoppingCart.size());
    }
}