export const userInfo = [
  {
    name: "John Green",
    email: "johngreen@example.com",
    phone: "+1-555-123-4567",
  },
  {
    name: "Leila Cameron",
    email: "leilacameron@example.com",
    phone: "+1-555-234-5678",
  },
  {
    name: "David Livingston",
    email: "davidlivingston@example.com",
    phone: "+1-555-345-6789",
  },
  {
    name: "Evan Peter",
    email: "evanpeter@example.com",
    phone: "+1-555-456-7890",
  },
  {
    name: "Jane Powell",
    email: "janepowell@example.com",
    phone: "+1-555-567-8901",
  },
  {
    name: "Alex Ramirez",
    email: "alexramirez@example.com",
    phone: "+1-555-678-9012",
  },
  {
    name: "Jasmine Lee",
    email: "jasminelee@example.com",
    phone: "+1-555-789-0123",
  },
  {
    name: "Alyana Cruz",
    email: "alyanacruz@example.com",
    phone: "+1-555-890-1234",
  },
  {
    name: "Hardik Sharma",
    email: "hardiksharma@example.com",
    phone: "+1-555-901-2345",
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
  };
};
