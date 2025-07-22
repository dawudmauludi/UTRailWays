// pages/admin/train/FormModal.tsx
import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import type { Train } from "../../../types/TrainTypes";

type Props = {
  show: boolean;
  onHide: () => void;
  onSave: (formData: Omit<Train, "id">, id?: number) => void;
  selected: Train | null;
};

export const FormModal: React.FC<Props> = ({ show, onHide, onSave, selected }) => {
  const [form, setForm] = useState<Omit<Train, "id">>({
    namaKereta: "",
    kapasitas: 0,
    jenis: "",
  });

  useEffect(() => {
    if (selected) {
      setForm({
        namaKereta: selected.namaKereta,
        kapasitas: selected.kapasitas,
        jenis: selected.jenis,
      });
    } else {
      setForm({ namaKereta: "", kapasitas: 0, jenis: "" });
    }
  }, [selected]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "kapasitas" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = () => {
    onSave(form, selected?.id);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{selected ? "Edit" : "Tambah"} Kereta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nama Kereta</Form.Label>
            <Form.Control
              name="namaKereta"
              value={form.namaKereta}
              onChange={handleChange}
              placeholder="Masukkan nama kereta"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Kapasitas</Form.Label>
            <Form.Control
              name="kapasitas"
              type="number"
              value={form.kapasitas}
              onChange={handleChange}
              placeholder="Masukkan kapasitas"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Jenis</Form.Label>
            <Form.Control
              name="jenis"
              value={form.jenis}
              onChange={handleChange}
              placeholder="Masukkan jenis"
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
