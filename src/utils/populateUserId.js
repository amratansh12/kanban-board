export const populateUserId = (data, users) => {
  const updatedTickets = data.map((card) => {
    const user = users.find((user) => user.id === card.userId);

    return {
      ...card,
      user: { id: user.id, name: user.name, available: user.available },
      userId: user.id,
    };
  });

  return updatedTickets;
};
