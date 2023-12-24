module.exports = {
  async rewrites() {
    return [
      {
        source: '/bakwan/:productId',
        destination: '/BakwanDetail', // Sesuaikan dengan nama file halaman Anda
      },
    ];
  },
};
