import api from "../api/api";

interface DetailTransaksiPayload{
    tiketId : number,
    jumlah: number
}

export const buatTransaksi = async (detailTransaksis: DetailTransaksiPayload[]) => {
  const token = localStorage.getItem("token");
  const payload = { detailTransaksis };

  const response = await api.post(
    '/Transaction',
    payload, // ini data body
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};


export const Transaction =  async (payload: {detailTransaksis : { tiketId: number; jumlah: number }[]}) => {
    const token = localStorage.getItem("token");

  const response = await api.get("/Transaction", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      detailTransaksis: payload.detailTransaksis,
    }
  });

  return response.data;
}
