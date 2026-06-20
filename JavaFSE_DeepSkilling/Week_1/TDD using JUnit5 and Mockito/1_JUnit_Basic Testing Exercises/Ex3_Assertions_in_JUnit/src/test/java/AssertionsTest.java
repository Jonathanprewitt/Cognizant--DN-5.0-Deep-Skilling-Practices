import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse; // This imports ALL assertion methods at once
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import org.junit.Test;

public class AssertionsTest {
    
    @Test
    public void testAssertions() {
        // Assert equals: Checks if two values are identical
        assertEquals(5, 2 + 3);

        // Assert true: Checks if a condition evaluates to boolean TRUE
        assertTrue(5 > 3);

        // Assert false: Checks if a condition evaluates to boolean FALSE
        assertFalse(5 < 3);

        // Assert null: Checks if an object has no memory reference
        assertNull(null);

        // Assert not null: Checks if an object actually exists in memory
        assertNotNull(new Object());
        
        System.out.println("All 5 assertions passed successfully!");
    }
}