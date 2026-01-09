
import React, { useState } from 'react';


const faqData = [
  {
    question: 'Berapa minimum order untuk merchandise?',
    answer: 'Minimum order bervariasi per produk: Totebag 50pcs, Mug 24pcs, Powerbank 25pcs, Pulpen 100pcs. Untuk digital services tidak ada minimum order.',
  },
  {
    question: 'Berapa lama waktu produksi merchandise?',
    answer: 'Waktu produksi merchandise 7-21 hari tergantung jenis produk dan quantity. Digital services 1-12 minggu tergantung kompleksitas.',
  },
  {
    question: 'Apakah ada garansi untuk layanan yang diberikan?',
    answer: 'Ya, kami memberikan garansi 30 hari untuk bug fixing digital services dan garansi kualitas produk merchandise.',
  },
  {
    question: 'Bagaimana sistem pembayaran yang tersedia?',
    answer: 'Pembayaran bertahap: 50% DP, 50% pelunasan. Untuk merchandise bisa full payment. Pembayaran via transfer bank atau e-wallet.',
  },
  {
    question: 'Apakah bisa custom design sepenuhnya?',
    answer: 'Tentu! Kami menyediakan custom design sepenuhnya baik untuk digital services maupun merchandise sesuai kebutuhan brand Anda.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="px-8 py-16" style={{ backgroundColor: '#F9FAFB' }}>
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-2">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600">Pertanyaan yang sering diajukan tentang layanan kami</p>
      </div>

      {}
      <div className="max-w-2xl mx-auto">
        {faqData.map((item, index) => (
          <div className="border-b border-gray-200" key={index}>
            {}
            <button className="flex justify-between items-center w-full text-left py-4 px-0 bg-transparent border-0 cursor-pointer text-lg font-semibold text-gray-800 hover:text-purple-600 transition-colors" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <span className="text-2xl font-bold text-purple-600">{openIndex === index ? '−' : '+'}</span>
            </button>
            {}
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'}`}>
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;