/**
 * Data Soal UTS Sistem Cerdas (80 Soal / 8 Bab - 10 Soal per Bab)
 * Dilengkapi dengan metadata bab, pilihan jawaban, kunci jawaban yang akurat, dan pembahasan ringkas & jelas.
 */

const rawChaptersSistemCerdas = [
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

const rawQuestionsSistemCerdas = [
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

// =============================================================================
// DATA MATA KULIAH: KRIPTOGRAFI (50 Soal / 4 Bab)
// Sumber: soal.md
// =============================================================================

const rawChaptersKriptografi = [
  {
    id: 1,
    number: "01",
    title: "Keamanan Informasi & Dasar Kriptografi",
    description: "Tujuan kriptografi, plaintext/ciphertext, Kerckhoffs, pilar keamanan (CIA & Non-repudiation)",
    questionCount: 14
  },
  {
    id: 2,
    number: "02",
    title: "Kriptografi Klasik",
    description: "Caesar cipher, substitusi mono/polialfabetik, transposisi, Vigenère cipher, Mesin Enigma",
    questionCount: 11
  },
  {
    id: 3,
    number: "03",
    title: "Serangan terhadap Kriptografi",
    description: "Kriptanalisis, COA, KPA, CPA, CCA, brute force, analisis frekuensi, metode Kasiski",
    questionCount: 10
  },
  {
    id: 4,
    number: "04",
    title: "Landasan Matematika Kriptografi",
    description: "Aritmatika modulo, FPB, Algoritma Euclidean, dan Invers Perkalian Modulo",
    questionCount: 15
  }
];

const rawQuestionsKriptografi = [
  // =========================================================================
  // BAB 1 — KEAMANAN INFORMASI DAN DASAR KRIPTOGRAFI (14 Soal)
  // =========================================================================
  {
    id: 1,
    chapterId: 1,
    chapterName: "Keamanan Informasi & Dasar Kriptografi",
    question: "Apa tujuan utama kriptografi?",
    options: [
      "Mempercepat koneksi internet",
      "Menjaga keamanan informasi",
      "Memperbesar ukuran file",
      "Menghapus data digital"
    ],
    answer: 1, // B
    explanation: "Tujuan utama kriptografi adalah menjaga kerahasiaan dan keamanan informasi agar tidak dapat diakses atau dimanipulasi oleh pihak yang tidak berwenang."
  },
  {
    id: 2,
    chapterId: 1,
    chapterName: "Keamanan Informasi & Dasar Kriptografi",
    question: "Pesan asli sebelum dienkripsi disebut ...",
    options: [
      "Ciphertext",
      "Key",
      "Plaintext",
      "Cryptogram"
    ],
    answer: 2, // C
    explanation: "Plaintext (teks terang) adalah pesan asli yang dapat dibaca dan dimengerti secara langsung sebelum melalui proses penyandian (enkripsi)."
  },
  {
    id: 3,
    chapterId: 1,
    chapterName: "Keamanan Informasi & Dasar Kriptografi",
    question: "Pesan yang telah dienkripsi disebut ...",
    options: [
      "Plaintext",
      "Ciphertext",
      "Decryption",
      "Keyspace"
    ],
    answer: 1, // B
    explanation: "Ciphertext (teks tersandi) adalah hasil transformasi pesan menggunakan algoritma kriptografi sehingga tidak dapat dipahami tanpa proses dekripsi."
  },
  {
    id: 4,
    chapterId: 1,
    chapterName: "Keamanan Informasi & Dasar Kriptografi",
    question: "Proses mengubah plaintext menjadi ciphertext disebut ...",
    options: [
      "Dekripsi",
      "Enkripsi",
      "Kriptanalisis",
      "Autentikasi"
    ],
    answer: 1, // B
    explanation: "Enkripsi adalah proses matematis menyandikan plaintext menjadi ciphertext dengan menggunakan kunci tertentu agar aman dari penyadapan."
  },
  {
    id: 5,
    chapterId: 1,
    chapterName: "Keamanan Informasi & Dasar Kriptografi",
    question: "Proses mengembalikan ciphertext menjadi plaintext disebut ...",
    options: [
      "Enkripsi",
      "Dekripsi",
      "Substitusi",
      "Transposisi"
    ],
    answer: 1, // B
    explanation: "Dekripsi adalah proses memulihkan ciphertext kembali menjadi plaintext semula menggunakan kunci dekripsi yang valid."
  },
  {
    id: 6,
    chapterId: 1,
    chapterName: "Keamanan Informasi & Dasar Kriptografi",
    question: "Parameter rahasia yang digunakan untuk proses enkripsi atau dekripsi disebut ...",
    options: [
      "Plaintext",
      "Ciphertext",
      "Kunci",
      "Pesan"
    ],
    answer: 2, // C
    explanation: "Kunci (key) adalah parameter rahasia yang mengontrol cara kerja algoritma kriptografi dalam proses enkripsi maupun dekripsi."
  },
  {
    id: 7,
    chapterId: 1,
    chapterName: "Keamanan Informasi & Dasar Kriptografi",
    question: "Menurut prinsip Kerckhoffs, keamanan sistem kriptografi seharusnya bergantung pada ...",
    options: [
      "Kerahasiaan algoritma",
      "Kerahasiaan kunci",
      "Kerahasiaan nama pengirim",
      "Panjang plaintext saja"
    ],
    answer: 1, // B
    explanation: "Prinsip Kerckhoffs menyatakan bahwa keamanan sistem kriptografi harus sepenuhnya bertumpu pada kerahasiaan kunci, bukan pada kerahasiaan algoritmanya (algoritma boleh diketahui publik)."
  },
  {
    id: 8,
    chapterId: 1,
    chapterName: "Keamanan Informasi & Dasar Kriptografi",
    question: "Memastikan informasi hanya dapat dibaca pihak berwenang disebut ...",
    options: [
      "Integrity",
      "Authentication",
      "Confidentiality",
      "Non-repudiation"
    ],
    answer: 2, // C
    explanation: "Confidentiality (kerahasiaan) adalah aspek keamanan yang menjamin data hanya dapat diakses dan dibaca oleh entitas yang memiliki hak akses resmi."
  },
  {
    id: 9,
    chapterId: 1,
    chapterName: "Keamanan Informasi & Dasar Kriptografi",
    question: "Memastikan pesan tidak diubah tanpa izin disebut ...",
    options: [
      "Integrity",
      "Confidentiality",
      "Compression",
      "Transposition"
    ],
    answer: 0, // A
    explanation: "Integrity (keutuhan data) menjamin keaslian data dan memastikan pesan tidak mengalami modifikasi, penyisipan, atau perusakan tanpa izin."
  },
  {
    id: 10,
    chapterId: 1,
    chapterName: "Keamanan Informasi & Dasar Kriptografi",
    question: "Memastikan identitas pihak yang berkomunikasi disebut ...",
    options: [
      "Enkripsi",
      "Authentication",
      "Transposisi",
      "Kriptanalisis"
    ],
    answer: 1, // B
    explanation: "Authentication (autentikasi) adalah proses pembuktian dan verifikasi kebenaran identitas pengguna, sistem, atau integritas sumber pesan."
  },
  {
    id: 11,
    chapterId: 1,
    chapterName: "Keamanan Informasi & Dasar Kriptografi",
    question: "Prinsip untuk mencegah pengirim menyangkal telah mengirim pesan disebut ...",
    options: [
      "Confidentiality",
      "Integrity",
      "Non-repudiation",
      "Substitution"
    ],
    answer: 2, // C
    explanation: "Non-repudiation (kenir-sangkalan) memberikan bukti tak terbantahkan bahwa pengirim benar-benar mengirim pesan tersebut sehingga ia tidak dapat menyangkalnya."
  },
  {
    id: 12,
    chapterId: 1,
    chapterName: "Keamanan Informasi & Dasar Kriptografi",
    question: "Ilmu yang mempelajari kriptografi dan kriptanalisis disebut ...",
    options: [
      "Kriptologi",
      "Kriptogram",
      "Kriptogrammatika",
      "Kompresi"
    ],
    answer: 0, // A
    explanation: "Kriptologi (cryptology) adalah cabang ilmu induk yang mencakup kriptografi (pembuatan sistem sandi) dan kriptanalisis (pemecahan sistem sandi)."
  },
  {
    id: 13,
    chapterId: 1,
    chapterName: "Keamanan Informasi & Dasar Kriptografi",
    question: "Enkripsi data yang tersimpan di hard disk atau database disebut ...",
    options: [
      "Encryption in transit",
      "Encryption at rest",
      "Brute force",
      "Frequency analysis"
    ],
    answer: 1, // B
    explanation: "Encryption at rest mengamankan data statis yang sedang tersimpan di media penyimpanan (seperti hard drive, flash disk, database, atau backup storage)."
  },
  {
    id: 14,
    chapterId: 1,
    chapterName: "Keamanan Informasi & Dasar Kriptografi",
    question: "Enkripsi data ketika sedang dikirim melalui jaringan disebut ...",
    options: [
      "Encryption at rest",
      "Encryption in transit",
      "Transposisi",
      "Invers modulo"
    ],
    answer: 1, // B
    explanation: "Encryption in transit (data in flight) melindungi data saat mengalir melintasi saluran komunikasi atau jaringan publik (misalnya via TLS/HTTPS atau VPN)."
  },

  // =========================================================================
  // BAB 2 — KRIPTOGRAFI KLASIK (11 Soal)
  // =========================================================================
  {
    id: 15,
    chapterId: 2,
    chapterName: "Kriptografi Klasik",
    question: "Caesar cipher termasuk teknik kriptografi ...",
    options: [
      "Substitusi",
      "Transposisi",
      "Hashing",
      "Kompresi"
    ],
    answer: 0, // A
    explanation: "Caesar cipher merupakan cipher substitusi monoalfabetik klasik di mana setiap huruf digantikan oleh huruf lain dengan selisih pergeseran posisi tetap."
  },
  {
    id: 16,
    chapterId: 2,
    chapterName: "Kriptografi Klasik",
    question: "Pada Caesar cipher dengan kunci k = 3, huruf A dienkripsi menjadi ...",
    options: [
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2, // C
    explanation: "Huruf A bernilai posisi 0. Dengan rumus E(p) = (p + 3) mod 26: 0 + 3 = 3, yang berkorespondensi dengan huruf D."
  },
  {
    id: 17,
    chapterId: 2,
    chapterName: "Kriptografi Klasik",
    question: "Rumus enkripsi Caesar cipher yang umum digunakan adalah ...",
    options: [
      "E(p) = (p - k) mod 26",
      "E(p) = (p + k) mod 26",
      "E(p) = p + k + 26",
      "E(p) = p × k"
    ],
    answer: 1, // B
    explanation: "Enkripsi Caesar cipher menggeser indeks karakter p sejauh k langkah maju dalam alfabet modulo 26: E(p) = (p + k) mod 26."
  },
  {
    id: 18,
    chapterId: 2,
    chapterName: "Kriptografi Klasik",
    question: "Rumus dekripsi Caesar cipher yang umum digunakan adalah ...",
    options: [
      "D(c) = (c - k) mod 26",
      "D(c) = (c + k) mod 26",
      "D(c) = c × k",
      "D(c) = c + k + 26"
    ],
    answer: 0, // A
    explanation: "Dekripsi Caesar cipher membalik proses enkripsi dengan menggeser indeks c mundur sejauh k langkah: D(c) = (c - k) mod 26."
  },
  {
    id: 19,
    chapterId: 2,
    chapterName: "Kriptografi Klasik",
    question: "Jika Caesar cipher menggunakan kunci 3, huruf D didekripsi menjadi ...",
    options: [
      "A",
      "B",
      "C",
      "G"
    ],
    answer: 0, // A
    explanation: "Huruf D memiliki indeks 3. Rumus dekripsi: D(c) = (3 - 3) mod 26 = 0, yaitu huruf A."
  },
  {
    id: 20,
    chapterId: 2,
    chapterName: "Kriptografi Klasik",
    question: "Dalam cipher substitusi, proses utama yang dilakukan adalah ...",
    options: [
      "Mengubah posisi huruf tanpa mengganti simbolnya",
      "Mengganti simbol dengan simbol lain",
      "Menghapus seluruh huruf",
      "Membalik urutan kata saja"
    ],
    answer: 1, // B
    explanation: "Cipher substitusi bekerja dengan mengganti setiap simbol atau huruf dalam plaintext dengan simbol, huruf, atau angka lain."
  },
  {
    id: 21,
    chapterId: 2,
    chapterName: "Kriptografi Klasik",
    question: "Dalam cipher transposisi, proses utama yang dilakukan adalah ...",
    options: [
      "Mengganti semua huruf menjadi angka",
      "Mengubah posisi atau urutan simbol",
      "Menghapus kunci",
      "Mengubah semua huruf menjadi A"
    ],
    answer: 1, // B
    explanation: "Cipher transposisi mempertahankan karakter asli plaintext tetapi mengacak atau mengubah posisi susunannya (permutasi)."
  },
  {
    id: 22,
    chapterId: 2,
    chapterName: "Kriptografi Klasik",
    question: "Vigenère cipher merupakan contoh ...",
    options: [
      "Substitusi monoalfabetik",
      "Substitusi polialfabetik",
      "Hashing",
      "Enkripsi tanpa kunci"
    ],
    answer: 1, // B
    explanation: "Vigenère cipher adalah substitusi polialfabetik karena satu huruf plaintext yang sama dapat dienkripsi menjadi beberapa huruf ciphertext yang berbeda sesuai huruf kunci."
  },
  {
    id: 23,
    chapterId: 2,
    chapterName: "Kriptografi Klasik",
    question: "Apa yang digunakan dalam Vigenère cipher untuk menentukan pergeseran huruf?",
    options: [
      "Panjang plaintext saja",
      "Huruf-huruf kunci",
      "Alamat IP",
      "Ukuran file"
    ],
    answer: 1, // B
    explanation: "Pergeseran tiap huruf dalam Vigenère cipher ditentukan oleh nilai alfabetis dari huruf kunci yang berulang sepanjang plaintext."
  },
  {
    id: 24,
    chapterId: 2,
    chapterName: "Kriptografi Klasik",
    question: "Super encryption merupakan metode yang ...",
    options: [
      "Menggunakan satu teknik enkripsi saja",
      "Menggabungkan beberapa teknik penyandian secara berurutan",
      "Tidak menggunakan kunci",
      "Hanya menghapus spasi"
    ],
    answer: 1, // B
    explanation: "Super encryption adalah teknik penggabungan dua atau lebih metode enkripsi (misalnya cipher substitusi diikuti oleh cipher transposisi) untuk menghasilkan ciphertext yang lebih kuat."
  },
  {
    id: 25,
    chapterId: 2,
    chapterName: "Kriptografi Klasik",
    question: "Mesin Enigma menggunakan komponen utama berupa ...",
    options: [
      "Rotor",
      "Hard disk",
      "Database",
      "Firewall"
    ],
    answer: 0, // A
    explanation: "Mesin Enigma mengandalkan rotor mekanik yang berputar pada setiap penekanan tombol untuk menghasilkan rangkaian substitusi polialfabetik yang sangat kompleks."
  },

  // =========================================================================
  // BAB 3 — SERANGAN TERHADAP KRIPTOGRAFI (10 Soal)
  // =========================================================================
  {
    id: 26,
    chapterId: 3,
    chapterName: "Serangan terhadap Kriptografi",
    question: "Ilmu untuk memecahkan ciphertext tanpa mengetahui kunci disebut ...",
    options: [
      "Kriptografi",
      "Kriptanalisis",
      "Enkripsi",
      "Dekripsi"
    ],
    answer: 1, // B
    explanation: "Kriptanalisis adalah teknik menganalisis dan memecahkan teks tersandi tanpa memiliki kunci enkripsi/dekripsi yang sah."
  },
  {
    id: 27,
    chapterId: 3,
    chapterName: "Serangan terhadap Kriptografi",
    question: "Serangan yang hanya menggunakan ciphertext sebagai informasi awal disebut ...",
    options: [
      "Known-plaintext attack",
      "Chosen-plaintext attack",
      "Ciphertext-only attack",
      "Chosen-ciphertext attack"
    ],
    answer: 2, // C
    explanation: "Pada Ciphertext-only attack (COA), penyerang hanya memiliki satu atau lebih ciphertext tanpa mengetahui plaintext pendampingnya."
  },
  {
    id: 28,
    chapterId: 3,
    chapterName: "Serangan terhadap Kriptografi",
    question: "Serangan yang memanfaatkan pasangan plaintext dan ciphertext yang bersesuaian disebut ...",
    options: [
      "Known-plaintext attack",
      "Ciphertext-only attack",
      "Brute force",
      "Transposisi"
    ],
    answer: 0, // A
    explanation: "Known-plaintext attack (KPA) terjadi ketika penyerang memiliki sebagian plaintext beserta ciphertext pasangannya, dan mencoba mengungkap kunci atau sisa pesan."
  },
  {
    id: 29,
    chapterId: 3,
    chapterName: "Serangan terhadap Kriptografi",
    question: "Pada chosen-plaintext attack, penyerang dapat ...",
    options: [
      "Memilih plaintext untuk dienkripsi dan mempelajari hasilnya",
      "Menghapus seluruh kunci secara otomatis",
      "Mengubah algoritma secara langsung",
      "Membaca semua pesan tanpa proses apa pun"
    ],
    answer: 0, // A
    explanation: "Chosen-plaintext attack (CPA) memungkinkan penyerang memilih plaintext sembarang untuk dienkripsi oleh sistem target dan menganalisis ciphertext yang keluar."
  },
  {
    id: 30,
    chapterId: 3,
    chapterName: "Serangan terhadap Kriptografi",
    question: "Pada chosen-ciphertext attack, penyerang dapat ...",
    options: [
      "Memilih ciphertext untuk didekripsi dan mempelajari hasilnya",
      "Memilih nama algoritma saja",
      "Menghapus plaintext",
      "Mengubah semua huruf menjadi angka"
    ],
    answer: 0, // A
    explanation: "Chosen-ciphertext attack (CCA) memungkinkan penyerang memilih ciphertext tertentu untuk didekripsi dan mengamati plaintext yang dihasilkan oleh sistem target."
  },
  {
    id: 31,
    chapterId: 3,
    chapterName: "Serangan terhadap Kriptografi",
    question: "Serangan dengan mencoba seluruh kemungkinan kunci disebut ...",
    options: [
      "Kasiski",
      "Brute force",
      "Transposisi",
      "Authentication"
    ],
    answer: 1, // B
    explanation: "Brute force attack (exhaustive key search) adalah metode mencoba seluruh ruang kunci (keyspace) satu per satu sampai kunci yang benar ditemukan."
  },
  {
    id: 32,
    chapterId: 3,
    chapterName: "Serangan terhadap Kriptografi",
    question: "Analisis frekuensi huruf memanfaatkan ...",
    options: [
      "Frekuensi kemunculan huruf dalam bahasa",
      "Ukuran layar komputer",
      "Jumlah folder",
      "Kecepatan keyboard"
    ],
    answer: 0, // A
    explanation: "Analisis frekuensi memanfaatkan karakteristik statistik bahasa alami, di mana huruf-huruf tertentu muncul dengan frekuensi yang dapat diprediksi."
  },
  {
    id: 33,
    chapterId: 3,
    chapterName: "Serangan terhadap Kriptografi",
    question: "Metode Kasiski terutama digunakan untuk menganalisis ...",
    options: [
      "Vigenère cipher",
      "Enkripsi file",
      "Firewall",
      "Caesar cipher saja"
    ],
    answer: 0, // A
    explanation: "Metode Kasiski adalah teknik kriptanalisis yang digunakan untuk memperkirakan panjang kunci pada cipher polialfabetik seperti Vigenère cipher."
  },
  {
    id: 34,
    chapterId: 3,
    chapterName: "Serangan terhadap Kriptografi",
    question: "Serangan pasif umumnya dilakukan dengan cara ...",
    options: [
      "Memantau atau menyadap komunikasi",
      "Mengubah isi pesan secara langsung",
      "Menghapus database",
      "Mengganti perangkat keras"
    ],
    answer: 0, // A
    explanation: "Serangan pasif berfokus pada penyadapan (eavesdropping) atau pemantauan lalu lintas data tanpa mengubah isi pesan atau merusak operasional sistem."
  },
  {
    id: 35,
    chapterId: 3,
    chapterName: "Serangan terhadap Kriptografi",
    question: "Serangan aktif dapat berupa ...",
    options: [
      "Hanya membaca pesan",
      "Mengubah atau menyisipkan pesan",
      "Hanya menghitung frekuensi huruf",
      "Hanya mengamati ukuran file"
    ],
    answer: 1, // B
    explanation: "Serangan aktif melakukan tindakan nyata seperti mengubah isi pesan, menyisipkan data palsu, atau mengganggu ketersediaan komunikasi sistem."
  },

  // =========================================================================
  // BAB 4 — LANDASAN MATEMATIKA KRIPTOGRAFI (15 Soal)
  // =========================================================================
  {
    id: 36,
    chapterId: 4,
    chapterName: "Landasan Matematika Kriptografi",
    question: "Hasil dari 17 mod 5 adalah ...",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 1, // B
    explanation: "17 dibagi 5 menghasilkan 3 dengan sisa 2, karena 17 = (3 × 5) + 2. Jadi 17 mod 5 = 2."
  },
  {
    id: 37,
    chapterId: 4,
    chapterName: "Landasan Matematika Kriptografi",
    question: "Hasil dari 29 mod 6 adalah ...",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 2, // C
    explanation: "29 dibagi 6 menghasilkan 4 dengan sisa 5, karena 29 = (4 × 6) + 5. Jadi 29 mod 6 = 5."
  },
  {
    id: 38,
    chapterId: 4,
    chapterName: "Landasan Matematika Kriptografi",
    question: "Hasil dari 25 mod 7 adalah ...",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2, // C
    explanation: "25 dibagi 7 menghasilkan 3 dengan sisa 4, karena 25 = (3 × 7) + 4. Jadi 25 mod 7 = 4."
  },
  {
    id: 39,
    chapterId: 4,
    chapterName: "Landasan Matematika Kriptografi",
    question: "FPB dari 18 dan 24 adalah ...",
    options: [
      "3",
      "6",
      "8",
      "12"
    ],
    answer: 1, // B
    explanation: "Faktor 18 = {1, 2, 3, 6, 9, 18} dan 24 = {1, 2, 3, 4, 6, 8, 12, 24}. Faktor persekutuan terbesar (FPB) keduanya adalah 6."
  },
  {
    id: 40,
    chapterId: 4,
    chapterName: "Landasan Matematika Kriptografi",
    question: "FPB dari 20 dan 30 adalah ...",
    options: [
      "2",
      "5",
      "10",
      "15"
    ],
    answer: 2, // C
    explanation: "Faktor 20 = {1, 2, 4, 5, 10, 20} dan 30 = {1, 2, 3, 5, 6, 10, 15, 30}. Faktor persekutuan terbesarnya adalah 10."
  },
  {
    id: 41,
    chapterId: 4,
    chapterName: "Landasan Matematika Kriptografi",
    question: "FPB dari 14 dan 25 adalah ...",
    options: [
      "1",
      "2",
      "5",
      "7"
    ],
    answer: 0, // A
    explanation: "Faktor 14 = {1, 2, 7, 14} dan faktor 25 = {1, 5, 25}. Satu-satunya faktor persekutuan adalah 1, sehingga 14 dan 25 relatif prima (FPB = 1)."
  },
  {
    id: 42,
    chapterId: 4,
    chapterName: "Landasan Matematika Kriptografi",
    question: "Algoritma Euclidean digunakan untuk mencari ...",
    options: [
      "Ciphertext",
      "FPB dua bilangan",
      "Panjang plaintext",
      "Nama algoritma"
    ],
    answer: 1, // B
    explanation: "Algoritma Euclidean adalah metode matematika klasik yang efisien untuk menghitung Faktor Persekutuan Terbesar (FPB) dari dua bilangan bulat."
  },
  {
    id: 43,
    chapterId: 4,
    chapterName: "Landasan Matematika Kriptografi",
    question: "Dalam algoritma Euclidean, proses pembagian dilakukan berulang kali sampai ...",
    options: [
      "Hasil bagi selalu 1",
      "Sisa pembagian menjadi 0",
      "Kedua bilangan menjadi genap",
      "Bilangan pertama menjadi negatif"
    ],
    answer: 1, // B
    explanation: "Algoritma Euclidean membagi bilangan secara berurutan hingga sisa pembagian sama dengan 0. Sisa bukan nol terakhir sebelum nol adalah nilai FPB-nya."
  },
  {
    id: 44,
    chapterId: 4,
    chapterName: "Landasan Matematika Kriptografi",
    question: "Invers modulo dari a terhadap modulus n ada jika ...",
    options: [
      "a = n",
      "FPB(a, n) = 1",
      "a selalu genap",
      "a habis dibagi n"
    ],
    answer: 1, // B
    explanation: "Invers perkalian modulo a (mod n) ada jika dan hanya jika a dan n saling relatif prima, yaitu FPB(a, n) = 1."
  },
  {
    id: 45,
    chapterId: 4,
    chapterName: "Landasan Matematika Kriptografi",
    question: "Invers dari 3 modulo 7 adalah ...",
    options: [
      "1",
      "2",
      "3",
      "5"
    ],
    answer: 3, // D
    explanation: "Mencari x sehingga (3 × x) ≡ 1 (mod 7). Menguji x = 5: 3 × 5 = 15 = (2 × 7) + 1 ≡ 1 (mod 7). Jadi invers dari 3 mod 7 adalah 5."
  },
  {
    id: 46,
    chapterId: 4,
    chapterName: "Landasan Matematika Kriptografi",
    question: "Invers dari 2 modulo 5 adalah ...",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 2, // C
    explanation: "Mencari x sehingga (2 × x) ≡ 1 (mod 5). Menguji x = 3: 2 × 3 = 6 = (1 × 5) + 1 ≡ 1 (mod 5). Jadi invers dari 2 mod 5 adalah 3."
  },
  {
    id: 47,
    chapterId: 4,
    chapterName: "Landasan Matematika Kriptografi",
    question: "Invers dari 4 modulo 9 adalah ...",
    options: [
      "2",
      "4",
      "5",
      "7"
    ],
    answer: 3, // D
    explanation: "Mencari x sehingga (4 × x) ≡ 1 (mod 9). Menguji x = 7: 4 × 7 = 28 = (3 × 9) + 1 ≡ 1 (mod 9). Jadi invers dari 4 mod 9 adalah 7."
  },
  {
    id: 48,
    chapterId: 4,
    chapterName: "Landasan Matematika Kriptografi",
    question: "FPB dari 26 dan 10 adalah ...",
    options: [
      "1",
      "2",
      "5",
      "10"
    ],
    answer: 1, // B
    explanation: "Langkah Euclidean: 26 = 2 × 10 + 6; 10 = 1 × 6 + 4; 6 = 1 × 4 + 2; 4 = 2 × 2 + 0. Sisa pembagian bukan-nol terakhir adalah 2, jadi FPB(26, 10) = 2."
  },
  {
    id: 49,
    chapterId: 4,
    chapterName: "Landasan Matematika Kriptografi",
    question: "Jika a = 7 dan n = 10, apakah invers modulo a terhadap n ada?",
    options: [
      "Tidak, karena 7 lebih kecil dari 10",
      "Tidak, karena keduanya ganjil",
      "Ada, karena FPB(7, 10) = 1",
      "Ada hanya jika 7 habis dibagi 10"
    ],
    answer: 2, // C
    explanation: "Invers modulo a terhadap n ada jika FPB(a, n) = 1. Karena FPB(7, 10) = 1 (7 dan 10 relatif prima), maka invers 7 mod 10 pasti ada (yaitu 3, karena 7 × 3 = 21 ≡ 1 mod 10)."
  },
  {
    id: 50,
    chapterId: 4,
    chapterName: "Landasan Matematika Kriptografi",
    question: "Hasil dari 43 mod 8 adalah ...",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 1, // B
    explanation: "43 dibagi 8 menghasilkan 5 dengan sisa 3, karena 43 = (5 × 8) + 3. Jadi 43 mod 8 = 3."
  }
];

// =============================================================================
// REGISTRY MATA KULIAH
// =============================================================================
const COURSES_DATA = {
  sistem_cerdas: {
    id: "sistem_cerdas",
    name: "Sistem Cerdas",
    shortName: "Sistem Cerdas",
    tagline: "UTS Sistem Cerdas",
    iconImage: "images/iconSistemCerdas.jpg",
    description: "AI, Metode Pencarian, Representasi Pengetahuan, Sistem Pakar, Logika Fuzzy, Algoritma Genetika, Machine Learning & Deep Learning.",
    badge: "80 Soal • 8 Bab",
    questionCount: 80,
    chapterCount: 8,
    timerDuration: 30 * 60, // 30 Menit
    chapters: rawChaptersSistemCerdas,
    questions: rawQuestionsSistemCerdas
  },
  kriptografi: {
    id: "kriptografi",
    name: "Kriptografi",
    shortName: "Kriptografi",
    tagline: "UTS Kriptografi",
    iconImage: "images/iconKriptografi.jpg",
    description: "Keamanan Informasi & Dasar Kriptografi, Cipher Klasik (Caesar, Vigenère, Enigma), Kriptanalisis & Landasan Matematika Modulo.",
    badge: "50 Soal • 4 Bab",
    questionCount: 50,
    chapterCount: 4,
    timerDuration: 30 * 60, // 30 Menit
    chapters: rawChaptersKriptografi,
    questions: rawQuestionsKriptografi
  }
};

// Variabel default untuk kompatibilitas ke belakang
let rawChapters = COURSES_DATA.sistem_cerdas.chapters;
let rawQuestions = COURSES_DATA.sistem_cerdas.questions;

