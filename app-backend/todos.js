const todos = [
  {
    "title": "Buy groceries",
    "description": "Get milk, eggs, and bread.",
    "completed": false,
    "dateCreated": "2024-08-01T08:00:00.000Z",
    "dueDate": "2024-08-02T17:00:00.000Z",
    "_id": "f47ac10b-58cc-4372-a567-0e02b2c3c41b"
  },
  {
    "title": "Finish project report",
    "description": "Complete the final draft of the report.",
    "completed": true,
    "dateCreated": "2024-08-02T09:15:00.000Z",
    "dueDate": "2024-08-03T16:00:00.000Z",
    "_id": "9c11e5c8-b596-4b9c-bc83-5a92e8c11e5b"
  },
  {
    "title": "Call Mom",
    "description": "Catch up with Mom and discuss weekend plans.",
    "completed": false,
    "dateCreated": "2024-08-03T10:30:00.000Z",
    "dueDate": "2024-08-04T11:00:00.000Z",
    "_id": "0f83b7f1-1340-4892-9e7d-6b4e5d06d3f9"
  },
  {
    "title": "Book dentist appointment",
    "description": "Schedule a check-up appointment.",
    "completed": false,
    "dateCreated": "2024-08-04T14:00:00.000Z",
    "dueDate": "2024-08-10T09:00:00.000Z",
    "_id": "ef92cb2b-09d0-4821-892e-bf64d2cb5b92"
  },
  {
    "title": "Water plants",
    "description": "Ensure all indoor plants are watered.",
    "completed": true,
    "dateCreated": "2024-08-05T07:00:00.000Z",
    "dueDate": "null",
    "_id": "e4a9a65c-b0c6-4fc4-94e1-5ea2b1fcbe8c"
  },
  {
    "title": "Prepare dinner",
    "description": "Cook a healthy meal for the family.",
    "completed": false,
    "dateCreated": "2024-08-05T18:00:00.000Z",
    "dueDate": "2024-08-05T19:00:00.000Z",
    "_id": "6e6d3454-1f47-4187-bf57-285ba03530b3"
  },
  {
    "title": "Plan weekend getaway",
    "description": "Research and book a short trip.",
    "completed": false,
    "dateCreated": "2024-08-06T12:00:00.000Z",
    "dueDate": "2024-08-07T14:00:00.000Z",
    "_id": "fd32c622-d2a3-4a8b-a5c4-90c7d0b2cf6b"
  },
  {
    "title": "Organize desk",
    "description": "Clean and organize the work desk.",
    "completed": true,
    "dateCreated": "2024-08-06T15:30:00.000Z",
    "dueDate": "2024-08-07T16:00:00.000Z",
    "_id": "63a8d357-d839-4b48-b8d0-26727d8c60d3"
  },
  {
    "title": "Update resume",
    "description": "Revise the resume with recent experiences.",
    "completed": false,
    "dateCreated": "2024-08-07T09:45:00.000Z",
    "dueDate": "null",
    "_id": "b5b59c8b-fb71-4d5a-8c3e-626f2a84a787"
  },
  {
    "title": "Check emails",
    "description": "Review and respond to important emails.",
    "completed": false,
    "dateCreated": "2024-08-08T08:30:00.000Z",
    "dueDate": "2024-08-08T10:00:00.000Z",
    "_id": "f8d6e469-0d82-47b8-8442-4894898b236a"
  },
  {
    "title": "Buy birthday gift",
    "description": "Purchase a gift for a friend's birthday.",
    "completed": false,
    "dateCreated": "2024-08-09T11:00:00.000Z",
    "dueDate": "2024-08-10T15:00:00.000Z",
    "_id": "5d27b7f8-e28a-4b93-87b8-165ab4de2724"
  },
  {
    "title": "Clean the garage",
    "description": "Organize and clean the garage space.",
    "completed": true,
    "dateCreated": "2024-08-10T07:00:00.000Z",
    "dueDate": "2024-08-10T17:00:00.000Z",
    "_id": "dd8d4f60-730c-4c43-bbc7-d09aab5f2fc5"
  },
  {
    "title": "Finish book",
    "description": "Complete reading the current book.",
    "completed": false,
    "dateCreated": "2024-08-11T14:00:00.000Z",
    "dueDate": "2024-08-15T23:59:00.000Z",
    "_id": "7e958f82-3b93-4d15-a0f7-7f92f9b6a9f3"
  },
  {
    "title": "Submit expense report",
    "description": "File the monthly expense report.",
    "completed": false,
    "dateCreated": "2024-08-12T13:00:00.000Z",
    "dueDate": "2024-08-13T12:00:00.000Z",
    "_id": "29f8e345-62b2-4f98-a68a-5e9f8303e6f2"
  },
  {
    "title": "Fix leaky faucet",
    "description": "Repair the faucet in the kitchen.",
    "completed": false,
    "dateCreated": "2024-08-13T08:30:00.000Z",
    "dueDate": "2024-08-15T10:00:00.000Z",
    "_id": "6e8af8d4-92ae-44e3-8370-8b2e1239e85b"
  },
  {
    "title": "Schedule team meeting",
    "description": "Organize a meeting with the project team.",
    "completed": false,
    "dateCreated": "2024-08-14T11:00:00.000Z",
    "dueDate": "2024-08-15T15:00:00.000Z",
    "_id": "3d4a57cb-67f1-4829-9e2b-e3f4fd6b70eb"
  },
  {
    "title": "Submit job application",
    "description": "Apply for the open position at the new company.",
    "completed": true,
    "dateCreated": "2024-08-15T09:00:00.000Z",
    "dueDate": "2024-08-16T12:00:00.000Z",
    "_id": "5b6d4a61-8e40-4583-b7e7-6f659cbd5c6e"
  },
  {
    "title": "Prepare presentation",
    "description": "Create slides for the upcoming conference.",
    "completed": false,
    "dateCreated": "2024-08-16T14:00:00.000Z",
    "dueDate": "2024-08-17T12:00:00.000Z",
    "_id": "e9bfc6c7-d678-4f1d-bc63-229f7e6b1e09"
  },
  {
    "title": "Visit the museum",
    "description": "Explore the new art exhibit.",
    "completed": false,
    "dateCreated": "2024-08-17T10:00:00.000Z",
    "dueDate": "null",
    "_id": "b12e2a40-88d5-4db5-bb0e-c4b6b6b9c35b"
  },
  {
    "title": "Review budget",
    "description": "Analyze and adjust the monthly budget.",
    "completed": true,
    "dateCreated": "2024-08-18T11:00:00.000Z",
    "dueDate": "2024-08-19T09:00:00.000Z",
    "_id": "bf0e6f40-99fd-4f12-b65c-b62a5b3d0658"
  },
  {
    "title": "Renew subscription",
    "description": "Update the subscription for the software.",
    "completed": false,
    "dateCreated": "2024-08-19T08:00:00.000Z",
    "dueDate": "2024-08-20T15:00:00.000Z",
    "_id": "b2a0d8c3-60fd-42ff-b768-6743b0d9436f"
  },
  {
    "title": "Write blog post",
    "description": "Draft and publish the new blog article.",
    "completed": false,
    "dateCreated": "2024-08-20T12:00:00.000Z",
    "dueDate": "2024-08-22T10:00:00.000Z",
    "_id": "b68c3d75-0180-4383-9eb3-9c68b2c6376a"
  },
  {
    "title": "Attend webinar",
    "description": "Participate in the online workshop on marketing.",
    "completed": false,
    "dateCreated": "2024-08-21T10:00:00.000Z",
    "dueDate": "2024-08-21T14:00:00.000Z",
    "_id": "6b4d88b7-6912-45c1-9f7e-f77eaafc295e"
  },
  {
    "title": "Plan birthday party",
    "description": "Organize the details for the upcoming birthday celebration.",
    "completed": true,
    "dateCreated": "2024-08-22T09:30:00.000Z",
    "dueDate": "2024-08-25T18:00:00.000Z",
    "_id": "a3d48e5a-bf76-4a8a-b0e2-044c5e41f0e3"
  },
  {
    "title": "Read research papers",
    "description": "Go through the latest research articles in the field.",
    "completed": false,
    "dateCreated": "2024-08-23T14:00:00.000Z",
    "dueDate": "null",
    "_id": "d72e8d95-27d7-4622-a5ee-e1e5b47f6d8a"
  },
  {
    "title": "Check system updates",
    "description": "Ensure all systems are up-to-date.",
    "completed": false,
    "dateCreated": "2024-08-24T15:00:00.000Z",
    "dueDate": "2024-08-25T17:00:00.000Z",
    "_id": "9bbd1f7a-f2d0-4d6d-8467-9e917c41e493"
  },
  {
    "title": "Call plumber",
    "description": "Fix the leaking pipe in the bathroom.",
    "completed": false,
    "dateCreated": "2024-08-25T08:00:00.000Z",
    "dueDate": "2024-08-26T12:00:00.000Z",
    "_id": "e0a7f1f8-dfe0-4d9e-b5f0-8b4d3f27a908"
  },
  {
    "title": "Buy new shoes",
    "description": "Purchase a pair of running shoes.",
    "completed": false,
    "dateCreated": "2024-08-26T12:00:00.000Z",
    "dueDate": "2024-08-28T16:00:00.000Z",
    "_id": "ab54f7b4-d2a2-4d63-8f69-fcc09d4a67c0"
  },
  {
    "title": "Research vacation spots",
    "description": "Look into potential vacation destinations.",
    "completed": false,
    "dateCreated": "2024-08-27T09:30:00.000Z",
    "dueDate": "2024-08-30T10:00:00.000Z",
    "_id": "c6f3281b-979d-4f69-bd39-b9c7c56a75ff"
  },
  {
    "title": "Update website",
    "description": "Make necessary updates to the company website.",
    "completed": true,
    "dateCreated": "2024-08-28T11:00:00.000Z",
    "dueDate": "2024-08-30T12:00:00.000Z",
    "_id": "2e48f1b7-2b16-44f3-988e-37277e1a1b8b"
  },
  {
    "title": "Check car maintenance",
    "description": "Ensure the car is ready for the long drive.",
    "completed": false,
    "dateCreated": "2024-08-29T08:00:00.000Z",
    "dueDate": "2024-08-30T09:00:00.000Z",
    "_id": "d5a8e0b5-cf41-46a8-bb2e-09d13440eabf"
  },
  {
    "title": "Send invitations",
    "description": "Dispatch invitations for the upcoming event.",
    "completed": false,
    "dateCreated": "2024-08-30T12:00:00.000Z",
    "dueDate": "2024-08-31T15:00:00.000Z",
    "_id": "b88f6a79-0e6b-4f73-9c4d-5c68b92d5c72"
  },
  {
    "title": "Finish puzzle",
    "description": "Complete the 1000-piece puzzle.",
    "completed": false,
    "dateCreated": "2024-08-31T13:00:00.000Z",
    "dueDate": "null",
    "_id": "7c9a6a0a-0c66-4b98-827f-21c7f0517e04"
  },
  {
    "title": "Research new tech",
    "description": "Explore the latest trends in technology.",
    "completed": true,
    "dateCreated": "2024-08-01T16:00:00.000Z",
    "dueDate": "2024-08-05T14:00:00.000Z",
    "_id": "8a34c756-589f-4c91-8b4b-34240f6126ef"
  },
  {
    "title": "Plan team outing",
    "description": "Organize an outing for the team.",
    "completed": false,
    "dateCreated": "2024-08-02T17:00:00.000Z",
    "dueDate": "2024-08-06T15:00:00.000Z",
    "_id": "54f31e28-3542-490f-a28a-0a5ef82e3a6c"
  },
  {
    "title": "Read a new book",
    "description": "Start reading the new book you bought.",
    "completed": true,
    "dateCreated": "2024-08-03T09:00:00.000Z",
    "dueDate": "2024-08-10T12:00:00.000Z",
    "_id": "1b6f2a71-7092-4ebc-8dc7-6c4d48e8c8b0"
  },
  {
    "title": "Create a workout plan",
    "description": "Design a new workout routine.",
    "completed": false,
    "dateCreated": "2024-08-04T14:00:00.000Z",
    "dueDate": "2024-08-08T16:00:00.000Z",
    "_id": "93b9a15f-0f6a-49d7-84de-f29e6e1cf87f"
  },
  {
    "title": "Check financial statements",
    "description": "Review the recent financial statements.",
    "completed": false,
    "dateCreated": "2024-08-05T16:00:00.000Z",
    "dueDate": "2024-08-10T09:00:00.000Z",
    "_id": "79b7c0e0-0c02-4c2b-b075-281c88f6ea2f"
  },
  {
    "title": "Prepare for meeting",
    "description": "Get ready for the upcoming client meeting.",
    "completed": true,
    "dateCreated": "2024-08-06T11:00:00.000Z",
    "dueDate": "2024-08-06T14:00:00.000Z",
    "_id": "5c88c5a8-dc5c-44ec-bf2a-3736b8a73a2d"
  },
  {
    "title": "Buy office supplies",
    "description": "Purchase necessary supplies for the office.",
    "completed": false,
    "dateCreated": "2024-08-07T10:00:00.000Z",
    "dueDate": "2024-08-09T11:00:00.000Z",
    "_id": "5aafcbd8-0b77-4870-851b-e6f2d97b2e2a"
  },
  {
    "title": "Send thank you notes",
    "description": "Write and send thank you notes for gifts.",
    "completed": false,
    "dateCreated": "2024-08-08T12:00:00.000Z",
    "dueDate": "2024-08-10T10:00:00.000Z",
    "_id": "8a5179c5-c11a-4427-bf3d-b2d9e27d4d22"
  },
  {
    "title": "Plan garden layout",
    "description": "Design the layout for the new garden.",
    "completed": true,
    "dateCreated": "2024-08-09T14:00:00.000Z",
    "dueDate": "2024-08-15T12:00:00.000Z",
    "_id": "27acbd12-4f59-4642-8d08-4d913b8d0e1a"
  },
  {
    "title": "Review project plan",
    "description": "Go over the project plan and make necessary changes.",
    "completed": false,
    "dateCreated": "2024-08-10T08:00:00.000Z",
    "dueDate": "2024-08-12T11:00:00.000Z",
    "_id": "ea2a6278-066d-4b71-b007-3d3c24d8de2d"
  },
  {
    "title": "Buy new laptop",
    "description": "Purchase a new laptop for work.",
    "completed": false,
    "dateCreated": "2024-08-11T13:00:00.000Z",
    "dueDate": "2024-08-15T14:00:00.000Z",
    "_id": "9c3f93a4-53ed-4f5b-bd6e-4f2e10c4e76f"
  },
  {
    "title": "Visit local market",
    "description": "Explore the local market for fresh produce.",
    "completed": false,
    "dateCreated": "2024-08-12T15:00:00.000Z",
    "dueDate": "null",
    "_id": "ad5f8a63-cf51-42e1-8637-378c82f937d5"
  },
  {
    "title": "Book flight tickets",
    "description": "Purchase tickets for the upcoming trip.",
    "completed": false,
    "dateCreated": "2024-08-13T11:00:00.000Z",
    "dueDate": "2024-08-15T17:00:00.000Z",
    "_id": "6e47b013-df0b-4d0d-b94f-6f3e6f12b5bb"
  },
  {
    "title": "Prepare for presentation",
    "description": "Create the presentation slides for the upcoming event.",
    "completed": true,
    "dateCreated": "2024-08-14T10:00:00.000Z",
    "dueDate": "2024-08-16T09:00:00.000Z",
    "_id": "9b96c626-b9a1-4d52-9121-9e4c7a60b541"
  },
  {
    "title": "Meet with mentor",
    "description": "Schedule a meeting with your mentor.",
    "completed": false,
    "dateCreated": "2024-08-15T12:00:00.000Z",
    "dueDate": "2024-08-17T13:00:00.000Z",
    "_id": "40a3a08f-84d1-4b4e-b73d-6ec4e8e67109"
  },
  {
    "title": "Test new software",
    "description": "Evaluate the new software for compatibility.",
    "completed": false,
    "dateCreated": "2024-08-16T14:00:00.000Z",
    "dueDate": "2024-08-20T10:00:00.000Z",
    "_id": "7fd08b8a-4901-41c1-bf9a-4e8b9e5c99fd"
  },
  {
    "title": "Submit tax forms",
    "description": "Complete and submit the tax documentation.",
    "completed": true,
    "dateCreated": "2024-08-17T16:00:00.000Z",
    "dueDate": "2024-08-18T11:00:00.000Z",
    "_id": "8b91a51e-054f-4895-b2c5-517e0f8b4d7f"
  },
  {
    "title": "Plan fitness goals",
    "description": "Set and plan fitness objectives for the next month.",
    "completed": false,
    "dateCreated": "2024-08-18T10:00:00.000Z",
    "dueDate": "2024-08-22T14:00:00.000Z",
    "_id": "ff5f420b-d52a-4cf0-9443-23d837565e30"
  },
  {
    "title": "Organize bookshelves",
    "description": "Arrange the books on the shelves by category.",
    "completed": false,
    "dateCreated": "2024-08-19T11:00:00.000Z",
    "dueDate": "null",
    "_id": "f8f6b04f-54f5-4a3c-8b5b-d4b4aeb71580"
  },
  {
    "title": "Check project deadlines",
    "description": "Review the deadlines for ongoing projects.",
    "completed": false,
    "dateCreated": "2024-08-20T08:00:00.000Z",
    "dueDate": "2024-08-25T17:00:00.000Z",
    "_id": "c7ec35e4-bbaf-4cfc-962d-fd4c1b4c5b1b"
  },
  {
    "title": "Attend networking event",
    "description": "Go to the industry networking event.",
    "completed": false,
    "dateCreated": "2024-08-21T13:00:00.000Z",
    "dueDate": "2024-08-22T18:00:00.000Z",
    "_id": "f0f2e3b3-5969-4c88-b8a5-348c4b5a8b1f"
  },
  {
    "title": "Review team performance",
    "description": "Evaluate the performance of the team members.",
    "completed": false,
    "dateCreated": "2024-08-22T14:00:00.000Z",
    "dueDate": "2024-08-25T12:00:00.000Z",
    "_id": "b20c1b6c-fba8-4f46-8a7e-0c9e46e1f3d6"
  },
  {
    "title": "Update client list",
    "description": "Add new clients to the list and update their details.",
    "completed": false,
    "dateCreated": "2024-08-23T09:00:00.000Z",
    "dueDate": "2024-08-26T10:00:00.000Z",
    "_id": "9a0c62d8-b05a-4d92-9a2e-b527c69b8a14"
  },
  {
    "title": "Plan holiday shopping",
    "description": "Make a list of items to buy for the holidays.",
    "completed": false,
    "dateCreated": "2024-08-24T12:00:00.000Z",
    "dueDate": "2024-08-31T16:00:00.000Z",
    "_id": "d2a4a87e-bb14-4b56-8f18-c9e15e4c2fd8"
  }
];

module.exports = { todos };
