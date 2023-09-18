using System;
using System.Collections.Generic;

public class VendingMachine
{
    private Dictionary<string, Item> inventory;
    private decimal userBalance;

    public VendingMachine()
    {
        inventory = new Dictionary<string, Item>
        {
            { "A1", new Item("Soda", 1.50m) },
            { "A2", new Item("Chips", 1.00m) },
            { "B1", new Item("Candy", 0.75m) }
        };
        userBalance = 0.0m;
    }

    public void DisplayMenu()
    {
        Console.WriteLine("Vending Machine Menu:");
        foreach (var item in inventory)
        {
            Console.WriteLine($"{item.Key}: {item.Value.Name} - ${item.Value.Price}");
        }
        Console.WriteLine($"Your Balance: ${userBalance}");
    }

    public void InsertMoney(decimal amount)
    {
        userBalance += amount;
    }

    public void BuyItem(string code)
    {
        if (inventory.ContainsKey(code))
        {
            Item selectedItem = inventory[code];
            if (userBalance >= selectedItem.Price)
            {
                Console.WriteLine($"Dispensing {selectedItem.Name}");
                userBalance -= selectedItem.Price;
            }
            else
            {
                Console.WriteLine("Insufficient funds. Please insert more money.");
            }
        }
        else
        {
            Console.WriteLine("Invalid item code.");
        }
    }

    public static void Main(string[] args)
    {
        VendingMachine vendingMachine = new VendingMachine();
        while (true)
        {
            vendingMachine.DisplayMenu();

            Console.Write("Insert money (in dollars): ");
            if (decimal.TryParse(Console.ReadLine(), out decimal money))
            {
                vendingMachine.InsertMoney(money);

                Console.Write("Enter item code (e.g., A1, A2, B1): ");
                string itemCode = Console.ReadLine().ToUpper();
                vendingMachine.BuyItem(itemCode);
            }
            else
            {
                Console.WriteLine("Invalid amount. Please insert valid money.");
            }
        }
    }
}

public class Item
{
    public string Name { get; set; }
    public decimal Price { get; set; }

    public Item(string name, decimal price)
    {
        Name = name;
        Price = price;
    }
}
