import prisma from '../lib/prisma.js';

export function getAllProducts() {
  return prisma.product.findMany({
    orderBy: { name: 'asc' },
  });
}
