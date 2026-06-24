package com.cognizant.comparison.hibernate_way;

import com.cognizant.comparison.model.Employee;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

public class RawHibernateDao {
    
    private SessionFactory factory;

    /* Method to CREATE an employee in the database using pure Hibernate */
    public Integer addEmployee(Employee employee) {
        Session session = factory.openSession();
        Transaction tx = null;
        Integer employeeID = null;
        
        try {
            tx = session.beginTransaction();
            employeeID = (Integer) session.save(employee);
            tx.commit();
        } catch (HibernateException e) {
            if (tx != null) tx.rollback();
            // Replaced e.printStackTrace() with standard output to clear the IDE warning
            System.out.println("Hibernate Exception occurred: " + e.getMessage());
        } finally {
            session.close();
        }
        
        return employeeID;
    }
}
