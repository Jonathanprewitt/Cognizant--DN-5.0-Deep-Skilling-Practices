public class FactoryMethodPatternExample {
    public static void main(String[] args) {
        System.out.println("--- Testing Factory Method Pattern ---");

        // 1. Create a Word Document using its specific factory
        DocumentFactory wordFactory = new WordDocumentFactory();
        Document wordDoc = wordFactory.createDocument();
        wordDoc.open();
        wordDoc.save();

        System.out.println("-------------------------");

        // 2. Create a PDF Document using its specific factory
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdfDoc = pdfFactory.createDocument();
        pdfDoc.open();
        pdfDoc.save();

        System.out.println("-------------------------");

        // 3. Create an Excel Document using its specific factory
        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excelDoc = excelFactory.createDocument();
        excelDoc.open();
        excelDoc.save();
    }
}