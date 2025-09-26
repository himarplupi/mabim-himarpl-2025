import { type StaticImageData } from "next/image";
import imgAlpha from "@/assets/mentors/imgAlpha.png";
import imgArkadia from "@/assets/mentors/imgArkadia.png";
import imgBeta from "@/assets/mentors/imgBeta.png";
import imgDelta from "@/assets/mentors/imgDelta.png";
import imgOmega from "@/assets/mentors/imgOmega.png";
import imgOrion from "@/assets/mentors/imgOrion.png";
import imgQuantum from "@/assets/mentors/imgQuantum.png";
import imgSentra from "@/assets/mentors/imgSentra.png";
import imgSigma from "@/assets/mentors/imgSigma.png";
import imgVortex from "@/assets/mentors/imgVortex.png";

export type Mentee = {
  id: string;
  name: string;
};

export type GroupMabim = {
  id: number;
  code: string;
  name: string;
  mentor: {
    name: string;
    phone: string;
    image: StaticImageData | null;
    metadata: {
      skill: string;
      stats: number;
      description: string;
    };
  };
  mentees: Mentee[];
};

export const groupMabim: GroupMabim[] = [
  {
    id: 1,
    code: "ALP",
    name: "Alpha",
    mentor: {
      name: "Mahesa Syawal",
      phone: "+6281220148738",
      image: imgAlpha,
      metadata: {
        skill: "Badut",
        stats: 1,
        description: "Doyan mewing, tinggi seadanya, rambut lurus sedikit bergelombang, suka yapping",
      },
    },
    mentees: [
      {
        id: "ALP-01",
        name: "Atsiila Kaysa Asyraf",
      },
      {
        id: "ALP-02",
        name: "Berlianda Muhammad Putra",
      },
      {
        id: "ALP-03",
        name: "Dwicky Chandra Rianto",
      },
      {
        id: "ALP-04",
        name: "Irena Silmi Azizah",
      },
      {
        id: "ALP-05",
        name: "Jeffry Maulana Abdurrahman",
      },
      {
        id: "ALP-06",
        name: "Lazzuardi Langga Duta Wijaya",
      },
      {
        id: "ALP-07",
        name: "Muhammad Dzhafa Abdulrahman",
      },
      {
        id: "ALP-08",
        name: "Ray Immanuel Darmawan",
      },
      {
        id: "ALP-09",
        name: "Razka Attar Mizandi",
      },
      {
        id: "ALP-10",
        name: "Tsabitah Ardelia Wahyudi",
      },
    ],
  },
  {
    id: 2,
    code: "ARK",
    name: "Arkadia",
    mentor: {
      name: "Kautsar",
      phone: "+6285156468331",
      image: imgArkadia,
      metadata: {
        skill: "Bergoyang",
        stats: 2,
        description: "Berkacamata, Tinggi, Rambut Belah Tengah itulah aku",
      },
    },
    mentees: [
      { id: "ARK-01", name: "Aurel Arta Ghani" },
      { id: "ARK-02", name: "Aziz Hardiyan" },
      { id: "ARK-03", name: "Farah Azzahra" },
      { id: "ARK-04", name: "Jamie Ahmad Syahida Hardiwijaya" },
      { id: "ARK-05", name: "Jilan Rokan Ragheb Arwa" },
      { id: "ARK-06", name: "Muhammad Fatah Nurhidayat" },
      { id: "ARK-07", name: "Mira Rachma Puspita Dewi" },
      { id: "ARK-08", name: "Moch. Rafie Candra Fahrizal" },
      { id: "ARK-09", name: "Rifa Mazharul Haq Dini Hari Putra" },
      { id: "ARK-10", name: "Syauqi Robani" },
    ],
  },
  {
    id: 3,
    code: "OMG",
    name: "Omega",
    mentor: {
      name: "Salsabila Rahma",
      phone: "+6281809046398",
      image: imgOmega,
      metadata: {
        skill: "Pinkyy",
        stats: 3,
        description: "Kalau pink bisa ngomong, mungkin dia bakal bilang aku bestienya",
      },
    },
    mentees: [
      { id: "OMG-01", name: "Aloudya Fathya Azzahra" },
      { id: "OMG-02", name: "Aridho Afadsyah" },
      { id: "OMG-03", name: "Farisata Arrabih" },
      { id: "OMG-04", name: "Himagara Abimanyu" },
      { id: "OMG-05", name: "Janitra Alvito Zahir" },
      { id: "OMG-06", name: "Mohammad Ferdiansyah" },
      { id: "OMG-07", name: "Moreno Adjie Pratama" },
      { id: "OMG-08", name: "Muhammad Arfa Ghaisaan" },
      { id: "OMG-09", name: "Najwa Aidatul Karomah" },
      { id: "OMG-10", name: "Tiara Syahla Meitira" },
    ],
  },
  {
    id: 4,
    code: "DLT",
    name: "Delta",
    mentor: {
      name: "Naufal Zahran",
      phone: "+6289524032593",
      image: imgDelta,
      metadata: {
        skill: "Goldlane idaman",
        stats: 4,
        description: "Selain suka hujan, aku juga suka baso disanguan",
      },
    },
    mentees: [
      { id: "DLT-01", name: "Aldi Mardiansah" },
      { id: "DLT-02", name: "Firdaus Akmal Budiman" },
      { id: "DLT-03", name: "Firzah Ghania Fairuza" },
      { id: "DLT-04", name: "Hadid Fadly" },
      { id: "DLT-05", name: "Hakim Abdurrahman" },
      { id: "DLT-06", name: "Kresna Hono Putro" },
      { id: "DLT-07", name: "Muhammad Ahnaf Zhafran Sultan" },
      { id: "DLT-08", name: "Muhammad Faisal Anwar" },
      { id: "DLT-09", name: "Muhammad Indra Wijaksono" },
      { id: "DLT-10", name: "Priska Komala" },
    ],
  },
  {
    id: 5,
    code: "BTA",
    name: "Beta",
    mentor: {
      name: "Dzaky Julian",
      phone: "+6282125697616",
      image: imgBeta,
      metadata: {
        skill: "Pubdok Abadi",
        stats: 5,
        description: "Superstar Wannabe. Sing, Adventure & Sports",
      },
    },
    mentees: [
      {
        id: "BTA-01",
        name: "Cantika",
      },
      {
        id: "BTA-02",
        name: "Danish Azizi",
      },
      {
        id: "BTA-03",
        name: "Fathi Khasyi Al Ikhwaniy",
      },
      {
        id: "BTA-04",
        name: "Irfan Pandapotan Sagala",
      },
      {
        id: "BTA-05",
        name: "Luthfi Aaziz Fadhlulloh",
      },
      {
        id: "BTA-06",
        name: "Muhammad Abyan Daryansyah",
      },
      {
        id: "BTA-07",
        name: "Muhammad Naufal Hadrian",
      },
      {
        id: "BTA-08",
        name: "Rafa Mirza Firdaus",
      },
      {
        id: "BTA-09",
        name: "Rifa Fachri Ramadhan",
      },
      {
        id: "BTA-10",
        name: "Syifa Indah Handriani",
      },
    ],
  },
  {
    id: 6,
    code: "VTX",
    name: "Vortex",
    mentor: {
      name: "Hanifi Raditya",
      phone: "+6281314654796",
      image: imgVortex,
      metadata: {
        skill: "Smile",
        stats: 6,
        description: "Seperti orang paling bahagia di muka bumi, murah senyum dan baik hati, haloo aku Nipi.",
      },
    },
    mentees: [
      { id: "VTX-01", name: "Aldi Nur Haadi" },
      { id: "VTX-02", name: "Alif Attar Alfathri" },
      { id: "VTX-03", name: "Diva Cindy Siahaan" },
      { id: "VTX-04", name: "Dzakwan Al Iman" },
      { id: "VTX-05", name: "Fadhil Alkhiyar Nurseha" },
      { id: "VTX-06", name: "Muhammad Azzuri Sulthan Aulia Wahab" },
      { id: "VTX-07", name: "Muslihan Gio Suwanda" },
      { id: "VTX-08", name: "Najahah Patin" },
      { id: "VTX-09", name: "Rizky Aryo Putro Prasetyo" },
      { id: "VTX-10", name: "Zahra Amelia Ramadhani" },
    ],
  },
  {
    id: 7,
    code: "ORN",
    name: "Orion",
    mentor: {
      name: "Salsabila Restu",
      phone: "+6288218329567",
      image: imgOrion,
      metadata: {
        skill: "Yassh Gurl",
        stats: 7,
        description: "Meskipun nano nano, tapi aku siap jadi bumbu penyemangat di harimu",
      },
    },
    mentees: [
      { id: "ORN-01", name: "Azka Athallah Asadul Usud" },
      { id: "ORN-02", name: "Januar Haykal Firdaus" },
      { id: "ORN-03", name: "Mars Fahri Argadipa" },
      { id: "ORN-04", name: "Muhammad Fadhil As-Syamil" },
      { id: "ORN-05", name: "Rahel Aghni Nadhira" },
      { id: "ORN-06", name: "Rizky Wicaksono" },
      { id: "ORN-07", name: "Shafa Stevia Putri" },
      { id: "ORN-08", name: "Syauqi Mustafidl Amna" },
      { id: "ORN-09", name: "Tristan Maulana Alfath" },
    ],
  },
  {
    id: 8,
    code: "QTM",
    name: "Quantum",
    mentor: {
      name: "Satrio Waskito",
      phone: "+6282219093410",
      image: imgQuantum,
      metadata: {
        skill: "auk ah cape",
        stats: 8,
        description: "Tenang di luar, rame di dalam. Dingin tetapi tidak kejam",
      },
    },
    mentees: [
      { id: "QTM-01", name: "Adi Surya Nugroho" },
      { id: "QTM-02", name: "Gaitha Sahna Nafeesa" },
      { id: "QTM-03", name: "Mario Brasco Putra Hamdani" },
      { id: "QTM-04", name: "Muhamad Rizki" },
      { id: "QTM-05", name: "Muhammad Arkan Athaya" },
      { id: "QTM-06", name: "Rafah Fajri Juwaeni" },
      { id: "QTM-07", name: "Reza Febryan" },
      { id: "QTM-08", name: "Salwa Nur Amelia Suhendar" },
      { id: "QTM-09", name: "Utami Trisna Kinanti" },
    ],
  },
  {
    id: 9,
    code: "STR",
    name: "Sentra",
    mentor: {
      name: "Resti Fujianti",
      phone: "+6285866521392",
      image: imgSentra,
      metadata: {
        skill: "Kocak",
        stats: 9,
        description: "Penyuka hal-hal yang pasti, tapi hidup sendiri belum pasti",
      },
    },
    mentees: [
      { id: "STR-01", name: "Aghniya Rizky Amalia" },
      { id: "STR-02", name: "Akbar Maulana" },
      { id: "STR-03", name: "Alfan Aditiansyah" },
      { id: "STR-04", name: "Damara" },
      { id: "STR-05", name: "Irenia Maisa Kamila" },
      { id: "STR-06", name: "Jofi Tri Fathan Afiq" },
      { id: "STR-07", name: "Keidjaru Axiro" },
      { id: "STR-08", name: "Muhammad Rayyan Firmansyah" },
      { id: "STR-09", name: "Muhammad Rizky Fadhilah" },
      { id: "STR-10", name: "Muhammad Hasan Albanna" },
    ],
  },
  {
    id: 10,
    code: "SGM",
    name: "Sigma",
    mentor: {
      name: "Zaidan",
      phone: "+6281321803535",
      image: imgSigma,
      metadata: {
        skill: "Jungle Dingin",
        stats: 10,
        description: "Gagah berani nan tampan, dermawan juga mapan. hai aku zaidan",
      },
    },
    mentees: [
      { id: "SGM-01", name: "Dzaky Hafidzh Naufal" },
      { id: "SGM-02", name: "Faza Aflaha Hasibuan" },
      { id: "SGM-03", name: "Fursan Nahr" },
      { id: "SGM-04", name: "Kayla Putri Pandita" },
      { id: "SGM-05", name: "Lina Lisnawati" },
      { id: "SGM-06", name: "Muhammad Nawab Rasyid" },
      { id: "SGM-07", name: "Najla Azizah Gunawan" },
      { id: "SGM-08", name: "Nur Muhammad Iqbal Alfajri" },
      { id: "SGM-09", name: "Syarif Ihya Izzuddin" },
    ],
  },
];
