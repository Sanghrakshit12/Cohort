function calculateTotalSpentByCategory(transactions) {
  let nums = [{category:""}];
  let l = transactions.length;
  nums.push(transactions[0]);
  for (let i = 1; i < l; i++) {let b = 0;
    for (let j = 0; j < nums.length; j++) {
      
      if (nums[j].category == transactions[i].category) {
        nums[j].prize += transactions[i].prize;
        b = 1;
      }
    }
    if (b == 0) {
      nums.push(transactions[i]);
    }
  }
  return nums;
}

console.log(calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
]));