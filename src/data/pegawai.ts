export type PegawaiRaw = {
  'Nama / NIP': string
  'Nama Jabatan': string
  'Pangkat/Gol': string
}

type PegawaiRawSource = PegawaiRaw & {
  NO: string
}

export type PegawaiRow = {
  id: number
  no: number
  nama: string
  nip: string
  jabatan: string
  pangkatGol: string
}

const RAW_SOURCE: PegawaiRawSource[] = [
  {
    NO: '1',
    'Nama / NIP': 'A. Aliah Indah Fitriah, S.Hut.\n199601032024212050',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Pertama',
    'Pangkat/Gol': '(IX)',
  },
  {
    NO: '2',
    'Nama / NIP': 'Abdurrahman\n196906172025211013',
    'Nama Jabatan': 'Manggala Agni Pemula',
    'Pangkat/Gol': '(V)',
  },
  {
    NO: '3',
    'Nama / NIP': 'Achmad Syafey N\n200009222024211004',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Pemula',
    'Pangkat/Gol': '(V)',
  },
  {
    NO: '4',
    'Nama / NIP': 'Affi Agung Rahmadi\n199306242025061001',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Pemula',
    'Pangkat/Gol': 'Pengatur Muda (II/a)',
  },
  {
    NO: '5',
    'Nama / NIP': 'Afrizal Maula Alfarisi, S.Hut.\n199308162025061005',
    'Nama Jabatan': 'Polisi Kehutanan Ahli Pertama',
    'Pangkat/Gol': 'Penata Muda (III/a)',
  },
  {
    NO: '6',
    'Nama / NIP': 'Agung Suseno, S.PKP.\n198108242000121002',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Muda',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '7',
    'Nama / NIP': 'Agustaf Samber\n197208292007101001',
    'Nama Jabatan': 'Polisi Kehutanan Mahir',
    'Pangkat/Gol': 'Penata Muda Tingkat I (III/b)',
  },
  {
    NO: '8',
    'Nama / NIP': 'Ahmad Hidayat, S.PKP., M.Ling.\n198203012000121001',
    'Nama Jabatan': 'Pengelola Pengadaan Barang/Jasa Ahli Muda',
    'Pangkat/Gol': 'Penata (III/c)',
  },
  {
    NO: '9',
    'Nama / NIP': 'Ahmad Mukhdlor, S.Hut.\n199410152025061006',
    'Nama Jabatan': 'Polisi Kehutanan Ahli Pertama',
    'Pangkat/Gol': 'Penata Muda (III/a)',
  },
  {
    NO: '10',
    'Nama / NIP': 'Ahmad Nuryani, S.PKP.,M.Hut.\n198112232000121002',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Muda',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '11',
    'Nama / NIP': 'Ahmad Ripai, S.Hut.\n198004122000121003',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Muda',
    'Pangkat/Gol': 'Penata (III/c)',
  },
  {
    NO: '12',
    'Nama / NIP': "drh. Amir Ma'ruf, M. Hum.\n197012282002121001",
    'Nama Jabatan': 'Penelaah Teknis Kebijakan',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '13',
    'Nama / NIP': 'Amos Robi Simon\n197704171997031002',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Mahir',
    'Pangkat/Gol': 'Penata Muda Tingkat I (III/b)',
  },
  {
    NO: '14',
    'Nama / NIP': 'Anas Jaya Kurniawan, S.Hut.\n199607222023211007',
    'Nama Jabatan': 'Penyuluh Kehutanan Ahli Pertama',
    'Pangkat/Gol': '(IX)',
  },
  {
    NO: '15',
    'Nama / NIP': 'Anisa Rahmawati, S.Tr.Kom.\n199911032025062012',
    'Nama Jabatan': 'Pranata Komputer Ahli Pertama',
    'Pangkat/Gol': 'Penata Muda (III/a)',
  },
  {
    NO: '16',
    'Nama / NIP': 'Ari Harianto\n199810042025061009',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Pemula',
    'Pangkat/Gol': 'Pengatur Muda (II/a)',
  },
  {
    NO: '17',
    'Nama / NIP': 'Aripin\n197907172000121002',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Terampil',
    'Pangkat/Gol': 'Pengatur Tingkat I (II/d)',
  },
  {
    NO: '18',
    'Nama / NIP': 'Arsyat Hatta, S.Hut\n198411172003121006',
    'Nama Jabatan': 'Polisi Kehutanan Ahli Muda',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '19',
    'Nama / NIP': 'Ashar Ramadhona\n198406182007101001',
    'Nama Jabatan': 'Polisi Kehutanan Terampil',
    'Pangkat/Gol': 'Pengatur Tingkat I (II/d)',
  },
  {
    NO: '20',
    'Nama / NIP': 'Asriadi\n200306092025061001',
    'Nama Jabatan': 'Polisi Kehutanan Pemula',
    'Pangkat/Gol': 'Pengatur Muda (II/a)',
  },
  {
    NO: '21',
    'Nama / NIP': 'Asrina\n197107202025212013',
    'Nama Jabatan': 'Pengelola Umum Operasional',
    'Pangkat/Gol': '(I)',
  },
  {
    NO: '22',
    'Nama / NIP': 'Badriah Nur Khalizah\n200204112025062005',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Pemula',
    'Pangkat/Gol': 'Pengatur Muda (II/a)',
  },
  {
    NO: '23',
    'Nama / NIP': 'Bagus Linggo Saputra\n199808112025061006',
    'Nama Jabatan': 'Polisi Kehutanan Pemula',
    'Pangkat/Gol': 'Pengatur Muda (II/a)',
  },
  {
    NO: '24',
    'Nama / NIP': 'Bahari Tao Hutabarat, S.Hut.\n198201282000121001',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Muda',
    'Pangkat/Gol': 'Penata (III/c)',
  },
  {
    NO: '25',
    'Nama / NIP': 'Bambang Hari Trimarsito, S.Si., M.P.\n197406262001121004',
    'Nama Jabatan': 'Kepala Seksi Konservasi Sumber Daya Alam Wilayah III',
    'Pangkat/Gol': 'Pembina (IV/a)',
  },
  {
    NO: '26',
    'Nama / NIP': 'Boyekasujarwo, S.Hut.\n199212192024211021',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Pertama',
    'Pangkat/Gol': '(IX)',
  },
  {
    NO: '27',
    'Nama / NIP': 'Carica Deffa Yullinda, S.Kom.\n200207312025062007',
    'Nama Jabatan': 'Pranata Komputer Ahli Pertama',
    'Pangkat/Gol': 'Penata Muda (III/a)',
  },
  {
    NO: '28',
    'Nama / NIP': 'Dadang Supandi\n196708182006041003',
    'Nama Jabatan': 'Pensiun (Normal / BUP)',
    'Pangkat/Gol': 'Pengatur Tingkat I (II/d)',
  },
  {
    NO: '29',
    'Nama / NIP': 'Dhani Silvia Wati, S.Hut.\n198409242008012008',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Muda',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '30',
    'Nama / NIP': 'Dhean Wiguna Prayitno\n200512242025061001',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Pemula',
    'Pangkat/Gol': 'Pengatur Muda (II/a)',
  },
  {
    NO: '31',
    'Nama / NIP': 'Dheny Mardiono, S.Hut., M.Sc.\n197503141999031004',
    'Nama Jabatan': 'Kepala Sub Bagian Tata Usaha',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '32',
    'Nama / NIP': 'Dian Anggraini, S.E.\n199612182024212035',
    'Nama Jabatan': 'Analis Sumber Daya Manusia Aparatur Ahli Pertama',
    'Pangkat/Gol': '(IX)',
  },
  {
    NO: '33',
    'Nama / NIP': 'Didi Susanto, S.Si.\n198807192020121003',
    'Nama Jabatan': 'Polisi Kehutanan Ahli Pertama',
    'Pangkat/Gol': 'Penata Muda (III/a)',
  },
  {
    NO: '34',
    'Nama / NIP': 'Didimus\n197509192006041011',
    'Nama Jabatan': 'Pengolah Data dan Informasi',
    'Pangkat/Gol': 'Penata Muda (III/a)',
  },
  {
    NO: '35',
    'Nama / NIP': 'Dilemma Ferti Hidayah, S.E.\n198701302010122005',
    'Nama Jabatan': 'Analis Pengelolaan Keuangan APBN Ahli Pertama',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '36',
    'Nama / NIP': 'Dimas Kendha Fitrianto\n200506182025061003',
    'Nama Jabatan': 'Polisi Kehutanan Pemula',
    'Pangkat/Gol': 'Pengatur Muda (II/a)',
  },
  {
    NO: '37',
    'Nama / NIP': 'Djunaib Ahmad\n198007132000031002',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Mahir',
    'Pangkat/Gol': 'Pengatur Tingkat I (II/d)',
  },
  {
    NO: '38',
    'Nama / NIP': 'Dwi Suriyanto\n197504192007101002',
    'Nama Jabatan': 'Polisi Kehutanan Mahir',
    'Pangkat/Gol': 'Penata Muda Tingkat I (III/b)',
  },
  {
    NO: '39',
    'Nama / NIP': 'Eni Susanti, S.Hut.\n199711012024212054',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Pertama',
    'Pangkat/Gol': '(IX)',
  },
  {
    NO: '40',
    'Nama / NIP': 'Errin Agustina, A.Md.\n197808212000032002',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Penyelia',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '41',
    'Nama / NIP': 'Fitriany M., S.Hut.,M.Hut.\n198109162008012001',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Muda',
    'Pangkat/Gol': 'Penata (III/c)',
  },
  {
    NO: '42',
    'Nama / NIP': 'Fransiskus Sega\n197205022007101001',
    'Nama Jabatan': 'Polisi Kehutanan Penyelia',
    'Pangkat/Gol': 'Penata (III/c)',
  },
  {
    NO: '43',
    'Nama / NIP': 'Friederich J.h\n200305132024211001',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Pemula',
    'Pangkat/Gol': '(V)',
  },
  {
    NO: '44',
    'Nama / NIP': 'Frika Purnamasari, S.Hut.\n199101102015022003',
    'Nama Jabatan': 'Penyuluh Kehutanan Ahli Pertama',
    'Pangkat/Gol': 'Penata Muda Tingkat I (III/b)',
  },
  {
    NO: '45',
    'Nama / NIP': 'Giga Piancita, S.Hut.\n199703162023212021',
    'Nama Jabatan': 'Penyuluh Kehutanan Ahli Pertama',
    'Pangkat/Gol': '(IX)',
  },
  {
    NO: '46',
    'Nama / NIP': 'Guntur Adjie Dimas Karebet\n199605052022031005',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Pemula',
    'Pangkat/Gol': 'Pengatur Muda (II/a)',
  },
  {
    NO: '47',
    'Nama / NIP': 'Hajar Intan Ramadhania, S.Hut.\n198506022009122001',
    'Nama Jabatan': 'Penyuluh Kehutanan Ahli Muda',
    'Pangkat/Gol': 'Penata (III/c)',
  },
  {
    NO: '48',
    'Nama / NIP': 'Hardi Purnama\n197202011997031006',
    'Nama Jabatan': 'Pengolah Data dan Informasi',
    'Pangkat/Gol': 'Penata Muda Tingkat I (III/b)',
  },
  {
    NO: '49',
    'Nama / NIP': 'Harun Garaya\n197304262007101001',
    'Nama Jabatan': 'Pensiun (Meninggal)',
    'Pangkat/Gol': 'Penata Muda Tingkat I (III/b)',
  },
  {
    NO: '50',
    'Nama / NIP': 'Hasrul Nordiansyah, S.Hut.\n198408162006041004',
    'Nama Jabatan': 'Polisi Kehutanan Ahli Pertama',
    'Pangkat/Gol': 'Penata Muda Tingkat I (III/b)',
  },
  {
    NO: '51',
    'Nama / NIP': 'Hendra Jaya, S.H.\n197505052007101001',
    'Nama Jabatan': 'Polisi Kehutanan Penyelia',
    'Pangkat/Gol': 'Penata (III/c)',
  },
  {
    NO: '52',
    'Nama / NIP': 'Herdi Yusuf, S.Hut.\n198512272020121005',
    'Nama Jabatan': 'Polisi Kehutanan Ahli Pertama',
    'Pangkat/Gol': 'Penata Muda Tingkat I (III/b)',
  },
  {
    NO: '53',
    'Nama / NIP': 'Herman Wisnanda Lubis, S.P.\n199111272025061004',
    'Nama Jabatan': 'Polisi Kehutanan Ahli Pertama',
    'Pangkat/Gol': 'Penata Muda (III/a)',
  },
  {
    NO: '54',
    'Nama / NIP': 'Heryanto Sumanbowo, S.Hut.\n198305282001121001',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Muda',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '55',
    'Nama / NIP': 'I Ketut Sukana\n197910151999031003',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Mahir',
    'Pangkat/Gol': 'Penata Muda Tingkat I (III/b)',
  },
  {
    NO: '56',
    'Nama / NIP': 'Iin Anggraini, S.Si.\n198607282009122003',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Muda',
    'Pangkat/Gol': 'Penata (III/c)',
  },
  {
    NO: '57',
    'Nama / NIP': 'Ismi Hartuti\n198411072003122003',
    'Nama Jabatan': 'Polisi Kehutanan Penyelia',
    'Pangkat/Gol': 'Penata (III/c)',
  },
  {
    NO: '58',
    'Nama / NIP': "James Fiqihsantana Catur Almu'minun\n200108302025061006",
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Pemula',
    'Pangkat/Gol': 'Pengatur Muda (II/a)',
  },
  {
    NO: '59',
    'Nama / NIP': 'Jatu Kusuma Rahardian, S.Hut.\n199901012025061008',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Pertama',
    'Pangkat/Gol': 'Penata Muda (III/a)',
  },
  {
    NO: '60',
    'Nama / NIP': 'Jeamshen Christian Simon, S.Hut.\n200108042025061008',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Pertama',
    'Pangkat/Gol': 'Penata Muda (III/a)',
  },
  {
    NO: '61',
    'Nama / NIP': 'Jono Adi Putro, S.Hut.\n198210272000121002',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Muda',
    'Pangkat/Gol': 'Penata (III/c)',
  },
  {
    NO: '62',
    'Nama / NIP': 'Julian Airlangga Syah\n200005202025061009',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Pemula',
    'Pangkat/Gol': 'Pengatur Muda (II/a)',
  },
  {
    NO: '63',
    'Nama / NIP': 'Junian Adi Cahya, S.Hut.\n199906242025061006',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Pertama',
    'Pangkat/Gol': 'Penata Muda (III/a)',
  },
  {
    NO: '64',
    'Nama / NIP': 'Khairul Falah\n197708081998031004',
    'Nama Jabatan': 'Pengolah Data dan Informasi',
    'Pangkat/Gol': 'Pengatur Tingkat I (II/d)',
  },
  {
    NO: '65',
    'Nama / NIP': 'Lipu\n196708211997031002',
    'Nama Jabatan': 'Pensiun (Normal / BUP)',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '66',
    'Nama / NIP': 'Maria Anna Raheni, S.Sos.\n198206262008022001',
    'Nama Jabatan': 'Pustakawan Ahli Muda',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '67',
    'Nama / NIP': 'Matheas Ari Wibawanto, S.Hut., M.Sc.\n197405141999031001',
    'Nama Jabatan': 'Kepala Balai Konservasi Sumber Daya Alam Kalimantan Timur',
    'Pangkat/Gol': 'Pembina Tingkat I (IV/b)',
  },
  {
    NO: '68',
    'Nama / NIP': 'Mega Wahyu Birinda\n199702182023212019',
    'Nama Jabatan': 'Polisi Kehutanan Pemula',
    'Pangkat/Gol': '(V)',
  },
  {
    NO: '69',
    'Nama / NIP': 'Menik Tjahyoningrum, A.Md.\n198112152005012014',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Mahir',
    'Pangkat/Gol': 'Penata Muda Tingkat I (III/b)',
  },
  {
    NO: '70',
    'Nama / NIP': 'Mita Kanisaputri\n200503162025062003',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Pemula',
    'Pangkat/Gol': 'Pengatur Muda (II/a)',
  },
  {
    NO: '71',
    'Nama / NIP': 'Mohamad Fahruroji, S.P.\n198206122000121003',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Muda',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '72',
    'Nama / NIP': 'Muh Arsal, S.Hut.\n198909142024211031',
    'Nama Jabatan': 'Penyuluh Kehutanan Ahli Pertama',
    'Pangkat/Gol': '(IX)',
  },
  {
    NO: '73',
    'Nama / NIP': 'Muhadi\n197510241999031004',
    'Nama Jabatan': 'Polisi Kehutanan Penyelia',
    'Pangkat/Gol': 'Penata (III/c)',
  },
  {
    NO: '74',
    'Nama / NIP': 'Muhammad Irsyad, S.H.\n198501312007101001',
    'Nama Jabatan': 'Polisi Kehutanan Penyelia',
    'Pangkat/Gol': 'Penata (III/c)',
  },
  {
    NO: '75',
    'Nama / NIP': 'Muhammad Saleh\n198002162000121001',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Mahir',
    'Pangkat/Gol': 'Penata Muda Tingkat I (III/b)',
  },
  {
    NO: '76',
    'Nama / NIP': 'Naufal Hafizh Taufiqul Hakim\n200409092025061001',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Pemula',
    'Pangkat/Gol': 'Pengatur Muda (II/a)',
  },
  {
    NO: '78',
    'Nama / NIP': 'Nidiansjah\n197501301997031001',
    'Nama Jabatan': 'Polisi Kehutanan Penyelia',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '79',
    'Nama / NIP': 'Norhadiansyah\n196705282006041002',
    'Nama Jabatan': 'Peneliti Utama',
    'Pangkat/Gol': 'Pengatur Tingkat I (II/d)',
  },
  {
    NO: '80',
    'Nama / NIP': 'Novrianus Edwin Kinbenu, S.P.\n197411102005011012',
    'Nama Jabatan': 'Polisi Kehutanan Ahli Muda',
    'Pangkat/Gol': 'Penata (III/c)',
  },
  {
    NO: '81',
    'Nama / NIP': 'Nur Laili Choirul Ummah\n199908082019022001',
    'Nama Jabatan': 'Polisi Kehutanan Pemula',
    'Pangkat/Gol': 'Pengatur Muda (II/a)',
  },
  {
    NO: '82',
    'Nama / NIP': 'Nuriadi Yudistira, S.Hut.\n198201032000121002',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Pertama',
    'Pangkat/Gol': 'Penata Muda Tingkat I (III/b)',
  },
  {
    NO: '83',
    'Nama / NIP': 'Nurviona Shahira, S.Hut.\n199511282024212031',
    'Nama Jabatan': 'Penyuluh Kehutanan Ahli Pertama',
    'Pangkat/Gol': '(IX)',
  },
  {
    NO: '84',
    'Nama / NIP': 'Posda Gressya Sitompul, S.Hut.\n198310072001122001',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Muda',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '85',
    'Nama / NIP': 'Prajoko, S.Hut.\n198107142000121002',
    'Nama Jabatan': 'Pengelola Pengadaan Barang/Jasa Ahli Muda',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '86',
    'Nama / NIP': 'Prawira Harja, S.P.\n198510162007101001',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Mahir',
    'Pangkat/Gol': 'Penata Muda (III/a)',
  },
  {
    NO: '88',
    'Nama / NIP': 'Puji Mulyanto, S.Hut.,M.P.\n198206042000121003',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Muda',
    'Pangkat/Gol': 'Penata (III/c)',
  },
  {
    NO: '89',
    'Nama / NIP': 'Putri Nanda Wulansari\n199907082022032007',
    'Nama Jabatan': 'Polisi Kehutanan Pemula',
    'Pangkat/Gol': 'Pengatur Muda (II/a)',
  },
  {
    NO: '90',
    'Nama / NIP': 'Putri Pratiwi, A.Md.\n199703312022032014',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Terampil',
    'Pangkat/Gol': 'Pengatur (II/c)',
  },
  {
    NO: '91',
    'Nama / NIP': 'Rara Nieng Zulaikhah\n199504082015022001',
    'Nama Jabatan': 'Polisi Kehutanan Terampil',
    'Pangkat/Gol': 'Pengatur (II/c)',
  },
  {
    NO: '92',
    'Nama / NIP': 'Ratna Juliarti Wulandari, S.H., M.Hut.\n197307141998032003',
    'Nama Jabatan': 'Penelaah Teknis Kebijakan',
    'Pangkat/Gol': 'Pembina (IV/a)',
  },
  {
    NO: '93',
    'Nama / NIP': 'Resqie Younior Wibowoputra\n200106112025061012',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Pemula',
    'Pangkat/Gol': 'Pengatur Muda (II/a)',
  },
  {
    NO: '94',
    'Nama / NIP': 'Rido, S.Hut.\n198106052000121004',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Muda',
    'Pangkat/Gol': 'Penata (III/c)',
  },
  {
    NO: '95',
    'Nama / NIP': 'Rismanto\n197602182025211022',
    'Nama Jabatan': 'Pengelola Umum Operasional',
    'Pangkat/Gol': '(III)',
  },
  {
    NO: '96',
    'Nama / NIP': 'Rudy Handoko\n198405092007101001',
    'Nama Jabatan': 'Polisi Kehutanan Mahir',
    'Pangkat/Gol': 'Penata Muda Tingkat I (III/b)',
  },
  {
    NO: '97',
    'Nama / NIP': 'Rusmanto, S.Hut.\n198109072000121004',
    'Nama Jabatan': 'Pengelola Pengadaan Barang/Jasa Ahli Pertama',
    'Pangkat/Gol': 'Penata Muda Tingkat I (III/b)',
  },
  {
    NO: '98',
    'Nama / NIP': 'Rusmin Nuryadin\n198001092000121003',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Mahir',
    'Pangkat/Gol': 'Penata Muda Tingkat I (III/b)',
  },
  {
    NO: '99',
    'Nama / NIP': 'Santi Rerok, S.H.\n198507072003122003',
    'Nama Jabatan': 'Polisi Kehutanan Mahir',
    'Pangkat/Gol': 'Penata Muda Tingkat I (III/b)',
  },
  {
    NO: '100',
    'Nama / NIP': 'Siti Nurul Arshinta Dewi, S.Hut.\n198204252009012008',
    'Nama Jabatan': 'Penyuluh Kehutanan Ahli Muda',
    'Pangkat/Gol': 'Penata (III/c)',
  },
  {
    NO: '101',
    'Nama / NIP': 'Soerendeng, S.E\n197907212007012001',
    'Nama Jabatan': 'Penelaah Teknis Kebijakan',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '102',
    'Nama / NIP': 'Sukma Mawarni, S.E.\n199304252024212053',
    'Nama Jabatan': 'Perencana Ahli Pertama',
    'Pangkat/Gol': '(IX)',
  },
  {
    NO: '103',
    'Nama / NIP': 'Sumarso, S.Hut.\n198104252001121002',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Muda',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '104',
    'Nama / NIP': 'Suriawati Halim, S.Hut., M.P.\n197511272000032001',
    'Nama Jabatan': 'Kepala Seksi Konservasi Sumber Daya Alam Wilayah II',
    'Pangkat/Gol': 'Pembina (IV/a)',
  },
  {
    NO: '105',
    'Nama / NIP': 'Surya Darmawan, A.Md.\n197604141999031003',
    'Nama Jabatan': 'Polisi Kehutanan Mahir',
    'Pangkat/Gol': 'Penata Muda (III/a)',
  },
  {
    NO: '106',
    'Nama / NIP': 'Suryadi\n197312122025211047',
    'Nama Jabatan': 'Manggala Agni Pemula',
    'Pangkat/Gol': '(V)',
  },
  {
    NO: '107',
    'Nama / NIP': 'Dr. Suryadi, S.H., M.Si.\n197312101999031002',
    'Nama Jabatan': 'Polisi Kehutanan Ahli Madya',
    'Pangkat/Gol': 'Pembina Tingkat I (IV/b)',
  },
  {
    NO: '108',
    'Nama / NIP': 'Syahidul Anwar\n198406252005011005',
    'Nama Jabatan': 'Polisi Kehutanan Terampil',
    'Pangkat/Gol': 'Pengatur Tingkat I (II/d)',
  },
  {
    NO: '109',
    'Nama / NIP': 'Syaifurrakhman\n197504282007101001',
    'Nama Jabatan': 'Polisi Kehutanan Mahir',
    'Pangkat/Gol': 'Penata Muda Tingkat I (III/b)',
  },
  {
    NO: '110',
    'Nama / NIP': 'Taufik Rahman\n198404282025211065',
    'Nama Jabatan': 'Manggala Agni Pemula',
    'Pangkat/Gol': '(V)',
  },
  {
    NO: '111',
    'Nama / NIP': 'Tegar Anugrah, A.Md.Kom.\n199907072025061006',
    'Nama Jabatan': 'Pranata Komputer Terampil',
    'Pangkat/Gol': 'Pengatur (II/c)',
  },
  {
    NO: '112',
    'Nama / NIP': 'Tri Agus Cahyono\n197408221998031002',
    'Nama Jabatan': 'Polisi Kehutanan Penyelia',
    'Pangkat/Gol': 'Penata (III/c)',
  },
  {
    NO: '113',
    'Nama / NIP': 'Ulfa Rosyida, S.Hut.\n197308202000032003',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Madya',
    'Pangkat/Gol': 'Pembina Tingkat I (IV/b)',
  },
  {
    NO: '114',
    'Nama / NIP': 'Untung Raharjo, A.Md.\n197405142000031001',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Terampil',
    'Pangkat/Gol': 'Pengatur (II/c)',
  },
  {
    NO: '115',
    'Nama / NIP': 'Wa Ode Fikih Hairunisa, S.E.\n199306132023212057',
    'Nama Jabatan': 'Perencana Ahli Pertama',
    'Pangkat/Gol': '(IX)',
  },
  {
    NO: '116',
    'Nama / NIP': 'Wahyuddin\n198906062025211132',
    'Nama Jabatan': 'Manggala Agni Pemula',
    'Pangkat/Gol': '(V)',
  },
  {
    NO: '117',
    'Nama / NIP': 'Wilyanto, A.Md.\n197212141999031003',
    'Nama Jabatan': 'Polisi Kehutanan Penyelia',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '118',
    'Nama / NIP': 'Witono, S.Hut.\n197912232000121001',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Muda',
    'Pangkat/Gol': 'Penata (III/c)',
  },
  {
    NO: '119',
    'Nama / NIP': 'Yadi Mulyadi\n196705241997031002',
    'Nama Jabatan': 'Pensiun (Normal / BUP)',
    'Pangkat/Gol': 'Penata Muda Tingkat I (III/b)',
  },
  {
    NO: '120',
    'Nama / NIP': 'Yan Bastian Gultom, S.Hut.\n198501082015021001',
    'Nama Jabatan': 'Penyuluh Kehutanan Ahli Pertama',
    'Pangkat/Gol': 'Penata Muda (III/a)',
  },
  {
    NO: '121',
    'Nama / NIP': 'Yogi Pratama\n199612222023211005',
    'Nama Jabatan': 'Polisi Kehutanan Pemula',
    'Pangkat/Gol': '(V)',
  },
  {
    NO: '122',
    'Nama / NIP': 'Yonatan\n199310222025211076',
    'Nama Jabatan': 'Manggala Agni Pemula',
    'Pangkat/Gol': '(V)',
  },
  {
    NO: '123',
    'Nama / NIP': 'Yoyok Sugianto, S.Hut., M.Ling.\n198303132001121002',
    'Nama Jabatan': 'Pengendali Ekosistem Hutan Ahli Muda',
    'Pangkat/Gol': 'Penata Tingkat I (III/d)',
  },
  {
    NO: '124',
    'Nama / NIP': 'Yulian Sadono, S.Hut., M.T.\n198007072006041003',
    'Nama Jabatan': 'Kepala Seksi Konservasi Sumber Daya Alam Wilayah I',
    'Pangkat/Gol': 'Pembina (IV/a)',
  },
  {
    NO: '125',
    'Nama / NIP': 'Zainul Robiansyah\n198401092006041003',
    'Nama Jabatan': 'Polisi Kehutanan Mahir',
    'Pangkat/Gol': 'Penata Muda (III/a)',
  },
]

const RAW: PegawaiRaw[] = RAW_SOURCE.map((item) => {
  const copy = { ...item } as Record<string, unknown>
  delete copy.NO
  return copy as unknown as PegawaiRaw
})

function splitNamaNip(value: string): { nama: string; nip: string } {
  const normalized = value.replace(/\r\n/g, '\n').trim()
  const [namaRaw, nipRaw] = normalized.split('\n')
  return {
    nama: (namaRaw ?? '').trim(),
    nip: (nipRaw ?? '').trim(),
  }
}

export const PEGAWAI: PegawaiRow[] = RAW.map((item) => {
  const { nama, nip } = splitNamaNip(item['Nama / NIP'])

  return {
    id: 0,
    no: 0,
    nama,
    nip,
    jabatan: item['Nama Jabatan'],
    pangkatGol: item['Pangkat/Gol'],
  }
})
  .filter((row) => !/\bpensiun\b/i.test(row.jabatan))
  .map((row, index) => ({
    ...row,
    id: index + 1,
    no: index + 1,
  }))
