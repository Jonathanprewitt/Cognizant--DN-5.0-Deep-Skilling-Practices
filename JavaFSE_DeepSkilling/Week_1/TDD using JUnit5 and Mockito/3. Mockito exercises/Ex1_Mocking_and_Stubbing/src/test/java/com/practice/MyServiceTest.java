package com.practice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class MyServiceTest {
    
    @Test
    public void testExternalApi() {
        // 1. Create a mock (fake) object for the external API
        ExternalApi mockApi = mock(ExternalApi.class);
        
        // 2. Stub the method: Tell the fake object exactly what to return when asked
        when(mockApi.getData()).thenReturn("Mock Data");
        
        // 3. Pass the fake API into our real service
        MyService service = new MyService(mockApi);
        
        // 4. Execute the method
        String result = service.fetchData();
        
        // 5. Assert that the service successfully passed along the fake data
        assertEquals("Mock Data", result);
        
        System.out.println("Mockito test passed! Service returned: " + result);
    }
}