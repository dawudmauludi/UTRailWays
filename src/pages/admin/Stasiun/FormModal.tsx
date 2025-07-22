import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import type { Stasiun } from "../../../types/StasiunTypes";

type Props = {
  show: boolean;
  onHide: () => void;
  onSave: (data: Omit<Stasiun, "id">, id?: number) => void;
  selected?: Stasiun | null;
};

export const FormModal = ({ show, onHide, onSave, selected }: Props) => {
  const [namaStasiun, setNamaStasiun] = useState("");
  const [lokasi, setLokasi] = useState("");

  useEffect(() => {
    if (show && selected) {
      setNamaStasiun(selected.namaStasiun);
      setLokasi(selected.lokasi);
    } else if (show) {
      setNamaStasiun("");
      setLokasi("");
    }
  }, [selected, show]);

  const handleSubmit = () => {
    const data = { namaStasiun, lokasi };
    onSave(data, selected?.id);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{selected ? "Edit" : "Tambah"} Stasiun</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formNama">
            <Form.Label>Nama Stasiun</Form.Label>
            <Form.Control
              type="text"
              value={namaStasiun}
              onChange={(e) => setNamaStasiun(e.target.value)}
              placeholder="Masukkan nama stasiun"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLokasi">
            <Form.Label>Lokasi</Form.Label>
            <Form.Control
              type="text"
              value={lokasi}
              onChange={(e) => setLokasi(e.target.value)}
              placeholder="Masukkan lokasi stasiun"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Batal
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
