import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculatorTest {

    @Test
    public void testAddition() {
        // Setup
        Calculator calc = new Calculator();

        // Execute
        int result = calc.add(10, 5);

        // Assert (Verify the result is exactly 15)
        assertEquals("10 + 5 must equal 15", 15, result);

        System.out.println("Test passed successfully: 10 + 5 = 15");
    }
}