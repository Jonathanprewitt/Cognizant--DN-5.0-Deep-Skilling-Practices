package com.practice;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import static org.mockito.Mockito.verify;

public class MyServiceTest {
    
    @Test
    public void testVerifyInteraction() {
        // 1. Create a mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        MyService service = new MyService(mockApi);
        
        // 2. Call the method
        service.fetchData();
        
        // 3. Verify the interaction
        verify(mockApi).getData();
        
        System.out.println("Exercise 2 Passed: Verified that getData() was called exactly once.");
    }
}