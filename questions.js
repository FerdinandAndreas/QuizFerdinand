/**
 * Data Soal UTS Sistem Cerdas (80 Soal / 8 Bab - 10 Soal per Bab)
 * Dilengkapi dengan metadata bab, pilihan jawaban, kunci jawaban yang akurat, dan pembahasan ringkas & jelas.
 */

const rawChapters = [
  {
    id: 1,
    number: "01",
    title: "Pengantar Sistem Cerdas",
    description: "Definisi AI, Turing Test, sejarah & AI Winter, PEAS, rumpun AI",
    questionCount: 10
  },
  {
    id: 2,
    number: "02",
    title: "Metode Pencarian",
    description: "Uninformed (BFS, DFS) & Informed Search (Heuristik, A*)",
    questionCount: 10
  },
  {
    id: 3,
    number: "03",
    title: "Representasi Pengetahuan",
    description: "Logika Proposisi, Modus Tollens, Frame, Semantic Network, Rule-based",
    questionCount: 10
  },
  {
    id: 4,
    number: "04",
    title: "Sistem Pakar",
    description: "Inference Engine, Working Memory, Forward & Backward Chaining, Certainty Factor",
    questionCount: 10
  },
  {
    id: 5,
    number: "05",
    title: "Logika Fuzzy",
    description: "Fungsi Keanggotaan, Operator Fuzzy, Metode Mamdani & Sugeno",
    questionCount: 10
  },
  {
    id: 6,
    number: "06",
    title: "Algoritma Genetika",
    description: "Kromosom, Fitness Function, Seleksi, Penalti, Mutasi, Elitisme",
    questionCount: 10
  },
  {
    id: 7,
    number: "07",
    title: "Machine Learning",
    description: "Paradigma ML, Least Squares/SSE, KNN, Overfitting, Metrik Evaluasi (Recall)",
    questionCount: 10
  },
  {
    id: 8,
    number: "08",
    title: "JST & Deep Learning",
    description: "Bobot & Bias, Aktivasi ReLU, Keterbatasan Perceptron (XOR), Backpropagation",
    questionCount: 10
  }
];

