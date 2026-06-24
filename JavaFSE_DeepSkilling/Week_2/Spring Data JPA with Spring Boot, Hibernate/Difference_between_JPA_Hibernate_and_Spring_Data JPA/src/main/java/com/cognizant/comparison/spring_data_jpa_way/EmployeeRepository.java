package com.cognizant.comparison.spring_data_jpa_way;

import com.cognizant.comparison.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

// Spring Data JPA completely eliminates the need to write the raw Hibernate code.
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
