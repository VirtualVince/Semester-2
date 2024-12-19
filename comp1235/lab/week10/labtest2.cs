LAB TEST 2 Vincente Sequeira

using System;
//1.
public class Employee
{
    int employeeId;
    string name;
    string department;
    double salary;

//2.
    public Employee(int employeeId, string name, string department, double salary)
    {
        this.employeeId = employeeId;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    
//3.
    public override string ToString()
    {
        return $"Employee ID: {employeeId}\nName: {name}\nDepartment: {department}\nSalary: {salary:C}";
    }
    
//4.
    public void GiveRaise(double raiseAmount)
    {
        if (raiseAmount >= 0)
        {
            salary += raiseAmount;
            Console.WriteLine($"Salary increased by {raiseAmount:C}. New salary: {salary:C}");
        }
        else
        {
            Console.WriteLine("Raise amount must be a positive value.");
        }
    }
}


//5.
class Program
{
    static void Main(string[] args)
    {
        Employee employee = new Employee(13, "Vincente Sequeira", "IT", 100000);

        Console.WriteLine("Employee Details:");
        Console.WriteLine(employee.ToString());

        employee.GiveRaise(5000);
        employee.department = "Human Resource";

        Console.WriteLine("\nEmployee Details after department change:");
        Console.WriteLine(employee.ToString());
    }
}