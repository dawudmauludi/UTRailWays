import type { Train } from "../../../types/TrainTypes";
import { Button } from "react-bootstrap";

export const columns = (
  onEdit: (item: Train) => void,
  onDelete: (id: number) => void
) => [
  {
    name: "Nama Kereta",
    selector: (row: Train) => row.namaKereta,
    sortable: true,
  },
  {
    name: "Kapasitas",
    selector: (row: Train) => row.kapasitas.toString(),
    sortable: true,
  },
  {
    name: "Jenis",
    selector: (row: Train) => row.jenis,
    sortable: true,
  },
  {
    name: "Aksi",
    cell: (row: Train) => (
      <>
        <Button variant="warning" size="sm" className="me-2" onClick={() => onEdit(row)}>
          Edit
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={() => {
            if (window.confirm("Yakin ingin menghapus kereta ini?")) {
              onDelete(row.id);
            }
          }}
        >
          Hapus
        </Button>
      </>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];
