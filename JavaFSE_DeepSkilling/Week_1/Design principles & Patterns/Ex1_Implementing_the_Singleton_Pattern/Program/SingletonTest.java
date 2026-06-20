public class SingletonTest {
    public static void main(String[] args) {
        System.out.println("--- Starting Application ---");

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Using the logger references to print messages
        logger1.logMessage("Application initialized successfully.");
        logger2.logMessage("User connection established.");

        // Verification Test
        System.out.println("\n--- Verification ---");
        if (logger1 == logger2) {
            System.out.println("SUCCESS: logger1 and logger2 point to the exact same instance in memory.");
        } else {
            System.out.println("FAILURE: Multiple instances were created.");
        }
    }
}