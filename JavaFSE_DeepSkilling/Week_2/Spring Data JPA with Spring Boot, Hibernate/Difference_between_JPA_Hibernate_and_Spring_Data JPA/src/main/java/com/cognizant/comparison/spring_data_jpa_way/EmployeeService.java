package com.cognizant.comparison.spring_data_jpa_way;

import com.cognizant.comparison.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    // The @Transactional annotation handles all the beginTransaction(), commit(),
    // and rollback() boilerplate seen in the raw Hibernate example.
    @Transactional
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }
}
