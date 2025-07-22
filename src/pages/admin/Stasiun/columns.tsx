import type { Stasiun } from "../../../types/StasiunTypes";
import { Button } from "react-bootstrap";

export const columns = (
  onEdit: (item: Stasiun) => void,
  onDelete: (id: number) => void
) => [
  {
    name: "Nama Stasiun",
    selector: (row: Stasiun) => row.namaStasiun,
    sortable: true,
  },
  {
    name: "Lokasi",
    selector: (row: Stasiun) => row.lokasi,
    sortable: true,
  },
  {
    name: "Aksi",
    cell: (row: Stasiun) => (
      <div className="d-flex gap-2">
        <Button
          variant="warning"
          size="sm"
          className="flex-fill"
          style={{ minWidth: "70px" }}
          onClick={() => onEdit(row)}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          size="sm"
          className="flex-fill"
          style={{ minWidth: "70px" }}
          onClick={() => {
            if (window.confirm("Yakin ingin menghapus stasiun ini?")) {
              onDelete(row.id);
            }
          }}
        >
          Hapus
        </Button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];
