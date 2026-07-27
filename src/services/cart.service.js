import prisma from "../lib/prisma.js"

export async function getCartByUser(userId) {
  return prisma.cartItem.findMany({
    where: { userId },
    orderBy: { productId: "asc" },
  })
}

export async function addItemToCart(userId, productId, quantity) {
  const existingItem = await prisma.cartItem.findFirst({
    where: { userId, productId },
  })

  if (existingItem) {
    return await prisma.cartItem.update({
      where: { id: existingItem.id },
      data: { quantity: existingItem.quantity + quantity },
    })
  }

  return await prisma.cartItem.create({
    data: {
      userId,
      productId,
      quantity,
    },
  })
}