const rawQuestions = [
  // =========================================================================
  // BAB 1 — PENGANTAR SISTEM CERDAS (10 Soal)
  // =========================================================================
  {
    id: 1,
    chapterId: 1,
    chapterName: "Pengantar Sistem Cerdas",
    question: "Ciri yang PALING membedakan sistem cerdas dari sistem konvensional adalah...",
    options: [
      "Berjalan di server",
      "Keluarannya selalu benar",
      "Mampu mengambil keputusan masuk akal pada situasi yang tidak sepenuhnya terprogram",
      "Tidak memerlukan programmer"
    ],
    answer: 2, // C
    explanation: "Sistem cerdas mampu mengambil keputusan yang masuk akal pada kondisi yang tidak sepenuhnya diprogram sebelumnya. Sistem cerdas dapat menalar, belajar, atau beradaptasi."
  },
  {
    id: 2,
    chapterId: 1,
    chapterName: "Pengantar Sistem Cerdas",
    question: "Uji Turing menilai kecerdasan mesin berdasarkan...",
    options: [
      "Kecepatan komputasi",
      "Ketakterbedaan jawabannya dari jawaban manusia oleh penanya",
      "Jumlah data latih",
      "Kemampuan mengalahkan manusia bermain catur"
    ],
    answer: 1, // B
    explanation: "Jika penanya tidak dapat membedakan apakah sedang berinteraksi dengan manusia atau mesin melalui percakapan, mesin dianggap mampu menunjukkan kecerdasan secara praktis."
  },
  {
    id: 3,
    chapterId: 1,
    chapterName: "Pengantar Sistem Cerdas",
    question: "Peristiwa yang memicu AI winter pertama adalah...",
    options: [
      "Kekalahan Deep Blue",
      "Kritik atas keterbatasan perceptron",
      "Mahalnya GPU",
      "Munculnya ChatGPT"
    ],
    answer: 1, // B
    explanation: "Kritik Minsky-Papert terhadap keterbatasan perceptron pada tahun 1969, terutama dalam menyelesaikan masalah XOR, menjadi salah satu faktor penting yang menyebabkan pendanaan dan riset AI mengalami penurunan."
  },
  {
    id: 4,
    chapterId: 1,
    chapterName: "Pengantar Sistem Cerdas",
    question: "Dalam kerangka PEAS untuk mobil otonom, kamera dan radar termasuk komponen...",
    options: [
      "Performance",
      "Environment",
      "Actuators",
      "Sensors"
    ],
    answer: 3, // D
    explanation: "Sensor digunakan untuk mengamati lingkungan. Kamera dan radar merupakan sensor yang digunakan mobil otonom untuk memperoleh informasi dari lingkungan sekitar."
  },
  {
    id: 5,
    chapterId: 1,
    chapterName: "Pengantar Sistem Cerdas",
    question: "Masalah \"menyusun jadwal ujian 60 kelas tanpa bentrok dengan ruang terbatas\" paling alami diselesaikan menggunakan rumpun...",
    options: [
      "Simbolik",
      "Statistik",
      "Evolusioner",
      "Konvensional"
    ],
    answer: 2, // C
    explanation: "Algoritma evolusioner seperti Algoritma Genetika cocok untuk mencari solusi dari kombinasi yang sangat besar dan melakukan optimasi terhadap berbagai batasan."
  },
  {
    id: 6,
    chapterId: 1,
    chapterName: "Pengantar Sistem Cerdas",
    question: "Tiga kemampuan yang menjadi kata kunci dalam definisi sistem cerdas adalah...",
    options: [
      "menyimpan, menghitung, mencetak",
      "menalar, belajar, beradaptasi",
      "menginput, memproses, mencetak",
      "mengunduh, menyimpan, membagikan"
    ],
    answer: 1, // B
    explanation: "Sistem cerdas mampu menalar dari pengetahuan, belajar dari data, dan beradaptasi terhadap situasi."
  },
  {
    id: 7,
    chapterId: 1,
    chapterName: "Pengantar Sistem Cerdas",
    question: "Dalam PEAS, kemampuan mobil untuk mengendalikan setir dan rem termasuk...",
    options: [
      "Performance",
      "Environment",
      "Actuators",
      "Sensors"
    ],
    answer: 2, // C
    explanation: "Actuators adalah bagian yang digunakan agen untuk melakukan tindakan terhadap lingkungan, seperti setir, gas, dan rem."
  },
  {
    id: 8,
    chapterId: 1,
    chapterName: "Pengantar Sistem Cerdas",
    question: "Sebuah sistem rekomendasi mempelajari pola pembelian jutaan pelanggan. Pendekatan yang paling sesuai adalah...",
    options: [
      "Simbolik",
      "Statistik/pembelajaran",
      "Evolusioner",
      "Konvensional"
    ],
    answer: 1, // B
    explanation: "Jika pola sulit dirumuskan secara manual tetapi tersedia banyak data, pendekatan statistik/pembelajaran atau machine learning lebih sesuai."
  },
  {
    id: 9,
    chapterId: 1,
    chapterName: "Pengantar Sistem Cerdas",
    question: "Deep learning berkembang pesat sekitar tahun 2012 terutama karena...",
    options: [
      "algoritma AI ditemukan pada tahun tersebut",
      "komputer tidak lagi membutuhkan data",
      "algoritma, data, dan daya komputasi semakin memadai",
      "sistem pakar sudah tidak digunakan"
    ],
    answer: 2, // C
    explanation: "Ledakan deep learning didukung oleh perkembangan algoritma, data yang semakin banyak, dan peningkatan daya komputasi terutama GPU."
  },
  {
    id: 10,
    chapterId: 1,
    chapterName: "Pengantar Sistem Cerdas",
    question: "Manakah contoh penggunaan pendekatan evolusioner yang paling tepat?",
    options: [
      "Menentukan apakah sebuah kalimat benar atau salah",
      "Mengklasifikasikan email spam berdasarkan data",
      "Mencari kombinasi jadwal terbaik dari banyak kemungkinan",
      "Menyimpan data mahasiswa dalam database"
    ],
    answer: 2, // C
    explanation: "Pendekatan evolusioner seperti Algoritma Genetika cocok untuk masalah optimasi dengan kombinasi yang sangat banyak."
  },

  // =========================================================================
  // BAB 2 — METODE PENCARIAN (10 Soal)
  // =========================================================================
  {
    id: 11,
    chapterId: 2,
    chapterName: "Metode Pencarian",
    question: "Struktur data yang menjadikan pencarian bersifat melebar level demi level adalah...",
    options: [
      "Tumpukan",
      "Antrian",
      "Pohon biner",
      "Dictionary"
    ],
    answer: 1, // B
    explanation: "BFS menggunakan antrian (Queue) dengan prinsip FIFO sehingga simpul diproses berdasarkan urutan masuk dan pencarian dilakukan melebar level demi level."
  },
  {
    id: 12,
    chapterId: 2,
    chapterName: "Metode Pencarian",
    question: "Jaminan yang diberikan BFS pada graf tanpa bobot adalah menemukan...",
    options: [
      "Rute ber-km terpendek",
      "Rute dengan jumlah langkah tersedikit",
      "Semua rute",
      "Rute yang sama dengan DFS"
    ],
    answer: 1, // B
    explanation: "Pada graf tanpa bobot, BFS mencari secara melebar sehingga tujuan pertama kali ditemukan melalui jalur dengan jumlah langkah (kedalaman) paling sedikit."
  },
  {
    id: 13,
    chapterId: 2,
    chapterName: "Metode Pencarian",
    question: "Hasil DFS dapat berubah bila...",
    options: [
      "Heuristiknya diganti",
      "Urutan tetangga dalam penyimpanan graf diubah",
      "Bobot sisi diubah",
      "Tujuan lebih dekat"
    ],
    answer: 1, // B
    explanation: "DFS tidak menggunakan heuristik dan tidak mempertimbangkan bobot. Urutan tetangga yang diproses dapat menentukan cabang mana yang terlebih dahulu diselami."
  },
  {
    id: 14,
    chapterId: 2,
    chapterName: "Metode Pencarian",
    question: "Heuristik disebut admissible bila...",
    options: [
      "Selalu nol",
      "Selalu lebih besar dari biaya sebenarnya",
      "Tidak pernah melebih-lebihkan biaya sebenarnya",
      "Sama untuk semua simpul"
    ],
    answer: 2, // C
    explanation: "Heuristik admissible tidak boleh melebih-lebihkan biaya sebenarnya menuju tujuan (h(n) ≤ h*(n)). Syarat ini penting agar A* menjamin menemukan solusi optimal."
  },
  {
    id: 15,
    chapterId: 2,
    chapterName: "Metode Pencarian",
    question: "Mencari rute pengiriman dengan bobot waktu tempuh dan tersedia perkiraan garis lurus, metode paling tepat adalah...",
    options: [
      "BFS",
      "DFS",
      "A*",
      "Pencarian acak"
    ],
    answer: 2, // C
    explanation: "A* menggabungkan biaya aktual perjalanan g(n) dan estimasi heuristik h(n) sehingga pencarian terarah dan menghasilkan rute optimal secara efisien."
  },
  {
    id: 16,
    chapterId: 2,
    chapterName: "Metode Pencarian",
    question: "Dalam BFS, pop(0) digunakan karena...",
    options: [
      "mengambil data terakhir",
      "menerapkan prinsip FIFO",
      "menghapus semua data",
      "mengurutkan graf"
    ],
    answer: 1, // B
    explanation: "BFS menggunakan queue/FIFO, sehingga elemen yang masuk lebih dulu diproses lebih dulu."
  },
  {
    id: 17,
    chapterId: 2,
    chapterName: "Metode Pencarian",
    question: "Jika tujuan pencarian hanya ingin mengetahui apakah terdapat jalur dan memori sangat terbatas, metode yang lebih sesuai adalah...",
    options: [
      "BFS",
      "DFS",
      "A*",
      "Regresi"
    ],
    answer: 1, // B
    explanation: "DFS relatif hemat memori karena fokus menyelam pada satu cabang sebelum berpindah ke cabang lain."
  },
  {
    id: 18,
    chapterId: 2,
    chapterName: "Metode Pencarian",
    question: "Diketahui A* memiliki g = 30 dan h = 20. Nilai f adalah...",
    options: [
      "10",
      "20",
      "30",
      "50"
    ],
    answer: 3, // D
    explanation: "Rumus A* adalah f = g + h. f = 30 + 20 = 50."
  },
  {
    id: 19,
    chapterId: 2,
    chapterName: "Metode Pencarian",
    question: "Pada kasus rute Madiun → Surabaya, BFS dan A* dapat menghasilkan rute berbeda karena...",
    options: [
      "BFS menggunakan data acak",
      "BFS mengoptimalkan jumlah langkah, sedangkan A* mempertimbangkan biaya/jarak",
      "A* tidak menggunakan graf",
      "BFS selalu lebih lambat"
    ],
    answer: 1, // B
    explanation: "BFS mencari jumlah langkah paling sedikit, sedangkan A* menggunakan g + h untuk mempertimbangkan biaya perjalanan."
  },
  {
    id: 20,
    chapterId: 2,
    chapterName: "Metode Pencarian",
    question: "Jika nilai heuristik suatu simpul melebih-lebihkan biaya sebenarnya, dampak yang mungkin terjadi adalah...",
    options: [
      "A* selalu menjadi DFS",
      "A* dapat kehilangan jaminan menemukan rute optimal",
      "BFS menjadi lebih cepat",
      "graf otomatis berubah menjadi tree"
    ],
    answer: 1, // B
    explanation: "Heuristik A* yang admissible tidak boleh melebih-lebihkan biaya sebenarnya. Jika terlalu besar, A* dapat kehilangan jaminan solusi optimal."
  },

  // =========================================================================
  // BAB 3 — REPRESENTASI PENGETAHUAN (10 Soal)
  // =========================================================================
  {
    id: 21,
    chapterId: 3,
    chapterName: "Representasi Pengetahuan",
    question: "p → q bernilai SALAH hanya ketika...",
    options: [
      "p benar, q benar",
      "p benar, q salah",
      "p salah, q benar",
      "p salah, q salah"
    ],
    answer: 1, // B
    explanation: "Implikasi p → q hanya bernilai salah ketika anteseden (p) bernilai Benar tetapi konsekuen (q) bernilai Salah."
  },
  {
    id: 22,
    chapterId: 3,
    chapterName: "Representasi Pengetahuan",
    question: "\"Jika servernya mati, situs tidak bisa diakses. Situs BISA diakses.\" Kesimpulan sah adalah...",
    options: [
      "Server mati",
      "Server tidak mati",
      "Situs lambat",
      "Tidak ada kesimpulan"
    ],
    answer: 1, // B
    explanation: "Pola tersebut merupakan Modus Tollens (p → q, ¬q ⊢ ¬p). Karena situs bisa diakses (¬q), maka server terbukti tidak mati (¬p)."
  },
  {
    id: 23,
    chapterId: 3,
    chapterName: "Representasi Pengetahuan",
    question: "Menyimpan profil produk seperti nama, harga, stok, dan kategori paling alami menggunakan...",
    options: [
      "Tabel kebenaran",
      "Frame/dictionary",
      "Kuantor",
      "Tumpukan"
    ],
    answer: 1, // B
    explanation: "Frame cocok untuk merepresentasikan objek berbasis atribut dan nilai (slot and filler), mirip dengan dictionary/objek pada pemrograman."
  },
  {
    id: 24,
    chapterId: 3,
    chapterName: "Representasi Pengetahuan",
    question: "Pewarisan pada jaringan semantik berarti...",
    options: [
      "Semua simpul bernilai sama",
      "Konsep khusus otomatis mendapat sifat konsep umumnya",
      "Panah boleh dua arah",
      "Fakta lama dihapus"
    ],
    answer: 1, // B
    explanation: "Konsep khusus otomatis mewarisi (inherit) relasi/sifat dari konsep umum di atasnya (misal: 'Kenari is-a Burung', maka otomatis mewarisi sifat 'memiliki sayap')."
  },
  {
    id: 25,
    chapterId: 3,
    chapterName: "Representasi Pengetahuan",
    question: "Kumpulan fakta kasus yang sedang ditangani sistem berbasis aturan disebut...",
    options: [
      "Basis aturan",
      "Memori kerja",
      "Mesin inferensi",
      "Antarmuka"
    ],
    answer: 1, // B
    explanation: "Memori kerja (Working Memory) menyimpan fakta awal dan fakta kesimpulan perantara yang aktif selama proses inferensi berlangsung."
  },
  {
    id: 26,
    chapterId: 3,
    chapterName: "Representasi Pengetahuan",
    question: "Pernyataan yang bernilai benar atau salah disebut...",
    options: [
      "frame",
      "proposisi",
      "sensor",
      "kromosom"
    ],
    answer: 1, // B
    explanation: "Proposisi adalah pernyataan yang mempunyai nilai kebenaran, yaitu benar atau salah."
  },
  {
    id: 27,
    chapterId: 3,
    chapterName: "Representasi Pengetahuan",
    question: "Jika diketahui p → q dan p, maka kesimpulan q menggunakan...",
    options: [
      "modus tollens",
      "modus ponens",
      "inheritance",
      "fuzzy inference"
    ],
    answer: 1, // B
    explanation: "Modus ponens memiliki pola: jika p → q dan p benar, maka q benar."
  },
  {
    id: 28,
    chapterId: 3,
    chapterName: "Representasi Pengetahuan",
    question: "Simbol ∀ dalam logika predikat berarti...",
    options: [
      "tidak ada",
      "ada",
      "untuk semua",
      "jika dan hanya jika"
    ],
    answer: 2, // C
    explanation: "Simbol ∀ dibaca \"untuk semua\", sedangkan ∃ berarti \"ada\"."
  },
  {
    id: 29,
    chapterId: 3,
    chapterName: "Representasi Pengetahuan",
    question: "Representasi yang paling cocok untuk menyimpan objek dengan atribut seperti nama, harga, dan stok adalah...",
    options: [
      "frame",
      "tabel kebenaran",
      "operator logika",
      "kuantor"
    ],
    answer: 0, // A
    explanation: "Frame digunakan untuk merepresentasikan objek menggunakan pasangan atribut dan nilai."
  },
  {
    id: 30,
    chapterId: 3,
    chapterName: "Representasi Pengetahuan",
    question: "Hubungan is-a pada jaringan semantik terutama digunakan untuk...",
    options: [
      "menghitung jarak",
      "melakukan pewarisan sifat",
      "melakukan crossover",
      "menghitung fitness"
    ],
    answer: 1, // B
    explanation: "Hubungan is-a memungkinkan konsep khusus memperoleh sifat dari konsep yang lebih umum melalui inheritance atau pewarisan."
  },

  // =========================================================================
  // BAB 4 — SISTEM PAKAR (10 Soal)
  // =========================================================================
  {
    id: 31,
    chapterId: 4,
    chapterName: "Sistem Pakar",
    question: "Komponen yang memungkinkan basis pengetahuan diganti tanpa mengubah program adalah pemisahan basis pengetahuan dari...",
    options: [
      "Antarmuka",
      "Mesin inferensi",
      "Memori kerja",
      "Pengguna"
    ],
    answer: 1, // B
    explanation: "Pemisahan antara Basis Pengetahuan (knowledge base) dan Mesin Inferensi (inference engine) memungkinkan aturan diubah/ditambah tanpa perlu memodifikasi logika mesin penalarannya."
  },
  {
    id: 32,
    chapterId: 4,
    chapterName: "Sistem Pakar",
    question: "Fakta baru hasil penalaran disimpan di...",
    options: [
      "Basis pengetahuan",
      "Memori kerja",
      "Fasilitas penjelasan",
      "Basis data pakar"
    ],
    answer: 1, // B
    explanation: "Kesimpulan antara atau fakta baru yang dihasilkan selama sesi inferensi langsung dimasukkan ke dalam Memori Kerja (Working Memory)."
  },
  {
    id: 33,
    chapterId: 4,
    chapterName: "Sistem Pakar",
    question: "Penalaran yang berangkat dari dugaan lalu mencari bukti disebut...",
    options: [
      "Forward chaining",
      "Backward chaining",
      "Modus ponens",
      "Pewarisan"
    ],
    answer: 1, // B
    explanation: "Backward chaining bersifat goal-driven (berorientasi tujuan). Dimulai dari hipotesis/tujuan, lalu menelusuri mundur fakta-fakta yang membuktikannya."
  },
  {
    id: 34,
    chapterId: 4,
    chapterName: "Sistem Pakar",
    question: "Sistem monitoring suhu pabrik yang menerima ratusan pembacaan sensor per detik paling cocok menggunakan...",
    options: [
      "Backward chaining",
      "Forward chaining",
      "Tabel kebenaran",
      "Frame"
    ],
    answer: 1, // B
    explanation: "Forward chaining bersifat data-driven. Sangat ideal untuk sistem pemantauan di mana aliran data sensor baru terus memicu aturan untuk aksi respon cepat."
  },
  {
    id: 35,
    chapterId: 4,
    chapterName: "Sistem Pakar",
    question: "CF aturan 0,9; CF kondisi-kondisinya 0,7 dan 0,4. CF kesimpulan adalah...",
    options: [
      "0,9",
      "0,63",
      "0,36",
      "0,28"
    ],
    answer: 2, // C
    explanation: "CF premis diambil dari nilai minimum: min(0,7; 0,4) = 0,4. Kemudian CF kesimpulan = CF(rule) × CF(premis) = 0,9 × 0,4 = 0,36."
  },
  {
    id: 36,
    chapterId: 4,
    chapterName: "Sistem Pakar",
    question: "Orang yang menjembatani pakar dengan sistem dalam proses akuisisi pengetahuan disebut...",
    options: [
      "programmer",
      "knowledge engineer",
      "operator",
      "end user"
    ],
    answer: 1, // B
    explanation: "Knowledge engineer bertugas menggali, merumuskan, dan memvalidasi pengetahuan dari pakar untuk dimasukkan ke sistem."
  },
  {
    id: 37,
    chapterId: 4,
    chapterName: "Sistem Pakar",
    question: "Jika fakta/gejala tersedia dalam jumlah banyak dan murah diperoleh, metode penalaran yang lebih sesuai adalah...",
    options: [
      "backward chaining",
      "forward chaining",
      "DFS",
      "KNN"
    ],
    answer: 1, // B
    explanation: "Forward chaining cocok ketika fakta datang terlebih dahulu dan sistem mencari aturan yang dapat dipicu."
  },
  {
    id: 38,
    chapterId: 4,
    chapterName: "Sistem Pakar",
    question: "Dalam backward chaining, sistem memulai proses dari...",
    options: [
      "semua sensor",
      "data mentah",
      "dugaan atau tujuan yang ingin dibuktikan",
      "hasil random"
    ],
    answer: 2, // C
    explanation: "Backward chaining bersifat goal-driven, yaitu mulai dari dugaan atau kesimpulan kemudian mencari aturan dan fakta yang mendukungnya."
  },
  {
    id: 39,
    chapterId: 4,
    chapterName: "Sistem Pakar",
    question: "Jika CF aturan = 0,8, CF kondisi pertama = 0,9, dan CF kondisi kedua = 0,5, maka CF kesimpulannya adalah...",
    options: [
      "0,4",
      "0,45",
      "0,72",
      "0,8"
    ],
    answer: 0, // A
    explanation: "CF = CF aturan × min(CF kondisi) = 0,8 × min(0,9 ; 0,5) = 0,8 × 0,5 = 0,4"
  },
  {
    id: 40,
    chapterId: 4,
    chapterName: "Sistem Pakar",
    question: "Salah satu alasan basis pengetahuan dipisahkan dari mesin inferensi adalah...",
    options: [
      "agar sistem tidak membutuhkan data",
      "agar aturan dapat diperbarui tanpa mengubah mesin inferensi",
      "agar sistem selalu menghasilkan jawaban benar",
      "agar sistem tidak membutuhkan programmer"
    ],
    answer: 1, // B
    explanation: "Pemisahan ini membuat mesin inferensi bersifat generik, sementara pengetahuan atau aturan dapat diganti dan diperbarui tanpa mengubah program utama."
  },

  // =========================================================================
  // BAB 5 — LOGIKA FUZZY (10 Soal)
  // =========================================================================
  {
    id: 41,
    chapterId: 5,
    chapterName: "Logika Fuzzy",
    question: "Derajat keanggotaan μ(x) bernilai pada rentang...",
    options: [
      "-1 sampai 1",
      "0 sampai 1",
      "0 sampai 100",
      "Bebas"
    ],
    answer: 1, // B
    explanation: "Derajat keanggotaan fuzzy berada pada rentang bilangan riil kontinu [0, 1]. Nilai 0 berarti bukan anggota sama sekali, dan 1 berarti anggota mutlak."
  },
  {
    id: 42,
    chapterId: 5,
    chapterName: "Logika Fuzzy",
    question: "Pada fungsi segitiga (10, 20, 30), nilai μ untuk x = 25 adalah...",
    options: [
      "0,25",
      "0,5",
      "0,75",
      "1"
    ],
    answer: 1, // B
    explanation: "Titik x = 25 berada pada sisi menurun segitiga antara puncak (20) dan batas kanan (30). Rumus: μ(25) = (30 - 25) / (30 - 20) = 5 / 10 = 0,5."
  },
  {
    id: 43,
    chapterId: 5,
    chapterName: "Logika Fuzzy",
    question: "Operasi ATAU (OR) pada fuzzy menggunakan operator...",
    options: [
      "Min",
      "Max",
      "Perkalian",
      "Rata-rata"
    ],
    answer: 1, // B
    explanation: "Dalam teori himpunan fuzzy Zadeh, operasi union / ATAU (OR) direpresentasikan dengan nilai maksimum (Max) dari derajat keanggotaan."
  },
  {
    id: 44,
    chapterId: 5,
    chapterName: "Logika Fuzzy",
    question: "Urutan empat tahap penalaran Mamdani yang benar adalah...",
    options: [
      "Agregasi → fuzzifikasi → evaluasi → defuzzifikasi",
      "Fuzzifikasi → evaluasi aturan → agregasi → defuzzifikasi",
      "Evaluasi → defuzzifikasi → fuzzifikasi → agregasi",
      "Fuzzifikasi → defuzzifikasi → evaluasi → agregasi"
    ],
    answer: 1, // B
    explanation: "Alur Mamdani: (1) Fuzzifikasi input crisp, (2) Evaluasi aturan implikasi, (3) Agregasi seluruh output aturan, (4) Defuzzifikasi menjadi output crisp."
  },
  {
    id: 45,
    chapterId: 5,
    chapterName: "Logika Fuzzy",
    question: "Dibanding Mamdani, keunggulan utama Sugeno adalah...",
    options: [
      "Lebih akurat selalu",
      "Tidak membutuhkan aturan",
      "Defuzzifikasi ringan menggunakan rata-rata berbobot sehingga cepat untuk embedded",
      "Tidak membutuhkan fungsi keanggotaan"
    ],
    answer: 2, // C
    explanation: "Sugeno menghasilkan output berupa konstanta atau persamaan linier, sehingga defuzzifikasinya sangat ringan (weighted average) dan cocok untuk komputasi cepat/embedded."
  },
  {
    id: 46,
    chapterId: 5,
    chapterName: "Logika Fuzzy",
    question: "Apa yang membedakan derajat keanggotaan fuzzy dari probabilitas?",
    options: [
      "Derajat fuzzy selalu lebih dari 1",
      "Derajat fuzzy menunjukkan tingkat kecocokan terhadap suatu label",
      "Probabilitas tidak pernah bernilai 0",
      "Keduanya selalu memiliki arti yang sama"
    ],
    answer: 1, // B
    explanation: "Nilai fuzzy menunjukkan seberapa cocok suatu nilai dengan label tertentu, bukan peluang terjadinya suatu kejadian."
  },
  {
    id: 47,
    chapterId: 5,
    chapterName: "Logika Fuzzy",
    question: "Pada fungsi segitiga (10, 20, 30), nilai keanggotaan ketika x = 20 adalah...",
    options: [
      "0",
      "0,25",
      "0,5",
      "1"
    ],
    answer: 3, // D
    explanation: "Titik b = 20 merupakan puncak fungsi segitiga, sehingga μ(20) = 1."
  },
  {
    id: 48,
    chapterId: 5,
    chapterName: "Logika Fuzzy",
    question: "Jika μ(A) = 0,4 dan μ(B) = 0,8, maka A AND B bernilai...",
    options: [
      "0,2",
      "0,4",
      "0,8",
      "1,2"
    ],
    answer: 1, // B
    explanation: "Operasi AND fuzzy menggunakan minimum. min(0,4 ; 0,8) = 0,4."
  },
  {
    id: 49,
    chapterId: 5,
    chapterName: "Logika Fuzzy",
    question: "Pada Mamdani, proses mengubah nilai input seperti suhu 28°C menjadi derajat keanggotaan disebut...",
    options: [
      "agregasi",
      "defuzzifikasi",
      "fuzzifikasi",
      "crossover"
    ],
    answer: 2, // C
    explanation: "Fuzzifikasi mengubah nilai crisp menjadi derajat keanggotaan pada beberapa label fuzzy."
  },
  {
    id: 50,
    chapterId: 5,
    chapterName: "Logika Fuzzy",
    question: "Jika sistem membutuhkan perhitungan ringan untuk mikrokontroler, metode fuzzy yang lebih cocok adalah...",
    options: [
      "Mamdani",
      "Sugeno",
      "DFS",
      "Forward chaining"
    ],
    answer: 1, // B
    explanation: "Sugeno menggunakan keluaran berupa angka dan rata-rata berbobot sehingga perhitungannya lebih ringan dibandingkan metode centroid Mamdani."
  },

  // =========================================================================
  // BAB 6 — ALGORITMA GENETIKA (10 Soal)
  // =========================================================================
  {
    id: 51,
    chapterId: 6,
    chapterName: "Algoritma Genetika",
    question: "Fungsi yang menilai kualitas sebuah kromosom disebut...",
    options: [
      "Crossover",
      "Fitness",
      "Mutasi",
      "Elitisme"
    ],
    answer: 1, // B
    explanation: "Fungsi Fitness (Fitness Function) digunakan untuk mengevaluasi seberapa optimal atau cocok suatu kromosom/kandidat solusi terhadap tujuan masalah."
  },
  {
    id: 52,
    chapterId: 6,
    chapterName: "Algoritma Genetika",
    question: "Memberi fitness 0 pada solusi yang melanggar batasan disebut teknik...",
    options: [
      "Seleksi",
      "Penalti",
      "Konvergensi",
      "Pewarisan"
    ],
    answer: 1, // B
    explanation: "Teknik Penalti memberikan sanksi (misalnya fitness 0 atau dikurangi drastis) pada individu yang melanggar batasan (constraints) agar tidak dipilih dalam seleksi."
  },
  {
    id: 53,
    chapterId: 6,
    chapterName: "Algoritma Genetika",
    question: "Tujuan utama mutasi adalah...",
    options: [
      "Mempercepat perhitungan",
      "Menjaga keragaman agar tidak macet di optimum lokal",
      "Menggandakan juara",
      "Mengurangi populasi"
    ],
    answer: 1, // B
    explanation: "Mutasi memperkenalkan materi genetik baru secara acak untuk menjaga keragaman genetik dan mencegah algoritma terjebak pada optimum lokal (local optima)."
  },
  {
    id: 54,
    chapterId: 6,
    chapterName: "Algoritma Genetika",
    question: "Elitisme menjamin...",
    options: [
      "Semua anak lebih baik dari induknya",
      "Fitness terbaik tidak pernah menurun antar generasi",
      "Mutasi tidak terjadi",
      "Populasi tetap beragam"
    ],
    answer: 1, // B
    explanation: "Elitisme menyalin individu terbaik langsung ke generasi berikutnya tanpa modifikasi, menjamin nilai fitness terbaik populasi tidak akan menurun."
  },
  {
    id: 55,
    chapterId: 6,
    chapterName: "Algoritma Genetika",
    question: "Dengan kapasitas 3,0 kg, fitness kromosom 0100 adalah...",
    options: [
      "0",
      "7",
      "13",
      "15"
    ],
    answer: 1, // B
    explanation: "Kromosom 0100 hanya memilih barang kedua (B). Barang B berbobot 1,0 kg (≤ 3,0 kg, valid tanpa penalti) dan bernilai profit 7, sehingga fitness = 7."
  },
  {
    id: 56,
    chapterId: 6,
    chapterName: "Algoritma Genetika",
    question: "Apa yang dimaksud dengan gen pada kromosom biner?",
    options: [
      "Seluruh populasi",
      "Satu elemen penyusun kromosom",
      "Nilai fitness seluruh populasi",
      "Satu generasi"
    ],
    answer: 1, // B
    explanation: "Pada representasi biner, gen adalah satu bit yang menunjukkan satu bagian dari solusi."
  },
  {
    id: 57,
    chapterId: 6,
    chapterName: "Algoritma Genetika",
    question: "Jika sebuah kromosom memiliki fitness lebih tinggi dibanding kromosom lain, kemungkinan kromosom tersebut untuk dipilih sebagai induk adalah...",
    options: [
      "lebih besar",
      "selalu nol",
      "tidak berubah",
      "lebih kecil"
    ],
    answer: 0, // A
    explanation: "Seleksi memberikan peluang lebih besar kepada solusi yang memiliki fitness lebih baik."
  },
  {
    id: 58,
    chapterId: 6,
    chapterName: "Algoritma Genetika",
    question: "Crossover satu titik dilakukan dengan cara...",
    options: [
      "membuang seluruh kromosom",
      "memilih titik potong lalu menggabungkan bagian dari dua induk",
      "mengubah semua gen menjadi 1",
      "menghapus populasi"
    ],
    answer: 1, // B
    explanation: "Crossover satu titik memotong dua kromosom pada posisi tertentu kemudian menukar atau menggabungkan bagian kromosom tersebut."
  },
  {
    id: 59,
    chapterId: 6,
    chapterName: "Algoritma Genetika",
    question: "Jika populasi GA menjadi terlalu seragam setelah beberapa generasi, mekanisme yang membantu menjaga keragaman adalah...",
    options: [
      "mutasi",
      "elitisme",
      "fitness",
      "penalti"
    ],
    answer: 0, // A
    explanation: "Mutasi memberikan perubahan kecil secara acak sehingga populasi tidak terlalu cepat menjadi seragam."
  },
  {
    id: 60,
    chapterId: 6,
    chapterName: "Algoritma Genetika",
    question: "Jika kromosom 1010 berarti membawa barang A dan C, dengan berat A = 0,5 kg dan C = 1,5 kg, maka total beratnya adalah...",
    options: [
      "1 kg",
      "1,5 kg",
      "2 kg",
      "2,5 kg"
    ],
    answer: 2, // C
    explanation: "0,5 + 1,5 = 2,0 kg. Jika kapasitas tas 3 kg, kromosom tersebut masih valid."
  },

  // =========================================================================
  // BAB 7 — MACHINE LEARNING (10 Soal)
  // =========================================================================
  {
    id: 61,
    chapterId: 7,
    chapterName: "Machine Learning",
    question: "Perbedaan mendasar Machine Learning dari pemrograman klasik adalah...",
    options: [
      "ML lebih cepat",
      "Pada ML aturan dipelajari mesin dari data",
      "ML tidak membutuhkan komputer",
      "ML selalu akurat"
    ],
    answer: 1, // B
    explanation: "Pada pemrograman konvensional, manusia menulis aturan eksplisit. Pada Machine Learning, algoritma mempelajari pola/aturan secara otomatis dari kumpulan data."
  },
  {
    id: 62,
    chapterId: 7,
    chapterName: "Machine Learning",
    question: "Metode kuadrat terkecil (Ordinary Least Squares) meminimalkan...",
    options: [
      "Jumlah residual",
      "Jumlah kuadrat residual (SSE)",
      "Kemiringan garis",
      "Jumlah data"
    ],
    answer: 1, // B
    explanation: "Metode Least Squares mencari garis regresi terbaik dengan meminimalkan Sum of Squared Errors (SSE), yaitu total kuadrat selisih antara nilai riil dan prediksi."
  },
  {
    id: 63,
    chapterId: 7,
    chapterName: "Machine Learning",
    question: "KNN menentukan kelas kasus baru berdasarkan...",
    options: [
      "Garis terbaik",
      "Suara mayoritas k tetangga terdekat",
      "Aturan IF-THEN pakar",
      "Fungsi fitness"
    ],
    answer: 1, // B
    explanation: "K-Nearest Neighbors (KNN) mengukur jarak ke data latih dan menetapkan kelas data baru berdasarkan voting suara mayoritas dari k tetangga paling dekat."
  },
  {
    id: 64,
    chapterId: 7,
    chapterName: "Machine Learning",
    question: "Model dengan skor latih 0,99 dan skor uji 0,55 mengalami...",
    options: [
      "Underfitting",
      "Good fit",
      "Overfitting",
      "Data bocor"
    ],
    answer: 2, // C
    explanation: "Overfitting terjadi ketika model menghafal data latih secara berlebihan (akurasi 99%) namun gagal melakukan generalisasi pada data uji baru (akurasi anjlok ke 55%)."
  },
  {
    id: 65,
    chapterId: 7,
    chapterName: "Machine Learning",
    question: "Pada deteksi penyakit berbahaya, metrik yang paling penting dijaga tinggi umumnya adalah...",
    options: [
      "Presisi",
      "Recall",
      "Akurasi",
      "SSE"
    ],
    answer: 1, // B
    explanation: "Recall tinggi meminimalkan False Negative (pasien benar-benar sakit tetapi diprediksi sehat/lolos tanpa penanganan medis yang membahayakan nyawa)."
  },
  {
    id: 66,
    chapterId: 7,
    chapterName: "Machine Learning",
    question: "Dalam supervised learning, data pelatihan umumnya memiliki...",
    options: [
      "fitur tanpa target",
      "contoh berlabel berupa fitur dan jawaban",
      "hanya data acak",
      "hanya data gambar"
    ],
    answer: 1, // B
    explanation: "Supervised learning belajar dari contoh yang memiliki input/fitur dan target/jawaban."
  },
  {
    id: 67,
    chapterId: 7,
    chapterName: "Machine Learning",
    question: "Jika target yang ingin diprediksi berupa angka kontinu seperti harga rumah, jenis tugas ML tersebut adalah...",
    options: [
      "klasifikasi",
      "regresi",
      "clustering",
      "reinforcement learning"
    ],
    answer: 1, // B
    explanation: "Regresi digunakan untuk memprediksi nilai angka kontinu, sedangkan klasifikasi menghasilkan kategori."
  },
  {
    id: 68,
    chapterId: 7,
    chapterName: "Machine Learning",
    question: "Dalam KNN, jika k = 5, keputusan kelas kasus baru terutama ditentukan oleh...",
    options: [
      "5 data terjauh",
      "5 data terdekat",
      "semua data tanpa menghitung jarak",
      "data dengan nilai terbesar"
    ],
    answer: 1, // B
    explanation: "KNN mencari k tetangga terdekat, kemudian menggunakan suara mayoritas untuk menentukan kelas."
  },
  {
    id: 69,
    chapterId: 7,
    chapterName: "Machine Learning",
    question: "Mengapa skala fitur perlu diperhatikan pada KNN?",
    options: [
      "Karena KNN tidak menggunakan jarak",
      "Karena fitur berskala besar dapat mendominasi perhitungan jarak",
      "Karena KNN hanya menerima satu fitur",
      "Karena semua fitur harus bernilai nol"
    ],
    answer: 1, // B
    explanation: "KNN menggunakan jarak. Jika satu fitur memiliki skala jauh lebih besar, fitur tersebut dapat mendominasi hasil perhitungan."
  },
  {
    id: 70,
    chapterId: 7,
    chapterName: "Machine Learning",
    question: "Sebuah model memperoleh skor training 95% dan testing 94%. Kondisi ini lebih mendekati...",
    options: [
      "overfitting berat",
      "underfitting",
      "generalisasi yang baik",
      "data rusak"
    ],
    answer: 2, // C
    explanation: "Skor training dan testing yang sama-sama tinggi serta tidak jauh berbeda menunjukkan model mampu melakukan generalisasi dengan baik."
  },

  // =========================================================================
  // BAB 8 — JST & DEEP LEARNING (10 Soal)
  // =========================================================================
  {
    id: 71,
    chapterId: 8,
    chapterName: "JST & Deep Learning",
    question: "Nilai yang menentukan pengaruh sebuah masukan pada neuron dan yang dipelajari saat pelatihan adalah...",
    options: [
      "Bias",
      "Bobot",
      "Aktivasi",
      "Epoch"
    ],
    answer: 1, // B
    explanation: "Bobot (Weight) merepresentasikan kekuatan sinyal/pengaruh input terhadap neuron, dan nilainya terus diperbarui (dipelajari) selama proses training."
  },
  {
    id: 72,
    chapterId: 8,
    chapterName: "JST & Deep Learning",
    question: "Fungsi aktivasi default lapisan tersembunyi deep learning modern adalah...",
    options: [
      "Step",
      "Sigmoid",
      "ReLU",
      "Softmax"
    ],
    answer: 2, // C
    explanation: "ReLU (Rectified Linear Unit, f(x) = max(0, x)) menjadi aktivasi standar hidden layer karena komputasinya efisien dan menghindari masalah vanishing gradient."
  },
  {
    id: 73,
    chapterId: 8,
    chapterName: "JST & Deep Learning",
    question: "Perceptron tunggal PASTI gagal mempelajari fungsi...",
    options: [
      "AND",
      "OR",
      "XOR",
      "NOT"
    ],
    answer: 2, // C
    explanation: "Fungsi XOR bersifat non-linearly separable (tidak dapat dipisahkan oleh satu garis lurus pembagi), sehingga tidak dapat diselesaikan oleh Single Layer Perceptron."
  },
  {
    id: 74,
    chapterId: 8,
    chapterName: "JST & Deep Learning",
    question: "Peristiwa yang membekukan riset JST selama sekitar 20 tahun dipicu oleh bukti keterbatasan perceptron pada...",
    options: [
      "AND",
      "XOR",
      "Citra",
      "Suara"
    ],
    answer: 1, // B
    explanation: "Buku Minsky & Papert (1969) membuktikan ketidakmampuan perceptron tunggal memecahkan masalah XOR, memicu era AI Winter pertama untuk jaringan saraf."
  },
  {
    id: 75,
    chapterId: 8,
    chapterName: "JST & Deep Learning",
    question: "Algoritma yang menyetel bobot seluruh lapisan dengan menyebar kesalahan ke belakang disebut...",
    options: [
      "Gradient Boosting",
      "Backpropagation",
      "Forward Chaining",
      "Crossover"
    ],
    answer: 1, // B
    explanation: "Backpropagation menghitung gradien error dari lapisan output lalu merambatkannya mundur ke lapisan tersembunyi untuk memperbarui bobot menggunakan Gradient Descent."
  },
  {
    id: 76,
    chapterId: 8,
    chapterName: "JST & Deep Learning",
    question: "Perhitungan dasar sebuah neuron sebelum masuk fungsi aktivasi terdiri dari...",
    options: [
      "input + output",
      "input berbobot + bias",
      "fitness + mutasi",
      "jarak + heuristik"
    ],
    answer: 1, // B
    explanation: "Neuron menghitung kombinasi input yang dikalikan bobot kemudian ditambah bias, lalu hasilnya diproses oleh fungsi aktivasi."
  },
  {
    id: 77,
    chapterId: 8,
    chapterName: "JST & Deep Learning",
    question: "Apa fungsi utama bias pada neuron?",
    options: [
      "Mengatur ukuran dataset",
      "Memberikan pergeseran/penyesuaian pada batas aktivasi neuron",
      "Menghapus bobot",
      "Menghitung jumlah epoch"
    ],
    answer: 1, // B
    explanation: "Bias membantu menggeser batas keputusan neuron sehingga neuron lebih fleksibel dalam mempelajari pola."
  },
  {
    id: 78,
    chapterId: 8,
    chapterName: "JST & Deep Learning",
    question: "Jika sebuah jaringan memiliki beberapa hidden layer, jaringan tersebut dapat disebut...",
    options: [
      "BFS",
      "KNN",
      "Deep learning",
      "Sistem pakar"
    ],
    answer: 2, // C
    explanation: "Deep learning menggunakan jaringan syaraf dengan banyak lapisan sehingga mampu membangun representasi pola secara bertingkat."
  },
  {
    id: 79,
    chapterId: 8,
    chapterName: "JST & Deep Learning",
    question: "Mengapa hidden layer penting untuk masalah seperti XOR?",
    options: [
      "Karena hidden layer menghilangkan seluruh input",
      "Karena hidden layer membantu jaringan mempelajari hubungan nonlinear",
      "Karena hidden layer tidak menggunakan bobot",
      "Karena XOR hanya membutuhkan satu neuron"
    ],
    answer: 1, // B
    explanation: "Perceptron tunggal tidak mampu memisahkan XOR secara linear. Hidden layer memungkinkan jaringan membentuk representasi nonlinear."
  },
  {
    id: 80,
    chapterId: 8,
    chapterName: "JST & Deep Learning",
    question: "Dalam jaringan syaraf, satu epoch berarti...",
    options: [
      "satu neuron aktif",
      "satu kali melihat seluruh data latih",
      "satu kali menghapus bobot",
      "satu kali melakukan crossover"
    ],
    answer: 1, // B
    explanation: "Epoch adalah satu putaran ketika seluruh data latih telah digunakan dalam proses pembelajaran."
  }
];
