export interface Ticket {
  id: number;
  tipe: string;
  harga: number;
  gambar: string;
  jadwalId: number;
  waktuBerangkat: string;
  waktuTiba: string;
  stasiunBerangkat: string;
  stasiunTujuan: string;
  namaKereta: string;
}