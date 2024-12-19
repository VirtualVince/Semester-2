using System;

// Vincente Sequeira
// Std ID: 101484793

class Program
{
    static void Main()
    {
        Console.WriteLine("Welcome to the Restaurant Order Management System!");
        Console.WriteLine("----------------------------------------------");

        // Initialize menu items with prices
        string[] menuItems = { "Burger", "Pizza", "Pasta", "Salad", "Soft Drink" };
        decimal[] itemPrices = { 5.99m, 8.99m, 7.49m, 4.99m, 1.99m };

        // Initialize order arrays
        int[] orderQuantities = new int[menuItems.Length];

        bool continueOrdering = true;

        do
        {
            DisplayMenu(menuItems, itemPrices);

            int choice = GetMenuChoice(menuItems.Length);

            // Get quantity for the chosen item
            int quantity = GetOrderQuantity();

            // Update order quantities
            orderQuantities[choice - 1] += quantity;

            Console.WriteLine("Item added to the order!");

            // Ask if the user wants to continue ordering
            Console.Write("Do you want to add more items to your order? (yes/no): ");
            string response = Console.ReadLine().ToLower();

            if (response != "yes")
            {
                continueOrdering = false;
            }

        } while (continueOrdering);

        // Review and modify order
        ReviewAndModifyOrder(menuItems, orderQuantities, itemPrices);

        // Checkout and display total
        CheckoutAndDisplayTotal(menuItems, orderQuantities, itemPrices);

        Console.WriteLine("Thank you for using the Restaurant Order Management System!");
    }

    static void DisplayMenu(string[] items, decimal[] prices)
    {
        Console.WriteLine("Menu:");
        for (int i = 0; i < items.Length; i++)
        {
            Console.WriteLine($"{i + 1}. {items[i]} - ${prices[i]}");
        }
    }

    static int GetMenuChoice(int maxChoice)
    {
        int choice;
        bool isValid;

        do
        {
            Console.Write("Enter the number of the item you want to order: ");
            isValid = int.TryParse(Console.ReadLine(), out choice);

            if (!isValid || choice < 1 || choice > maxChoice)
            {
                Console.WriteLine("Invalid choice. Please try again.");
            }

        } while (!isValid || choice < 1 || choice > maxChoice);

        return choice;
    }

    static int GetOrderQuantity()
    {
        int quantity;
        bool isValid;

        do
        {
            Console.Write("Enter the quantity: ");
            isValid = int.TryParse(Console.ReadLine(), out quantity);

            if (!isValid || quantity < 1)
            {
                Console.WriteLine("Invalid quantity. Please enter a valid number greater than 0.");
            }

        } while (!isValid || quantity < 1);

        return quantity;
    }

    static void ReviewAndModifyOrder(string[] items, int[] quantities, decimal[] prices)
    {
        Console.WriteLine("Review Your Order:");
        for (int i = 0; i < items.Length; i++)
        {
            if (quantities[i] > 0)
            {
                Console.WriteLine($"{items[i]} - Quantity: {quantities[i]} - Subtotal: ${quantities[i] * prices[i]}");
            }
        }

        // Offer options to modify the order (optional, not explicitly required)
        Console.WriteLine("Options:");
        Console.WriteLine("1. Change the quantity of an item");
        Console.WriteLine("2. Remove an item from the order");
    }

    static void CheckoutAndDisplayTotal(string[] items, int[] quantities, decimal[] prices)
    {
        decimal subtotal = 0;

        Console.WriteLine("Your Final Order:");
        for (int i = 0; i < items.Length; i++)
        {
            if (quantities[i] > 0)
            {
                Console.WriteLine($"{items[i]} - Quantity: {quantities[i]} - Subtotal: ${quantities[i] * prices[i]}");
                subtotal += quantities[i] * prices[i];
            }
        }

        // Calculate total including HST (13%)
        decimal taxRate = 0.13m;
        decimal taxAmount = subtotal * taxRate;

        // Prompt for discount code
        Console.Write("Do you have a discount code? Enter it here (or press Enter to skip): ");
        string discountCode = Console.ReadLine();

        // Check if the discount code is valid, and if yes, apply the discount
        if (!string.IsNullOrEmpty(discountCode) && discountCode == "DISCOUNT2024")
        {
            // Calculate discount
            decimal discountPercentage = 0.10m; // 10% discount
            decimal discountAmount = subtotal * discountPercentage;
            decimal discountedTotal = subtotal - discountAmount;

            Console.WriteLine($"Discount: ${discountAmount} ({discountPercentage * 100}% off)");
            Console.WriteLine($"Total after discount: ${discountedTotal}");
        }
        else
        {
            Console.WriteLine("Invalid discount code or no discount applied.");
            Console.WriteLine($"Total: ${subtotal + taxAmount}");
        }
    }
}