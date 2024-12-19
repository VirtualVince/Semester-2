using System;

public class Student
{
    // Attributes
    private static int nextID = 1;
    private int studentID;
    private string name;
    private string[] enrolledClasses;

    // Constructor
    public Student(string studentName)
    {
        studentID = nextID++;
        name = studentName;
        enrolledClasses = new string[0]; // Initialize an empty array for enrolled classes
    }

    // Methods
    public void Enroll(string className)
    {
        // Add the class to the list of enrolled classes
        Array.Resize(ref enrolledClasses, enrolledClasses.Length + 1);
        enrolledClasses[enrolledClasses.Length - 1] = className;
    }

    public void DisplayInfo()
    {
        Console.WriteLine($"Student ID: {studentID}");
        Console.WriteLine($"Name: {name}");
        Console.WriteLine("Enrolled Classes:");
        foreach (string className in enrolledClasses)
        {
            Console.WriteLine($"- {className}");
        }
    }
}

public class Professor
{
    // Attributes
    private static int nextID = 1;
    private int professorID;
    private string name;
    private string[] taughtClasses;

    // Constructor
    public Professor(string professorName)
    {
        professorID = nextID++;
        name = professorName;
        taughtClasses = new string[0]; // Initialize an empty array for taught classes
    }

    // Methods
    public void Teach(string className)
    {
        // Add the class to the list of taught classes
        Array.Resize(ref taughtClasses, taughtClasses.Length + 1);
        taughtClasses[taughtClasses.Length - 1] = className;
    }

    public void DisplayInfo()
    {
        Console.WriteLine($"Professor ID: {professorID}");
        Console.WriteLine($"Name: {name}");
        Console.WriteLine("Taught Classes:");
        foreach (string className in taughtClasses)
        {
            Console.WriteLine($"- {className}");
        }
    }
}

public class CollegeManagementSystem
{
    private static Student[] students = new Student[100];
    private static int studentCount = 0;
    private static Professor[] professors = new Professor[50];
    private static int professorCount = 0;
    private static string[,] classEnrollment = new string[50, 100]; // Assuming 50 classes and 100 students max

    public static void AddStudent(string name)
    {
        students[studentCount++] = new Student(name);
    }

    public static void AddProfessor(string name)
    {
        professors[professorCount++] = new Professor(name);
    }

    public static void EnrollStudentInClass(int studentID, int classIndex)
    {
        if (studentID < 1 || studentID > studentCount)
        {
            Console.WriteLine("Invalid student ID");
            return;
        }

        if (classIndex < 1 || classIndex > 50)
        {
            Console.WriteLine("Invalid class index");
            return;
        }

        classEnrollment[classIndex - 1, studentID - 1] = "Enrolled";
        Console.WriteLine("Student enrolled successfully.");
    }

    public static void ViewStudentsInClass(int classIndex)
    {
        if (classIndex < 1 || classIndex > 50)
        {
            Console.WriteLine("Invalid class index");
            return;
        }

        Console.WriteLine($"Students enrolled in class {classIndex}:");
        for (int i = 0; i < studentCount; i++)
        {
            if (classEnrollment[classIndex - 1, i] == "Enrolled")
            {
                Console.WriteLine($"- {students[i].GetName()}");
            }
        }
    }

    public static void Main(string[] args)
    {
        // Sample usage
        AddStudent("Alice");
        AddStudent("Bob");
        AddProfessor("Dr. Smith");
        AddProfessor("Prof. Johnson");

        EnrollStudentInClass(1, 1);
        EnrollStudentInClass(2, 1);
        EnrollStudentInClass(1, 2);

        ViewStudentsInClass(1);
    }
}
