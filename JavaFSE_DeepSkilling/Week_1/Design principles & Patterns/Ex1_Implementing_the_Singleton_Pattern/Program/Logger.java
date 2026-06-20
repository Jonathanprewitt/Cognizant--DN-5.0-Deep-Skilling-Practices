public class Logger {
    private static Logger instance;
    private Logger() {
        System.out.println("Logger instance created.");
    }
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        // Return the one and only instance.
        return instance;
    }
    public void logMessage(String message) {
        System.out.println("[LOG]: " + message);
    }
}