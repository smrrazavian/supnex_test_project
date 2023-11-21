export const getDatabase = jest.fn(() => ({
  collection: jest.fn(() => ({
    findOne: jest.fn(),
    find: jest.fn(),
    toArray: jest.fn(),
    insertOne: jest.fn(),
    findOneAndUpdate: jest.fn(),
    findOneAndDelete: jest.fn(),
  })),
}));
