// pages/ProductDetail.js
import { useRouter } from 'next/router';
import React from 'react';
import Navbar from '@/components/Navbar';

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;

  // Fungsi yang akan dipanggil saat formulir dikirim
  const submit = () => {
    // Logika untuk menangani pengiriman formulir, Anda dapat menyesuaikannya sesuai kebutuhan
    console.log('Formulir Dikirim!');
  };

  return (
    <div>
      <Navbar />

      {/* Letakkan bagian form yang diberikan di sini */}
      <section className="py-12" data-x-data="alpine">
        <div className="px-5 md:px-24 lg:px-48">
          <div className="bg-white w-full p-3 rounded-lg shadow-lg border-2 border-[#00FFFF]">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
              <div className="md:col-span-4 space-y-4">
                <p className="font-medium text-xl">1 Bakwan</p>
                <hr />
                <ul className="list-disc list-inside">
                  <li>Donasi sebesar Rp10.000 untuk mendapatkan 1 bakwan</li>
                  <li>Tunggu beberapa menit setelah pembayaran untuk mendapatkan Premium Points</li>
                  <li>Kamu bisa claim role Donatur di server discord dengan cara menyambungkan akun dengan command [/discord link] di server minecraft</li>
                </ul>
                <hr />
                <p className="font-medium text-lg">Harga: Rp10,000</p>
                <hr />
                <form className="space-y-3" onSubmit={submit}>
                  <div>
                    <label htmlFor="username" className="block">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Minecraft Username"
                      className="p-1 px-2 rounded border border-[#0000FF] w-full"
                      x-model="form.username"
                      required
                      minLength="3"
                    />
                  </div>
                  <div>
                    <label htmlFor="pembayaran" className="block">
                      Metode Pembayaran
                    </label>
                    <select className="p-1 px-2 rounded border border-[#0000FF] w-full" x-model="form.payment" required>
                      <option id="qris" value="qris" selected>
                        QRIS - Bayar dengan GoPay, OVO, Dana, dan lain-lain
                      </option>
                    </select>
                  </div>
                  <hr />
                  <div>
                    <button
                      type="submit"
                      className="disabled:bg-blue-300 bg-blue-400 hover:bg-blue-500 p-2 px-5 rounded-lg"
                      disabled="loading"
                      style={{ fontSize: '18px', padding: '8px 20px' }}
                    >
                      Bayar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
