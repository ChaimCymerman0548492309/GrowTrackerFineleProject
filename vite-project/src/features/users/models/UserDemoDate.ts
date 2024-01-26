import { User } from "../interfaces/user+gardenInterfice";

export const UserDemoDate: User[] = [
  {
  _id: 1,
  name: "John Doe",
  isAdmin: false,
  email: "john.doe@example.com",
  password: "securepassword",
  userType: "Regular",
  address: {
    street: "123 Main Street",
    city: "Cityville"
  },
  paymentMethod: {
    type: "Credit Card",
    creditCardNumber: "1234-5678-9012-3456",
    expirationDate: "12/23",
    cvv: "123"
  },
  bankAccount: {
    accountNumber: "9876543210",
    bankName: "Bank of Cityville",
    accountHolderName: "John Doe"
  },
  contactPhoneNumber: "555-1234",
  gardens: [
    {
      id: 1,
      name: "John's Garden",
      description: "A beautiful garden with colorful flowers and lush greenery",
      Contact_person: {
        name: "John Doe",
        phone_number: "555-1234"
      },
      Gardner: {
        name: "Gardener Name",
        Phone: "123-4567",
        Rating: 4.5,
        gardner_image: "gardener.jpg"
      },
      Park_size: 1000,
      Vegetation: "Lush Green",
      Type: "Public",
      Treatment: {
        grass_trimming: true,
        tree_pruning: true,
        pest_control: true
      },
      Coordinates: [12.345, 67.890],
      Address: {
        street: "456 Park Avenue",
        city: "Cityville"
      },
      GardenImg: ["image1.jpg", "image2.jpg"],
      GardenImgAlt: "Images of John's Garden"
    }
  ],
  users: [
    {
      _id: 2,
      name: "Jane Doe",
      isAdmin: true,
      email: "jane.doe@example.com",
      password: "anothersecurepassword",
      userType: "Admin",
      address: {
        street: "789 Oak Street",
        city: "Cityville"
      },
      paymentMethod: {
        type: "PayPal",
        creditCardNumber: "N/A",
        expirationDate: "N/A",
        cvv: "N/A"
      },
      bankAccount: {
        accountNumber: "N/A",
        bankName: "N/A",
        accountHolderName: "N/A"
      },
      contactPhoneNumber: "555-5678",
      gardens: [],
      users: []
    }
  ]
},
  {
  _id: 1,
  name: "John Doe",
  isAdmin: false,
  email: "john.doe@example.com",
  password: "securepassword",
  userType: "Regular",
  address: {
    street: "123 Main Street",
    city: "Cityville"
  },
  paymentMethod: {
    type: "Credit Card",
    creditCardNumber: "1234-5678-9012-3456",
    expirationDate: "12/23",
    cvv: "123"
  },
  bankAccount: {
    accountNumber: "9876543210",
    bankName: "Bank of Cityville",
    accountHolderName: "John Doe"
  },
  contactPhoneNumber: "555-1234",
  gardens: [
    {
      id: 1,
      name: "John's Garden",
      description: "A beautiful garden with colorful flowers and lush greenery",
      Contact_person: {
        name: "John Doe",
        phone_number: "555-1234"
      },
      Gardner: {
        name: "Gardener Name",
        Phone: "123-4567",
        Rating: 4.5,
        gardner_image: "gardener.jpg"
      },
      Park_size: 1000,
      Vegetation: "Lush Green",
      Type: "Public",
      Treatment: {
        grass_trimming: true,
        tree_pruning: true,
        pest_control: true
      },
      Coordinates: [12.345, 67.890],
      Address: {
        street: "456 Park Avenue",
        city: "Cityville"
      },
      GardenImg: ["image1.jpg", "image2.jpg"],
      GardenImgAlt: "Images of John's Garden"
    }
  ],
  users: [
    {
      _id: 2,
      name: "Jane Doe",
      isAdmin: true,
      email: "jane.doe@example.com",
      password: "anothersecurepassword",
      userType: "Admin",
      address: {
        street: "789 Oak Street",
        city: "Cityville"
      },
      paymentMethod: {
        type: "PayPal",
        creditCardNumber: "N/A",
        expirationDate: "N/A",
        cvv: "N/A"
      },
      bankAccount: {
        accountNumber: "N/A",
        bankName: "N/A",
        accountHolderName: "N/A"
      },
      contactPhoneNumber: "555-5678",
      gardens: [],
      users: []
    }
  ]
},
  {
  _id: 1,
  name: "John Doe",
  isAdmin: false,
  email: "john.doe@example.com",
  password: "securepassword",
  userType: "Regular",
  address: {
    street: "123 Main Street",
    city: "Cityville"
  },
  paymentMethod: {
    type: "Credit Card",
    creditCardNumber: "1234-5678-9012-3456",
    expirationDate: "12/23",
    cvv: "123"
  },
  bankAccount: {
    accountNumber: "9876543210",
    bankName: "Bank of Cityville",
    accountHolderName: "John Doe"
  },
  contactPhoneNumber: "555-1234",
  gardens: [
    {
      id: 1,
      name: "John's Garden",
      description: "A beautiful garden with colorful flowers and lush greenery",
      Contact_person: {
        name: "John Doe",
        phone_number: "555-1234"
      },
      Gardner: {
        name: "Gardener Name",
        Phone: "123-4567",
        Rating: 4.5,
        gardner_image: "gardener.jpg"
      },
      Park_size: 1000,
      Vegetation: "Lush Green",
      Type: "Public",
      Treatment: {
        grass_trimming: true,
        tree_pruning: true,
        pest_control: true
      },
      Coordinates: [12.345, 67.890],
      Address: {
        street: "456 Park Avenue",
        city: "Cityville"
      },
      GardenImg: ["image1.jpg", "image2.jpg"],
      GardenImgAlt: "Images of John's Garden"
    }
  ],
  users: [
    {
      _id: 2,
      name: "Jane Doe",
      isAdmin: true,
      email: "jane.doe@example.com",
      password: "anothersecurepassword",
      userType: "Admin",
      address: {
        street: "789 Oak Street",
        city: "Cityville"
      },
      paymentMethod: {
        type: "PayPal",
        creditCardNumber: "N/A",
        expirationDate: "N/A",
        cvv: "N/A"
      },
      bankAccount: {
        accountNumber: "N/A",
        bankName: "N/A",
        accountHolderName: "N/A"
      },
      contactPhoneNumber: "555-5678",
      gardens: [],
      users: []
    }
  ]
},
  {
  _id: 1,
  name: "John Doe",
  isAdmin: false,
  email: "john.doe@example.com",
  password: "securepassword",
  userType: "Regular",
  address: {
    street: "123 Main Street",
    city: "Cityville"
  },
  paymentMethod: {
    type: "Credit Card",
    creditCardNumber: "1234-5678-9012-3456",
    expirationDate: "12/23",
    cvv: "123"
  },
  bankAccount: {
    accountNumber: "9876543210",
    bankName: "Bank of Cityville",
    accountHolderName: "John Doe"
  },
  contactPhoneNumber: "555-1234",
  gardens: [
    {
      id: 1,
      name: "John's Garden",
      description: "A beautiful garden with colorful flowers and lush greenery",
      Contact_person: {
        name: "John Doe",
        phone_number: "555-1234"
      },
      Gardner: {
        name: "Gardener Name",
        Phone: "123-4567",
        Rating: 4.5,
        gardner_image: "gardener.jpg"
      },
      Park_size: 1000,
      Vegetation: "Lush Green",
      Type: "Public",
      Treatment: {
        grass_trimming: true,
        tree_pruning: true,
        pest_control: true
      },
      Coordinates: [12.345, 67.890],
      Address: {
        street: "456 Park Avenue",
        city: "Cityville"
      },
      GardenImg: ["image1.jpg", "image2.jpg"],
      GardenImgAlt: "Images of John's Garden"
    }
  ],
  users: [
    {
      _id: 2,
      name: "Jane Doe",
      isAdmin: true,
      email: "jane.doe@example.com",
      password: "anothersecurepassword",
      userType: "Admin",
      address: {
        street: "789 Oak Street",
        city: "Cityville"
      },
      paymentMethod: {
        type: "PayPal",
        creditCardNumber: "N/A",
        expirationDate: "N/A",
        cvv: "N/A"
      },
      bankAccount: {
        accountNumber: "N/A",
        bankName: "N/A",
        accountHolderName: "N/A"
      },
      contactPhoneNumber: "555-5678",
      gardens: [],
      users: []
    }
  ]
},
  {
  _id: 1,
  name: "John Doe",
  isAdmin: false,
  email: "john.doe@example.com",
  password: "securepassword",
  userType: "Regular",
  address: {
    street: "123 Main Street",
    city: "Cityville"
  },
  paymentMethod: {
    type: "Credit Card",
    creditCardNumber: "1234-5678-9012-3456",
    expirationDate: "12/23",
    cvv: "123"
  },
  bankAccount: {
    accountNumber: "9876543210",
    bankName: "Bank of Cityville",
    accountHolderName: "John Doe"
  },
  contactPhoneNumber: "555-1234",
  gardens: [
    {
      id: 1,
      name: "John's Garden",
      description: "A beautiful garden with colorful flowers and lush greenery",
      Contact_person: {
        name: "John Doe",
        phone_number: "555-1234"
      },
      Gardner: {
        name: "Gardener Name",
        Phone: "123-4567",
        Rating: 4.5,
        gardner_image: "gardener.jpg"
      },
      Park_size: 1000,
      Vegetation: "Lush Green",
      Type: "Public",
      Treatment: {
        grass_trimming: true,
        tree_pruning: true,
        pest_control: true
      },
      Coordinates: [12.345, 67.890],
      Address: {
        street: "456 Park Avenue",
        city: "Cityville"
      },
      GardenImg: ["image1.jpg", "image2.jpg"],
      GardenImgAlt: "Images of John's Garden"
    }
  ],
  users: [
    {
      _id: 2,
      name: "Jane Doe",
      isAdmin: true,
      email: "jane.doe@example.com",
      password: "anothersecurepassword",
      userType: "Admin",
      address: {
        street: "789 Oak Street",
        city: "Cityville"
      },
      paymentMethod: {
        type: "PayPal",
        creditCardNumber: "N/A",
        expirationDate: "N/A",
        cvv: "N/A"
      },
      bankAccount: {
        accountNumber: "N/A",
        bankName: "N/A",
        accountHolderName: "N/A"
      },
      contactPhoneNumber: "555-5678",
      gardens: [],
      users: []
    }
  ]
},
  {
  _id: 1,
  name: "John Doe",
  isAdmin: false,
  email: "john.doe@example.com",
  password: "securepassword",
  userType: "Regular",
  address: {
    street: "123 Main Street",
    city: "Cityville"
  },
  paymentMethod: {
    type: "Credit Card",
    creditCardNumber: "1234-5678-9012-3456",
    expirationDate: "12/23",
    cvv: "123"
  },
  bankAccount: {
    accountNumber: "9876543210",
    bankName: "Bank of Cityville",
    accountHolderName: "John Doe"
  },
  contactPhoneNumber: "555-1234",
  gardens: [
    {
      id: 2,
      name: "John's Garden",
      description: "A beautiful garden with colorful flowers and lush greenery",
      Contact_person: {
        name: "John Doe",
        phone_number: "555-1234"
      },
      Gardner: {
        name: "Gardener Name",
        Phone: "123-4567",
        Rating: 4.5,
        gardner_image: "gardener.jpg"
      },
      Park_size: 1000,
      Vegetation: "Lush Green",
      Type: "Public",
      Treatment: {
        grass_trimming: true,
        tree_pruning: true,
        pest_control: true
      },
      Coordinates: [12.345, 67.890],
      Address: {
        street: "456 Park Avenue",
        city: "Cityville"
      },
      GardenImg: ["image1.jpg", "image2.jpg"],
      GardenImgAlt: "Images of John's Garden"
    }
  ],
  users: [
    {
      _id: 2,
      name: "Jane Doe",
      isAdmin: true,
      email: "jane.doe@example.com",
      password: "anothersecurepassword",
      userType: "Admin",
      address: {
        street: "789 Oak Street",
        city: "Cityville"
      },
      paymentMethod: {
        type: "PayPal",
        creditCardNumber: "N/A",
        expirationDate: "N/A",
        cvv: "N/A"
      },
      bankAccount: {
        accountNumber: "N/A",
        bankName: "N/A",
        accountHolderName: "N/A"
      },
      contactPhoneNumber: "555-5678",
      gardens: [],
      users: []
    }
  ]
},
  {
  _id: 3,
  name: "John Doe",
  isAdmin: false,
  email: "john.doe@example.com",
  password: "securepassword",
  userType: "Regular",
  address: {
    street: "123 Main Street",
    city: "Cityville"
  },
  paymentMethod: {
    type: "Credit Card",
    creditCardNumber: "1234-5678-9012-3456",
    expirationDate: "12/23",
    cvv: "123"
  },
  bankAccount: {
    accountNumber: "9876543210",
    bankName: "Bank of Cityville",
    accountHolderName: "John Doe"
  },
  contactPhoneNumber: "555-1234",
  gardens: [
    {
      id: 1,
      name: "John's Garden",
      description: "A beautiful garden with colorful flowers and lush greenery",
      Contact_person: {
        name: "John Doe",
        phone_number: "555-1234"
      },
      Gardner: {
        name: "Gardener Name",
        Phone: "123-4567",
        Rating: 4.5,
        gardner_image: "gardener.jpg"
      },
      Park_size: 1000,
      Vegetation: "Lush Green",
      Type: "Public",
      Treatment: {
        grass_trimming: true,
        tree_pruning: true,
        pest_control: true
      },
      Coordinates: [12.345, 67.890],
      Address: {
        street: "456 Park Avenue",
        city: "Cityville"
      },
      GardenImg: ["image1.jpg", "image2.jpg"],
      GardenImgAlt: "Images of John's Garden"
    }
  ],
  users: [
    {
      _id: 2,
      name: "Jane Doe",
      isAdmin: true,
      email: "jane.doe@example.com",
      password: "anothersecurepassword",
      userType: "Admin",
      address: {
        street: "789 Oak Street",
        city: "Cityville"
      },
      paymentMethod: {
        type: "PayPal",
        creditCardNumber: "N/A",
        expirationDate: "N/A",
        cvv: "N/A"
      },
      bankAccount: {
        accountNumber: "N/A",
        bankName: "N/A",
        accountHolderName: "N/A"
      },
      contactPhoneNumber: "555-5678",
      gardens: [],
      users: []
    }
  ]
},
];

